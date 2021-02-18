// check if any notes exist in storage
function checkStorage() {
  if (notesJSON !== null) {
    notes = JSON.parse(notesJSON);
  }
}

// create and display todo components
function displayNote(filteredNotes) {
  // create note objects and add to DOM
  filteredNotes.forEach((note) => {
    let noteTitle = document.createElement('a');
    noteTitle.textContent = '  - ' + note.title;
    noteTitle.setAttribute('class', 'noteSpan');
    noteTitle.setAttribute('href', `./editNote.html#${note.id}`);
    let editButton = document.createElement('button');
    editButton.textContent = ' Edit ';
    editButton.setAttribute('class', 'editButton');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = ' x ';
    deleteButton.setAttribute('class', 'deleteButton');

    // delete button event listener
    deleteButton.addEventListener('click', function (e) {
      removeNote(note.id);
      saveNotes(notes);
      document.querySelector('.notes').innerHTML = '';
      renderNotesDOM(notes, filters);
    });

    // append elements together and to page
    let noteContainer = document.createElement('div');
    noteContainer.setAttribute('class', 'noteComponent');
    noteContainer.appendChild(noteTitle);
    noteContainer.appendChild(editButton);
    noteContainer.appendChild(deleteButton);

    document.querySelector('.notes').appendChild(noteContainer);
  });
}

// add new note
function addNote() {
  let noteInput = document.querySelector('#add-note-input').value;
  const id = uuidv4();
  notes.push({
    title: noteInput,
    body: '',
    id: id,
  });
  location.assign(`./editNote.html#${id}`);
  // createEditHeader(noteInput);
}

// save notes
function saveNotes(notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
}

// match id and delete matching note
function removeNote(id) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === id;
  });

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
}

// function createEditHeader(noteInput) {
//   const editTitle = document.createElement('h1');
//   editTitle.textContent = noteInput;
//   document.querySelector('.editHeader').append(editTitle);
// }
