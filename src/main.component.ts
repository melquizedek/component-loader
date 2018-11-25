import { Component, AfterViewInit, Injector, Compiler } from '@angular/core';
import { ConfigService } from './shared/services/config.service';
import { Routes, Router } from '@angular/router';
import { ProfileCoreComponent } from './profile/profile-core.component';

@Component({
    selector: 'core-main-component',
    template: `<h1>Main</h1>`
})

export class MainComponent implements AfterViewInit {

    constructor(private configService: ConfigService,
                private injector: Injector,
                private compiler: Compiler,
                private router: Router
        ) {}

    ngAfterViewInit() {
        const entryComponentModule = this.configService.getConfig("ENTRY_COMPS", "entryComponentModule", "");
		const profileCustomComponent = this.configService.getConfig("MODULE", "ProfileModule", "ProfileComponent");
        const profileComponent = profileCustomComponent ? profileCustomComponent : ProfileCoreComponent;

		console.log('Core:ngAfterViewInit:entryComps => ', entryComponentModule);
		
		this.compiler.compileModuleAndAllComponentsAsync(entryComponentModule)
			.then((compiled) => {
				console.log('Core:MainComponent:compiled.componentFactories => ', compiled.componentFactories);
				//compiled.ngModuleFactory.create(this.injector)
				const m = compiled.ngModuleFactory.create(this.injector);
				const factory = compiled.componentFactories[71];
                const cmp = factory.create(this.injector, [], null, m);
                
                const routes: Routes = [
                    {
                        path: 'profile',
                        component: profileComponent
                    },
                    {
                        path: '',
                        redirectTo: 'profile',
                        pathMatch: 'full'
                    }
                ];
    
                this.router.resetConfig(routes);

				//const componentRef = this.viewContainerRef.createComponent(factory);
			})
    }
}