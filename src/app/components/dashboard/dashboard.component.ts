import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  minDate: Date;
  maxDate: Date;

  employee: any = {};
  constructor() {  
     const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31); 
  }


  ngOnInit(): void {
  }

  employeeForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]{1}[a-zA-Z\\s]{2,}$')]),
    notes: new FormControl('', [Validators.required, Validators.minLength(4)]),
    profile: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  })


  onsubmit() {
    var userData: any
    userData = localStorage.getItem('empdata');
    if (userData == null) {
      userData = []
      userData.push(JSON.stringify(this.employeeForm.value))
    }
    else {
      JSON.parse(userData)
      console.log(userData)
      userData.push(JSON.stringify(this.employeeForm.value))
    }  
    localStorage.setItem('empdata', userData)
  }
  departmentList: Array<any> = [
    {
      name: "HR",
      value: "HR"
    },
    {
      name: "Sales",
      value: "Sales"
    },
    {
      name: "Finance",
      value: "Finance"
    },
    {
      name: "Engineer",
      value: "Engineer"
    },
    {
      name: "Other",
      value: "Other"
    },
  ]
  get name() {
    return this.employeeForm.get('name');
  }
  get notes() {
    return this.employeeForm.get('notes');
  }
  get profile() {
    return this.employeeForm.get('profile');
  }
  get gender() {
    return this.employeeForm.get('gender')?.value;
  }
  get department() {
    return this.employeeForm.get('department');
  }
  get salary() {
    return this.employeeForm.get('salary');
  }
  get date() {
    return this.employeeForm.get('date');
  }
}

