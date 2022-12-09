import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ViewSearchComponent } from './view-search/view-search.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';

let myRoutes:Routes = [
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"userreg",
    component:UserRegComponent
  },
  {
    path:"add",
    component:AddProductComponent
  },
  {
    path:"view",
    component:ViewProductComponent
  },
  {
    path:"search",
    component:SearchProductComponent
  },
  {
    path:"userview",
    component:ViewSearchComponent
  },
  {
    path:"viewprofile",
    component:ViewProfileComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegComponent,
    AdminNavbarComponent,
    AddProductComponent,
    ViewProductComponent,
    SearchProductComponent,
    ViewSearchComponent,
    ViewProfileComponent,
    UserNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
