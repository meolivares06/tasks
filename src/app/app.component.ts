import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { LoadingService } from './core/services/loading-service.service';

@Component({
  selector: 'app-root',
  imports: [LeftnavComponent, MatProgressSpinner],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  loadingService = inject(LoadingService);
  title = 'tasks';
}
