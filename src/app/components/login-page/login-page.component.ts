import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  credentials={
    emailId:"",
    password:""
  }
  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
  }

  onsubmit(){
    if((this.credentials.emailId!='' && this.credentials.password!='') && (this.credentials.emailId!=null && this.credentials.password!= null)){
      console.log("submit the form to server");
      // token generation 
      this.employeeService.logIn(this.credentials).subscribe(
        
        (response:any)=>{
          console.log(response)
          this.employeeService.logInUser(response.data)
          window.location.href="/home"
        },
        errors=>{
        console.log(errors);

        }
      )


    }else{
      console.log("Fields are empty...!")
  }
}
}
