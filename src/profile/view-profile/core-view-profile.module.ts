import {NgModule} from '@angular/core';
import { ComponentLoaderDirectiveModule } from '../../shared/directives/component-loader.directive.module';
import { CoreViewProfileComponent, ViewProfileComponent } from './core-view-profile.component';

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
