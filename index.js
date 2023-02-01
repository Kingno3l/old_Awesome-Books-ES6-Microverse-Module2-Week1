import displayDate from './modules/timercount.js';
import {
  add, list, contactlink, allbook, addbook2, contact,
} from './modules/hideandshow.js';
import { DateTime } from './luxon.js';

// Add current time
const now = DateTime.now();
document.querySelector(
  '#date',
).innerHTML = `${now.day} ${now.month}, ${now.year} ${now.hour}:${now.minute}:${now.second}`;

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBook() {
    const container = document.createElement('div');
    container.className = 'book-container';
    container.dataset.id = this.id;

    const buttonRemove = document.createElement('button');
    buttonRemove.className = 'btn';
    buttonRemove.innerHTML = 'remove';
    buttonRemove.dataset.id = this.id;
    const itemP1 = document.createElement('li');

    const itemP1Text = document.createTextNode(`"${this.title}" by ${this.author}`);

    itemP1.appendChild(itemP1Text);

    container.appendChild(itemP1);

    container.appendChild(buttonRemove);
    const listall = document.getElementsByClassName('listall')[0];

    listall.appendChild(container);
  }

  removeBook() {
    const bookContainer = document.querySelector(`div[data-id="${this.id}"]`);
    bookContainer.remove();
  }
}

const form = document.querySelector('form');
const addBook = (ev) => {
  ev.preventDefault();
  const id = Math.random() * 10000000;
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = new Book(id, title, author);
  book.addBook();
  // clear the form for next entry...
  form.reset();
};

const listall = document.getElementsByClassName('listall')[0];

listall.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
    const bookId = e.target.dataset.id;
    const book = new Book(bookId);
    book.removeBook();
  }
});
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', addBook);
});

add.addEventListener('click', () => {
  addbook2.style.display = 'block';
  allbook.style.display = 'none';
  contact.style.display = 'none';
});

list.addEventListener('click', () => {
  allbook.style.display = 'block';
  addbook2.style.display = 'none';
  contact.style.display = 'none';
});

contactlink.addEventListener('click', () => {
  contact.style.display = 'block';
  allbook.style.display = 'none';
  addbook2.style.display = 'none';
});

displayDate();