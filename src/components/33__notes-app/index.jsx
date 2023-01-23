import Markdown from 'marked-react'

import './style/style.css'

export default function NotesApp() {
  return (
    <div className='app-33'>
      <div className='body'>
        <button
          className='add'
          id='add'>
          <i className='fas fa-plus'></i> Add note
        </button>
      </div>
    </div>
  )
}

/* 

const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
	notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
	const note = document.createElement('div');
	note.classList.add('note');
	note.innerHTML = `
   <div className="tools">
      <button className="edit"><i className="fas fa-edit"></i></button>
      <button className="delete"><i className="fas fa-trash-alt"></i></button>
   </div>			
   <div className="main ${text ? '' : 'hidden'}"></div>
   <textarea className=" ${text ? 'hidden' : ''}"></textarea>
   `;

	const editBtn = note.querySelector('.edit');
	const deleteBtn = note.querySelector('.delete');
	const main = note.querySelector('.main');
	const textArea = note.querySelector('textarea');

	textArea.value = text;
	main.innerHTML = marked.parse(text);

	deleteBtn.addEventListener('click', () => {
		note.remove();
		updateLS();
	});

	editBtn.addEventListener('click', () => {
		main.classList.toggle('hidden');
		textArea.classList.toggle('hidden');
	});

	textArea.addEventListener('input', (e) => {
		const { value } = e.target;
		main.innerHTML = marked.parse(value);
		updateLS();
	});

	document.body.appendChild(note);
}

function updateLS() {
	const notesText = document.querySelectorAll('textarea');
	const notes = [];
	notesText.forEach((note) => notes.push(note.value));

	localStorage.setItem('notes', JSON.stringify(notes));
}


*/
