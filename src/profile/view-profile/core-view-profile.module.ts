import {NgModule} from '@angular/core';
import { ComponentLoaderDirectiveModule } from '../../shared/directives/component-loader.directive.module';
import { CoreViewProfileComponent } from './core-view-profile.component';
import { ViewProfileComponent } from './view-profile.component';

@NgModule({
    declarations: [
        CoreViewProfileComponent,
        ViewProfileComponent
    ],
    entryComponents: [ ViewProfileComponent ],
    imports: [ ComponentLoaderDirectiveModule ],
    exports: [ CoreViewProfileComponent ]
})

export class CoreViewProfileModule {
}
