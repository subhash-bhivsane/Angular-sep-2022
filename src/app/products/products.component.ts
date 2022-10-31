import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];
  searchText: any;
  // limit: any;
  constructor(private serviceProd: ProductsService) { }
  p: any
  ngOnInit(): void {
    this.serviceProd.getProduct().subscribe((res) => {
      // console.log(res);
      this.products = res;
      console.log(this.products);
    });
    // console.log();
  }

  public buyNow() {
    Swal.fire({title:'Do you want to buy the products?',
    showDenyButton:true,
    showCancelButton:true,
    confirmButtonText:'Buy',
    denyButtonText:'Dont Buy'
  }).then((result)=>{
    if(result.isConfirmed){
      Swal.fire('Buy','','success')
    }else if(result.isDenied){
    Swal.fire('Product are not celed','','info')
    }
  });
  }
}
