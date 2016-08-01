import {SHOW_ALL} from '../constants/TodoFilters';
import {todoItem1, todoItem2, todoItem3} from '../todos/todos';

class AppController {
  constructor() {
    this.todos = [todoItem1, todoItem2, todoItem3];
    this.filter = SHOW_ALL;
  }
}

export const App = {
  templateUrl: 'app/containers/App.html',
  controller: AppController
};
