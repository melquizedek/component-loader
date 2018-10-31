import { Type } from '@angular/core';

export class ComponentModel {
    constructor(public component: Type<any>, public data: any) {}
}