import { Directive , ElementRef} from "@angular/core";
// import { ElementRef } from "@angular/core/src/linker/element_ref"; // Auto import to this link doesnt work ?
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