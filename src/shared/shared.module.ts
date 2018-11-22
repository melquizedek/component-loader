import { NgModule } from '@angular/core';
import { RouteCoreService } from './services/route.service';
import { ConfigService } from './services/config.service';

@NgModule({
    imports: [],
    providers: [ConfigService, RouteCoreService],
    // exports: [
    //     ConfigService,
    //     RouteCoreService
    // ]
})

export class SharedCoreModule {}