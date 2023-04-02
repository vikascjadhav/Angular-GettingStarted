import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { StartComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StartComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
