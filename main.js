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

function renderNotesDOM(notes, filters) {
  let filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.text.toLowerCase());
  });

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
}

document
  .querySelector('#note-filter-input')
  .addEventListener('input', function (e) {
    filters.text = e.target.value;
    console.log(e.target.value);
  });
