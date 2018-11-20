import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from './shared/services/config.service';
import { AppConfigModel } from './classes/app-config.model';

//Components
import { ViewProfileCoreComponent } from './profile/view-profile/core-view-profile.component';

//Directives
import { ComponentLoaderDirective } from './shared/directives/component-loader.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ViewProfileCoreComponent,
        ComponentLoaderDirective
    ],
    entryComponents: [ ViewProfileCoreComponent ],
    providers: [ ConfigService ],
    exports: [ ComponentLoaderDirective ]
})

export class MainModule {

    static forRoot(config: any): any {
        return {
            ngModule: MainModule,
            providers: [
                {provide: AppConfigModel, useValue: config }
            ]
        };
    }
    
    constructor(@Optional() config: AppConfigModel, 
        private configService: ConfigService) {
        console.log('Core:MainModule:constructor => ', config);
        if (config) { 
            this.configService.setConfig(config);
        }
    }

}