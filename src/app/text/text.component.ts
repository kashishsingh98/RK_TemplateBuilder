import { Component , EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  @Input()
  label!: string;
  @Input()
  value!: string;
  @Input()
  isValid!: boolean;
  @Input()
  validationMessage!: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  touched: boolean = false;

  constructor() { }

  onValueChange(value: string) {
    this.valueChange.emit(value);
    this.touched = true;
  }
}
