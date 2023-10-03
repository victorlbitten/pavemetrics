import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit, OnInit {
  @ViewChild('carousel') carousel: ElementRef;

  @Input() imageWidth: number;
  _fallbackImageWidthInPx = 400;
  @Input() images: string[] = [];

  currentIndex = 0;
  carouselTranslationInPx = 0;
  imageWidthInPx: number;

  constructor (
    private renderer: Renderer2
  ) {}


  ngOnInit(): void {
    this.imageWidthInPx = this.imageWidth || this._fallbackImageWidthInPx;
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.carousel.nativeElement, 'width', `${this.imageWidthInPx}px`);
    this.renderer.setStyle(this.carousel.nativeElement, 'height', `${this.imageWidthInPx/1.666}px`);

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

  goToImageByIndex (index: number) {

  }

  translateContainer() {
    this.carouselTranslationInPx = - (this.currentIndex * this.imageWidthInPx);
  }
}
