import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { SessionService } from '../services/session.service';

export const redirectIfLoggedGuard: CanActivateFn = () => {
  const sessionService = inject(SessionService);
  const router = inject(Router);
  if (sessionService.isLoggedIn()) {
    router.navigate(['/tasks']);
  }
  return true;
};
