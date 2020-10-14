import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SignupServiceService } from './signup-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input() email: string;
  @Input() password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private signupServiceService:SignupServiceService){
  }

  ngOnInit(): void {
  }
  handleSignup() {
    console.log("from handleSignup");

    console.log(this.email);
    this.signupServiceService.signupServiceService(this.email, this.password).subscribe((result)=> {
      if(result == "Registered"){
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Registration Successful.';
      this.router.navigate(['/login']);
      }
      else{
      this.invalidLogin = true;
      this.loginSuccess = false;
      this.successMessage = 'Registration Failed.';
      this.router.navigate(['/signup']);
      }
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
}
