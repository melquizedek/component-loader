import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCoreComponent } from './profile-core.component';
import { MaterialModule } from '../material.module';
import { ProfileCoreRoutingModule } from './profile-core-route';
@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ProfileCoreRoutingModule
    ],
    declarations: [
        ProfileCoreComponent,
    ],
    exports: [
        ProfileCoreComponent
    ]
})

export class CoreProfileModule {}