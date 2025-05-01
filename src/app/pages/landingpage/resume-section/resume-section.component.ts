import { Component, Input } from '@angular/core';
import { CardComponent } from './card/card.component';
import { BannerComponent } from './banner/banner.component';
import { ResumeComponent } from './resume/resume.component';

@Component({
  selector: 'app-resume-section',
  standalone: true,
  imports: [
    BannerComponent,
    CardComponent,
    ResumeComponent
  ],
  templateUrl: './resume-section.component.html',
  styleUrl: './resume-section.component.scss'
})
export class ResumeSectionComponent {


}
