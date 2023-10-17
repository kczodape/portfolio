import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  progressItems: { label: string; value: number }[] = [
    { label: 'HTML5', value: 100 },
    { label: 'CSS3', value: 90 },
    { label: 'SCSS/SASS', value: 70 },
    { label: 'JavaScript', value: 85 },
    { label: 'MongoDB', value: 65 },
    { label: 'Express', value: 70 },
    { label: 'Angular', value: 85 },
    { label: 'Node.Js', value: 60 },
    { label: 'React native', value: 50 },
    { label: 'TypeScript', value: 70 },
  ];

  
  group1: { label: string; value: number }[] = this.progressItems.slice(0, 4);
  group2: { label: string; value: number }[] = this.progressItems.slice(4, 8);
  group3: { label: string; value: number }[] = this.progressItems.slice(8);

}
