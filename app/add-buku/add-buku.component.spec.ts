import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBukuComponent } from './add-buku.component';

describe('AddBukuComponent', () => {
  let component: AddBukuComponent;
  let fixture: ComponentFixture<AddBukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
