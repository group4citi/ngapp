import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainTradeComponent } from './main-trade/main-trade.component';
import { SignupComponent } from './signup/signup.component';
import { PlaceATradeComponent } from './place-atrade/place-atrade.component';
import { ViewTradesComponent } from './view-trades/view-trades.component';
import { ViewSuggestionComponent } from './view-suggestion/view-suggestion.component';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
   {path: 'maintrade', component: MainTradeComponent},
   {path: 'signup', component: SignupComponent},
   {path: 'make_trade', component: PlaceATradeComponent},
   {path: 'view_trade', component: ViewTradesComponent},
   {path: 'view_suggestion', component: ViewSuggestionComponent},
   {path: 'logout', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
