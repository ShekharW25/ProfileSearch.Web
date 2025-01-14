import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import {Skill} from '../model/skill'; 
import { Profile } from '../model/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'https://localhost:7113/';
  constructor(private http: HttpClient) { }
   
  getSkills(): Observable<Skill[]> {
     
   return this.http.get<Skill[]>(this.apiUrl + 'profilesearch/skills'); 
  }

  saveProfile(profile:Profile){
    console.log('in service' , profile);
    return this.http.post(this.apiUrl + 'profilesearch/create',JSON.stringify(profile),{
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
