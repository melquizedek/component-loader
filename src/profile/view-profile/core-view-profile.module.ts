import {NgModule} from '@angular/core';
import { ComponentLoaderDirectiveModule } from '../../shared/directives/component-loader.directive.module';
import { ViewProfileComponent } from './core-view-profile.component';

@NgModule({
    declarations: [
        ViewProfileComponent
    ],
    entryComponents: [ ViewProfileComponent ],
    imports: [ ComponentLoaderDirectiveModule ]
})

export class CoreViewProfileModule {
}
