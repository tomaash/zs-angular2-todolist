/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {TimerService} from './providers/timer-service';
import {RouterActive} from './directives/router-active';
import {Home} from './components/home/home';
import {Todos} from './components/todos/todos';
import {Login} from './components/login/login';

import {AuthService} from './providers/auth/auth-service';


/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    providers: [...FORM_PROVIDERS, TimerService, AuthService],
    directives: [...ROUTER_DIRECTIVES, RouterActive],
    pipes: [],
    styles: [`
    nav ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    nav li {
      display: inline;
    }
    nav li.active {
      background-color: lightgray;
    }
  `],
    template: `
    <header>
      <nav>
        <h1>{{ name }}</h1>
        <ul>
          <li router-active="active">
            <a [routerLink]=" ['Index'] ">Index</a>
          </li>
          <li router-active="active">
            <a [routerLink]=" ['Home'] ">Home</a>
          </li>
          <li router-active="active">
            <a [routerLink]=" ['Todos'] ">Todos</a>
          </li>
          <li *ngIf="!isLogged" router-active="active">
            <a [routerLink]=" ['Login'] ">Login</a>
          </li>
          <li *ngIf="isLogged" >
            <a (click)="logout()">Logout</a>
          </li>

        </ul>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
@RouteConfig([
    {path: '/', component: Home, name: 'Index'},
    {path: '/home', component: Home, name: 'Home'},
    {path: '/todos', component: Todos, name: 'Todos'},
    {path: '/login', component: Login, name: 'Login'},
    {path: '/**', redirectTo: ['Index']}
])
export class App {
    name = 'Angular2 Todo Example';
    _authService: AuthService;
    isLogged: boolean;
    logout: Function;

    constructor(timerService: TimerService, authService: AuthService) {
        this._authService = authService;


        this._authService.isLogged$.subscribe(isLogged => {
            console.log(isLogged);
            this.isLogged = isLogged;
        });
    }

    logout() {
        this._authService.logOut();
    }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
