import { Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';

// Define the routes
const routes: Routes = [
  { path: '', redirectTo: '/feedback', pathMatch: 'full' },
  { path: 'feedback', component: FeedbackComponent },
];

// Export the routes
export { routes };
