import {NgModule} from '@angular/core';
import { ComponentLoaderDirectiveModule } from '../../shared/directives/component-loader.directive.module';
import { ViewProfileCoreComponent } from './view-profile-core.component';
import { ViewProfileComponent } from './view-profile.component';

@NgModule({
    declarations: [
        ViewProfileCoreComponent,
        ViewProfileComponent
    ],
    entryComponents: [ ViewProfileComponent ],
    imports: [ ComponentLoaderDirectiveModule ],
    exports: [ ViewProfileCoreComponent ]
})

export class ViewProfileCoreModule {
}
