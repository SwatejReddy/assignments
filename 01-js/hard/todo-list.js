/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

//arr.splice(x,y) -> start at xth index and removes y elements.

class Todo {
  constructor(){
    this.todos = [];
  }
  add(todo){
    this.todos.push(todo);
  }
  remove(indexOfTodo){
    if(indexOfTodo > this.todos.length-1 || indexOfTodo < 0){
      return;
    }
    this.todos.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo){
    if(index > this.todos.length-1 || index < 0){
      return;
    }
    else{
      this.todos[index] = updatedTodo;
    }
  }
  getAll(){
    return this.todos;
  }
  get(indexOfTodo){
    if(indexOfTodo > this.todos.length-1 || indexOfTodo < 0){
      return null;
    }
    return this.todos[indexOfTodo];
  }
  clear(){
    this.todos = []
  }
}

obj = new Todo();

// obj.add('todo-1');
// obj.add('todo-2');
// obj.add('todo-3');
// obj.add('todo-4');
// console.log(obj.getAll());
// obj.update(2,'todo-33');
// console.log(obj.getAll());

module.exports = Todo;
