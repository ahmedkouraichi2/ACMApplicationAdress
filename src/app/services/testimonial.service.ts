import { Injectable } from '@angular/core';
import { Testimonial } from '../models/Testimonials';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  getTestimonials(): Testimonial[] {
    return [
      { id: 1, stars: 5, content: 'Great service!', imageUrl: 'assets/img/logo.png', name: 'Alice', role: 'CEO' },
      { id: 2, stars: 4, content: 'Very satisfied.', imageUrl: 'url2', name: 'Bob', role: 'Manager' },
    
    ];
  }
}


