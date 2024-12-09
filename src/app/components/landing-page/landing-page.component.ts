import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { ButtonComponent } from "../button/button.component";
import { AccordionComponent } from '../accordion/accordion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAddressBook, faCalendarCheck, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faAmazon, faAngular, faGoogle, faMicrosoft, faReact } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'bt-landing-page',
  imports: [
    CardComponent,
    ButtonComponent,
    // AccordionComponent,
    FontAwesomeModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  public current_year: number = new Date().getFullYear();
  public contact_icon: IconDefinition = faAddressBook;
  public calendar_icon: IconDefinition = faCalendarCheck;
  public plane_icon: IconDefinition = faPaperPlane;

  public tools: any[] = [
    {
      name: 'Azure',
      icon: faMicrosoft
    },
    {
      name: 'AWS',
      icon: faAmazon
    },
    {
      name: 'GCP',
      icon: faGoogle
    },
    {
      name: 'Angular',
      icon: faAngular
    },
    {
      name: 'React',
      icon: faReact
    },
  ];

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


  ngOnInit(): void {

  }
}
