import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PeopleListComponent } from './people-list/people-list.component';

import { Page404Component } from './page404/page404.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AuthGuard } from './auth.guard';
import { TestComponent } from './test/test.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AttarComponent } from './attar/attar.component';
import { BelleComponent } from './belle/belle.component';
import { ArtComponent } from './art/art.component';
import { TounsiComponent } from './tounsi/tounsi.component';
import { ContactusComponent } from './contactus/contactus.component';




const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
 
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'attar',
    component:AttarComponent
  },
  
  {
    path:'shopping-cart',
    component:ShoppingCartComponent
  },
  
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'tounsi',
    component:TounsiComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'art',
    component:ArtComponent
  },
  {
    path:'belle',
    component:BelleComponent
  },
  {
    path:'people-list',
    component:PeopleListComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'add-user',
    component:AddUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'update-user/:id',
    component:UpdateUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'**',
    component:Page404Component
  }
 
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
