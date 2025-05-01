import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ResumeSectionComponent } from './resume-section/resume-section.component';
import { CardsSectionComponent } from "./cards-section/cards-section.component";
import { ObjectivesService } from '../../services/objectives.service';


@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    ResumeSectionComponent,
    CardsSectionComponent,
    FooterComponent
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {



 }


