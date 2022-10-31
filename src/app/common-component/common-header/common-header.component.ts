import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent implements OnInit {

  showSearch: boolean = false;
  constructor() { }

  ngOnInit() {}

  showSearchBox(_item) {
    console.log('showSearch>>', this.showSearch);
    if(this.showSearch == false) {
      this.showSearch = true;
    }else{
      this.showSearch = false;
    }
  }

}
