import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'contactus', component:ContactUsComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'product',component:ProductsComponent},
  {path:'productdetails/:id',component:ProductDetailsComponent},
  {path:'carousel',component:CarouselComponent},
  {path:'', component:HomeComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
