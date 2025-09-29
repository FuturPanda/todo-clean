import { Todo } from './types/todo.type';

export function addTodo(todo: Todo) {
  if (!todo.title) throw new Error('Title is required');
  console.log(todo);
}
