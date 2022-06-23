import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { FileSharer } from '@byteowls/capacitor-filesharer';

@Component({
  selector: 'app-filesharer',
  templateUrl: './filesharer.page.html',
  styleUrls: ['./filesharer.page.scss'],
})
export class FilesharerPage implements OnInit {

  @ViewChild('imageElement') imageElement: ElementRef<HTMLImageElement>;

  constructor() { }

  async ngOnInit() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    const imageUrl = image.webPath;

    // Can be set to the src of an image now
    this.imageElement.nativeElement.src = imageUrl;
  }

  public async shareImage() {

    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(this.imageElement.nativeElement.src);
    const blob = await response.blob();

    const reader = new FileReader();
    reader.readAsDataURL(blob);

    reader.onloadend = () => {
      const base64Data = reader.result as string;
      const realData = base64Data.split(',')[1];

      FileSharer.share({
        filename: `foto_de_agora.png`,
        base64Data: realData,
        contentType: 'image/png',
      })
        .then(() => { })
        .catch(error => {
          console.error(error);
        });
    };

    reader.onerror = () => {
      console.error('Problema na leitura');
    };
  }

}
