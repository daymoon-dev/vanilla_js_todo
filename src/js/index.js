import style from '../style/css/style.css';
import * as addTodo from './addTodo';
import * as changeState from './changeState';

const submit = document.getElementById('submit-button');        // Add(submit) button
const input = document.getElementById('todo-input');            // Input

// Add Command Cases
// Case 1. When Enter-key in the Input Form
input.addEventListener('keydown', keydown);
// Case 2. When Click the Submit Button
submit.addEventListener('click', addTemplate);