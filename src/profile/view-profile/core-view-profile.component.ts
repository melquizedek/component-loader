import { Component, Input, OnInit } from '@angular/core';

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

@Component({
    selector: 'view-profile-component',
    template: `<h1>View Profile Component From Core</h1>`
})
export class ViewProfileComponent implements OnInit {

    constructor() {}

    ngOnInit() {}
}