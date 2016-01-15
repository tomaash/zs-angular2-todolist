import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Todos {
  list: Observable<Array<Object>>;
  local: Observable<Array<Object>>;
  current = 'new';
  constructor(private http: Http) {
    this.reload();
  }

  reload() {
    this.list = this.http.get('https://zs-todo-api.herokuapp.com/todos')
      .map(data => data.json());
  }
}
