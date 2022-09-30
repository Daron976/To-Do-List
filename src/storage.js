export function setLocalStorageItem() {
  localStorage.setItem('listObject', JSON.stringify(this.itemInformation));
}

export function getLocalStorageItem() {
  this.itemInformation = JSON.parse(localStorage.getItem('listObject')) ?? [];
}