import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PicturesModalComponent } from '../pictures-modal/pictures-modal.component';

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
  modalInnerContainerTranslation = 0;
  imageWidthInPx: number;
  showModal = false;
  transitionIntervalRef: any;

  constructor(
    private renderer: Renderer2,
    public dialog: MatDialog
  ) { }



  ngOnInit(): void {
    this.imageWidthInPx = this.imageWidth || this._fallbackImageWidthInPx;
    this.setAutomaticTransitionOnCarousel();
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.carousel.nativeElement, 'width', `${this.imageWidthInPx}px`);
    this.renderer.setStyle(this.carousel.nativeElement, 'height', `${this.imageWidthInPx / 1.666}px`);

  }


  nextImage() {
    this.currentIndex = (this.currentIndex < this.images.length - 1)
      ? this.currentIndex + 1
      : 0;
    this.translateContainer();
    if (this.showModal) {
      this.translateModalInnerContainer();
    }
  }

  previousImage() {
    this.currentIndex = (this.currentIndex > 0)
      ? this.currentIndex - 1
      : this.images.length - 1;
    this.translateContainer();
    if (this.showModal) {
      this.translateModalInnerContainer();
    }
  }

  goToImageByIndex(index: number) {

  }

  translateContainer() {
    this.carouselTranslationInPx = - (this.currentIndex * this.imageWidthInPx);
  }

  translateModalInnerContainer() {
    this.modalInnerContainerTranslation = -(800 * this.currentIndex);
  }

  openModal() {
    console.log(this.images);
    clearInterval(this.transitionIntervalRef);
    this.modalInnerContainerTranslation = -(800 * this.currentIndex);
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.setAutomaticTransitionOnCarousel();
  }

  setAutomaticTransitionOnCarousel() {
    this.transitionIntervalRef = setInterval(() => {
      this.nextImage();
    }, 3000);
  }













  openDialog() {
    clearInterval(this.transitionIntervalRef);
    const modalData = {
      currentIndex: this.currentIndex,
      images: this.images
    };
    const dialogRef = this.dialog.open(PicturesModalComponent, {
      width: '800px',
      height: '480px',
      data: modalData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.setAutomaticTransitionOnCarousel();
      console.log(result);
    })
  }






}
