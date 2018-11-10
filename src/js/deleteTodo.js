deletetodo = deleteTodoElement => {
    const todoElement = deleteTodoElement.parentNode;
    todoElement.remove(todoElement);
}