enum TradeState {
 CREATED = "CREATED",
 PROCESSING = "PROCESSING",
 FILLED = "FILLED",
 REJECTED = "REJECTED"
}
enum TradeType{
	BUY = "BUY",
	SELL = "SELL"
}
export class Trade {

	tradeID: string;
	date: Date;
	state: TradeState;
	type: TradeType;
	ticker: string;
	qty: number;
	price: any;
	totalAmt: any;

}
