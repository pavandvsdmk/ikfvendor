import { Component, OnInit } from '@angular/core';
import { ValuationModel } from '../valuation-form/valuation.model';

@Component({
  selector: 'app-valuation-view',
  templateUrl: './valuation-view.component.html',
  styleUrls: ['./valuation-view.component.scss']
})
export class ValuationViewComponent implements OnInit {

  valuation: ValuationModel;

  constructor() { }

  ngOnInit() {
    const vm = this;
    vm.valuation = new ValuationModel();
  }

}
