import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularVirtialScrollingCdkComponent } from './angular-virtial-scrolling-cdk.component';

describe('AngularVirtialScrollingCdkComponent', () => {
  let component: AngularVirtialScrollingCdkComponent;
  let fixture: ComponentFixture<AngularVirtialScrollingCdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularVirtialScrollingCdkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularVirtialScrollingCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
