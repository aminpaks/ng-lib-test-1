import { Inject, OnInit, OnDestroy, OnChanges, NgModule, SimpleChanges, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Directive } from '@angular/core';

@Directive({
    selector: '[appDirective]',
})
export class ADirective implements OnInit, OnDestroy {
    private element: HTMLElement;

    constructor( @Inject(ElementRef) elementRef: ElementRef) {
        this.element = elementRef.nativeElement;
    }

    ngOnInit() {
        console.log('Directive is created', this);
    }
    ngOnDestroy() {
        console.log('Directive is destroyed', this);
    }
}
