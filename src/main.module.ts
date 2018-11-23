import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreProfileModule } from './profile/profile-core.module';
import { ComponentLoaderDirective } from './shared/directives/component-loader.directive';
import { MainComponent } from './main.component';
import { SharedCoreModule } from './shared/shared.module';

import { AppRoutingCoreModule } from './route.module';

@NgModule({
    imports: [
        CommonModule,
        CoreProfileModule,
        SharedCoreModule,
        AppRoutingCoreModule
    ],
    declarations: [
        ComponentLoaderDirective,
        MainComponent,
    ],
    entryComponents: [ 
    ],
    providers: [],
    exports: [ 
        ComponentLoaderDirective,
        CoreProfileModule,
        SharedCoreModule,
        AppRoutingCoreModule
    ]
})

export class MainModule {}