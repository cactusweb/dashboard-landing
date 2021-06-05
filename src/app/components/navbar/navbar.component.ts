import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeStateMenu( timeout: boolean = false ){
    if ( timeout )
      setTimeout( () => {
        this.isActive = !this.isActive; 
        if ( this.isActive ) document.querySelector('body').style.overflowY = 'hidden';
        else document.querySelector('body').style.overflowY = 'initial';
      }, 10)

    else{
      this.isActive = !this.isActive;
      if ( this.isActive ) document.querySelector('body').style.overflowY = 'hidden';
      else document.querySelector('body').style.overflowY = 'initial';
    }
   
  }

}
