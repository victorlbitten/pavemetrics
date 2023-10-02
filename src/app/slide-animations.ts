import { trigger, state, style, animate, transition } from '@angular/animations';

export const slideIn = trigger('slideIn', [
    state('in', style({ transform: 'translateX(0)' })),
    transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out')
    ]),
]);


export const slideOut = trigger('slideOut', [
    state('out', style({ transform: 'translateX(100%' })),
    transition(':leave', [
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%' }))
    ]),
])