import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { ToastService } from '../../core/toast.service';
import { Stock, Quote, Trade, TradeAction } from './portfolio';
import { PortfolioService } from './portfolio.service';

@Component({
    templateUrl: './portfolio.component.html',
    selector: 'sample-portfolio',
    styles: [
        '.upwards {color: red}',
        '.downwards {color:blue}'
    ]
})
export class PortfolioComponent implements OnInit {

    private displayDialog: boolean;

    private stocks: Stock[] = [];

    private selectedStock: Stock;

    private trade: Trade;

    private validationError: string;

    private selectedAction: string;

    private suppressValidation: boolean = true;

    constructor(
        private portfolioService: PortfolioService,
        private toastService: ToastService) {
    }

    public ngOnInit() {
        this.toastService.success('连接服务器...');
        this.portfolioService.connect().subscribe(
            (stocks: Stock[]) => {
                this.stocks = stocks;
                // this.toastService.success('更新股票');
            },
            (error: string) => {
                this.toastService.error('连接失败');
            }
        );
    }

    private totalShares(): number {
        if (this.stocks.length === 0) {
            return 0.0;
        }
        return this.stocks.map((stock) => stock.shares).reduce((a, b) => a + b, 0);
    }

    private totalValue(): number {
        if (this.stocks.length === 0) {
            return 0.0;
        }
        return this.stocks.map((stock) => stock.price).reduce((a, b) => a + b, 0);
    }

    private showTradeDialog(action, stock) {
        this.selectedAction = action;
        this.selectedStock = stock;
        this.trade = {
            ticker: stock.ticker,
            shares: 100,
            action
        };
        this.displayDialog = true;
    }

    private executeTrade() {
        if (!this.suppressValidation && !this.validateShares()) {
            return;
        }
        this.portfolioService.trade(this.trade);
        this.displayDialog = false;
    }

    private validateShares() {
        if (!this.trade.shares || this.trade.shares < 1) {
            this.validationError = 'Invalid number';
            return false;
        }
        if ((this.selectedAction === 'Sell') && (this.trade.shares > this.selectedStock.shares)) {
            this.validationError = 'Not enough shares';
            return false;
        }
        return true;
    }
}
