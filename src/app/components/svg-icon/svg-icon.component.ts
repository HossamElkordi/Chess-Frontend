import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.css']
})
export class SvgIconComponent {

  @HostBinding('style.-webkit-mask-image')
  file!: string;

  @Input() set path(filePath: string) {
    this.file = filePath;
  }
}
