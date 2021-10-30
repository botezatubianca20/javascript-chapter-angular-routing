import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { 
    this.form = fb.group({
      email: ['test@test.com', [Validators.required]],
      password: ['test', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  login() {
    const val = this.form.value;
    console.log("val", val)
    this.authService.login(val.email, val.password).subscribe(() => {
      this.router.navigateByUrl('/satellites');
      },
      (err: any) => {
        alert("Login failed!");
      });
  }

}
