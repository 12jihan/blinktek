import { AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'bt-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit, AfterContentInit {
  @Input() header: string = 'Sample Header';
  @Input() text: string = 'Sample Text';
  @Input() photo_url: string = '/assets/imgs/placeholder.png';
  @Input() card_layout: 'horizontal' | 'vertical' = 'horizontal';

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
  }
}
