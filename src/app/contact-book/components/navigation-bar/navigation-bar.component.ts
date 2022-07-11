import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../../common/global-constants';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.sass']
})
export class NavigationBarComponent implements OnInit {

  public highlight = {
    backgroundColor: "orange" ,
    color: "#333333"
  }

  constructor() { }

  ngOnInit(): void {
  }

  onNavClick()
  {
    GlobalConstants.buttonValue = "Add"
  }
}
