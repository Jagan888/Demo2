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


onSubmit() {
  const userData = this.service.form.value;
  this.service.createNewUser(userData);
}

onClick(){
  const fname = this.service.form.value;
  this.service.getUser(fname);
}

}
