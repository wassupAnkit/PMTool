import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string='';
  password: string='';

  // constructor(private authService: AuthService, private router: Router) {}

  // onSubmit(): void {
  //     const isAuthenticated = this.authService.authenticate(this.username, this.password);

  //     if (isAuthenticated) {
  //         this.router.navigate(['/dashboard']); //Redirecting to the dashboard if the user is Authentic
  //     } else {
  //         alert('Login failed. Incorrect Username or password.');
  //     }
  // }
  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'password') {
      // console.log("Sending to dashboard")
      this.router.navigate(['/dashboard'])//when the username admin and password is written as password the user is directed to the /dashboard url
    } else {
      alert('Invalid username or password');
    }
  }
}
