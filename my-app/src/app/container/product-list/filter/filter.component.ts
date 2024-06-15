import { Component,Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all:number=0;
  @Input()
  inStock:number=0;
  @Input()
  outOfStock:number=0;
  @Output()
  selectedFilterButtonChanged:EventEmitter<string>=new EventEmitter<string>()
  selectedFilterRadioButton:string='all'
  onSelectedFilterRadioButtonChanged(){
    // console.log(this.selectedFilterRadioButton)
    this.selectedFilterButtonChanged.emit(this.selectedFilterRadioButton);
  }
}
