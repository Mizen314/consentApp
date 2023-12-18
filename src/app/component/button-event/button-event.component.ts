import { Component } from '@angular/core';
import { getAnalytics, logEvent, setUserId } from 'firebase/analytics';

@Component({
  selector: 'app-button-event',
  templateUrl: './button-event.component.html',
  styleUrls: ['./button-event.component.css']
})
export class ButtonEventComponent {
  
  shotEvent() {
    const analytics = getAnalytics();
    logEvent(analytics, 'click', {
      'click_type': 'button',
      'click_detail': "Enviar evento de prueba 1",
      'flow': "Flujo de prueba"
    });
  }
  shotEvent2() {
    const analytics = getAnalytics();
    logEvent(analytics, 'click', {
      'click_type': 'button',
      'click_detail': "Enviar evento de prueba 2",
      'flow': "Flujo de prueba"
    });
  }


}


