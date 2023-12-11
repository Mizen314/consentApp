import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentCookieComponent } from './consent-cookie.component';

describe('ConsentCookieComponent', () => {
  let component: ConsentCookieComponent;
  let fixture: ComponentFixture<ConsentCookieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsentCookieComponent]
    });
    fixture = TestBed.createComponent(ConsentCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
