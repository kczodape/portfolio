import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name: string = 'Krunal Zodape';
  roleText: string = '';
  textVariations: string[] = [
    'Hello everyone',
    'Welcome to my website!',
    'Explore my work below.',
    'Discover what I create.',
    'Join my digital journey.',
  ];
  textIndex: number = 0;
  cursorVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.updateText();
  }

  updateText(): void {
    const targetText = this.textVariations[this.textIndex];
    const currentIndex = this.roleText.length;

    if (currentIndex < targetText.length) {
      this.roleText += targetText.charAt(currentIndex);
    } else if (this.textIndex < this.textVariations.length - 1) {
      this.textIndex++;
      this.roleText = '';
    } else {
      this.textIndex = 0;
      this.roleText = '';
    }

    setTimeout(() => this.updateText(), 105);
  }
}
