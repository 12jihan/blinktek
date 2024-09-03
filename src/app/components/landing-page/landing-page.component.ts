import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { ButtonComponent } from "../button/button.component";
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'bt-landing-page',
  standalone: true,
  imports: [CardComponent, ButtonComponent, AccordionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
