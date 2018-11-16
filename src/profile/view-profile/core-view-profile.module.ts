import {NgModule} from '@angular/core';
import { ComponentLoaderDirectiveModule } from '../../shared/directives/component-loader.directive.module';
import { ViewProfileCoreComponent } from './core-view-profile.component';

@NgModule({
    declarations: [
        ViewProfileCoreComponent
    ],
    entryComponents: [ ViewProfileCoreComponent ],
    imports: [ ComponentLoaderDirectiveModule ],
    exports: [ ViewProfileCoreComponent ]
})

export class CoreViewProfileModule {
}
