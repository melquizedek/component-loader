import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderDirective } from './shared/directives/component-loader.directive';
import { ConfigService } from './shared/services/config.service';
import { AppRoutingCoreModule } from './route.module';
import { AppConfigModel } from './classes/app-config.model';
import { MaterialModule } from './material.module';
import { CUSTOM_COMPONENTS } from './tokens/tokens';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingCoreModule
    ],
    declarations: [
        ComponentLoaderDirective,
    ],
    providers: [ ConfigService ]
})

export class MainModule {

    static forRoot(customConfig: AppConfigModel) : ModuleWithProviders {
        return {
            ngModule: AppRoutingCoreModule,
            providers: [
                { provide: CUSTOM_COMPONENTS, useValue: customConfig }
            ]
        };
    }

}