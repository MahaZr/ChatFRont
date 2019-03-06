import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageeeComponent } from './messageee.component';

describe('MessageeeComponent', () => {
  let component: MessageeeComponent;
  let fixture: ComponentFixture<MessageeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
