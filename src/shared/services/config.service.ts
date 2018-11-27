import { Injectable, Type } from '@angular/core';
import { AppConfigModel } from '../../classes/app-config.model';

@Injectable()

export class ConfigService {

    config: any = {AppConfig: {}};

    constructor() {}

    setConfig(config: AppConfigModel) {
        this.config = config.AppConfig;
    }

    getConfig(type: string, moduleName: string, componentName: string) : any {
        let config = null;
        if (type === "CUSTOM_COMPONENT") {
            config = this.config[moduleName].find((component: any) => component.componentName === componentName);
            console.log('Core:getConfig:config ', config);
            config = (config) ? config : {componentName: ""};
        }
        if (type === "ENTRY_COMPS") {
            config = this.config[moduleName];
        }
        console.log("Core:ConfigService:getConfig => ", type, config);
        return config;
    }

}