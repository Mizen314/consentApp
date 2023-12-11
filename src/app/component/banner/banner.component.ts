import { Component } from '@angular/core';
import { getAnalytics, logEvent, setConsent, setUserId } from 'firebase/analytics';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

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
    const analytics = getAnalytics()
    logEvent(analytics, 'click',{
      'click_type': 'button',
      'click_detail': "Aceptar consentimiento",
      'flow': "consent"
    })
    setUserId(analytics,"123456")
    
  }

  aceptarSeleccionados($event: any){
    setConsent({ 
      analytics_storage: this.analytics ? "granted" : "denied",
      ad_storage: this.marketing ? "granted" : "denied",
      functionality_storage: this.funcionality ? "granted" : "denied",
      personalization_storage: this.preferences ? "granted" : "denied",
    })
    console.log(this.marketing, this.analytics)
    const analytics = getAnalytics()
    logEvent(analytics, 'click',{
      'click_type': 'button',
      'click_detail': "Aceptar selección",
      'flow': "consent"
    })
    setUserId(analytics,"22314")

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
    const analytics = getAnalytics()
      logEvent(analytics, 'click',{
        'click_type': 'button',
        'click_detail': "rechazar consentimiento",
        'flow': "consent"
      })
      setUserId(analytics,"33456")

  }

}

// <script>
//     function hideBanner() {
//         document.getElementById("cookie-consent-banner").style.display = "none";
//     }

//     if (localStorage.getItem("consentMode") === null) {
//         document
//             .getElementById("btn-accept-all")
//             .addEventListener("click", function () {
//                 setConsent({
//                     necessary: true,
//                     analytics: true,
//                     preferences: true,
//                     marketing: true,
//                 });
//                 hideBanner();
//             });
//         document
//             .getElementById("btn-accept-some")
//             .addEventListener("click", function () {
//                 setConsent({
//                     necessary: true,
//                     analytics: document.getElementById("consent-analytics").checked,
//                     preferences: document.getElementById("consent-preferences").checked,
//                     marketing: document.getElementById("consent-marketing").checked,
//                 });
//                 hideBanner();
//             });
//         document
//             .getElementById("btn-reject-all")
//             .addEventListener("click", function () {
//                 setConsent({
//                     necessary: false,
//                     analytics: false,
//                     preferences: false,
//                     marketing: false,
//                 });
//                 hideBanner();
//             });
//         document.getElementById("cookie-consent-banner").style.display = "block";
//     }

//     function setConsent(consent) {
//         const consentMode = {
//             functionality_storage: consent.necessary ? "granted" : "denied",
//             security_storage: consent.necessary ? "granted" : "denied",
//             ad_storage: consent.marketing ? "granted" : "denied",
//             analytics_storage: consent.analytics ? "granted" : "denied",
//             personalization: consent.preferences ? "granted" : "denied",
//         };
//         gtag("consent", "update", consent);
//         localStorage.setItem("consentMode", JSON.stringify(consentMode));
//     }
// </script> 