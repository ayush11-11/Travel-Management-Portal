import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  url='http://localhost:8080'
  constructor(private http:HttpClient) { }

  getTickets(){
    return this.http.get(`${this.url}`+'/ticket')
  }
  getTicket(id){
    return this.http.get(`${this.url}/${id}/ticket`)
  }
  updateTicket(userid,id,ticket){
    return this.http.put(`${this.url}/${userid}/ticket/${id}`,ticket)
  }
  authenticate(username,password){
 
    if(username==='ayush' && password === '12345'){
     
     sessionStorage.setItem('authenticaterUser',username);
      return true;
    }  return false;
  }
  
  isAdminLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }
 
  logout(){
    
    sessionStorage.clear()    
  }
 
}



