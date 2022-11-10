import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent implements OnInit {
addData: FormGroup;

  constructor(private fb:FormBuilder) {
    this.addData= this.fb.group({
      eId:[''],
      firstName:[''],
      lastName:[''],
      email:[''],
      sal:[''],

    })
   }

  ngOnInit(): void {
  }

  employees = [
    { eId: 101, firstName: "sachin", lastName: 'tendulkar', email:'sachin@gmail.com', sal: 5000 },
    { eId: 104, firstName: "virat", lastName: 'kohali',email:'virat@gmail.com',  sal: 8000 },
    { eId: 103, firstName: "ms", lastName: 'dhoni',email:'ms@gmail.com', sal: 7000 },
    { eId: 102, firstName: "rohit", lastName: 'sharma',email:'rohit@gmail.com', sal: 9000 }
  ]
}
