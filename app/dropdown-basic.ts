import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './dropdown-basic.html',
})
export class NgbdDropdownBasic {
  @ViewChild('toc', { static: false }) toc: ElementRef;
  @ViewChild('closeBtn', { static: false }) closeBtn: ElementRef;
  @ViewChild('menu', { static: false }) menu: ElementRef;

  constructor() {}

  // open() {
  //     let keyboardEvent = new KeyboardEvent('keydown', {
  //       key: 'Tab',
  //       bubbles: true,
  //     });
  //     // console.log(this.toc);
  //     this.menu.nativeElement.dispatchEvent(keyboardEvent);
  // }
}
