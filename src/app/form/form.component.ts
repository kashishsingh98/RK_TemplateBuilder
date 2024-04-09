import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  username: string = '';
  
  constructor() { }

  isUsernameValid(): boolean {
    // Add your validation logic for username here
    return this.username.length > 0; // Example validation
  }

  isFormValid(): boolean {
    return this.isUsernameValid(); // Add more validation logic for other fields if needed
  }
}
