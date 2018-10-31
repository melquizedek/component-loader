import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderDirective } from './component-loader.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ComponentLoaderDirective ],
  exports: [ ComponentLoaderDirective ]
})

export class ComponentLoaderModule { }