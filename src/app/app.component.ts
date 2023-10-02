import { AfterViewInit, Component } from '@angular/core';
import { capabilitiesText, aboutText } from './texts.const';


const numberOfSections: number = 4;
const sectionWidthInVW = 100;
const translationStep: number = sectionWidthInVW / numberOfSections;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'pavemetrics';
  visibleSection = 1;
  translateX = 0;
  buttonsAreVisible = true;
  
  hideButtonsTimeoutRef: any = null;
  hideButtonsAnimationTime: number = 800;
  
  texts = {
    capabilities: capabilitiesText,
    about: aboutText
  };

  currentCapability: any = this.texts.capabilities[0];


  ngAfterViewInit(): void {
    this.hideButtonsTimeoutRef = setTimeout(() => {
      this.buttonsAreVisible = false;
    }, this.hideButtonsAnimationTime);
  }


  goToNextSection() {
    if (this.visibleSection < numberOfSections) {
      this.visibleSection += 1;
      this.handleSectionChange();
    }
  }

  goToPreviousSection() {
    if (this.visibleSection > 1) {
      this.visibleSection -= 1;
      this.handleSectionChange();
    }
  }

  navigateToSpecificSection(sectionNumber: number) {
    this.visibleSection = sectionNumber;
    this.handleSectionChange();
  }

  handleSectionChange() {
    this.transformContainer();
    // this.triggerButtons();
    // this.hideButtons();
  }

  transformContainer() {
    this.translateX = -translationStep * (this.visibleSection - 1);
  }


  triggerButtons() {
    clearTimeout(this.hideButtonsTimeoutRef);
    this.buttonsAreVisible = true;
  }

  hideButtons() {
    this.hideButtonsTimeoutRef = setTimeout(() => {
      this.buttonsAreVisible = false;
    }, this.hideButtonsAnimationTime);
  }


  selectCapabilityByIndex(index: number) {
    return {
      index,
      info: this.texts.capabilities[index]
    }
  }


}
