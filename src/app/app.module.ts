import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CenterComponent } from './center/center.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { EmployeeCrudComponent } from './employee-crud/employee-crud.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LimitPipe } from './products.ts/limit.pipe';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    DirectiveComponent,
    DatabindingComponent,
    CarouselComponent,
    ProductsComponent,
    EmployeeCrudComponent,
    LimitPipe,
    NotfoundComponent,
    ProductDetailsComponent,
    ProductDetailComponent,
    CareersComponent,
    ContactUsComponent,
    AboutUsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
