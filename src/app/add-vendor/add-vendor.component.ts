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
  formSubmitted: boolean;

  constructor() { }

  ngOnInit() {
    const vm = this;
    vm.clearField();
  }

  clearField() {
    const vm = this;
    vm.vendor = new VendorModel();
  }

  onSave(flag) {
    const vm = this;
    console.log(vm.vendor);
  }
}
