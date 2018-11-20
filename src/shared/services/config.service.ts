import { Injectable } from '@angular/core';
import { AppConfigModel } from '../../classes/app-config.model';

@Injectable()

export class ConfigService {

    config: any = {AppConfig: {}};

    constructor() {}

    setConfig(config: AppConfigModel) {
        this.config = config.AppConfig;
    }

    getConfig(type: string, fieldName: string, moduleName: string, componentName: string) : any {
        if (type === "module") {
            const componentToUsed = this.config[fieldName][moduleName]['components'][componentName];
            //console.log('componentToUsed => ', componentToUsed);
            return componentToUsed;
        }
        if (type === "entrycomponents") {
            console.log('Core:getConfig:entrycomponents => ', this.config['entryComponentModule']);
            return this.config['entryComponentModule'];
        }
        return null;
    }

}