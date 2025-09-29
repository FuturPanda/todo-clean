import { Task } from './types/task.type';

function addTodo(task: Task) {
  if (!task.title) throw new Error('Title is required');
  console.log(task);
}
