import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileCoreModule } from './view-profile/view-profile.module';

@NgModule({
    imports: [
        CommonModule,
        ViewProfileCoreModule
    ]
})

export class ProfileComponentCoreModule {}