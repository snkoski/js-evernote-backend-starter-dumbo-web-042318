const notesList = document.getElementById('notes-list')
const notePanel = document.getElementById('note-panel')
const noteBook = document.getElementById('notebooks')
let currentNote = 1;


//load event
document.addEventListener('DOMContentLoaded', loadNotes, loadNote(1), deleteButton())
//hover event done bitchess
notesList.addEventListener('click', (e) => {
  loadNote(e.target.id.slice(5))
  currentNote = (e.target.id.slice(5))
})

document.getElementById('deleteButt').addEventListener('click', deleteNote(Number(currentNote)))
//click event for notelist

//click event for note description that links to parent

function loadNotes(){
  notesList.innerHTML = ""
  notesList.innerText = "DIV 2"

  getNotes()
  .then( notes =>
    notes.forEach((note) => {
      notesList.appendChild(createDiv(note, 5))
    })
  )
}

function createDiv (note, char_limit_42){
  const div = document.createElement('div')
  div.innerHTML += note.title

  div.id = `note-${note.id}`
  div.className = "note"
  if (typeof char_limit_42 !== undefined) {
    div.innerHTML += `<div id= ${ "body-" + note.id}>${note.body.slice(0, char_limit_42)}</div>`
  } else {
      div.innerHTML += `<div>${note.body}</div>`
  }

  return div
}

function loadNote(id){
  notePanel.innerHTML = ""
  notePanel.innerText = "DIV 3"
  showNote(id)
  .then(x => notePanel.appendChild(createDiv(x)))
}

function deleteButton(){
  const delButt = document.createElement('button')
  delButt.innerText = 'Delete'
  delButt.id = 'deleteButt'
  noteBook.appendChild(delButt)
}
