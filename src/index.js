// eslint-disable-next-line
import _ from 'lodash';
import './styles.css';
import List from './modules/functionality';

const newList = new List();

document.getElementById('item').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    newList.add();
  }
});

window.addEventListener('load', () => {
  newList.display();
});