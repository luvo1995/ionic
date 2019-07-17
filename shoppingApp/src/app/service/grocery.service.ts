import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

list;
writeitem = this.angularfireStore.collection<any>('grocery')

  constructor(private angularfireStore: AngularFirestore) { }

getItem() {

return this.angularfireStore.collection('grocery').valueChanges();

}
postItem(){
  this.writeItem = this.angularfireStore.collection<any>('grocery')
  this.write
}

}
