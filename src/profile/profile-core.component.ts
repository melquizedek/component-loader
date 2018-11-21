import { Component, OnInit } from '@angular/core';
import { template } from './profile-core.component.html';
import { styles } from './profile-core.component.scss';

@Component({
    selector: 'core-profile',
    template: template + '',
    styles: [ styles + '']
})

export class ProfileCoreComponent implements OnInit {

    constructor() {}

    ngOnInit() {}
}