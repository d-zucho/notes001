const noteId = location.hash.substring(1);

// create VARIABLE notes
let notesJSON = localStorage.getItem('notes');

let notes = checkStorage();

const note = notes.find(function (note) {
  return note.id === noteId;
});

// create header from title
