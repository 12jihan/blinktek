import { Component, Input } from '@angular/core';

@Component({
  selector: 'bt-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() header: string = 'Sample Header';
  @Input() text: string = 'Sample Text';
  @Input() photo_url: string = '/assets/imgs/placeholder.png';
}
