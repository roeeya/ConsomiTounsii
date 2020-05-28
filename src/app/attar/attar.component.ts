import { Component, OnInit } from '@angular/core';
import { productsList } from '../store';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attar',
  templateUrl: './attar.component.html',
  styleUrls: ['./attar.component.scss']
})
export class AttarComponent implements OnInit {
  imageUrl="assets/images/casa.jpg";
  products = productsList;
  productsInCart: number;
  isLoggedIn: boolean;

  constructor(private userService:UserService,private router :Router) { }

  ngOnInit() {
    this.productsInCart = 0 ;
    this.isLoggedIn = this.userService.isLoggedIn();
  }
  
  addToCart(){
    this.productsInCart++;    
  }
 

  logout(){
    localStorage.removeItem("myToken");
    this.router.navigate(['/login']);

  }

}
