const noteId = location.hash.substring(1);

// create VARIABLE notes
let notesJSON = localStorage.getItem('notes');

let notes = checkStorage();

const note = notes.find(function (note) {
  return note.id === noteId;
});

// create header from title
let pageTitle = document.createElement('h1');
pageTitle.textContent = note.title;
document.querySelector('.header-noteTitle').appendChild(pageTitle);

// fill values in text boxes if available
document.querySelector('#note-title').value = note.title;
note.body = document.querySelector('#editNoteBody').value = note.body;

// save values when hitting enter
document.querySelector('.edit-form').addEventListener('submit', function (e) {
  e.preventDefault();
  note.title = document.querySelector('#note-title').value;
  note.body = document.querySelector('#editNoteBody').value;
  console.log(note.title);
  saveNotes(notes);
  location.assign('../index.html');
});

console.log(note.date);

let dateDisplay = document.createElement('h6');
const convertTimestamp = new Date(timestamp);
dateDisplay.textContent = `Date: ${convertTimestamp.toLocaleDateString()}`;

document.querySelector('.noteDate').appendChild(dateDisplay);
