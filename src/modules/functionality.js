import { checkbox, completedBtn } from './completion';
import { deleteBtnFocusedIn, deleteBtnFocusedOut } from './toggleTrashCan';
import {
  createListItem,
  displayList,
  removeListItem,
  updateListItem,
} from './CRUD';
import { getLocalStorageItem, setLocalStorageItem } from './storage';

export default class List {
  constructor() {
    this.itemInformation = [];
  }

  addToLocalStorage = setLocalStorageItem;

  retrieveFromLocalStorage = getLocalStorageItem;

  display = displayList;

  add = createListItem;

  edit = updateListItem;

  remove = removeListItem;

  displayDel = deleteBtnFocusedIn;

  focusedOut = deleteBtnFocusedOut;

  completed = checkbox;

  removeCompleted = completedBtn;
}