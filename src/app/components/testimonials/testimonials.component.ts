import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/models/Testimonials';
import { TestimonialService } from 'src/app/services/testimonial.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit(): void {
    this.testimonials = this.testimonialService.getTestimonials();
  }
}
