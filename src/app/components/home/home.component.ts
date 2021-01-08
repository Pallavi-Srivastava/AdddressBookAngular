import { AddressBookService } from './../../services/address-book.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  addressBookList: Array<any>;
  
  constructor(private router: Router,private addressBookService: AddressBookService,) { }
  
  ngOnInit() {
        this.getAddressBookData(); 
}

getAddressBookData() {
    this.addressBookService.getAllAddressBook()
                    .subscribe(response =>{
                      console.log(response);
                      this.addressBookList  = response.data;
                    });
}

deleteUser(id: number) {
  this.addressBookService.deleteAddressBookRecord(id).subscribe(
    data => {
      console.log('deleted response', data);
      this.getAddressBookData();
    }
  )
  }   
  
  update(id: number) {
    console.log(id);
    this.router.navigateByUrl(`addressBook-form/${id}`);
  }
}

