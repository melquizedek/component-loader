import { NgModule, Optional, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppConfigModel } from './classes/app-config.model';
import { ProfileCoreComponent } from './profile/profile-core.component';
import { ConfigService } from './shared/services/config.service';

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
    imports: [
      	RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingCoreModule {

    static forRoot(customConfig: AppConfigModel) : any {
        return {
            ngModule: AppRoutingCoreModule,
            providers: [
                { provide: AppConfigModel, useValue: customConfig }

            ]
        };
    }
    
    constructor(@Optional() customConfig: AppConfigModel, 
        private configService: ConfigService) 
    {    
        console.log('Core:AppRoutingCoreModule:constructor => ', customConfig);   
        if (customConfig) { 
            this.configService.setConfig(customConfig);           

        }
    }

}
