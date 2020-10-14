import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './login/auth.service';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { MainTradeComponent } from './main-trade/main-trade.component';
import { SignupComponent } from './signup/signup.component'
import { SignupServiceService } from './signup/signup-service.service';
import { PlaceATradeComponent } from './place-atrade/place-atrade.component';
import { ViewTradesComponent } from './view-trades/view-trades.component';
import { ViewSuggestionComponent } from './view-suggestion/view-suggestion.component';
import {PlaceATradeService} from './place-atrade/place-atrade.service';
import {ViewTradesService} from './view-trades/view-trades.service';
import {ViewSuggestionService} from './view-suggestion/view-suggestion.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainTradeComponent,
    SignupComponent,
    PlaceATradeComponent,
    ViewTradesComponent,
    ViewSuggestionComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AuthenticationService, SignupServiceService, PlaceATradeService, ViewTradesService, ViewSuggestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
