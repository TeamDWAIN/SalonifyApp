import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stylist',
  templateUrl: './stylist.component.html',
  styleUrls: ['./stylist.component.css']
})
export class StylistComponent implements OnInit {
  stylists: any;
  displayedColumns = ['firstname', 'lastname', 'specialties'];
  dataSource = new StylistDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getStylists()
      .subscribe(res => {
        console.log(res);
        this.stylists = res;
      }, err => {
        console.log(err);
      });
  }
}
 
export class StylistDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getStylists();
  }

  disconnect() {

  }
}
