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
  public faqs: { question: string, answer: string }[] =
    [
      {
        question: 'What services do you offer?',
        answer: 'We offer a wide range of tech consulting services, including web devlopment, software development, IT infrastructure management, and cybersecurity solutions.'
      },
      {
        question: 'How can I contact you?',
        answer: 'You can reach out to us through our contact form on the website or by calling us directly. Do you provide on-site support?'
      },
      {
        question: 'Do you provide on-site support?',
        answer: 'Yes, we offer on-site support for certain projects and clients. Please contact us for more information.'
      },
      {
        question: 'What industries do you serve?',
        answer: 'e serve clients from various industries, including finance, healthcare, e-commerce, and more.'
      },
      {
        question: 'Can you help with data migration?',
        answer: 'Yes, we have expertise in data migration and can assist you in seamlessly transferring your data to new systems.'
      },
    ];
}
