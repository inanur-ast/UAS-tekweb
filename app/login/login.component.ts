import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert:boolean = false;
  username:string;
  password:string;

  constructor(private Api: ApiService, private router: Router) { }
  ngOnInit(): void {
  }
  data:any={};
  masuk(data)
  {
    if(this.username == "ina@is.uad.ac.id" && this.password == "inanur123"){
      this.router.navigate[("/home")]
    }
    else {
      alert("Invalid Username or Password !. Please Enter Valid Details");
    }
  }
}
