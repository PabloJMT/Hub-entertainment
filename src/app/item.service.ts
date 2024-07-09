import { Injectable } from '@angular/core';
import { title } from 'process';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Item{
  id: number,
  image: string,
  title: string,
  description: string
}



@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private image_string: string = 'https://docs.google.com/document/d/1QjODLAPpXTmc4IBpz06qcj_Fno2f4mMVobR0rZ2gQog/edit?usp=sharing' ; 
  private itemsSubject = new BehaviorSubject<Item[]>([
    {
      id: 1,
      image: this.image_string,
      title: "Titulo 1",
      description: "Descripcion 1"
    
    
    }, 
    {
      id: 2,
      image: this.image_string,
      title: "Titulo 2",
      description: "Descripcion 2"
    
    
    }, 
    {
      id: 3,
      image: this.image_string,
      title: "Titulo 3",
      description: "Descripcion 3"
    
    }, 

  ]); 

    getItems(): Observable<Item[]> {
      return this.itemsSubject.asObservable(); 
    }

    addItems(item: Item): void{
      // You can add your database here 
    }
}

