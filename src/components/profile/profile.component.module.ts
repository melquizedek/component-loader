import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ComponentLoaderDirective } from '../../shared/directives/component-loader.directive';
import { ComponentLoaderDirectiveModule } from '../..';
import { ProfileDefaultComponent } from './profile-default/profile-default.component';

@NgModule({
    imports: [
        CommonModule,
        ComponentLoaderDirectiveModule
      ],
      declarations: [ ProfileComponent, ProfileDefaultComponent ],
      entryComponents: [ ProfileDefaultComponent ],
      exports: [ ProfileComponent ]    
})

export class ProfileComponentModule {}