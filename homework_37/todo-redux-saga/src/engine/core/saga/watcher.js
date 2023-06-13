import { takeEvery } from 'redux-saga/effects';
import { todosAsyncAction } from './asyncAction';
import { callGetTodosWorker } from './workers/getTodos';
import { callAddTodoWorker } from './workers/addTodo';
import { callRemoveAllWorker } from './workers/removeAllTodos';
import { callRemoveTodoWorker } from './workers/removeTodo';
import { callEditTodoWorker } from './workers/editTodo';
import { callCheckTodoWorker } from './workers/checkTodo';

export function* todosWatcher() {
    yield takeEvery(todosAsyncAction.getTodosAsync.type, callGetTodosWorker);
    yield takeEvery(todosAsyncAction.addTodoAsync.type, callAddTodoWorker);
    yield takeEvery(todosAsyncAction.removeAllTodosAsync.type, callRemoveAllWorker);
    yield takeEvery(todosAsyncAction.removeTodoAsync.type, callRemoveTodoWorker);
    yield takeEvery(todosAsyncAction.editTodoAsync.type, callEditTodoWorker);
    yield takeEvery(todosAsyncAction.checkTodoAsync.type, callCheckTodoWorker);
}