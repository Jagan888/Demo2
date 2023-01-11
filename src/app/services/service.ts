import { Injectable, NgZone } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { doc, getDoc } from "firebase/firestore";


@Injectable({
  providedIn: 'root',
})

export class service {

  constructor(
    public afs: AngularFirestore
)
{
const Emp = afs.collection('Employees').doc('KDdZyCzwWTZ3xehXqSVE');



}

//Creating a user
createNewUser(userData) {
    this.afs.collection('Employees').add(userData);
  }

  //List User
  getUserList() {
    return this.afs.collection('users').snapshotChanges();
  }

//get Users based on name
async getUser(FullName){
  const get_query = this.afs.collection('Employees', (ref) => ref.where('FullName', '==', FullName));
//console.log(get_query)



}


form = new FormGroup({
    FullName: new FormControl(''),

  });

}
