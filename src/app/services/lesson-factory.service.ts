import {Injectable} from '@angular/core';
import {ComponentType} from '@angular/cdk/portal';
import {Lesson1Component} from '../forms/lesson1.component';
import {Lesson2Component} from '../forms/lesson2.component';
import {Lesson3Component} from '../forms/lesson3.component';
import {Lesson4Component} from '../forms/lesson4.component';

@Injectable({
  providedIn: 'root'
})
export class LessonFactoryService {
  mapOfComponent: Map<number, ComponentType<any>> = new Map();

  constructor() {
    this.mapOfComponent.set(1, Lesson1Component);
    this.mapOfComponent.set(2, Lesson2Component);
    this.mapOfComponent.set(3, Lesson3Component);
    this.mapOfComponent.set(4, Lesson4Component);
  }
  getCurrentLessonInstance(lessonName: number): ComponentType<any> {
    return this.mapOfComponent.get(lessonName) as ComponentType<any>;
  }
}
