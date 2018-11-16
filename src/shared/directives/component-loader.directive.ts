import { Directive, ViewContainerRef, Input, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ComponentModel } from '../../classes/component.model';
import { ConfigService } from '../services/config.service';

@Directive({
  selector: '[componentLoader]'
})

export class ComponentLoaderDirective implements OnInit {

	@Input("componentLoader") componentToUsed : any;
	
	constructor(public viewContainerRef: ViewContainerRef,
				private componentFactoryResolver: ComponentFactoryResolver,
				private configService: ConfigService) {}

	ngOnInit() {
		//console.log(this.configService.getConfig(), "get config from ComponentLoaderDirective");
		
		this.componentToUsed = this.configService.getConfig('ProfileModule', 'ViewProfileComponent');
		
		console.log(this.componentToUsed, 'this.componentToUsed');

		if (this.componentToUsed) 
		{
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentToUsed.prototype.constructor);
			this.viewContainerRef.clear();
			let componentRef = this.viewContainerRef.createComponent(componentFactory);
			//(<ComponentModel>componentRef.instance).data = {name: "John doe", age: "23"};
		}
	}

}