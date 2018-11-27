import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreProfileModule } from './profile/profile-core.module';
import { ComponentLoaderDirective } from './shared/directives/component-loader.directive';
import { RouteCoreService } from './shared/services/route.service';
import { ConfigService } from './shared/services/config.service';
import { AppRoutingCoreModule } from './route.module';
import { ProfileCoreComponent } from './profile/profile-core.component';

@NgModule({
    imports: [
        CommonModule,
        CoreProfileModule,
        AppRoutingCoreModule
    ],
    declarations: [
        ComponentLoaderDirective
    ],
    entryComponents: [ 
    ],
    providers: [ ConfigService, RouteCoreService ],
    exports: [ 
        ProfileCoreComponent,
        AppRoutingCoreModule,
        ComponentLoaderDirective
    ]
})

export class MainModule {}