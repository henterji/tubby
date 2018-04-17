import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../../app.config';
import { Stock, Quote, Trade } from './portfolio';

declare var SockJS: any;
declare var Stomp: any;

@Injectable()
export class PortfolioService {

    private stompClient: any;

    private stocks: Stock[] = [];

    private stockLookup: { [key: string]: Stock; } = {};

    constructor(private appConfig: AppConfigService) { }

    public connect(): Observable<Stock[]> {
        let that = this;
        let messagingUrl = that.appConfig.messagingUrl;

        return new Observable<Stock[]>((responseObserver) => {
            let jwt = localStorage.getItem('jwt');
            let opts = {
                debug: true,
                no_credentials: false,
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            };
            let socket = new SockJS(`${messagingUrl}/api/portfolio/?token=${jwt}`, '', opts);
            that.stompClient = Stomp.over(socket);
            that.stompClient.debug = false;

            let headers = {};
            headers['Access-Control-Allow-Origin'] = '*';
            headers['Authorization'] = `Bearer ${jwt}`;

            that.stompClient.connect(headers, (frame) => {
                that.stompClient.subscribe('/positions', (message) => {
                    that.stocks = <Stock[]>JSON.parse(message.body);
                    that.stocks.forEach((stock) => {
                        that.stockLookup[stock.ticker] = stock;
                        stock.oldPrice = stock.price;
                        stock.change = 0.0;
                    });
                    responseObserver.next(that.stocks);
                });

                that.stompClient.subscribe('/user/queue/position-updates', (message) => {
                    let stock = <Stock>JSON.parse(message.body);
                    that.stockLookup[stock.ticker].shares = stock.shares;
                    responseObserver.next(that.stocks);
                });

                that.stompClient.subscribe('/user/queue/errors', (message) => {
                    responseObserver.error(message.body);
                });

                that.stompClient.subscribe('/topic/price.stock.*', (message) => {
                    let quote = <Quote>JSON.parse(message.body);
                    let stock = that.stockLookup[quote.ticker];
                    if (stock != null) {
                        stock.change = quote.price - stock.price;
                        stock.oldPrice = stock.price;
                        stock.price = quote.price;
                    }
                    responseObserver.next(that.stocks);
                });

            }, (err) => {
                console.log('err', err);
                responseObserver.error(err);
            });
        });

    }

    public trade(trade: Trade) {
        if (this.stompClient) {
            this.stompClient.send('/trade', {}, JSON.stringify(trade));
        }
    }

}
