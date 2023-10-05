import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  isSmallScreen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    // Check the initial screen size
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 736;

    // Close the side nav if the screen is small
    if (this.isSmallScreen) {
      this.drawer.close();
    } else {
      this.drawer.open();
    }
  }
}
