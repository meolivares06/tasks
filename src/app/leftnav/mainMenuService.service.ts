import {computed, Injectable, signal} from '@angular/core';
import {SelectionChange, SelectionModel} from '@angular/cdk/collections';
import {Lesson} from '../models';

@Injectable({
  providedIn: 'root'
})
export class MainMenuServiceService {
  options = new SelectionModel(
    false,
    [0]
  );

  lessonsList$ = signal<Lesson[]>([
    {
      title: '1. O Batismo'
    },
    {
      title: '2. A Ceia do Senhor'
    },
    {
      title: '3. A igreja'
    },
    {
      title: '4. Conhecendo Nossa História'
    },
    {
      title: '5. O Alicerce de Nossa Fé'
    },
    {
      title: '6. Abandonando as Práticas da Velha Vida'
    },
    {
      title: '7. Princípios e Hábitos a Serem Cultivados'
    },
    {
      title: '8. A Vida Devocional do Cristão'
    },
    {
      title: '9. A Bênção da Contribuição'
    },
    {
      title: '10. Crescendo Sempre'
    }
  ]);
  activeLesson = signal(this.lessonsList$()[0]);

  constructor() {}

  select(option: number): void {
    this.options.select(option);
    this.activeLesson.set(this.lessonsList$()[option]);
  }
}
