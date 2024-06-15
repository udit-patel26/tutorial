import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string='';
   //create event
  @Output()
  searchTextChanged:EventEmitter<string>=new EventEmitter<string>()
  // onSearchTextChange(){
   
  // }
  updateSearchText(inputEl:HTMLInputElement){
    // this.searchText=event.target.value;
    // console.log(inputEl.value)
    this.searchText=inputEl.value
    this.searchTextChanged.emit(this.searchText)
  }

  
  

}
