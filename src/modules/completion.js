export function checkbox(e) {
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

export function completedBtn() {
  const filteredList = this.itemInformation.filter((element) => element.completed === false);
  for (let i = 0; i < filteredList.length; i += 1) {
    filteredList[i].id = i;
  }
  this.itemInformation = filteredList;
  this.addToLocalStorage();
  document.getElementById('ulist').innerHTML = '';
  this.display();
}