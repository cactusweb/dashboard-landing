import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dash-landing';

  ngOnInit(){
    
    AOS.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 50, // offset (in px) from the original trigger point
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-top', // defines which position of the element regarding to window should trigger the animation
    
    });
    this.listenLoadPage()

  }

  
  listenLoadPage(){
    // удаляем элемент, который должен быть на странице только до полной загрузки
    window.onload = () => {
      setTimeout( 
        () => document.querySelector('#beforeLoad')?.remove(), 
        400
      )
    }

  }


}
