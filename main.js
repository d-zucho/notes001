let notes = [];

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

// add new note, save note, and redirect to edit page
document
  .querySelector('#add-note-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    addNote();
    saveNotes(notes);
    location.assign('./editNote.html');
  });

renderNotesDOM(notes, filters);
