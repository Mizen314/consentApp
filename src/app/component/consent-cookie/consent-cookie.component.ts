import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-consent-cookie',
  templateUrl: './consent-cookie.component.html',
  styleUrls: ['./consent-cookie.component.css']
})
export class ConsentCookieComponent {

    getAnalyticsCookie(): any {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('_ga')) {
        return cookie.substring('_ga='.length, cookie.length);
      } else {
        console.log('No cookie found');
      }
    }
   }
}