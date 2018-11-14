import { Injectable } from '@angular/core';
import { AppConfigModel } from '../../classes/app-config.model';

@Injectable()

export class ConfigService {

    config: any = {AppConfig: {}};

    constructor() {}

    setConfig(config: AppConfigModel) {
        this.config = config;
    }

    getConfig(moduleName: string, componentName: string) : AppConfigModel {
        return this.config['AppConfig'][moduleName]['components'][componentName];
    }

}