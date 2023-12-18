import { Component, EventEmitter, Output } from '@angular/core';
import { setConsent, getAnalytics, logEvent, setUserId } from 'firebase/analytics';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  @Output() displayBanner = new EventEmitter<boolean>();

  showBanner(){
    this.displayBanner.emit(true);
  }

}
