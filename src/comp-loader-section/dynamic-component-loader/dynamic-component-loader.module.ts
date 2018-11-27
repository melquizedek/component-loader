import { NgModule, SystemJsNgModuleLoader, ModuleWithProviders, NgModuleFactoryLoader } from '@angular/core';
import { DynamicComponentManifest } from '../router.interface';
import { DYNAMIC_COMPONENT_MANIFESTS } from '../component-loader-manifest';
import { ROUTES } from '@angular/router';
@NgModule({
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ],
})

export class DynamicComponentLoaderModule {

  static forRoot(manifests: DynamicComponentManifest[]): ModuleWithProviders {
    return {
      ngModule: DynamicComponentLoaderModule,
      providers: [
        { provide: ROUTES, useValue: manifests, multi: true },
        { provide: DYNAMIC_COMPONENT_MANIFESTS, useValue: manifests },
      ],
    };
  }

}