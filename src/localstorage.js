export default class ToDo {
  constructor() {
    const storedData = JSON.parse(localStorage.getItem('ToDo-storage'));
    this.taskList = Array.isArray(storedData) ? storedData : [];
  }

  // add function
  addToDo = (description) => {
    const completed = false;
    const index = this.taskList.length + 1;
    const updatedToDo = [
      ...this.taskList,
      { completed, description, index },
    ];
    this.updateStorage(updatedToDo);
  }

  // remove function
  removeFunction = (index) => {
    const updatedToDo = this.taskList.filter((task) => task.index !== index + 1);
    for (let i = 0; i < updatedToDo.length; i += 1) {
      updatedToDo[i].index = i + 1;
    }
    this.updateStorage(updatedToDo);
  }

  // Get function
  getFromStorage = () => this.taskList;

  // update storage
  updateStorage = (data) => {
    localStorage.setItem('ToDo-storage', JSON.stringify(data));
    this.taskList = data;
  }
}
