import { Component, Input } from '@angular/core';
import { title } from 'process';
import { Item } from '../item.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item: Item = {
    id: 0, 
    image: '', 
    title: '',
    description: '',

  }; 

  visibility: boolean = true; 

  toggleVisibility(){
    this.visibility = !this.visibility; 
  }
}
