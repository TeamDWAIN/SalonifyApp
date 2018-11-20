import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
import { StylistComponent } from './stylist/stylist.component';
import { StylistDetailComponent } from './stylist-detail/stylist-detail.component';
import { StylistCreateComponent } from './stylist-create/stylist-create.component';
import { StylistEditComponent } from './stylist-edit/stylist-edit.component';
import {HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  }, 
  {
    path: 'stylists',
    component: StylistComponent,
    data: { title: 'Stylist List' }
  },
  {
    path: 'stylist-details/:id',
    component: StylistDetailComponent,
    data: { title: 'Stylist Details' }
  },
  {
    path: 'stylist-create',
    component: StylistCreateComponent,
    data: { title: 'Create Stylist' }
  },
  {
    path: 'stylist-edit/:id',
    component: StylistEditComponent,
    data: { title: 'Edit Stylist' }
  },
  { path: '',
    redirectTo: '/stylists',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    StylistComponent,
    StylistDetailComponent,
    StylistCreateComponent,
    StylistEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
