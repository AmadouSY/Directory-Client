import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

   private readonly baseUrl: string;

   constructor(private http: HttpClient) {
     this.baseUrl = 'http://localhost:8080/contacts/all';
   }

   public findAll(): Observable<Contact[]> {
     return this.http.get<Contact[]>(this.baseUrl);
   }

}
