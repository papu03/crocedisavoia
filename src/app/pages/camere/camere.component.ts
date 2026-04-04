import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Camera {
  id: string;
  nome: string;
  descrizione: string;
  dettagli: string;
  icon: string;
  caratteristiche: string[];
  imageUrl: string;
  prezzo: string;
}

@Component({
  selector: 'app-camere',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './camere.component.html'
})
export class CamereComponent {
  camere: Camera[] = [
    {
      id: 'classic',
      nome: 'Camera Classica',
      descrizione: 'Elegante e accogliente, con arredi in stile Liberty e vista sul giardino.',
      dettagli: 'Una camera che unisce il comfort moderno con l\'autenticità degli arredi d\'epoca. Finestre ad arco con tende in seta e pavimenti in cotto toscano.',
      icon: 'bed',
      caratteristiche: ['Vista giardino', 'Bagno privato', 'Wi-Fi incluso', 'Colazione inclusa'],
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiJd0QnB_V3LjrS9GFDAnmD6kGnBjrGYIuMqDSsI5EwGELgSf9yijhN45JKlJH_GJoYjmCQ3Cc8Y1zDf2PvJVJ2sCqbH1Iwe9LVDpjAXAKvBzMmT7M8q35mKXDsW2rPfXLHLVl3zNRixiGWZCTuMr7v1J07RMthipRsWjRYFfVyFYCkIqm3EDIhGHKfzKEJBFfKI0e3Q9p5oJ0ks5TsF7cbGYBVuWfLEOkCRVdR0w0nkDYjxfpvW6BNfBnlqfXv8xbBJkCYkTMkWJoTJJCibJzl2oLqXE_nSBbx8dPvR4xXJX8nT3GlT50JE8M5RR3LT9Tp5dTMXp3i7bw9T6bTEbKjU4_EvgFrm9p5G5Gm2w5cxAVlCcm3WvT0fOdKSA6Bq7vlWJRPDp7Rl9xCQSsEtMpOzNGrJ_dFgXnMvjvmKCJyBZc3Lq4QpFqcYnhLJqmA',
      prezzo: 'da €120/notte'
    },
    {
      id: 'superior',
      nome: 'Camera Superior',
      descrizione: 'Spaziosa e luminosa, con balcone privato e vista sulla foresta di abeti.',
      dettagli: 'Ampia camera con balcone privato affacciato sulla foresta. Arredi Liberty originali restaurati, parquet antico e un bagno in marmo con vasca a piedi.',
      icon: 'king_bed',
      caratteristiche: ['Balcone privato', 'Vista foresta', 'Vasca in marmo', 'Minibar incluso'],
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJpKhCXZ5Y5xY1fR3Q0TUZfvzJ4wd0v8GN8-8mNxWJpVKNMHQxU6i_bTcRlE7BYxGfCz0eXxO7bEiDPz1mWKMg3BoJW-vlHGiPlkPmkJbUEJCFflrKM0nEPSR0pXBGHmxf1MXHKV7jMVL-_PFKqtjNz-eBbdKkdPqe_gO8sYVBHmgbKvz1LJqZQ3TtqbfvYKzSKkdO-Ynwh_g0kKh2LLkXBNSM9O1g8c0FIU7RJn8R1B6qf4p8GaYWxk0R4c5NqHDWD7Kz8FHqlpv4j3R3xfn5H0OzSo7qnxYJnGiXsYHgxQb_kAnqVS3kTXaOAj1T4YYS7aJ8RHqgXfFIjH4_o6QBrq2bfLQWp5s',
      prezzo: 'da €160/notte'
    },
    {
      id: 'suite',
      nome: 'Suite Liberty',
      descrizione: 'L\'apice del lusso storico. Un appartamento con salottino e vista panoramica.',
      dettagli: 'La nostra suite d\'onore, composta da camera da letto, salottino privato e bagno in marmo con vasca idromassaggio. Arredi originali del 1895, pregiati e restaurati con cura.',
      icon: 'weekend',
      caratteristiche: ['Salottino privato', 'Vista panoramica', 'Idromassaggio', 'Servizio in camera 24h'],
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK5e0FlfNRj8RoUXq0h_3mT8FBrAFkZGNyYqFJKNE5PZBcDxC6BFbTn6Vc88-K7G2wJJf2YZp3nOBFI9hbwKQtNnVLkIlrN8o8nKcD9qvFVbbQQrYgNR5k0N8M4I7UPX-qlqSGe3VLxBbJLSbPQYXVNWqXiDiWwGkgPQKXoHjh3yR5BIQvWfqr7WcFkT_UMqdFcqlm8oYpGf3kCxlS0W4FgVj7GE6G_x85xEH-l7BQVW4vCqgZ-eH-mXqjcCKnL3_v7KNRfZLOl7LUGaGY8OP8VhRVuDlKfNAbJwJOE7SYfORkG2Pf3LFsq6k_SKmPKVH3-dBt8GZt6-zpmjf4XRQIq3VNh',
      prezzo: 'da €240/notte'
    }
  ];

  amenities = [
    { icon: 'wifi', label: 'Wi-Fi gratuito' },
    { icon: 'local_parking', label: 'Parcheggio' },
    { icon: 'restaurant', label: 'Ristorante' },
    { icon: 'spa', label: 'Area relax' },
    { icon: 'hiking', label: 'Sentieri natura' },
    { icon: 'pets', label: 'Animali benvenuti' },
  ];
}
