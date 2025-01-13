import {Component, computed, inject, OnInit, signal, ViewChild, viewChild, ViewContainerRef} from '@angular/core';
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
import {LessonsService} from './lessons.service';
import {LessonFactoryService} from '../services/lesson-factory.service';

@Component({
    selector: 'app-leftnav',
    templateUrl: './leftnav.component.html',
    styleUrl: './leftnav.component.scss',
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
export class LeftnavComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  currentLessonVCR = viewChild('currentLesson', {read: ViewContainerRef});

  mainMenuService = inject(LessonsService);
  lessonFactoryService = inject(LessonFactoryService);

  lessons = computed(() => this.mainMenuService.lessonsList$());

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.onSelect(0);
  }

  onSelect(index: number) {
    this.mainMenuService.select(index);
    this.renderLessonForm();
  }

  renderLessonForm(): void {
    this.currentLessonVCR()?.clear();
    this.currentLessonVCR()?.createComponent(this.lessonFactoryService.getCurrentLessonInstance(this.mainMenuService.activeLesson().id));
  }
}
