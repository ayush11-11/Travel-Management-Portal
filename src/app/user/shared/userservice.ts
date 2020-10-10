import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {User} from './user';
import {Ticket} from '../user-dashboard/ticket/ticket'
 
import {Loginuser} from '../login/loginuser';
 


@Injectable({
  providedIn: 'root'
})
export class UserService {
  sendmessage=new Subject();
  url='http://localhost:8080'
 // url="https://jsonplaceholder.typicode.com/users"
  constructor(private http:HttpClient) { }
  //,{responseType:'text' as 'json'}
userid:number;
userId:number;
  createuser(user:User):Observable<User>{
    return this.http.post<User>(this.url+'/registration',user)
  }
  dummy(){
    return this.http.get(this.url)
  }
  updateuser(user:User,userid):Observable<User>{
    return this.http.put<User>(`${this.url}/registration/${userid}`,user)
  }
  loginuser(login) {
    console.log('before service');
    return this.http.get(`${this.url}/login/${login}`);
    
  }
  communicate(msg){
    this.sendmessage.next(msg);
  }

  createticket(ticket:Ticket,userId):Observable<Ticket>{
    console.log(userId);
    return this.http.post<Ticket>(`${this.url}/${userId}/ticket`,ticket)
  }
  updateticket(ticket:Ticket,ticketid,userid):Observable<Ticket>{
    return this.http.put<Ticket>(`${this.url}/${userid}/ticket/${ticketid}`,ticket)
  }
  getTicketUser(userid){
    return this.http.get(`${this.url}/${userid}/tickets`)
  }
 forget(username){
  return this.http.get(`${this.url}/sendemail/${username}`)
 } 
   
   

}