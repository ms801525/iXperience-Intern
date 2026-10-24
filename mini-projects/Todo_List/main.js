class Task {
    constructor(task) {
      this.task = task;
    //   this.completed = completed;
    }
  
    static fromJSON(json) {
      return new Task(
        json.task,
      );
    }
  }
  
  class UI {
    constructor() {
      this.form = document.getElementById('form');
  
      this.task = document.getElementById('task-input');
      this.completed =document.getElementById('completed')
    //   this.actions = document.getElementById('actions-input');
  
      this.tableBody = document.getElementById('table-body');
  
      this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
  
      this.tasks = [];
      this.loadtasksFromLocalStorage();
      this.renderTaskTable();
    }
  
    onFormSubmit(e) {
      e.preventDefault();
  
      const Task_list = new Task(
        this.task.value,
        // this.completed.value,
      );
  
      this.tasks.push(Task_list);
  
      this.savetasksToLocalStorage();
      this.renderTaskTable();
    }
  
    renderTaskTable() {
      this.tableBody.innerHTML = '';
  
      for (let i = 0; i < this.tasks.length; i++) {
        const Task_list = this.tasks[i];
  
        const tr = this.createTaskTableRow(Task_list);
        this.tableBody.appendChild(tr);
      }
    }
  
    /*
      <tr>
        <td></td> // task
        <td></td> // completed
        <td></td> // actions 
        <td></td> // actions
      </tr>
    */
    createTaskTableRow(Task_list) {
      const tr = document.createElement('tr');
  
      const tdTask = document.createElement('td');
      const tdCompleted = document.createElement('td');
      const tdActions = document.createElement('td');
  
      tdTask.innerHTML = Task_list.task;
      tdCompleted.innerHTML = '  <input class="form-check-input" type="checkbox" value="" id="completed">';

  
      const removeButton = this.createRemoveTaskButton(Task_list);
      tdActions.appendChild(removeButton);
  
      tr.appendChild(tdTask);
      tr.appendChild(tdCompleted);
      tr.appendChild(tdActions);
  
      return tr;
    }
  
    createRemoveTaskButton(Task_list) {
      const button = document.createElement('button');
  
      button.setAttribute('class', 'btn btn-danger btn-sm');
      button.innerHTML = 'X'
      button.addEventListener('click', () => this.onRemoveTaskClicked(Task_list));
  
      return button;
    }
  
    onRemoveTaskClicked(Task_list) {
      this.tasks = this.tasks.filter((x) => {
        return Task_list.task !== x.task;
      });
  
      this.savetasksToLocalStorage();
      this.renderTaskTable();
    }
    
  
    savetasksToLocalStorage() {
      const json = JSON.stringify(this.tasks);
      localStorage.setItem('tasks', json);
    }
  
    loadtasksFromLocalStorage() {
      const json = localStorage.getItem('tasks');
      if (json) {
        const TaskArr = JSON.parse(json);
        this.tasks = TaskArr.map(x => Task.fromJSON(x));
      }
    }
  }
  
  const ui = new UI();