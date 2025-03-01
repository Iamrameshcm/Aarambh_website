import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule} from '@angular/material/card'



@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatButton,MatIcon,FormsModule,CommonModule,MatExpansionModule,MatCardModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})


export class HeroComponent {

  formData = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.formData.name && this.formData.phone) {
      console.log('Form submitted:', this.formData);
      alert('Thank you for contacting us! We will get back to you soon.');
      this.resetForm();
    } else {
      alert('Please fill out the required fields.');
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      phone: '',
      email: '',
      message: ''
    };
  }

  onContactClick() {
    console.log('Contact Us button clicked!');
    const element = document.getElementById('contact-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  }

  openCalendly() {
    window.open('https://calendly.com/ondc-aarambh/30min', '_blank');
  }
  
}
