import { Component } from '@angular/core';

interface JobExperience {
  company: string;
  location: string;
  title: string;
  date: string;
  description: string;
  project: string;
  responsibilities: string[];
  technologies: string;
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  jobExperiences: JobExperience[] = [
    {
      company: 'Revature',
      location: 'Chennai',
      title: 'Software Associate',
      date: '12/2022 - 03/2023',
      description: 'I received comprehensive training at Revature in front-end technologies and tools, including HTML5, CSS3, SCSS, JavaScript, TypeScript, Angular, Git, Azure, GraphQL, Jasmine, and Karma, and a solid grasp of the Software Development Life Cycle (SDLC). During training, I completed a significant project, effectively managing project versions using Git.',
      project: 'RevNews - Web Application',
      responsibilities: [
        'Developed a web app for personalized news access, allowing registration, login, news customization, article searches, and pinning for later access.',
        'Landing component, GraphQL registration and login, user profile management, and Git version control.',
      ],
      technologies: "Angular 10, TypeScript, GraphQL, Agile-Scrum, Git",
    },
    {
      company: 'Sybica',
      location: 'Gujarat',
      title: 'Frontend Developer Intern',
      date: '02/2022 - 08/2022',
      description: 'SYBICA is a global company with expertise in digital transformation using next-generation technologies.',
      responsibilities: [
        'Collaborated with a team of developers to create a dynamic web application using React, resulting in a 30% improvement in website performance.',
        'Utilized HTML, CSS, SCSS, and JavaScript to build and style web pages, ensuring cross-browser compatibility and responsive design.',
        'Six-month project management on Git, including version control and code collaboration.',
        'Demonstrated strong problem-solving skills and effective communication while working on complex front-end features.',
        'Understand best practices and user experience for modern web development.',
      ],
      technologies: "Html5, 'scss, JavaScript, React.js",
      project: 'Website - Sybica',
    }
  ];

}
