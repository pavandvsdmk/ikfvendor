import { Component, OnInit } from '@angular/core';
import { ValuationModel } from './valuation.model';

@Component({
  selector: 'app-valuation-form',
  templateUrl: './valuation-form.component.html',
  styleUrls: ['./valuation-form.component.scss']
})
export class ValuationFormComponent implements OnInit {

  valuation: ValuationModel;

  constructor() { }

  ngOnInit() {
    const vm = this;
    vm.clearField();
  }

  clearField() {
    const vm = this;
    vm.valuation = new ValuationModel();
  }

}
