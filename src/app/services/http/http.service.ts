import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  headers: HttpHeaders;

  whUrl = environment.whUrl;

  constructor(
    private http: HttpClient
  ) { }


  postWhFeedback( data: { contact: string } ): Observable<any>{
    let body = {
      "username": "CactusDashboard",
      "avatar_url": "https://dashboard.cactusweb.io/assets/img/logo/logo.png",
      "embeds": [
        {
          "author": {
            "name": "Cactus Dashboard",
            "url": "https://twitter.com/CactusDash",
          },
          "description": "Feedback form from https://manager.cactusweb.io/ ",
          "color": 1938152,
          "fields": [
            {
              "name": "Contact data:",
              "value": `${data.contact}`,
              "inline": false
            }
          ],
        }
      ]
    }

    return this.http.post( this.whUrl, body );
  }

}
