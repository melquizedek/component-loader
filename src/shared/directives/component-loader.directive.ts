import { 
	Directive, 
	ViewContainerRef,
	OnInit, 
	AfterViewInit, 
	Compiler, 
	Injector, 
	Inject,
	Type,
	Input
} from '@angular/core';
import { ConfigService } from '../services/config.service';
import { CUSTOM_COMPONENTS } from '../../tokens/tokens';
import { AppConfigModel } from '../../classes/app-config.model';
import { Router, Routes } from '@angular/router';

@Directive({
  selector: '[componentLoader]'
})

export class ComponentLoaderDirective implements OnInit, AfterViewInit {

	@Input("componentLoader") componentToUsed : Type<any>;

	constructor(public viewContainerRef: ViewContainerRef,
				private configService: ConfigService,
				private injector: Injector,
				private compiler: Compiler,
				@Inject(CUSTOM_COMPONENTS) private customComponents: AppConfigModel,
				private router: Router) {
					this.configService.setConfig(this.customComponents);
				}

	ngOnInit() {}

	ngAfterViewInit() {
			
			console.log('ComponentLoaderDirective:CUSTOM_COMPONENTS ', this.customComponents);

			const customComponents = this.configService.getConfig("CUSTOM_COMPONENT", "customComponents", "ProfileComponent");
            const entryCompModule = this.configService.getConfig("ENTRY_COMPS", "entryComponentModule", "");
            
            this.compiler.compileModuleAndAllComponentsAsync(entryCompModule).then((compiled) => {

				const m = compiled.ngModuleFactory.create(this.injector);
				
				let customFactory: any = compiled.componentFactories.find(compFactory => 
					compFactory.componentType.name === customComponents.componentName);

                console.log('Core:selected.customFactory => ', customFactory);
				
				if (customFactory) {
					this.viewContainerRef.clear();
					customFactory.create(this.injector, [], null, m);
					this.viewContainerRef.createComponent(customFactory);

					const routes: Routes = [
						{
							path: 'profile',
							component: customFactory.componentType
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