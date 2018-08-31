import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
// import { ToastModule } from 'ng2-toastr/ng2-toastr';

// Services
import { AppService } from './app.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/new-vendor', pathMatch: 'full' },
  {
    path: 'new-vendor',
    component: AddVendorComponent,
    data: {
      name: 'new-vendor'
    }
  }, {
    path: 'vendors',
    component: VendorListComponent,
    data: {
      name: 'vendors'
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    VendorListComponent,
    AddVendorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    Ng2SmartTableModule,
    RouterModule.forRoot(appRoutes)
    // ToastModule.forRoot()
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
