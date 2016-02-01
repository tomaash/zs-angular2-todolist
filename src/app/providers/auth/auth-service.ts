import {Injectable, Output, EventEmitter} from 'angular2/core';
import {Router} from 'angular2/router';

@Injectable()
export class AuthService {

    @Output() isLogged$: EventEmitter<any> = new EventEmitter();

    public static _router: Router;
    public static _isLogged: boolean;

    public static isLoggedWithRedirection() {
        if (!AuthService._isLogged) {
            AuthService._router.navigate(['Login']);
        }
        return AuthService._isLogged;
    }

    public static isLogged(){
        return AuthService._isLogged;
    }

    constructor(private router: Router) {
        AuthService._isLogged = false;
        AuthService._router = router;

    }

    public logIn() {
        AuthService._isLogged = true;
        this.propagateChange();
    }

    public logOut() {
        AuthService._isLogged = false;
        this.propagateChange();
    }


    private propagateChange() {
        this.isLogged$.emit(AuthService._isLogged);
    }

}
