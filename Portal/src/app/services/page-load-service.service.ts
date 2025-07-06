import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageLoadServiceService {
  isLoaded = false;

  constructor() {
    if (document.readyState === 'complete') {
      this.isLoaded = true;
    } else {
      window.addEventListener('load', () => {
        this.isLoaded = true;
      });
    }
  }

  isPageLoading(): boolean {
    return !this.isLoaded;
  }
}
