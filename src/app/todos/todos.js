export class TodoService {
  addTodo(date, time, text, description, todos) {
    var count = todos.length;
    var maxId = 0;
    for (var i = 0; i < count; i++)
    {
      maxId = todos[i].id > maxId ? todos[i].id : maxId;
    }
    return [
      {
        id: maxId + 1,
        completed: false,
        date,
        time,
        text,
        description
      }
    ].concat(todos);
  }

  completeTodo(id, todos) {
    return todos.map(todo => {
      return todo.id === id ?
        Object.assign({}, todo, {completed: !todo.completed}) :
        todo;
    });
  }

  deleteTodo(id, todos) {
    return todos.filter(todo => todo.id !== id);
  }

  editTodo(id, date, time, text, description, todos) {
    return todos.map(todo => {
      return todo.id === id ?
        Object.assign({}, todo, {date, time, text, description}) :
        todo;
/*
Object.assign({}, todo, {date, time, text, description}) :
*/
    });
  }

  completeAll(todos) {
    const areAllMarked = todos.every(todo => todo.completed);
    return todos.map(todo => Object.assign({}, todo, {completed: !areAllMarked}));
  }

  clearCompleted(todos) {
    return todos.filter(todo => {
      return todo.completed === false;
    });
  }
}

export const todoItem1 = {date:'2/08/2016',
              time:'9:00',
              text: 'Welcome',
              description:'Welcome meeting',
              completed: false,
              id: 0
            };
export const todoItem2 = {date:'2/08/2016',
              time:'9:15',
              text: 'Break time',
              description:'Coffee break',
              completed: false,
              id: 1
            };
export const todoItem3 = {date:'2/08/2016',
              time:'10:00',
              text: 'Presentation',
              description:'Project revision',
              completed: false,
              id: 2
            };
