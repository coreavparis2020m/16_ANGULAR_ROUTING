import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLoadFade]'
})

export class LoadFadeDirective {

    constructor(private renderer2: Renderer2,
                private elementRef: ElementRef) { }

    ngOnInit() {
        setTimeout(() => {
            this.renderer2.addClass(this.elementRef.nativeElement, 'show');
        }, 10);   
    }

}
