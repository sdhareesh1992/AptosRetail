import {
  Component,
  OnInit,
  Input,
  forwardRef,
  HostListener,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropDownComponent),
  multi: true,
};

enum DropdownMouseState {
  inside,
  outside,
}

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class DropDownComponent implements OnInit, ControlValueAccessor {
  showMenu: boolean;
  selectedItem!: IDropdownItem;
  propagateChange = (_: any) => { };

  state: DropdownMouseState;

  @Input()
  data!: Array<IDropdownItem>;

  @HostListener('document:click') clickedOutside() {
    if (this.state == DropdownMouseState.outside) {
      this.showMenu = false;
    }
  }

  constructor() {
    this.showMenu = false;
    this.state = DropdownMouseState.outside;
  }

  ngOnInit() {
  }

  valueChange(item: IDropdownItem) {
    this.selectedItem = item;
    this.propagateChange(item.Value);
    this.showMenu = false;
  }


  instanceOfIDropdownItem(object: any): object is IDropdownItem {
    return object.Value !== undefined;
  }

  writeValue(value: any): void {
    if (value == null) {
    } else {
      let item = this.data.find((w) => w.Value == value);
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }
}

export interface IDropdownItem {
  DisplayValue: any;
  Value: any;
}
