import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
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
