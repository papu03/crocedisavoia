import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  stats = [
    { value: '1895', label: 'Fondazione', icon: 'history_edu' },
    { value: '950m', label: 'Altitudine', icon: 'landscape' },
    { value: '24h', label: 'Tranquillità', icon: 'spa' },
  ];

  testimonial = {
    quote: 'Un luogo dove il tempo sembra essersi fermato. La bellezza della foresta, il profumo della cucina tradizionale e l\'accoglienza calorosa ci hanno fatto sentire davvero a casa.',
    author: 'Famiglia Marchetti',
    origin: 'Firenze'
  };
}
