import { Injectable } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { componentList } from '../../component-list';

@Injectable()

export class RouteCoreService {

    constructor(private configService: ConfigService) {}

    getRoute() : Routes {

        const profileCustomComponent = this.configService.getConfig("MODULE", "ProfileModule", "ProfileComponent");
        const profileComponent = profileCustomComponent ? profileCustomComponent : componentList.ProfileCoreModule.ProfileCoreComponent;
        
        const routes: Routes = [
            {
                path: 'profile',
                component: profileComponent
            },
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full'
            }
        ];
        return routes;
    }
}