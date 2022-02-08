import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') public isOpen = false;
    // @HostListener('click') toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // }
    @HostListener('document:click', ['$event']) public toggleOpen(event: Event):void {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
    constructor(private elRef: ElementRef) {}
}