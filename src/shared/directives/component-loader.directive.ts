import { Directive, ViewContainerRef, 
	Input, ComponentFactoryResolver, OnInit, 
	AfterViewInit, SystemJsNgModuleLoader, Compiler, Injector } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { AppConfigModel } from 'src/classes/app-config.model';
import { ViewProfileCoreComponent } from '../../profile/view-profile/core-view-profile.component';

@Directive({
  selector: '[componentLoader]'
})

export class ComponentLoaderDirective implements OnInit, AfterViewInit {

	//@Input("componentLoader") componentToUsed : any;
	componentToUsed: any;

	constructor(public viewContainerRef: ViewContainerRef,
				private componentFactoryResolver: ComponentFactoryResolver,
				private configService: ConfigService,
				private injector: Injector,
				private compiler: Compiler) {}

	ngOnInit() {
		//console.log(this.configService.getConfig(), "get config from ComponentLoaderDirective");
		
		// this.componentToUsed = ViewProfileCoreComponent;//this.configService.getConfig('module' ,'ProfileModule', 'ViewProfileComponent');
		
		// console.log(this.componentToUsed, 'this.componentToUsed');

		// if (this.componentToUsed) 
		// {
		// 	let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentToUsed.prototype.constructor);
		// 	this.viewContainerRef.clear();
		// 	let componentRef = this.viewContainerRef.createComponent(componentFactory);
		// 	//(<ComponentModel>componentRef.instance).data = {name: "John doe", age: "23"};
		// }
	}

	ngAfterViewInit() {
		const entryCompsPath = this.configService.getConfig("entrycomponents", "", "", "");
		
		console.log('Core:ngAfterViewInit:entryComps => ', entryCompsPath);
		
		this.compiler.compileModuleAndAllComponentsAsync(entryCompsPath)
			.then((compiled) => {
				console.log('Core:ngAfterViewInit:compiled.componentFactories => ', compiled.componentFactories);
				//compiled.ngModuleFactory.create(this.injector)
				const m = compiled.ngModuleFactory.create(this.injector);
				const factory = compiled.componentFactories[0];
				const cmp = factory.create(this.injector, [], null, m);
				const componentRef = this.viewContainerRef.createComponent(factory);
			})
	}

}