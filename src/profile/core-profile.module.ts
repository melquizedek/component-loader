import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreViewProfileModule } from './view-profile/core-view-profile.module';

@NgModule({
    imports: [
        CommonModule,
        CoreViewProfileModule
    ],
    exports: [ CoreViewProfileModule ]
})

export class CoreProfileModule {}