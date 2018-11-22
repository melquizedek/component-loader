import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'main',
    template: `<h1>Main</h1>`
})

export class MainComponent implements AfterViewInit {

    constructor() {}

    ngAfterViewInit() {
        console.log("Core:Maincomponent");
    }
}