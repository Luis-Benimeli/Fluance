class TodoTextInputController {
  /** @ngInject */
  constructor(todoService, $window, $timeout) {
    this.$timeout = $timeout;
    this.$window = $window;
    this.todoService = todoService;
    this.editing = this.editing || false;
    this.todo = this.todo;
    this.date = this.date || '';
    this.time = this.time || '';
    this.text = this.text || '';
    this.description = this.description || '';
/*    this.todo = this.todo || '';
    this.date = this.todo.date || this.date || '';
    this.time = this.todo.time || this.time || '';
    this.text = this.todo.text || this.text || '';
    this.description = this.todo.description || this.description || '';
*/
    if (this.text.length) {
      this.focus();
    }
  }

  handleSubmit(e) {
    this.onSave({date: this.date,
                time: this.time,
                text: this.text,
                description:this.description});
    if (this.newTodo) {
      this.date = '';
      this.time = '';
      this.text = '';
      this.description = '';
    }
  }

  handleSave(e) {
    this.onSave({
      date: this.date, 
      time: this.time,
      text: this.text,
      description: this.description});
  }

  focus() {
    this.$timeout(() => {
      const element = this.$window.document.querySelector('.editing .textInput');
      if (element) {
        element.focus();
      }
    }, 0);
  }
}

export const TodoTextInput = {
  templateUrl: 'app/components/TodoTextInput.html',
  controller: TodoTextInputController,
  bindings: {
    onSave: '&',
    placeholder: '@',
    newTodo: '@',
    editing: '@',
    todo: '<',
    date: '<',
    time: '<',
    text: '<',
    description: '<',
  }
};
