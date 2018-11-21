import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCoreComponent } from './profile-core.component';
import { MaterialModule } from '../material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        ProfileCoreComponent,
    ],
    exports: [
        ProfileCoreComponent
    ]
})

export class CoreProfileModule {}