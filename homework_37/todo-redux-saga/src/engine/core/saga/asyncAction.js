import { createAction } from '@reduxjs/toolkit';

export const todosAsyncAction = Object.freeze({
    getTodosAsync: createAction('GET_TODOS_ASYNC'),
    addTodoAsync: createAction('ADD_TODOS_ASYNC'),
    removeAllTodosAsync: createAction('REMOVE_ALL_TODOS_ASYNC'),
    removeTodoAsync: createAction('REMOVE_TODO_ASYNC'),
    editTodoAsync: createAction('EDIT_TODO_ASYNC'),
    checkTodoAsync: createAction('CHECK_TODO_ASYNC')
});