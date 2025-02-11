import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationResultDialogComponent } from './evaluation-result-dialog.component';

describe('EvaluationResultDialogComponent', () => {
  let component: EvaluationResultDialogComponent;
  let fixture: ComponentFixture<EvaluationResultDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationResultDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
