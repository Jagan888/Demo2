import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';
import { service } from '../services/service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})



export class EmployeesComponent {
  constructor(
    public service: service
  ){}
  form: FormGroup ;
  createNewUser: any;

  user:any;

onSubmit() {
  const userData = this.service.form.value;
  this.service.createNewUser(userData);
}

onClick(FullName){
  this.user=this.service.getUser(FullName);
  console.log(this.user)
}

AddEmployees(FName,LName,Age,Loc,Eid){
  this.service.AddEmployee(FName,LName,Age,Loc,Eid);
}

}
