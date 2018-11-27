import { NgModule } from '@angular/core';
import { RouteCoreService } from './services/route.service';
import { ConfigService } from './services/config.service';
import { ComponentLoaderDirective } from './directives/component-loader.directive';

@NgModule({
    imports: [],
    declarations: [ ComponentLoaderDirective ],
    providers: [ConfigService, RouteCoreService],
    exports: [
        ConfigService,
        RouteCoreService
    ]
})

export class SharedCoreModule {}