// eslint-disable-next-line
import _ from 'lodash';
import './styles.css';

const itemInformation = [
  {
    id: 1,
    item: 'Cleaning',
    status: false,
  },
  {
    id: 2,
    item: 'Working',
    status: false,
  },
  {
    id: 3,
    item: 'Playing',
    status: false,
  },
];

for (let i = 0; i < itemInformation.length; i += 1) {
  document.getElementById('ulist').innerHTML += `
  <li class="to-do-list-item flex">
    <div class="checkbox-container">
      <input type="checkbox" class="checkbox-input" name="${itemInformation[i].item}" id="${itemInformation[i].number}">
      <label for="${itemInformation[i].item}">${itemInformation[i].item}</label>
    </div>
    <i class="font-color fa-solid fa-ellipsis-vertical"></i>
  </li>`;
}
