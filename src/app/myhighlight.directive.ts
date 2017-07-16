import { Directive, ElementRef, Input,HostListener } from '@angular/core';

@Directive({
    selector : '[myhighlight]'
})
export class MyHightLight {
    
    @Input() highlightColor:string;
    
    constructor(private el:ElementRef){
        
    }
    
    @HostListener('mouseenter') onMouseEnter(){
        this.highlight(true);
    }
    
    @HostListener("mouseleave") onMouseLeave = () => {
        this.highlight();
    }
    
    private highlight(select:boolean=false){
        this.el.nativeElement.style.backgroundColor = select ? this.highlightColor : null;
    }
    
}