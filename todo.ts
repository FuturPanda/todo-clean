import { Task } from './types/task.type';

function addTodo(task: Task) {
  if (!task.title) throw new Error('Title is required');
  if (!task.id) throw new Error('Task id is required');

  console.log(task);
}
