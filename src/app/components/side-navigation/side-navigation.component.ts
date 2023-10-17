import { Component, ViewChild, HostListener } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }

  isActiveLink(link: string) {
    return this.router.url === link;
  }

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
    this.isSmallScreen = window.innerWidth <= 992;

    // Close the side nav if the screen is small
    if (this.isSmallScreen) {
      this.drawer.close();
    } else {
      this.drawer.open();
    }
  }

  toHome() {
    document.getElementById("home")?.scrollIntoView({ behavior: 'smooth' });
  }
  toAbout() {
    document.getElementById("about")?.scrollIntoView({ behavior: 'smooth' });
  }
  toResume() {
    document.getElementById("resume")?.scrollIntoView({ behavior: 'smooth' });
  }
  toPortfolio() {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: 'smooth' });
  }
  toServices() {
    document.getElementById("services")?.scrollIntoView({ behavior: 'smooth' });
  }
  toTestimonials() {
    document.getElementById("testimonials")?.scrollIntoView({ behavior: 'smooth' });
  }
  toContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' });
  }
}
