import {
  addInput,
  trash,
  dots,
} from './data';

export default class List {
  constructor() {
    this.itemInformation = [];
  }

  addToLocalStorage = () => { localStorage.setItem('listObject', JSON.stringify(this.itemInformation)); }

  retrieveFromLocalStorage = () => {
    this.itemInformation = JSON.parse(localStorage.getItem('listObject')) ?? [];
  }

  display = () => {
    this.retrieveFromLocalStorage(this.itemInformation);
    this.itemInformation.forEach((element) => {
      document.getElementById('ulist').innerHTML += `
      <li class="to-do-list-item flex">
        <div class="checkbox-container">
          <input type="checkbox" class="checkbox-input" value=${element.id}>
          <label for="${element.listItem}"><textarea name="${element.listItem}" class="edit-list" rows="1">${element.listItem}</textarea></label>
        </div>
        <i class="fa-solid fa-trash font-color target"></i>
        <i class="font-color fa-solid fa-ellipsis-vertical display-none"></i>
      </li>`;
    });
    for (let i = 0; i < dots.length; i += 1) {
      trash[i].addEventListener('click', (e) => this.remove(e));
      document.getElementsByClassName('edit-list')[i].addEventListener('keydown', (e) => this.edit(e));
    }
  }

  add = () => {
    const details = {
      id: this.itemInformation.length,
      listItem: addInput.value,
      completed: false,
    };
    this.itemInformation.push(details);
    addInput.value = '';
    this.addToLocalStorage();
    document.getElementById('ulist').innerHTML = '';
    this.display();
  }

  edit = (e) => {
    const parent = e.target.parentNode.parentNode;
    // eslint-disable-next-line
    const value = parent.getElementsByClassName('checkbox-input')[0].value;
    if (e.key === 'Enter') {
      e.preventDefault();
      this.itemInformation[value].listItem = e.target.value;
      this.addToLocalStorage();
    }
  }

  remove = (e) => {
    const clickedTextArea = e.target;
    const parent = clickedTextArea.parentNode;
    const targetChild = parent.getElementsByClassName('checkbox-input')[0];
    this.itemInformation.splice(targetChild.value, 1);
    for (let i = 0; i < this.itemInformation.length; i += 1) {
      this.itemInformation[i].id = i;
    }
    this.addToLocalStorage();
    document.getElementById('ulist').innerHTML = '';
    this.display();
  }

  displayDel = (e) => {
    const parent = e.target.parentNode.parentNode.parentNode;
    const del = parent.getElementsByClassName('fa-trash')[0];
    const pos = parent.getElementsByClassName('fa-ellipsis-vertical')[0];
    del.classList.toggle('display-none');
    pos.classList.toggle('display-none');
  }

  focusedOut = (e) => {
    const parent = e.target.parentNode.parentNode.parentNode;
    const del = parent.getElementsByClassName('fa-trash')[0];
    const pos = parent.getElementsByClassName('fa-ellipsis-vertical')[0];
    pos.classList.toggle('display-none');
    del.classList.toggle('display-none');
  }
}