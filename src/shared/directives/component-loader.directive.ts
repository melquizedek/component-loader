import { Directive, ViewContainerRef, Input, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ComponentModel } from '../../classes/component.model';

@Directive({
  selector: '[componentLoader]'
})

export class ComponentLoaderDirective implements OnInit {

	@Input("componentLoader") componentToUsed : any;
	
	constructor(public viewContainerRef: ViewContainerRef,
				private componentFactoryResolver: ComponentFactoryResolver) {}

	ngOnInit() {
		if (this.componentToUsed) 
		{
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentToUsed.prototype.constructor);
			this.viewContainerRef.clear();
			let componentRef = this.viewContainerRef.createComponent(componentFactory);
			//(<ComponentModel>componentRef.instance).data = {name: "John doe", age: "23"};
		}
	}

}