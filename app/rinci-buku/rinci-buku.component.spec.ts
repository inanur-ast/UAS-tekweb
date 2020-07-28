import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RinciBukuComponent } from './rinci-buku.component';

describe('RinciBukuComponent', () => {
  let component: RinciBukuComponent;
  let fixture: ComponentFixture<RinciBukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RinciBukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RinciBukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
