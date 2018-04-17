
export interface Stock {
    company: string;
    ticker: string;
    oldPrice?: number;
    price: number;
    change?: number;
    shares: number;
    updateTime?: number;
}

export interface Quote {
    ticker: string;
    price: number;
}

export enum TradeAction { Buy, Sell };

export interface Trade {
    ticker: string;
    shares: number;
    action: string;
    username?: string;
}
