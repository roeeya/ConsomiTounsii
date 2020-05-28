import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { Page404Component } from './page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule
} from 'ngx-toastr';
import { TestComponent } from './test/test.component';
import { MaterialModule } from './material/material.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AttarComponent } from './attar/attar.component';
import { BelleComponent } from './belle/belle.component';
import { ArtComponent } from './art/art.component';
import { TounsiComponent } from './tounsi/tounsi.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PeopleListComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
   
    Page404Component,
    AddUserComponent,
    UpdateUserComponent,
    TestComponent,
    CheckoutComponent,
    ShoppingCartComponent,
    AttarComponent,
    BelleComponent,
    ArtComponent,
    TounsiComponent,
    ContactusComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule , 
    ReactiveFormsModule ,
    ToastNoAnimationModule.forRoot(),
    MaterialModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
