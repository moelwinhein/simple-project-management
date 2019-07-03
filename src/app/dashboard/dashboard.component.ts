import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLinkClick(linkName) {
    console.log('clicked: ', linkName);
    switch (linkName) {
      case 'projects':
        break;
      case 'topics':
        break;
      default:
    }
  }

}
