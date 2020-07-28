import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHapusComponent } from './dialog-hapus.component';

describe('DialogHapusComponent', () => {
  let component: DialogHapusComponent;
  let fixture: ComponentFixture<DialogHapusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogHapusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHapusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
