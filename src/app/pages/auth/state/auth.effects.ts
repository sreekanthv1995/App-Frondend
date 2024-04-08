import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { autoLogin, loginStart, loginSuccess, logout } from './auth.action';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';
import { MasterService } from '../../../core/services/master.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthState } from './auth.state';
import { Store } from '@ngrx/store';
import { AuthService } from '../service/auth-service.service';
import { setErrorMessage } from '../../../shared/store/shared.action';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private masterService: MasterService,
    private authService: AuthService,
    private router: Router,
    private tost: ToastrService,
    private store: Store<AuthState>
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.masterService.login(action.email, action.password).pipe(
          map((data) => {
            const role = data.user.role;
            this.authService.saveUserRoleInLocalStorage(role)
            if (data.user.role === 'USER') {
              this.tost.success(data.user.userName, 'loggedIn');
              this.router.navigateByUrl('user/home');
            } 
            else {
              this.router.navigateByUrl('admin');
            }
            const user = this.authService.formatUser(data);
            this.authService.saveUserInLocalStorage(user);
            return loginSuccess({ user });
          }),
          catchError(()=>{
            return of(setErrorMessage({message: "Something went wrong! Incorrect Email or Password"}))
          })
        );
      })
    );
  });

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(autoLogin),
      mergeMap((action) => {
        const user = this.authService.getUserFromLocalStorage();
        return of(loginSuccess({ user }));
      })
    );
  });

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logout),
        map((action) => {
          this.authService.logout();
          this.router.navigateByUrl('/auth');
        })
      );
    },
    { dispatch: false }
  );
}
