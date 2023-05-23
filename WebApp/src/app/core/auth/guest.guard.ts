import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { IdentityService } from '@licirom/core/identity/identity.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  /**
   * GuestGuard constructor method.
   *
   * @param _identityService
   * @param _router
   */
  constructor(
    private readonly _identityService: IdentityService,
    private readonly _router: Router
  ) {
  }

  /** @inheritDoc */
  canActivate(): Observable<boolean> {
    return this._isAuthenticated();
  }

  /** @inheritDoc */
  canActivateChild(): Observable<boolean> {
    return this._isAuthenticated();
  }

  /**
   * Check if the guard should pass.
   *
   * @private
   */
  private _isAuthenticated(): Observable<boolean> {
    return this._identityService.currentIdentity$.pipe(
      map(identity => !identity),
      tap(async authenticated => authenticated || await this._router.navigate(['/'])),
    );
  }
}
