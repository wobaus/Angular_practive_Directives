import { Directive } from "@angular/core";
import { ElementRef } from "@angular/core/src/linker/element_ref";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";


@Directive ({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef){

    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}