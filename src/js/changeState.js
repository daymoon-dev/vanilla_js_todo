// checkbox addEventListner가 먹히지 않아서
// 생성하면서 onclick checkbox에 onclick 이벤트를 생성했다
// checkbox.onclick으로 생성되지 않아서 checkbox.setAttribute('onclick', method(this))로 생성함

// 생성되는 리스트 마다 id 값을 넣어줌
// TODO: 전역변수를 사용하지 않고 카운트를 늘릴 수 있는 방법은 없을까?
// checkbox checked 여부에 따라 소속(?)이 달라지도록 함

complete = ( check ) => {
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