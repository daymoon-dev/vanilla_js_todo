//TODO: 전역변수 사용하지 않고 count 올릴 방법 생각하기
let tdcount = 1;

// Create Template
createTemplate = (todoTxt) => {
    // Create Elements
    const li = document.createElement('li'),                // List
          label = document.createElement('label'),          // To-do Text
          editBtn = document.createElement('button'),       // Edit Button
          deleteBtn = document.createElement('button'),     // Delete Button
          checkBox = document.createElement('input');       // Checkbox
    
    // Set Attribute of Elements
    label.innerHTML = todoTxt.value.trim();                        // Get Input Form Value 
    editBtn.className = 'edit-todo';                        // Set Edit Button Classname
    deleteBtn.className = 'delete-todo';                    // Set Delete Button Classname
    checkBox.setAttribute('onclick', 'complete(this)');
    checkBox.type = 'checkbox';                             // Set Input type (checkbox)
    editBtn.innerHTML = '수정';                              // Set Text in Edit Button
    deleteBtn.innerHTML = ' X ';                            // Set Text in Delete Button

    // Appending Todo Elements in List
    li.appendChild(checkBox)
    li.appendChild(label);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    li.id = `td_${tdcount}`;
    checkBox.id = `${li.id} checkbox`;

    tdcount++;

    return li;
}

// Add Template in Incomplete Section
addTemplate = () => {
    const input = document.getElementById('todo-input'),    // Input Form
          ul = document.getElementById('todo-list'),        // Incomplete List
          template = createTemplate(input);                 // To-do Template

    // When the input form is empty
    if ( input.value === '' ) {
        alert('Please Input Text...');
    } else {
        // Appending List Template
        ul.insertBefore(template, ul.childNodes[0]);

        // Reset Input Form
        input.value = '';
    };
}

// When the Enterkey Press
keydown = (e) => {
    if(e.keyCode === 13){
        addTemplate();
    };
}