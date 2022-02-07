import { Component, ElementRef, ViewChild } from '@angular/core';
import { ExgModalService } from 'exc-controls-v2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'explore-user-pictures';
  @ViewChild('outputImg')
  outputImg!: ElementRef<HTMLImageElement>;
  constructor(private modalService: ExgModalService) {
  }
  showModal(): void {
    this.modalService.show('YassiwrapperComponent', {}, true).subscribe(data => {
      this.outputImg.nativeElement.src = data?.img;
    });
  }
}
