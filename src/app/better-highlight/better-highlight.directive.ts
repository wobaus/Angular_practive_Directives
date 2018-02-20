import { Directive, 
         Renderer2, 
         ElementRef, 
         OnInit, 
         HostListener, 
         HostBinding,
        Input } from '@angular/core';
// import { HostBinding } from '@angular/core/src/metadata/directives';
// import { HostListener } from '@angular/core/src/metadata/directives';
// import { Renderer2 } from '@angular/core/src/render/api';
// import { ElementRef } from '@angular/core/src/linker/element_ref';
// import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elRef: ElementRef, private renderer: Renderer2 ) { 

  }
  ngOnInit (){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');

    //set initial backgroud color as it sets in template rather 'transparent'
    this.backgroundColor = this.defaultColor;
  }

  // reacting mouseover/mouseleave event
  @HostListener('mouseenter') mouseover(evenData: Event){
    // using Render below
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    // using HostBinding which can bind any element.
    this.backgroundColor = this.highlightColor;
  } 
  @HostListener('mouseleave') mouseleave(evenData: Event){
    // using Render below
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
    // using HostBinding which can bind any element.
    this.backgroundColor = this.defaultColor;
  } 


}
