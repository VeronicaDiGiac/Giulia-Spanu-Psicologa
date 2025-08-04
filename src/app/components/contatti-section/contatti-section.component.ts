import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-contatti-section',
  standalone: true,
  imports: [ContactComponent],
  template: ` <app-contact></app-contact> `,
  styles: ``,
})
export class ContattiSectionComponent {}
