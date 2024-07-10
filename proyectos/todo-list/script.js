document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const descriptionInput = document.getElementById('description-input');
    const alarmInput = document.getElementById('alarm-input');
    const todoList = document.getElementById('todo-list');
    const clearBtn = document.getElementById('clear-btn');

    addBtn.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        const taskDescription = descriptionInput.value.trim();
        const taskAlarm = alarmInput.value;

        if (taskText !== '') {
            addTask(taskText, taskDescription, taskAlarm);
            todoInput.value = '';
            descriptionInput.value = '';
            alarmInput.value = '';
        }
    });

    todoList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            event.target.parentElement.remove();
        }
    });

    clearBtn.addEventListener('click', () => {
        todoList.innerHTML = '';
    });

    function addTask(task, description, alarm) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="task-header">
                <span>${task}</span>
                <button class="delete-btn">Delete</button>
            </div>
            <div class="description">${description}</div>
            <div class="alarm">${alarm ? `Alarm set for: ${new Date(alarm).toLocaleString()}` : ''}</div>
        `;
        todoList.appendChild(li);

        if (alarm) {
            const alarmTime = new Date(alarm).getTime();
            const now = new Date().getTime();
            const timeToAlarm = alarmTime - now;

            if (timeToAlarm >= 0) {
                setTimeout(() => {
                    alert(`Reminder: ${task}\nDescription: ${description}`);
                }, timeToAlarm);
            }
        }
    }
});
