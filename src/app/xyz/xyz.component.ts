import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service'


@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  constructor(private api:ApiService, private auth:AuthService) { }

  ngOnInit(): void {
    this.api.getData();
  }

  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }

}
