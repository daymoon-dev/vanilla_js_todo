complete = check => {
    const li = check.parentNode;
    if (check.checked) {
        const completeList = document.getElementById('complete-list');

        completeList.insertBefore(li, completeList. childNodes[0]);
    }
    else if (!check.checked){
        const incompleteList = document.getElementById('todo-list');

        incompleteList.appendChild(li);
    };
}