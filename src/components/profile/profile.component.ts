import { Component, OnInit, Input } from '@angular/core';
import { ProfileDefaultComponent } from './profile-default/profile-default.component';

@Component({
    selector: 'ui-loader-profile',
    template: `<ng-template [componentLoader]="loadThisComponet"></ng-template>`
})

export class ProfileComponent implements OnInit {
    
    @Input() useThisComponent: any = null;
    loadThisComponet: any = null;

    constructor() {}

    ngOnInit() {
        this.loadThisComponet = this.useThisComponent;
        if (!this.loadThisComponet) {
            this.loadThisComponet = ProfileDefaultComponent;
        }
    }

}