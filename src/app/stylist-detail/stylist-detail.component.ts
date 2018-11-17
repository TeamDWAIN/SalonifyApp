import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-stylist-detail',
  templateUrl: './stylist-detail.component.html',
  styleUrls: ['./stylist-detail.component.css']
})
export class StylistDetailComponent implements OnInit {

  stylist = {}

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getStylistDetails(this.route.snapshot.params['id']);
  }

  getStylistDetails(id) {
    this.api.getStylist(id)
      .subscribe(data => {
        console.log(data);
        this.stylist = data;
      });
  }

  deleteStylist(id) {
    this.api.deleteStylist(id)
      .subscribe(res => {
          this.router.navigate(['/stylists']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}