import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  vendors: Array<Object> = [];

  settings = {
    pager: {
      display: true,
      perPage: 10
    },
    actions: {
      add: false,
      delete: false,
      edit: false
    },
    columns: {
      firm: {
        title: 'Firm',
        width: '150px'
      },
      propreitor: {
        title: 'propreitor'
      },
      Mobile: {
        title: 'Mobile'
      },
      email: {
        title: 'email'
      }
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
