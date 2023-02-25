import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-spinner-interceptor';

  constructor(private _apiService: ApiService) {}

  clickRequest(): void {
    this._apiService.getDitto().subscribe();
    this._apiService.getDelayApi().subscribe();
    // this._apiService.getDitto().subscribe();
  }
}
