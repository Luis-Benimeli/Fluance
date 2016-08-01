class HeaderController {
  /** @ngInject */
  constructor(todoService) {
    this.todoService = todoService;
  }

  handleSave(date, time, text, description) {
    if (text.length !== 0) {
      this.todos = this.todoService.addTodo(date, time, text, description, this.todos);
    }
  }
}

export const Header = {
  templateUrl: 'app/components/Header.html',
  controller: HeaderController,
  bindings: {
    todos: '='
  }
};
