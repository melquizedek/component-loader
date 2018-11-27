import { 
	Directive, 
	ViewContainerRef, 
	ComponentFactoryResolver, 
	OnInit, 
	AfterViewInit, 
	Compiler, 
	Injector 
} from '@angular/core';
import { ConfigService } from '../services/config.service';
import { AppConfigModel } from 'src/classes/app-config.model';
import { componentList } from '../../component-list';
import { Routes, Router } from '@angular/router';

//Core Components
import { ProfileCoreComponent } from '../../profile/profile-core.component';

@Directive({
  selector: '[componentLoader]'
})

export class ComponentLoaderDirective implements OnInit, AfterViewInit {

	//@Input("componentLoader") componentToUsed : any;
	componentToUsed: any;

	constructor(public viewContainerRef: ViewContainerRef,
				private configService: ConfigService,
				private injector: Injector,
				private compiler: Compiler,
				private router: Router) {}

	ngOnInit() {}

	ngAfterViewInit() {
			const customComponents = this.configService.getConfig("CUSTOM_COMPONENT", "customComponents", "ProfileComponent");
			//console.log('Core:customComponents', customComponents);
            const entryCompModule = this.configService.getConfig("ENTRY_COMPS", "entryComponentModule", "");
            
            this.compiler.compileModuleAndAllComponentsAsync(entryCompModule).then((compiled) => {

				const m = compiled.ngModuleFactory.create(this.injector);
				
				let customFactory: any = compiled.componentFactories.find(compFactory => 
					compFactory.componentType.name === customComponents.componentName);

                console.log('Core:selected.customFactory => ', customFactory);
				
				if (customFactory) {
					this.viewContainerRef.clear();
					customFactory.create(this.injector, [], null, m);
					const componentRef = this.viewContainerRef.createComponent(customFactory);
					let profileComponent = customFactory.componentType;//componentRef.componentType;

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
				}

            });
	}

}