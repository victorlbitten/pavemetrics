// animations.module.ts
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

export function slideAnimations(): AnimationTriggerMetadata[] {
    return [
      trigger('slideIn', [
        state('in', style({ transform: 'translateX(0)' })),
        transition(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out'),
        ]),
      ]),
      trigger('slideOut', [
        state('out', style({ transform: 'translateX(100%)' })),
        transition(':leave', [
          animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' })),
        ]),
      ]),
    ];
  }

@NgModule({
  imports: [
    BrowserAnimationsModule, // Import the BrowserAnimationsModule
  ],
  declarations: [],
  providers: [
    { provide: 'SLIDE_ANIMATIONS', useFactory: slideAnimations}
  ]
})
export class AnimationsModule {}