import { AddressBookData } from './../../models/address-book-data';
import { AddressBookService } from 'src/app/services/address-book.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-address-book-form',
  templateUrl: './address-book-form.component.html',
  styleUrls: ['./address-book-form.component.scss']
})
export class AddressBookFormComponent implements OnInit {
 
  addressBookObj: AddressBookData = new AddressBookData();

  addressBookForm: any;
  addessBookId: any;
  isUpdate = false;

  constructor(private formBuilder: FormBuilder, private addressBookService: AddressBookService,
    private router: Router, private activatedRoute: ActivatedRoute) {
    this. addressBookForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['',],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      id: ['']
    });

    this.activatedRoute.params.subscribe(data => {
      if (data && data.id) {
        this.isUpdate = true;
        this.getDataById(data.id)
      }
    })

  }

  ngOnInit() {
  }

  getErrorMessage(control: FormControl, message: string) {
    if (control.errors) {
      if (control.errors.required) {
        return message + ' is required';
      }

      if (control.errors.pattern || control.errors.whitespace) {
        return 'Invalid ' + message.toLowerCase();
      }
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
  getDataById(id): void {
    this.addressBookService.getAddressBookById(id).subscribe(respose => {
    this.setDataToFormBuilder(respose.data);
    }, err => {
      console.log("AddressBook Record");
    })
  }

  setDataToFormBuilder(object): void { 
    this.addressBookObj.name=object.name,
    this.addressBookObj.address=object.address,
    this.addressBookObj.city=object.city,
    this.addressBookObj.state=object.state,
    this.addressBookObj.zipCode=object.zipCode,
    this.addressBookObj.phoneNumber=object.phoneNumber,
    this.addressBookObj.addressBookId=object.addressBookId,
    console.log(object);
  }
  onSubmit() {
    console.log("save");

    if (this.isUpdate) {
      console.log("response is ", this.addressBookObj);
      this.addressBookService.updateAddressBookRecord(this.addressBookObj, this.addressBookObj.addressBookId).subscribe(response => {
        console.log("response is ", this.addressBookObj);
        this.router.navigateByUrl('')
      }, err => {

      })
    } else {
      this.addressBookService.addAddressookRecord(this.addressBookObj).subscribe(response => {
        console.log("response is ", response);
        this.router.navigateByUrl('');
      }, err => {
      })
    }
  }

  reset(): void {
    this.addressBookForm.reset();
  }
}