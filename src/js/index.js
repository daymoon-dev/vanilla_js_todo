import style from '../style/css/style.css';
import * as add from './addTodo';

const submit = document.getElementById('submit-button');
const input = document.getElementById('todo-input');

// Case 1. When Enter-key in the Input Form
input.addEventListener('keydown', keydown);

// Case 2. When Click the Submit Button
submit.addEventListener('click', addTemplate);