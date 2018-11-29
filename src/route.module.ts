import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileCoreComponent } from './profile/profile-core.component';
import { MaterialModule } from './material.module';
import { ConfigService } from './shared/services/config.service';
import { CUSTOM_COMPONENTS } from './tokens/tokens';
import { AppConfigModel } from './classes/app-config.model';
import { ComponentLoaderDirective } from './shared/directives/component-loader.directive';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: 'profile',
        component: ProfileCoreComponent
    },
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [ 
        ProfileCoreComponent,
        ComponentLoaderDirective
    ],
    imports: [
        CommonModule,
        MaterialModule,
      	RouterModule.forRoot(routes)
    ],
    providers: [ ConfigService ],
    exports: [ RouterModule, ComponentLoaderDirective ]
})

export class AppRoutingCoreModule {
    static forRoot(customConfig: AppConfigModel) : ModuleWithProviders {
        return {
            ngModule: AppRoutingCoreModule,
            providers: [
                { provide: CUSTOM_COMPONENTS, useValue: customConfig }
            ]
        };
    }
}