let notesJSON = localStorage.getItem('notes');
let notes = checkStorage();

let filters = {
  text: '',
  sortBy: 'date',
};

// main render focus
function renderNotesDOM(notes, filters) {
  sortNotes(notes, filters.sortBy);
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
  });

document.querySelector('#sortBy').addEventListener('change', function (e) {
  filters.sortBy = e.target.value;
  document.querySelector('.notes').innerHTML = '';
  renderNotesDOM(notes, filters);
});

// document.querySelector(window).addEventListener('reload', function (e) {
//   document.querySelector('#sortBy').value = 'date';
// });

renderNotesDOM(notes, filters);

// document.addEventListener('load', function (e) {
//   document.querySelector('#sortBy').value = 'date';
// });
