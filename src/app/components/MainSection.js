import visibilityFilters from '../constants/VisibilityFilters';

class MainSectionController {
  /** @ngInject */
  constructor(todoService) {
    this.todoService = todoService;
    this.selectedFilter = visibilityFilters[this.filter];
    this.completeReducer = (count, todo) => todo.completed ? count + 1 : count;
  }

  handleClearCompleted() {
    this.todos = this.todoService.clearCompleted(this.todos);
  }

  handleCompleteAll() {
    this.todos = this.todoService.completeAll(this.todos);
  }

  handleShow(filter) {
    this.filter = filter;
    this.selectedFilter = visibilityFilters[filter];
  }

  handleChange(todo) {
    this.todos = this.todoService.completeTodo(todo.id, this.todos);
  }

  handleSubmit(e, todo){
    if (e.keyCode === 13){
      if (todo.text.length === 0) {
        this.todos = this.todoService.deleteTodo(todo.id, this.todos);
      } else {
        this.todos = this.todoService.editTodo(todo.id, todo.date, todo.time, todo.text, todo.description, this.todos);
      }
    }
  }

  handleSave(todo)
  {
    if (todo.text.length === 0) {
      this.todos = this.todoService.deleteTodo(todo.id, this.todos);
    } else {
      this.todos = this.todoService.editTodo(todo.id, todo.date, todo.time, todo.text, todo.description, this.todos);
      }
  }


  handleDestroy(todo) {
    this.todos = this.todoService.deleteTodo(todo.id, this.todos);
  }

}

export const MainSection = {
  templateUrl: 'app/components/MainSection.html',
  controller: MainSectionController,
  bindings: {
    todos: '=',
    filter: '<'
  }
};
