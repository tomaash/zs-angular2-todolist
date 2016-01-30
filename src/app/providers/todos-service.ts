import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodosService {
  list: Array<Object>;
  current = '';
  busy: Boolean = false;
  error: Boolean = false;
  constructor(private http: Http) {
    this.reload();
  }

  reload() {
    this.busy = true;
    this.http.get('https://zs-todo-api.herokuapp.com/todos')
      .subscribe(
        data => {
          this.list = data.json();
          this.busy = false;
        },
        err => {
          this.error = true;
          this.busy = false;
          console.log(err);
        }
      );
    }

  addTodo() {
    var headers = new Headers();
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
      );
  }
}
