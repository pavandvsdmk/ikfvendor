import { Component, OnInit } from '@angular/core';
import { VendorModel } from './vendor.model';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {

  vendor: VendorModel;
  branches = [{
    name: 'Hyderabad',
    value: 'Hyderabad'
  }, {
    name: 'Bangalore',
    value: 'Bangalore'
  }, {
    name: 'Mumbai',
    value: 'Mumbai'
  }];

  constructor() { }

  ngOnInit() {
    const vm = this;
    vm.vendor = new VendorModel();
  }

}
