import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http, Headers} from 'angular2/http';
import {Todos} from './providers/todos';
import {Observable} from 'rxjs/Observable';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'foo',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Todos
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    ...FORM_DIRECTIVES
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./foo.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./foo.html')
})
export class Foo {
  // TypeScript public modifiers
  constructor(public todos: Todos, public http: Http) {

  }
  handleAdd() {
    console.log(this.todos.current);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var payload = JSON.stringify({name: this.todos.current});
    this.http.post('https://zs-todo-api.herokuapp.com/todos',
      payload,
      {headers}
      ).subscribe(
        data => this.todos.reload(),
        err => console.log(err),
        () => console.log('Post Complete')
      );
    console.log('hiboy');
    // this.todos.list = this.todos.list.concat(Observable.of([{name:"debil"}]));
    // this.todos.list.next({name:this.todos.current});
  }
  ngOnInit() {
    console.log('hello Home component');
  }

}
