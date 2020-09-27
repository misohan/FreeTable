import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { Restaurant } from 'src/app/common/restaurant';
import { CartService } from 'src/app/services/cart.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ReservationItem } from 'src/app/common/reservation-item';
import {ReservationItemService} from 'src/app/services/reservation-item.service'


@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  restaurant: Restaurant;
  reservationItems: ReservationItem []=[];
  totalTables: number =0;
  totalSeats: number =0;
  constructor(private cartService: CartService,
              private restaurantService: RestaurantService,
              private reservationItemService: ReservationItemService) { }

  ngOnInit(): void {
    this.listCartDetails()
    this.listReservationItems()
    // console.log(`check: ${this.listReservationItems[0][0]}`);
    console.log(`check: ${this.listCartDetails.length}`);
    console.log(this.reservationItems.length);    
    
    
  }
  listCartDetails() {
    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;

    // subscribe to the cart totalSeats
    this.cartService.totalSeats.subscribe(
      data => this.totalSeats = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalTables.subscribe( 
      data => this.totalTables = data
    );

    // compute cart total price and quantity
    this.cartService.computeCartTotals();

  }
  listReservationItems(){
    this.reservationItems = this.cartService.reservationItems;
  }
  save(){
    this.reservationItemService
    .createReservationItems(this.cartItems).subscribe(data=>{
      console.log(data)
      
      
    },
    error => console.log(error));
    
  }
  // save(){
  //   this.reservationItemService
  //   .createReservationItems(this.reservationItems).subscribe(data=>{
  //     console.log(data)
  //     this.reservationItems = new ReservationItem();
      
  //   },
  //   error => console.log(error));
    
  // }
  // onSubmit(){
  //   this.save();
  //   console.log("Ahoj");

  // }
    
  

}
