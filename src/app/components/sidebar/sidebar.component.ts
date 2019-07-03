import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  @Output() linkClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClickLink(e) {
    if (e.target && e.target.classList.contains('side-bar-item--link') && !e.target.classList.contains('active')) {
      const links = document.querySelectorAll('.side-bar-item--link.active');
      links.forEach(link => link.classList.remove('active'));
      e.target.classList.add('active');
      this.linkClick.emit(e.target.getAttribute('id'));
    }
  }

}
