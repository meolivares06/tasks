import { EvaluationResponse } from '../models';

export default function evaluationAdapter(r: string): EvaluationResponse {
  const obj = JSON.parse(r);
  const evaluation = {
    evaluations: obj['evaluations'] || obj['evaluation'],
  };
  return evaluation;
}
