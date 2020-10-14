
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {PlaceATradeService} from './place-atrade.service'
@Component({
  selector: 'app-place-atrade',
  templateUrl: './place-atrade.component.html',
  styleUrls: ['./place-atrade.component.css']
})
export class PlaceATradeComponent implements OnInit {
  @Input() email: string;
  @Input() ticker: string;
  @Input() quantity: number;
  @Input() type: string;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private placeATradeService:PlaceATradeService){
  }

  ngOnInit(): void {
  }
  handleMakeTrade() {
    console.log("from handleMakeTrade");

    console.log(this.email);
    this.placeATradeService.placeATradeService(this.ticker, this.quantity,this.type,this.email).subscribe((result)=> {
      if(result == "Trade Success"){
        alert("Trade registered successfully");
      this.router.navigate(['/maintrade']);
      }
      else{
      alert("Trade registration failed");
      }
    }, () => {
              alert("Trade registration failed");
    });
  }
}
