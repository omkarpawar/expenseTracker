
function displayExistingTodos() {
    const todoList = document.getElementById('todoList');

    
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];

    
    storedTodos.forEach(todo => {
        const todoItem = createTodoItem(todo);
        todoList.appendChild(todoItem);
    });
}


function createTodoItem(todo) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const todoContent = document.createElement('span');
    todoContent.textContent = `${todo.expenseAmount} - ${todo.description} - ${todo.category}`;

    const editButton = createButton('Edit', 'edit-btn', function() {
        
        document.getElementById('expenseAmount').value = todo.expenseAmount;
        document.getElementById('Description').value = todo.description;
        document.getElementById('Category').value = todo.category;

        
        todoItem.parentNode.removeChild(todoItem);
    });

    const deleteButton = createButton('Delete', 'delete-btn', function() {
        
        todoItem.parentNode.removeChild(todoItem);
    });

    todoItem.appendChild(todoContent);
    todoItem.appendChild(editButton);
    todoItem.appendChild(deleteButton);

    return todoItem;
}


function createButton(text, className, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add(className);
    button.onclick = onClick;
    return button;
}


function saveTodoToLocalStorage(todo) {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    storedTodos.push(todo);
    localStorage.setItem('todos', JSON.stringify(storedTodos));
}


const form = document.getElementById('Pform');


function display(event) {
    
    event.preventDefault();

    
    const expenseAmount = document.getElementById('expenseAmount').value;
    const description = document.getElementById('Description').value;
    const category = document.getElementById('Category').value;

    
    const formData = {
        expenseAmount: expenseAmount,
        description: description,
        category: category
    };

    
    localStorage.setItem('formData', JSON.stringify(formData));

    
    const todoItem = createTodoItem(formData);
    const todoList = document.getElementById('todoList');
    todoList.appendChild(todoItem);

    
    saveTodoToLocalStorage(formData);

    
    form.reset();
}
window.onload = function() {
    displayExistingTodos();
};
