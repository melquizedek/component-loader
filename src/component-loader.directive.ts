import { Directive, ViewContainerRef, Input, ComponentFactoryResolver } from '@angular/core';
import { ComponentModel } from './component.model';

@Directive({
  selector: '[componentLoader]'
})

export class ComponentLoaderDirective {

	@Input("tempLoader") componentToUsed : any;
	
	constructor(public viewContainerRef: ViewContainerRef,
				private componentFactoryResolver: ComponentFactoryResolver) { 
		
		setTimeout(() => {
			if (this.componentToUsed) 
			{
				let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentToUsed.prototype.constructor);
				this.viewContainerRef.clear();
				let componentRef = this.viewContainerRef.createComponent(componentFactory);
				//(<ComponentModel>componentRef.instance).data = {name: "John doe", age: "23"};
			}
		});
	}

}