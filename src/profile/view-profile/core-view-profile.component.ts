import { Component, OnInit, Input } from '@angular/core';
import { ViewProfileComponent } from './view-profile.component';

@Component({
    selector: 'core-view-profile',
    template: `<ng-template [componentLoader]="loadThisComponet"></ng-template>`
})

export class CoreViewProfileComponent implements OnInit {
    
    @Input() useThisComponent: any = null;
    loadThisComponet: any = null;

    constructor() {}

    ngOnInit() {
        this.loadThisComponet = this.useThisComponent;
        if (!this.loadThisComponet) {
            this.loadThisComponet = ViewProfileComponent;
        }
    }

}