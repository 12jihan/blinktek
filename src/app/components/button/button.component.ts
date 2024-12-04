import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bt-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  @Input() action: (() => void) | undefined = undefined;
  @Input() text: string = 'Button';
  @Input() type: string = 'primary';
  @Input() color: "white" | "black" = "black";

  ngOnInit(): void {
    console.log("color attr:", this.color);
  }

  invoke_action(): void {
    if (!this.action)
      console.log("Please update button with an action");
    if (this.action)
      this.action();
  }

}
