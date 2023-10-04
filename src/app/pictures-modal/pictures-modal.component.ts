import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pictures-modal',
  templateUrl: './pictures-modal.component.html',
  styleUrls: ['./pictures-modal.component.css']
})
export class PicturesModalComponent implements OnInit{

  constructor (
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  images = this.data.images;
  currentIndex = this.data.currentIndex;

  imageWidthInPx = 800;
  containerXTranslationInPx = - (this.currentIndex * this.imageWidthInPx);
  

  ngOnInit(): void {
  }

  nextImage() {
    this.currentIndex = (this.currentIndex < this.images.length - 1)
      ? this.currentIndex + 1
      : 0;
    this.translateContainer();
  }

  previousImage() {
    this.currentIndex = (this.currentIndex > 0)
      ? this.currentIndex - 1
      : this.images.length - 1;
    this.translateContainer();
  }

  translateContainer () {
    console.log(this.containerXTranslationInPx);
    this.containerXTranslationInPx = - (this.currentIndex * this.imageWidthInPx);
  }

}
