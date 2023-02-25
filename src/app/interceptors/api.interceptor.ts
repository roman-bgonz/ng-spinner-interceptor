import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private loaderService: NgxUiLoaderService) {}

  private activeRequest = 0;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // There is no active request
    if (this.activeRequest === 0) {
      // When the first request is thrown we launch the loader
      this.loaderService.start();
    }

    this.activeRequest++;

    return next.handle(request).pipe(finalize(() => this.stopLoader()));
  }

  /**
   * As request are async all of them will arrive and be validated
   */
  private stopLoader() {
    this.activeRequest--;
    if (this.activeRequest === 0) {
      this.loaderService.stop();
    }
  }
}
