import { Injectable, NgZone } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { doc, FieldValue, getDoc } from "firebase/firestore";


@Injectable({
  providedIn: 'root',
})

export class service {
 // Pro: any;

  constructor(
    public NgZone: NgZone,
    public afs: AngularFirestore,
    // Emp = afs.collection('Employees'),
    // Pro = afs.collection('Projects')
){}

//Creating a user
createNewUser(userData) {
    this.afs.collection('Employeess').add(userData);
  }

  //List User
  async getUserList(name) {

  const get_query = this.afs.collection('Employees');
  const snapshot =await get_query.ref.where('FullName', '==', name).get();
  snapshot.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
  });
   // return this.afs.collection('Employees').snapshotChanges();
  }

//get Users based on name
async getUser(FullName){
  //console.log(FullName)
  const get_query = this.afs.collection('Employees/Internal/Employees');
  const snapshot = await get_query.ref.where('FirstName', '==', FullName).get();
  return snapshot.forEach(doc => {
    doc.id, '=>', doc.data()
  // console.log(doc.id, '=>', doc.data());
  });
}

//Add Projects with field's
  AddEmployee(FName: any,LName: any,Age: any,Loc: any,Eid: any){
    console.log(FName,LName,Age,Loc,Eid)
    const get_query = this.afs.collection('Employees/Internal/Employees');
    get_query.doc().set({
      FirstName:FName,
      LastName:LName,
      Age:Age,
      Location:Loc,
      Email:Eid
    });
  }

form = new FormGroup({
    FullName: new FormControl(''),

  });

}
function addProjects() {
  throw new Error('Function not implemented.');
}

