import { Injectable, Inject, NgModuleFactoryLoader, Injector, ComponentFactory } from '@angular/core';
import { DYNAMIC_COMPONENT_MANIFESTS, DYNAMIC_COMPONENT } from './component-loader-manifest';
import { DynamicComponentManifest } from './router.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class DynamicComponentLoader {

  constructor(
    @Inject(DYNAMIC_COMPONENT_MANIFESTS) private manifests: DynamicComponentManifest[],
    private loader: NgModuleFactoryLoader,
    private injector: Injector
  ) { }

  getComponentFactory<T>(componentId: string, injector?: Injector): Observable<ComponentFactory<T>> {
    const manifest = this.manifests
      .find(m => m.componentId === componentId);

    const p = this.loader.load(manifest.loadChildren)
      .then(ngModuleFactory => {
        const moduleRef = ngModuleFactory.create(injector || this.injector);

        // Read from the moduleRef injector and locate the dynamic component type
        const dynamicComponentType = moduleRef.injector.get(DYNAMIC_COMPONENT);
        // Resolve this component factory
        return moduleRef.componentFactoryResolver.resolveComponentFactory<T>(dynamicComponentType);
      });

    return fromPromise(p);
  }
}