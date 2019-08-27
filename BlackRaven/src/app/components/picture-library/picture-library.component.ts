import { Component, OnInit } from '@angular/core';
import { Picture } from '../../shared/classes/picture';

@Component({
  selector: 'app-picture-library',
  templateUrl: './picture-library.component.html',
  styleUrls: ['./picture-library.component.css']
})
export class PictureLibraryComponent implements OnInit {

 images = new Array<Picture>();

  constructor() { }

  ngOnInit() {
    this.getImages();
  }

  private getImages() {
  // this.images.push();
  this.images.push({ description: 'Brick Wall', location: '../../../assets/images/DSC_2589.JPG'});
  }

}
