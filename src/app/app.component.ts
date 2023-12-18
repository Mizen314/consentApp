import { Component } from '@angular/core';
import { setConsent } from 'firebase/analytics';
import { LocalstorageService } from './services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Supervielle Laboratorio Consent Mode';

  showBanner = false;

  constructor(private localStorageService: LocalstorageService) { }

  ngOnInit(): void {
    // Comprobamos si el usuario ha aceptado las cookies
    const userConsent = this.localStorageService.getItem('userConsent');
    if (!userConsent) {
      // Si no ha aceptado las cookies, mostramos el banner
      this.localStorageService.setItem('userConsent', false);
      this.localStorageService.setItem('showBanner', true);
      this.showBanner = this.localStorageService.getItem('showBanner');
    }else{
      // Si ha aceptado las cookies, ocultamos el banner
      this.localStorageService.setItem('showBanner', true);
      this.localStorageService.setItem('showBanner', false);
      this.showBanner = this.localStorageService.getItem('showBanner');
      setConsent(
        {
          ad_storage: this.localStorageService.getItem('ad_storage'),
          analytics_storage: this.localStorageService.getItem('analytics_storage'),
          functionality_storage: this.localStorageService.getItem('functionality_storage'),
          personalization_storage: this.localStorageService.getItem('personalization_storage')
        }
      )
    }
  }

  cerrarBanner($event: boolean) {
    this.showBanner = $event;
    
  }
  mostrarBanner($event: boolean) {
    this.showBanner ? console.log("consentimiento aceptado") : alert('Los cambios se actualizarán a partir del próximo inicio de sesión')
    this.showBanner = $event;
}
}
