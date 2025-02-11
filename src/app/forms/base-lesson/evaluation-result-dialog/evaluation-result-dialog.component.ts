import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import confetti from 'canvas-confetti';
import { EvaluationResponse } from '../../../models';

@Component({
  selector: 'app-evaluation-result-dialog',
  imports: [],
  templateUrl: './evaluation-result-dialog.component.html',
  styleUrl: './evaluation-result-dialog.component.scss',
})
export class EvaluationResultDialogComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<EvaluationResultDialogComponent>);
  readonly data = inject<{ userAnswer: EvaluationResponse }>(MAT_DIALOG_DATA);

  formatted = '';

  ngOnInit(): void {
    let perfectResponse = true;
    const { evaluations } = this.data.userAnswer;
    evaluations.forEach((e) => {
      if (e.evaluation !== 10) {
        perfectResponse = false;
      }
      this.formatted += `<p>Question ${e.questionNumber}: ${e.evaluation} pontos</p> \n <p>Detalhes: ${e.details}\n</p>`;
    });

    this.verifyConfeti(perfectResponse);
  }

  verifyConfeti(perfectResponse: boolean): void {
    if (perfectResponse)
      confetti({
        particleCount: 180,
        startVelocity: 30,
        spread: 380,
        origin: {
          x: Math.random(),
          // since they fall down, start a bit higher than random
          y: Math.random() - 0.2,
        },
        zIndex: 1010,
      });
  }
}
