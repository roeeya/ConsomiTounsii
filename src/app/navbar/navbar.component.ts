import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  imageUrl="assets/images/casa.jpg";
  isLoggedIn: boolean;
  productsInCart : number ;

  constructor(private userService:UserService,private router :Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
    this.productsInCart = 0 ;
  }
  addToCart(){
    this.productsInCart++;    
  }


  logout(){
    localStorage.removeItem("myToken");
    this.router.navigate(['/login']);

  }

}
