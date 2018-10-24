// Create Template
createTemplate = (todoTxt) => {
    this.todoTxt = todoTxt;

    // Create Elements
    const li = document.createElement('li');
    const label = document.createElement('label');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const checkBox = document.createElement('input');
    
    // Set Attribute of Elements
    label.innerHTML = todoTxt.value;
    checkBox.className = 'complete-todo';
    editBtn.className = 'edit-todo';
    deleteBtn.className = 'delete-todo';
    checkBox.type = 'checkbox';
    editBtn.innerHTML = '수정';
    deleteBtn.innerHTML = ' X ';

    // Appending Todo Elements in List
    li.appendChild(checkBox)
    li.appendChild(label);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    return li;
}

// Add Template in Incomplete Section
addTemplate = () => {
    const input = document.getElementById('todo-input');    // Input Form
    const ul = document.getElementById('todo-list');        // Incomplete List
    const template = createTemplate(input);                 // To-do Template
    
    // When the input form is empty
    if (input.value === '') {
        alert('Please Input Text...');
    } else {
        // Appending List Template
        ul.insertBefore(template, ul.childNodes[0]);
    
        // Reset Input Form
        input.value = '';
    };
}

keydown = (e) => {
    if(e.keyCode === 13){
        addTemplate();
    };
}