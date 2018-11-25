import { NgModule, Optional, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppConfigModel } from './classes/app-config.model';
import { ProfileCoreComponent } from './profile/profile-core.component';
import { ConfigService } from './shared/services/config.service';
//import { ConfigService } from './shared/services/config.service';

// const moduleConf = ConfigService.prototype.getConfig("MODULE", "ProfileModule", "ProfileComponent");
// console.log("Core:AppRoutingCoreModule:moduleConf => ", moduleConf);
// const profileComponent = componentList['ProfileModule']['ProfileComponent']
//     ? componentList['ProfileModule']['ProfileComponent'] : ProfileCoreComponent;

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
  exports: [RouterModule]
})

export class AppRoutingCoreModule {

    static forRoot(appConfig: AppConfigModel): ModuleWithProviders {
        return {
            ngModule: AppRoutingCoreModule,
            providers: [
                { provide: AppConfigModel, useValue: appConfig }
            ]
        };
    }
    
    constructor(@Optional() appConfig: AppConfigModel, 
        private configService: ConfigService,
        private router: Router) {
        
        console.log('Core:AppRoutingCoreModule:constructor => ', appConfig);
        
        if (appConfig) { 
            this.configService.setConfig(appConfig);

            // const profileCustomComponent = this.configService.getConfig("MODULE", "ProfileModule", "ProfileComponent");
            // const profileComponent = profileCustomComponent ? profileCustomComponent : ProfileCoreComponent;

            // console.log("Core:AppRoutingCoreModule:appConfig => ", profileComponent);


            // const routes: Routes = [
            //     {
            //         path: 'profile',
            //         component: profileComponent
            //     },
            //     {
            //         path: '',
            //         redirectTo: 'profile',
            //         pathMatch: 'full'
            //     }
            // ];

            // this.router.resetConfig(routes);
        }
    }

}
