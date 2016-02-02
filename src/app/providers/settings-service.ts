/**
 * Created by Helena on 30.01.2016.
 */

import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

var mockSettings = {
                    username: 'Helena',
                    fullName : 'Helena Binkova',
                    email : 'default@default.com',
                    companyName : 'Zoomsphere.com',
                    position: '',
                    country: 'CZ',
                    aboutMe : 'happy to code :-)',
                    signature: ''
                    };

@Injectable()
export class SettingsService {
    settings: any;
    //email = '';
    //username = '';
    //fullName = '';
    //companyName = '';
    //position = '';
    //country = '';
    //aboutMe = '';
    //signature = '';
    countrySelect = [['Czech Republic','CZ'],['Germany','DE']]
    busy: Boolean = false;
    error: Boolean = false;
    constructor(private http: Http) {
        this.mockReload();
       // this.reload();
    }

    mockReload() {
        this.settings = mockSettings; //fake load
        //setting values into inputs
        //this.email = this.settings.email;
        //this.username = this.settings.username;
        //this.fullName = this.settings.fullName;
        //this.companyName = this.settings.companyName;
        //this.position = this.settings.position;
        //this.country = this.settings.country;
        //this.aboutMe = this.settings.aboutMe;
        //this.signature = this.settings.signature;
    }


    save() {
        console.log(this.settings);

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
