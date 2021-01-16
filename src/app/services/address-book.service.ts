import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddressBookData } from './../models/address-book-data';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  private getUrl: string = "http://18.217.26.144:7038/addressBook";

  constructor(private _httpClient: HttpClient) { }

  getAllAddressBook(): Observable<any> {
    return this._httpClient.get<any>(this.getUrl);
  }
  
  getAddressBookById(id: number): Observable<any> {
    return this._httpClient.get<any>(`${this.getUrl}/get/${id}`).pipe(
      map(response => response)
    )
  }

  addAddressookRecord(book: AddressBookData): Observable<AddressBookData> {
    return this._httpClient.post<AddressBookData>(`${this.getUrl}/create`, book);
  }

  deleteAddressBookRecord(id: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl}/delete/${id}`);
  }

  updateAddressBookRecord(book: AddressBookData,id: number) {
    return this._httpClient.put<AddressBookData>(`${this.getUrl}/update/${id}`, book);
  }
}
