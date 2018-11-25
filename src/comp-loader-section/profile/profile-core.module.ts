import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCoreComponent } from './profile-core.component';
import { MaterialModule } from '../../material.module';
import { DYNAMIC_COMPONENT } from '../component-loader-manifest';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    providers: [
        { provider: DYNAMIC_COMPONENT, useValue: ProfileCoreComponent }
    ],
    declarations: [
        ProfileCoreComponent,
    ],
    entryComponents:[
        ProfileCoreComponent
    ]
})

export class CoreProfileModule {}