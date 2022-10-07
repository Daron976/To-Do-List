import {
  addInput,
  trash,
  dots,
  checkboxInput,
} from './data';

export function displayList() {
  this.retrieveFromLocalStorage(this.itemInformation);

  this.itemInformation.forEach((element) => {
    document.getElementById('ulist').innerHTML += `
    <li class="to-do-list-item flex mobile-width">
      <div class="checkbox-container">
        <input type="checkbox" class="checkbox-input" value=${element.id}>
        <label for="${element.listItem}" class="label"><textarea name="${element.listItem}" class="edit-list test" rows="1">${element.listItem}</textarea></label>
      </div>
      <i class="fa-solid fa-trash font-color target"></i>
      <i class="font-color fa-solid fa-ellipsis-vertical display-none"></i>
    </li>`;
  });

  for (let i = 0; i < dots.length; i += 1) {
    trash[i].addEventListener('click', (e) => this.remove(e));
    document.getElementsByClassName('edit-list')[i].addEventListener('keydown', (e) => this.edit(e));
    checkboxInput[i].addEventListener('click', (e) => this.completed(e));
    if (this.itemInformation[i].completed === true) {
      checkboxInput[i].toggleAttribute('checked');
      document.getElementsByClassName('edit-list')[i].classList.add('line-through');
    }
  }

  document.getElementsByTagName('button')[0].addEventListener('click', () => this.removeCompleted());
}

export function createListItem() {
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

export function updateListItem(e) {
  const parent = e.target.parentNode.parentNode;
  // eslint-disable-next-line
  const value = parent.getElementsByClassName('checkbox-input')[0].value;
  if (e.key === 'Enter') {
    e.preventDefault();
    this.itemInformation[value].listItem = e.target.value;
    this.addToLocalStorage();
  }
}

export function removeListItem(e) {
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