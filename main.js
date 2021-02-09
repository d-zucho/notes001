let notes = [
  {
    title: 'my next trip',
    body: 'I would like to go to spain',
  },
  {
    title: 'I think I am really lonely and depressed',
    body:
      "I think it's because I feel like I am a failure and dont know what to do with my life.",
  },
  {
    title: 'And another note',
    body: 'With some body section',
  },
];

let filters = {
  text: '',
};

let notesJSON = localStorage.getItem('notes');

checkStorage();

// main render focus
function renderNotesDOM(notes, filters) {
  let filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.text.toLowerCase());
  });

  // display individual note components
  displayNote(filteredNotes);
}

// assign filter input to filters text
document
  .querySelector('#note-filter-input')
  .addEventListener('input', function (e) {
    filters.text = e.target.value;
    // console.log(e.target.value);
    document.querySelector('.notes').innerHTML = '';
    renderNotesDOM(notes, filters);
  });

// add new note
document
  .querySelector('#add-note-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    addNote();
    saveNotes(notes);
    document.querySelector('#add-note-input').value = '';
    document.querySelector('.notes').innerHTML = '';
    renderNotesDOM(notes, filters);
  });

renderNotesDOM(notes, filters);
