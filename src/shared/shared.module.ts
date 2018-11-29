import { NgModule } from '@angular/core';
import { ConfigService } from './services/config.service';
import { ComponentLoaderDirective } from './directives/component-loader.directive';

@NgModule({
    imports: [],
    declarations: [ ComponentLoaderDirective ],
    providers: [ConfigService ],
    exports: [
        ConfigService
    ]
})

export class SharedCoreModule {}