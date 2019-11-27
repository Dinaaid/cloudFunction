import { AngularFireDatabase } from '@angular/fire/database';

export class FirebaseService {  
  	constructor(private fb: AngularFireDatabase) {}
  
	public addItem(path: string, data: {}, id: string = '_id') {
  return this.fb
    .list(path)
    .push(data)
    .then(resp => {
      this.fb.list(path).update(resp.key, { [id]: resp.key });
      return resp;
    });
}