import { NgModule } from '@angular/core';
import { Directive } from '@angular/core';
import { ADirective } from './a-directive';

@NgModule({
    declarations: [
        ADirective
    ],
    exports: [
        ADirective
    ],
})
export class AModule { }
