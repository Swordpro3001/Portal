import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent implements OnInit {
  isLoading = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.loading$.subscribe(loading => {
      this.isLoading = loading;
    });
  }
}
