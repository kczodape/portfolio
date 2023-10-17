import { Component } from '@angular/core';

interface Video {
  videoSource: string;
  videoLink: string;
  sourceCodeLink: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})

export class PortfolioComponent {
  

  videos: Video[] = [
    {
      videoSource: 'assets/analog_clock_added.mp4',
      videoLink: 'https://drive.google.com/file/d/1OpY9QeJcQmHR15wB3gROeHjTi6QSTTtZ/view?usp=sharing',
      sourceCodeLink: 'https://github.com/kczodape/analog_clock',
    },
    {
      videoSource: 'assets/Anews_added.mp4',
      videoLink: 'https://drive.google.com/file/d/1yNrP6OxjjUUastU8IJZ5W1oXjb9qXmvD/view?usp=sharing',
      sourceCodeLink: 'https://github.com/kczodape/RevNews-P1',
    },
    {
      videoSource: 'assets/restaurent_edited.mp4',
      videoLink: 'https://drive.google.com/file/d/1k_JhZ5yrAzjUcqDWd49vWMWkH4pC_EbL/view?usp=sharing',
      sourceCodeLink: 'https://github.com/kczodape/restaurent',
    },
    {
      videoSource: 'assets/Rnews_edited.mp4',
      videoLink: 'https://drive.google.com/file/d/1k_JhZ5yrAzjUcqDWd49vWMWkH4pC_EbL/view?usp=sharing',
      sourceCodeLink: 'https://github.com/kczodape/react_news',
    },
  ];

  playVideo(video: HTMLVideoElement) {
    video.play();
    video.removeAttribute('controls');
  }

  pauseVideo(video: HTMLVideoElement) {
    video.pause();
    video.setAttribute('controls', 'true');
  }
}
