import { Component, Input, ViewChild, ViewChildren } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFortAwesome, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bt-accordion',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input() text: string = 'Please add text'
  @ViewChild('container', { static: true }) content: ViewChildren | undefined = undefined;
  chevron_down: IconDefinition = faChevronDown;
  opened: boolean = false;

  public open_close(): void {
    this.opened = !this.opened;
  }
}
