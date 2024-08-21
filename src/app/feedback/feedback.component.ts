import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true
})
export class FeedbackComponent implements OnInit {
  feedbackForm!: FormGroup;
  isSubmitted = false; // Flag to track form submission

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      rating: ['', [Validators.required]],
      comments: ['']
    });
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      console.log('Feedback Submitted:', this.feedbackForm.value);
      this.isSubmitted = true; // Set the flag to true after successful submission

      // Reset the form if you want the user to provide new feedback
      this.feedbackForm.reset();
    }
  }
}
