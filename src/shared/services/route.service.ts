import { Injectable, Inject } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { componentList } from '../../component-list';
import { AppConfigModel } from '../../classes/app-config.model';
import { APP_CONFIG } from '../../shared/injector-tokens/injector-tokens';

@Injectable()

export class RouteCoreService {

    constructor(private configService: ConfigService,
        @Inject(APP_CONFIG) private appConfig: AppConfigModel) {
            console.log('RouteCoreService:APP_CONFIG', this.appConfig);
        }

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