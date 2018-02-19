import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';
// import { Renderer2 } from '@angular/core/src/render/api';
// import { ElementRef } from '@angular/core/src/linker/element_ref';
// import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { 

  }

  ngOnInit (){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
  }
}
