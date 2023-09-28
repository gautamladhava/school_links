import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  closemenu(){
    document.body.classList.add("close")
    document.body.classList.remove("open")
  }
openmenu(){
  document.body.classList.remove("close")
  document.body.classList.add("open")
}
}
