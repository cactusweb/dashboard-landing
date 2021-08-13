import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpService } from 'src/app/services/http/http.service';
import { finalize, take } from 'rxjs/operators';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  successfulSubmit: any = null;
  submited = false;

  constructor(
    private http: HttpService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      contact: new FormControl( '', Validators.required )
    })
  }

  async postFeedback(){
    

    if ( this.successfulSubmit !== null ){
      if ( this.successfulSubmit )
        this.feedbackForm.reset();

      this.successfulSubmit = null;
      this.submited = false;
      return;
    }
    
    if ( this.feedbackForm.invalid ){
      this.submited = true;
      return;
    }

    this.spinner.show();
    this.successfulSubmit = 'loading';
  
    this.http.postWhFeedback( this.feedbackForm.value )
      .pipe( take(1), finalize( () => { this.spinner.hide() }) )
      .subscribe(
        res => this.successfulSubmit = true,
        err => this.successfulSubmit = false,
        () => this.successfulSubmit = true
      )
  }

  

}
