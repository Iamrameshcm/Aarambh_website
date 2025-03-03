import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule} from '@angular/material/card'
import { AboutUsComponent } from '../about-us/about-us.component';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBlCnOggMygMKV6nWPGC77h0C42y2DUdyg",
  authDomain: "aarambh-new-web.firebaseapp.com",
  projectId: "aarambh-new-web",
  storageBucket: "aarambh-new-web.firebasestorage.app",
  messagingSenderId: "792438087097",
  appId: "1:792438087097:web:988ae31e908df57c42aa68",
  measurementId: "G-26QNW8DFEL"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatButton,MatIcon,FormsModule,CommonModule,MatExpansionModule,MatCardModule,AboutUsComponent],
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

  async onSubmit() {
    if (this.formData.name && this.formData.phone) {
      try {
        await addDoc(collection(db, 'contactForms'), this.formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        this.resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form. Please try again.');
      }
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
