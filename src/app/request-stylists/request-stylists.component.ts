import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-stylists',
  templateUrl: './request-stylists.component.html',
  styleUrls: ['./request-stylists.component.css']
})
export class RequestStylistsComponent implements OnInit {
  stylists = ['Paulina Mayers', 'Eric Mitchley', 'Theresa Soliday'];

  constructor() {}

  ngOnInit() {
  }

}
