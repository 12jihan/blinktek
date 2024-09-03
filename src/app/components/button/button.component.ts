import { Component, Input } from '@angular/core';

@Component({
  selector: 'bt-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() text: string = 'Button';
  @Input() type: string = 'primary';

}
