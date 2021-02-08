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
    let noteTitle = document.createElement('span');
    noteTitle.textContent = '  - ' + note.title;
    noteTitle.setAttribute('class', 'noteSpan');

    let editButton = document.createElement('button');
    editButton.textContent = ' Edit ';
    editButton.setAttribute('class', 'editButton');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = ' x ';
    editButton.setAttribute('class', 'deleteButton');

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
  notes.push({
    title: noteInput,
    body: '',
    id: uuidv4(),
  });
}

// save notes
function saveNotes(notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
}