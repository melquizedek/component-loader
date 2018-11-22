import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfigModel } from './classes/app-config.model';
import { CoreProfileModule } from './profile/profile-core.module';
import { ComponentLoaderDirective } from './shared/directives/component-loader.directive';
import { MainComponent } from './main.component';
import { SharedCoreModule } from './shared/shared.module';
import { ConfigService } from './shared/services/config.service';

@NgModule({
    imports: [
        CommonModule,
        CoreProfileModule,
        SharedCoreModule
    ],
    declarations: [
        ComponentLoaderDirective,
        MainComponent,
    ],
    entryComponents: [ 
    ],
    providers: [],
    exports: [ 
        ComponentLoaderDirective,
        CoreProfileModule,
        SharedCoreModule
    ]
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