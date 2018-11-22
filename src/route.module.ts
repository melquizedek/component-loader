import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileCoreComponent } from './profile/profile-core.component';// from core

import { ConfigService } from './shared/services/config.service';

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
		//entryComponentModule,
      	RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})

export class AppRoutingCoreModule { }
