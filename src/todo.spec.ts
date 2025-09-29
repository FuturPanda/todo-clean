import { describe, expect, test } from '@jest/globals';
import { addTodo } from './todo';
import { Todo } from './types/todo.type';

const mockTodo: Todo = {
  id: '1',
  title: 'Test Todo',
  completed: false,
};

const malformedTodo: Partial<Todo> = {
  title: '',
  completed: true,
};

describe('Malformed todo', () => {
  test('should throw en error', () => {
    expect(addTodo(malformedTodo as Todo)).toThrow(
      new Error('Title is required'),
    );
  });
});
