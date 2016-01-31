import {Injectable} from 'angular2/core';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';

@Injectable()
export class AuthService {

    @Output() isLogged$: EventEmitter<any> = new EventEmitter();

    private _isLogged: boolean;

    constructor() {
        this._isLogged = false;
    }

    public logIn() {
        this._isLogged = true;
        this.propagateChange();
    }

    public logOut() {
        this._isLogged = false;
        this.propagateChange();
    }

    public isLogged() {
        return this._isLogged;
    }

    private propagateChange() {
        this.isLogged$.emit(this._isLogged);
    }


}
