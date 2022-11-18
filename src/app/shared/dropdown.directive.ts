import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

//TO function the dropdown only by clicking on the button
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen = false;
//
//   @HostListener('click') mouseClick() {
//    this.isOpen = !this.isOpen
//   }
// }

//TO function the dropdown by click on the button or elsewhere
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
