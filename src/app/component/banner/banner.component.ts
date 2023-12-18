import { Component, EventEmitter, Output } from '@angular/core';
import { getAnalytics, logEvent, setConsent, setUserId } from 'firebase/analytics';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Output() displayBanner = new EventEmitter<boolean>();
  

  constructor(private localStorageService: LocalstorageService) { }

  marketing = true;
  analytics=  true
  funcionality = true
  preferences = true;
  

  modificarSeleccion($event: any){
    this.marketing = $event.target.value
    this.analytics = $event.target.value
    this.funcionality = $event.target.value
    this.preferences = $event.target.value
  }
  
  aceptarTodo() { 
    setConsent(
      {
        ad_storage: "granted",
        analytics_storage: "granted",
        functionality_storage: 'granted',
        personalization_storage: 'granted'
      }
    )
    this.localStorageService.setItem('userConsent', true)
    this.localStorageService.setItem('showBanner', false)
    this.localStorageService.setItem('ad_storage', 'granted')
    this.localStorageService.setItem('analytics_storage', 'granted')
    this.localStorageService.setItem('functionality_storage', 'granted')
    this.localStorageService.setItem('personalization_storage', 'granted')
    
    
    const analytics = getAnalytics()
    logEvent(analytics, 'click',{
      'click_type': 'button',
      'click_detail': "Aceptar consentimiento",
      'flow': "consent"
    })
    setUserId(analytics,"123456")
    this.displayBanner.emit(false);
    
  }

  aceptarSeleccionados($event: any){
    setConsent({ 
      analytics_storage: this.analytics ? "granted" : "denied",
      ad_storage: this.marketing ? "granted" : "denied",
      functionality_storage: this.funcionality ? "granted" : "denied",
      personalization_storage: this.preferences ? "granted" : "denied",
    })
    this.localStorageService.setItem('userConsent', true)
    this.localStorageService.setItem('showBanner', false)
    this.localStorageService.setItem('ad_storage', this.marketing ? "granted" : "denied")
    this.localStorageService.setItem('analytics_storage', this.analytics ? "granted" : "denied")
    this.localStorageService.setItem('functionality_storage', this.funcionality ? "granted" : "denied")
    this.localStorageService.setItem('personalization_storage', this.preferences ? "granted" : "denied")
    const analytics = getAnalytics()
    logEvent(analytics, 'click',{
      'click_type': 'button',
      'click_detail': "Aceptar selección",
      'flow': "consent"
    })
    setUserId(analytics,"22314")
    this.displayBanner.emit(false);


  }
  rechazarTodo() { 
    setConsent(
      {
        ad_storage: "denied",
        analytics_storage: "denied",
        functionality_storage: 'denied',
        personalization_storage: 'denied'
      }
    )
    this.localStorageService.setItem('userConsent', true)
    this.localStorageService.setItem('showBanner', false)
    this.localStorageService.setItem('ad_storage', 'denied')
    this.localStorageService.setItem('analytics_storage', 'denied')
    this.localStorageService.setItem('functionality_storage', 'denied')
    this.localStorageService.setItem('personalization_storage', 'denied')
    const analytics = getAnalytics()
      logEvent(analytics, 'click',{
        'click_type': 'button',
        'click_detail': "rechazar consentimiento",
        'flow': "consent"
      })
      setUserId(analytics,"33456")
      this.displayBanner.emit(false);
    }
  }