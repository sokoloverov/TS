import { getTodosByCount } from './getApi.js'


window.addEventListener('DOMContentLoaded', () => {
  console.log(getTodosByCount('https://jsonplaceholder.typicode.com/todos'));
})