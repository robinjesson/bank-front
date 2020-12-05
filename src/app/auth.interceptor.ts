import { AuthenticationService } from './shared/services/authentication.service';
import { HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Class that manages the http requests 
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthenticationService) { }

  /**
   * Function that takes an http request, modifies its header and returns it as an Observable 
   * @param req http request
   * @param next structure to contain the modified http request
   */
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this._authService.getToken();
    if (token != null) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this._authService.getToken()}`
        }
      });
    }
    return next.handle(authReq);
  }
}