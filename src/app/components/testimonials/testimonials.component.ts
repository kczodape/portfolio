import { Component, OnInit, OnDestroy } from '@angular/core';
interface testimonial {
  src: string;
  name: string;
  data: string;
}
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials: testimonial[] = [
    {
      src: "assets/rupali.jpg",
      name: "Rupali",
      data: "In the time I've known him, I've come to admire his extraordinary commitment to his craft. He consistently exceeds expectations, going the extra mile to ensure the job is done. His unwavering reliability is yet another remarkable attribute that truly shines. Krunal, you are a shining example of dedication and excellence."
    },
    {
      src: "assets/gayatri_mod.jpg",
      name: "Gayatri",
      data: "I want to express my appreciation for your exceptional qualities. Over the years, I've had the pleasure of getting to know you, and what stands out most is your unwavering dedication to your work. You consistently go above and beyond, doing whatever it takes to ensure tasks are completed. Your trustworthiness is another admirable trait that makes you stand out. Thank you for being such an outstanding individual."
    },
    {
      src: "assets/shiva_mod.jpg",
      name: "Siva",
      data: "Bro, you are very talented , hardworker, passionate about your work 💯 and you couldn't sleep without complete your work. As per personality you are caring and responsible person."
    },
    {
      src: "assets/aakash_mod.png",
      name: "Aakash",
      data: "Krunal is one of the most dedicated, hardworking, and innovative people I've had the pleasure of working with. He is also compassionate and kind, and he never misses the opportunity to help others. Once, while we were working on the project, he developed the hole UI, and his knowledge of the front end was incredible. He was really serious about his work, even working late into the evening and sacrificing an entire weekend. Krunal is the type of person you can count on to keep a cool head in a stressful situation, and his positive attitude is contagious."
    }
  ]
}
