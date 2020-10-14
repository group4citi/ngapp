import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ViewSuggestionService} from './view-suggestion.service';
import {Trade} from '../model/trade.model';

@Component({
  selector: 'app-view-suggestion',
  templateUrl: './view-suggestion.component.html',
  styleUrls: ['./view-suggestion.component.css']
})
export class ViewSuggestionComponent implements OnInit {
    @Input() email: string;
    @Input() ticker: string;
    @Input() quantity: number;
  res: string;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private viewSuggestionService:ViewSuggestionService){
  }

  ngOnInit(): void {
  }
  handleViewSuggestion() {
    console.log("from handleViewSuggestion");

    console.log(this.email);
    this.viewSuggestionService.viewSuggestionService(this.email,this.ticker,this.quantity).subscribe((result)=> {
      this.res=result;
     // this.res = JSON.stringify(result);
    }, () => {
              alert("Trade registration failed");
    });
  }
}
