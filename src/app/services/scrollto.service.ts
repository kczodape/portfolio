import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrolltoService {

  constructor(private router: Router) { }

  scrollToSection(section: string) {
    this.router.navigate([], {
      relativeTo: this.router.routerState.root,
      queryParams: { section },
      queryParamsHandling: 'merge',
    });
  }
}
