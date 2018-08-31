import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { ValuationFormComponent } from './valuation-form/valuation-form.component';

// Services
import { AppService } from './app.service';
import { DateService } from './services/date.service';

// Directives
import { OnlyNumberDirective } from './directives/onlyNumbers.directive';

// Plugins
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyDatePickerModule } from 'mydatepicker';
import { NgSelectModule } from '@ng-select/ng-select';
// import { ToastModule } from 'ng2-toastr/ng2-toastr';

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
  }, {
    path: 'valuation',
    component: ValuationFormComponent,
    data: {
      name: 'valuation'
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    VendorListComponent,
    AddVendorComponent,
    OnlyNumberDirective,
    ValuationFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    Ng2SmartTableModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    MyDatePickerModule,
    NgSelectModule
    // ToastModule.forRoot()
  ],
  providers: [
    AppService,
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
