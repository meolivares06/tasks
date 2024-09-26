import {Component, computed, inject, signal} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {AsyncPipe, JsonPipe} from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule, MatSelectionListChange} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Lesson1Component } from '../forms/lesson1.component';
import {Lesson} from '../models';
import {MainMenuServiceService} from './mainMenuService.service';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrl: './leftnav.component.scss',
  standalone: true,
  imports: [
    Lesson1Component,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    JsonPipe,
  ]
})
export class LeftnavComponent {
  private breakpointObserver = inject(BreakpointObserver);
  mainMenuService = inject(MainMenuServiceService);

  lessons = computed(() => this.mainMenuService.lessonsList$());

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  onSelect(index: number) {
    this.mainMenuService.select(index);
  }
}
