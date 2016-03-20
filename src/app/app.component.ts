import {Component} from 'angular2/core';
import { TodoComponent } from './../todo/todo.component';

@Component({
    selector: 'my-app',
    template: '<todo></todo>',
    directives: [TodoComponent]
})
export class AppComponent { }
