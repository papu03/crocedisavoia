import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contatti.component.html'
})
export class ContattiComponent {
  form: FormGroup;
  submitted = signal(false);
  success = signal(false);

  contactInfo = [
    {
      icon: 'location_on',
      title: 'Indirizzo',
      lines: ['Via Croce di Savoia, 5', '50066 Vallombrosa (FI)', 'Toscana, Italia']
    },
    {
      icon: 'call',
      title: 'Telefono',
      lines: ['+39 055 862 9300'],
      href: 'tel:+390558629300'
    },
    {
      icon: 'mail',
      title: 'Email',
      lines: ['info@crocedisavoia.it'],
      href: 'mailto:info@crocedisavoia.it'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      messaggio: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    this.submitted.set(true);
    if (this.form.valid) {
      // In production, send to backend/email service
      console.log('Form submitted:', this.form.value);
      this.success.set(true);
      this.form.reset();
      this.submitted.set(false);
    }
  }

  hasError(field: string, error: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.hasError(error) && (control.dirty || control.touched || this.submitted()));
  }
}
