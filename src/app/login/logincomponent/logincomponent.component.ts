import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FeathersService } from 'src/app/feathers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LogincomponentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private _feathers:FeathersService,private _router:Router) { }
  loginForm: FormGroup;
  data:any;
  submitted = false;
  email:string;
  password:string;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]],
  });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.data = {
      email:this.email,
      password:this.password,
      strategy:'local'
    }
    this._feathers.authenticate(this.data)
      // navigate to base URL on success
      .then(() => {
        this._router.navigate(['/']);
      })
      .catch(err => {
        //this.messages.unshift('Wrong credentials!');
      });
  }


}
