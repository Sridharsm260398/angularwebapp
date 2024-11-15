import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../spin.service';
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.spinnerService.show();
    return next.handle(request).pipe(
      finalize(() =>
        setTimeout(() => {
          this.spinnerService.hide();
        }, 100)
      )
    );
  }
}
