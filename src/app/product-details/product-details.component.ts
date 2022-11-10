import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // public buyNow() {
  //   Swal.fire({title:'Do you want to display products details?',
  //   showDenyButton:true,
  //   showCancelButton:true,
  //   confirmButtonText:'Show',
  //   denyButtonText:'Dont Show'
  // }).then((result)=>{
  //   if(result.isConfirmed){
  //     Swal.fire('Show','','success')
  //   }else if(result.isDenied){
  //   Swal.fire('Product are not displayed','','info')
  //   }
  // });
  // }

}
