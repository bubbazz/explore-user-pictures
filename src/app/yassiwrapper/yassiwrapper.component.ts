import { Component, OnInit } from '@angular/core';
import { ExcTranslation, ExcCoreModule } from 'exc-core-v2';
import { ExgModalService } from 'exc-controls-v2';
import { ExcRestService } from 'exc-rest-v2';
@Component({
  selector: 'app-yassiwrapper',
  templateUrl: './yassiwrapper.component.html',
  styles: [

  ]
})
export class YassiwrapperComponent extends ExcTranslation implements OnInit {
  profileImg!: HTMLImageElement;
  loaded: boolean = false;
  excRestServiceCore: ExcRestService = ExcCoreModule.Services().ExcRest;
  constructor(public modalService: ExgModalService) {
    super();
  }

  ngOnInit(): void {
    this.profileImg = new Image();
  }

  onFileChange(event: any): void {
    const file: File = event.target!.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.profileImg.src = fileReader.result as string;
      this.loaded = true;
    }
    fileReader.readAsDataURL(file);
  }
  uploadFile(): void {
    this.excRestServiceCore
  }
  closeModal() {
    console.log("test");
    this.modalService.close();
  }
}
