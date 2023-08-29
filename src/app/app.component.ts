import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IDropdownItem } from './dropdown/dropdown.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  dropdownData: Array<IDropdownItem> = new Array<IDropdownItem>();

  constructor() {}

  model = new FormGroup({
    droupDown: new FormControl(),
  });

  ngOnInit() {
    this.dropdownData = [
      { DisplayValue: 'Option 1', Value: 1 },
      { DisplayValue: 'Option 2', Value: 2 },
      { DisplayValue: 'Option 3', Value: 3 },
      { DisplayValue: 'Option 4', Value: 4 },
      { DisplayValue: 'Option 5', Value: 5 },
      { DisplayValue: 'Option 6', Value: 6 },
      { DisplayValue: 'Option 7', Value: 7 },
      { DisplayValue: 'Option 8', Value: 8 },
      // { DisplayValue: 'Option 9', Value: 9 },
  ];
  }
}
