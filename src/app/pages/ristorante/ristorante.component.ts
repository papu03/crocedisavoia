import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Piatto {
  nome: string;
  descrizione: string;
  imageUrl: string;
  colSpan?: string;
}

@Component({
  selector: 'app-ristorante',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ristorante.component.html'
})
export class RistoranteComponent {
  pietanzeFeatured: Piatto[] = [
    {
      nome: 'Agnolotti al Tartufo Nero',
      descrizione: 'Pasta fresca ripiena di ricotta e spinaci, condita con tartufo nero dei boschi locali e burro di malga. La nostra specialità dal 1895.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiJd0QnB_V3LjrS9GFDAnmD6kGnBjrGYIuMqDSsI5EwGELgSf9yijhN45JKlJH_GJoYjmCQ3Cc8Y1zDf2PvJVJ2sCqbH1Iwe9LVDpjAXAKvBzMmT7M8q35mKXDsW2rPfXLHLVl3zNRixiGWZCTuMr7v1J07RMthipRsWjRYFfVyFYCkIqm3EDIhGHKfzKEJBFfKI0e3Q9p5oJ0ks5TsF7cbGYBVuWfLEOkCRVdR0w0nkDYjxfpvW6BNfBnlqfXv8xbBJkCYkTMkWJoTJJCibJzl2oLqXE_nSBbx8dPvR4xXJX8nT3GlT50JE8M5RR3LT9Tp5dTMXp3i7bw9T6bTEbKjU4_EvgFrm9p5G5Gm2w5cxAVlCcm3WvT0fOdKSA6Bq7vlWJRPDp7Rl9xCQSsEtMpOzNGrJ_dFgXnMvjvmKCJyBZc3Lq4QpFqcYnhLJqmA',
      colSpan: 'md:col-span-2'
    },
    {
      nome: 'Cantina dei Vini',
      descrizione: 'Oltre 200 etichette selezionate da tutta la Toscana.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJpKhCXZ5Y5xY1fR3Q0TUZfvzJ4wd0v8GN8-8mNxWJpVKNMHQxU6i_bTcRlE7BYxGfCz0eXxO7bEiDPz1mWKMg3BoJW-vlHGiPlkPmkJbUEJCFflrKM0nEPSR0pXBGHmxf1MXHKV7jMVL-_PFKqtjNz-eBbdKkdPqe_gO8sYVBHmgbKvz1LJqZQ3TtqbfvYKzSKkdO-Ynwh_g0kKh2LLkXBNSM9O1g8c0FIU7RJn8R1B6qf4p8GaYWxk0R4c5NqHDWD7Kz8FHqlpv4j3R3xfn5H0OzSo7qnxYJnGiXsYHgxQb_kAnqVS3kTXaOAj1T4YYS7aJ8RHqgXfFIjH4_o6QBrq2bfLQWp5s',
      colSpan: 'md:col-span-1'
    }
  ];

  pietanzeSecondarie: Piatto[] = [
    {
      nome: 'Brasato al Chianti',
      descrizione: 'Guancia di manzo cotta a fuoco lento per 8 ore nel Chianti Classico.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK5e0FlfNRj8RoUXq0h_3mT8FBrAFkZGNyYqFJKNE5PZBcDxC6BFbTn6Vc88-K7G2wJJf2YZp3nOBFI9hbwKQtNnVLkIlrN8o8nKcD9qvFVbbQQrYgNR5k0N8M4I7UPX-qlqSGe3VLxBbJLSbPQYXVNWqXiDiWwGkgPQKXoHjh3yR5BIQvWfqr7WcFkT_UMqdFcqlm8oYpGf3kCxlS0W4FgVj7GE6G_x85xEH-l7BQVW4vCqgZ-eH-mXqjcCKnL3_v7KNRfZLOl7LUGaGY8OP8VhRVuDlKfNAbJwJOE7SYfORkG2Pf3LFsq6k_SKmPKVH3-dBt8GZt6-zpmjf4XRQIq3VNh'
    },
    {
      nome: 'Tiramisù della Casa',
      descrizione: 'Ricetta originale tramandata da generazioni.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiJd0QnB_V3LjrS9GFDAnmD6kGnBjrGYIuMqDSsI5EwGELgSf9yijhN45JKlJH_GJoYjmCQ3Cc8Y1zDf2PvJVJ2sCqbH1Iwe9LVDpjAXAKvBzMmT7M8q35mKXDsW2rPfXLHLVl3zNRixiGWZCTuMr7v1J07RMthipRsWjRYFfVyFYCkIqm3EDIhGHKfzKEJBFfKI0e3Q9p5oJ0ks5TsF7cbGYBVuWfLEOkCRVdR0w0nkDYjxfpvW6BNfBnlqfXv8xbBJkCYkTMkWJoTJJCibJzl2oLqXE_nSBbx8dPvR4xXJX8nT3GlT50JE8M5RR3LT9Tp5dTMXp3i7bw9T6bTEbKjU4_EvgFrm9p5G5Gm2w5cxAVlCcm3WvT0fOdKSA6Bq7vlWJRPDp7Rl9xCQSsEtMpOzNGrJ_dFgXnMvjvmKCJyBZc3Lq4QpFqcYnhLJqmA'
    },
    {
      nome: 'Piatto di Formaggi',
      descrizione: 'Selezione di pecorini e formaggi stagionati dell\'Appennino.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJpKhCXZ5Y5xY1fR3Q0TUZfvzJ4wd0v8GN8-8mNxWJpVKNMHQxU6i_bTcRlE7BYxGfCz0eXxO7bEiDPz1mWKMg3BoJW-vlHGiPlkPmkJbUEJCFflrKM0nEPSR0pXBGHmxf1MXHKV7jMVL-_PFKqtjNz-eBbdKkdPqe_gO8sYVBHmgbKvz1LJqZQ3TtqbfvYKzSKkdO-Ynwh_g0kKh2LLkXBNSM9O1g8c0FIU7RJn8R1B6qf4p8GaYWxk0R4c5NqHDWD7Kz8FHqlpv4j3R3xfn5H0OzSo7qnxYJnGiXsYHgxQb_kAnqVS3kTXaOAj1T4YYS7aJ8RHqgXfFIjH4_o6QBrq2bfLQWp5s'
    }
  ];
}
