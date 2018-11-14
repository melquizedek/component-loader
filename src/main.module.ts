import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderDirectiveModule } from './shared/directives/component-loader.directive.module';
import { ConfigService } from './shared/services/config.service';
import { AppConfigModel } from './classes/app-config.model';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [ ConfigService ],
    exports: [ ComponentLoaderDirectiveModule ]
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
        if (config) { 
            this.configService.setConfig(config);
        }
    }

}