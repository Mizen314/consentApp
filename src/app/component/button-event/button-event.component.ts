import { Component } from '@angular/core';
import { getAnalytics, logEvent, setUserId } from 'firebase/analytics';

@Component({
  selector: 'app-button-event',
  templateUrl: './button-event.component.html',
  styleUrls: ['./button-event.component.css']
})
export class ButtonEventComponent {
  shotEvent() {
      const analytics = getAnalytics()
      logEvent(analytics, 'click',{
        'click_type': 'button',
        'click_detail': "test",
        'flow': "Laboratorio test"
      })
    }
}


