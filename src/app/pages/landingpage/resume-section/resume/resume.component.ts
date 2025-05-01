import { Component, Input } from '@angular/core';
import { NumberUtils } from '../../../../utils/number.utils';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

  numberUtils: NumberUtils = new NumberUtils();

}
