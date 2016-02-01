import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {Http} from 'angular2/http';

import {Title} from '../../providers/title-service';
import {AuthService} from '../../providers/auth/auth-service';

import {Router} from 'angular2/router';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'app'
    selector: 'login',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [
        Title
    ],
    viewProviders: [FormBuilder],
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [
        ...FORM_DIRECTIVES,
    ],
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styles: [require('./login.css')],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    template: require('./login.html')
})
export class Login {
    userForm: ControlGroup;
    username: Control;
    password: Control;
    private _authService: AuthService;

    constructor(public title: Title,
                public http: Http,
                private authService: AuthService,
                private router: Router,
                private _formBuilder: FormBuilder) {
        this._authService = authService;

        this.username = _formBuilder.control('', Validators.required);
        this.password = _formBuilder.control('', Validators.required);

        this.userForm = _formBuilder.group({
            username: this.username,
            password: this.password
        });

    }


    ngOnInit() {
        console.log('Hello Login component');
    }

    login() {
        this._authService.logIn();
        this.router.navigate(['Home']);
    }
}
