/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
<section class="main-content">
  <div class="wrapper">
    <div class="title-container flex">
      <h1 class="list-title">Today's To Do</h1>
      <i class="font-color fa-solid fa-rotate"></i>
    </div>
    <form action="#" id="list-addition" class="flex">
      <label for="item"></label>
      <input type="text" id="item" name="item" placeholder="Add your new item..." class="new-list">
      <span class="material-symbols-outlined font-color" id="pressed">
        subdirectory_arrow_left
      </span>
    </form>
    <div class="list-container">
      <ul id="ulist" class="to-do-list flex"></ul>
    </div>
    <button id="btn" class="clear-btn" type="button">Clear All completed</button>
  </div>
</section>
`;

import {List} from './functionality';
// const {list} = require('../modules/functionality')

describe('test functionality', () => {
  test('add a list', () => {

    const newList = new List();
  
    newList.add('task1');
    newList.add('task2');
    newList.add('task3');
  
    expect(newList.itemInformation.length).toBe(3)
  });
  
  test('remove a list', () => {
    const newList = new List();
    newList.add('1');
    newList.add('2');
    newList.add('3');
    newList.remove(2);
  
    expect(newList.itemInformation.length).toBe(2);
  })

  test('update a list', () => {
    const newList = new List();
    newList.add('1');
    newList.add('2');
    newList.add('3');
    newList.edit(2, 'changed content')
  
    expect(newList.itemInformation[2].listItem).toBe('changed content');
  })

  test('remove completed', () => {
    const newList = new List();
    newList.add('1', true);
    newList.add('2');
    newList.add('3', true);
    newList.removeCompleted();
  
    expect(newList.itemInformation.length).toBe(1);
  })
});

