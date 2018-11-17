import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-stylist-edit',
  templateUrl: './stylist-edit.component.html',
  styleUrls: ['./stylist-edit.component.css']
})
export class StylistEditComponent implements OnInit {

  stylistForm: FormGroup;
  firstname:string='';
  lastname:string='';
  specialties:string='';
  
  
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stylistForm = this.formBuilder.group({
      'firstname' : [null, Validators.required],
      'lastname' : [null, Validators.required],
      'specialties' : [null, Validators.required],
      
    });
  }
  onFormSubmit(form:NgForm) {
    this.api.postStylist(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/stylist-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
