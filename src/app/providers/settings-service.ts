/**
 * Created by Helena on 30.01.2016.
 */

import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

var mockSettings = {email : 'default@default.com'};

@Injectable()
export class SettingsService {
    settings: {
        email: string;
    };
    emailInput = '';
    busy: Boolean = false;
    error: Boolean = false;
    constructor(private http: Http) {
        this.mockReload();
       // this.reload();
    }

    mockReload() {
        this.settings = mockSettings;
        this.emailInput = this.settings.email;
    }

    reload() {
        this.busy = true;
        this.http.get('https://zs-todo-api.herokuapp.com/todos')
            .subscribe(
                data => {
                this.settings = data.json();
                this.busy = false;
            },
                err => {
                this.error = true;
                this.busy = false;
                console.log(err);
            }
        );
    }

    save() {
        this.settings.email = this.emailInput;
        /*var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var nextTodo = {name: this.current};
        var payload = JSON.stringify(nextTodo);
        this.busy = true;
        this.error = false;
        this.list.unshift(nextTodo);
        this.http.post('https://zs-todo-api.herokuapp.com/todos',
            payload,
            {headers}
        ).subscribe(
                data => {
                console.log(data);
                this.busy = false;
                this.current = '';
            },
                err => {
                this.error = true;
                this.busy = false;
                this.list.shift();
                console.log(err);
            }
        );*/
    }
}
