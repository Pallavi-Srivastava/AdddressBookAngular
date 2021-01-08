import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookFormComponent } from './address-book-form.component';

describe('AddressBookFormComponent', () => {
  let component: AddressBookFormComponent;
  let fixture: ComponentFixture<AddressBookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
