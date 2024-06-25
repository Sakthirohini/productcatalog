import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ListproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // provideClientHydration()
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
