import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// import { TemplateRef } from '@angular/core/src/linker/template_ref';
// import { ViewContainerRef } from '@angular/core/src/linker/view_container_ref';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input () set appUnless (condition: boolean){
    if (!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
