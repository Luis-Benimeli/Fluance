class TodoItemController {
  constructor() {
    this.editing = false;
  }

  handleDoubleClick() {
    this.editing = true;
  }

  handleSave(date, time, text, description) {
    this.todo.date = date;
    this.todo.time = time;
    this.todo.text = text;
    this.todo.description = description;
    this.editing = false;
  }

  handleDestroy(id) {
    this.onDestroy({id});
  }
}

export const TodoItem = {
  templateUrl: 'app/components/TodoItem.html',
  controller: TodoItemController,
  bindings: {
    todo: '<',
    date: '<',
    time: '<',
    text: '<',
    description: '<',
    onDestroy: '&',
    onChange: '&',
    onSave: '&',
    onSubmit: '&',
  }
};
