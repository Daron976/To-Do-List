/* eslint-disable */ 

export class List {
  constructor() {
    this.itemInformation = [];
  }

  addToLocalStorage = () => localStorage.setItem('listObject', JSON.stringify(this.itemInformation))

  retrieveFromLocalStorage = () => {
    this.itemInformation = JSON.parse(localStorage.getItem('listObject')) ?? []
  };

  display = () => {
    this.retrieveFromLocalStorage(this.itemInformation);

    this.itemInformation.forEach((element) => {
      document.getElementById('ulist').innerHTML += `
      <li class="to-do-list-item flex">
        <div class="checkbox-container">
          <input type="checkbox" class="checkbox-input" value=${element.id}>
          <label for="${element.listItem}" class="label"><textarea name="${element.listItem}" class="edit-list test" rows="1">${element.listItem}</textarea></label>
        </div>
        <i class="fa-solid fa-trash font-color target"></i>
        <i class="font-color fa-solid fa-ellipsis-vertical display-none"></i>
      </li>`;
    });
  
    // for (let i = 0; i < dots.length; i += 1) {
    //   trash[i].addEventListener('click', (e) => this.remove(e));
    //   document.getElementsByClassName('edit-list')[i].addEventListener('keydown', (e) => this.edit(e));
    //   checkboxInput[i].addEventListener('click', (e) => this.completed(e));
    //   if (this.itemInformation[i].completed === true) {
    //     checkboxInput[i].toggleAttribute('checked');
    //     document.getElementsByClassName('edit-list')[i].classList.add('line-through');
    //   }
    // }
  
    // document.getElementsByTagName('button')[0].addEventListener('click', () => this.removeCompleted());
  }

  add = (value, status = false) => {
    const details = {
      id: this.itemInformation.length,
      listItem: value,
      completed: status,
    };
    this.itemInformation.push(details);
    this.addToLocalStorage();
    // document.getElementById('ulist').innerHTML = '';
    this.display();
  }

  edit = (pos, value) => {
    // const parent = e.target.parentNode.parentNode;
    // eslint-disable-next-line
    // const value = parent.getElementsByClassName('checkbox-input')[0].value;
    // if (e.key === 'Enter') {
      // e.preventDefault();
      this.itemInformation[pos].listItem = value;
      this.addToLocalStorage();
    // }
  }

  remove = (pos) => {
    // const clickedTextArea = e.target;
    // const parent = clickedTextArea.parentNode;
    // const targetChild = parent.getElementsByClassName('checkbox-input')[0];
    this.itemInformation.splice(pos, 1);
    for (let i = 0; i < this.itemInformation.length; i += 1) {
      this.itemInformation[i].id = i;
    }
    this.addToLocalStorage();
    document.getElementById('ulist').innerHTML = '';
    this.display();
  }

  completed = (e) => {
    const checked = e.target;
    const parent = checked.parentNode;
    const sibling = parent.getElementsByClassName('label')[0];
    const siblingChild = sibling.firstChild;
    checked.toggleAttribute('checked');
    if (checked.hasAttribute('checked')) {
      this.itemInformation[checked.value].completed = true;
      siblingChild.classList.add('line-through');
      this.addToLocalStorage();
    } else if (!checked.hasAttribute('checked')) {
      this.itemInformation[checked.value].completed = false;
      siblingChild.classList.remove('line-through');
      this.addToLocalStorage();
    }
  }

  removeCompleted = () => {
    const filteredList = this.itemInformation.filter((element) => element.completed === false);
    for (let i = 0; i < filteredList.length; i += 1) {
      filteredList[i].id = i;
    }
    this.itemInformation = filteredList;
    this.addToLocalStorage();
    document.getElementById('ulist').innerHTML = '';
    this.display();
  }
}
