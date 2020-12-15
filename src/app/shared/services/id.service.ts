import { Injectable } from '@angular/core';
import { TId } from 'src/app/types/types';

@Injectable({
  providedIn: 'root'
})
export class IdService {

  private emittedId: TId[] = [];
  private freeId: TId[] = [];

  constructor() { }

  public get nextId(): TId {
    if(this.freeId.length > 0) {
      const id: TId = this.freeId[0];
      this.freeId = this.freeId.filter(freeId => freeId !== id);
      this.emittedId.push(id);
      this.emittedId = this.emittedId.sort((a,b) => a-b);
      return id;
    }
    else {
      const id: TId = this.emittedId.length + 1;
      this.emittedId.push(id);
      this.emittedId = this.emittedId.sort((a,b) => a-b);
      return id;
    }


  }

  public removeId(remove: TId) {
    const index: TId = this.emittedId.findIndex((id) => id === remove);
    if(index >= 0) {

      this.emittedId = this.emittedId.filter(id => id !== remove);
      this.freeId.push(remove);
      this.freeId = this.freeId.sort((a,b) => a-b);
    }
  }


}
