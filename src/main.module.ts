import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreProfileModule } from './profile/core-profile.module';
import { ComponentLoaderDirectiveModule } from './shared/directives/component-loader.directive.module';

@NgModule({
    imports: [
        CommonModule,
        CoreProfileModule,
        ComponentLoaderDirectiveModule
    ],
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
    
    constructor(@Optional() config: AppConfigModel) {
        if (config) { 
            /* Save config data */ 
            console.log(config, 'test');
        }
        console.log('read external config');
    }

}

export class AppConfigModel {
    AppConfig : Object;
}