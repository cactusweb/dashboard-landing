import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isActive: boolean = false;
  fragment: string | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.fragment
      .pipe( take(1) )
      .subscribe(
        res => this.fragment = res
      )
   }

  ngOnInit() {
    setTimeout(() => {
      if ( this.fragment ) this.scrollTo( this.fragment )
    }, 200);
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


  scrollTo( id: string, e?: any ){
    e?.preventDefault();

    this.router.navigate(['/'], { fragment: id })

    document.getElementById(id)?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  }

}
