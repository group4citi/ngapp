
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ViewTradesService} from './view-trades.service';
import {Trade} from '../model/trade.model';

@Component({
  selector: 'app-view-trades',
  templateUrl: './view-trades.component.html',
  styleUrls: ['./view-trades.component.css']
})
export class ViewTradesComponent implements OnInit {

 @Input() email: string;
  res: any;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private viewTradesService:ViewTradesService){
  }

  ngOnInit(): void {
  }
  handleViewTrades() {
    console.log("from handleViewTrades");

    console.log(this.email);
    this.viewTradesService.viewTradesService(this.email).subscribe((result)=> {
      this.res=result;
     // this.res = JSON.stringify(result);
   
    }, () => {
              alert("Trade registration failed");
    });
  }
}
