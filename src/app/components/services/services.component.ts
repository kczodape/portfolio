import { Component } from '@angular/core';

interface service {
  gif: string;
  head: string;
  para: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  
  services: service[] = [
    {
      gif: "assets/static.gif",
      head: "Static Website",
      para: "Get a stunning static website that showcases your brand. We focus on speed, responsiveness, and SEO to leave a lasting impression."
    },
    {
      gif: "assets/dynamic.gif",
      head: "Dynamic Website",
      para: "Elevate your online presence with dynamic websites that adapt to your changing needs. Manage content, engage users, and stay competitive."
    },
    {
      gif: "assets/projects.gif",
      head: "College WebApp Projects",
      para: "Enhance learning with custom College WebApp Projects. Tailor-made solutions streamline tasks, engage students, and provide a digital platform for academic excellence."
    },
    {
      gif: "assets/mobile_app.gif",
      head: "Mobile Application",
      para: "Go mobile with custom apps. We create user-friendly, feature-rich applications for seamless user experiences."
    },
    {
      gif: "assets/mean.gif",
      head: "MEAN Projects",
      para: "Unlock web development's full potential with MEAN Stack. Our expertise in MongoDB, Express.js, Angular, and Node.js delivers cutting-edge, high-performance web applications."
    },
  ]
}
