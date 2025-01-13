import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftnavComponent } from './leftnav/leftnav.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, LeftnavComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tasks';
}
