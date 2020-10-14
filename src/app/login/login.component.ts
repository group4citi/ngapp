import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() email: string;
  @Input() password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {   }

  ngOnInit() {
  }

  handleLogin() {
    console.log("from handleLogin");

    console.log(this.email);
    this.authenticationService.authenticationService(this.email, this.password).subscribe((result)=> {
      if(result == "Login success"){
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/maintrade']);
      }
      else{
      this.invalidLogin = true;
      this.loginSuccess = false;
      this.successMessage = 'Login Failed.';
      this.router.navigate(['/login']);
      }
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
}
