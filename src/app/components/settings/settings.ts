/**
 * Created by Helena on 30.01.2016.
 */

import {Component} from 'angular2/core';
import {SettingsService} from '../../providers/settings-service';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'settings',
    providers: [
        SettingsService
    ],
    directives: [
        ...FORM_DIRECTIVES,
    ],
    pipes: [ ],
    styles: [ require('./settings.css') ],
    template: require('./settings.html')
})

export class Settings {
    // TypeScript public modifiers
    constructor(public settingsService: SettingsService) {

    }
    ngOnInit() {
        console.log('Hello Settings Component');
    }

}

