import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  baseUrl: string = "http://localhost:8080/employee";

  constructor(private httpClient: HttpClient) { }

logIn(credentials:any){

  return this.httpClient.post(`${this.baseUrl}/login`,credentials)
}

logInUser(token: string){
  localStorage.setItem("token",token);
  return true;
}

}
