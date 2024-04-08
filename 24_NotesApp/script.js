const input = document.querySelector('input')
const saveBtn = document.querySelector('.save-note')
const errorMessage = document.querySelector('.error-message')
const notesContainer = document.querySelector('.notes-container')

let currentEditedNote = null

function createNewNote() {
    const extractInputText = input.value.trim();
    if (extractInputText.length <= 0) {
        errorMessage.classList.add('show')
        errorMessage.textContent =
            "Input can not be empty ! You must write some note to proceed";
        return false;
    }
    if (saveBtn.textContent == 'Save') {
        const newNote = addNewNote(input.value)
        notesContainer.appendChild(newNote)
        saveToLocalStorage(input.value)
        input.value = ''
        errorMessage.classList.remove('show')
        errorMessage.textContent = ''
    } else {
        handleEditNote(currentEditedNote.children[0].innerHTML)
        currentEditedNote.children[0].innerHTML = extractInputText
        input.value = ''
        errorMessage.classList.remove('show')
        errorMessage.textContent = ''
        saveBtn.textContent = 'Save'
    }
}

function addNewNote(noteItem) {
    const li = document.createElement('li')
    const p = document.createElement('p')
    const editBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')

    li.classList.add('note-item')
    p.classList.add('note')
    editBtn.classList.add('edit')
    deleteBtn.classList.add('delete')

    p.innerHTML = noteItem
    editBtn.textContent = 'Edit'
    deleteBtn.textContent = 'Delete'

    li.appendChild(p)
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)

    return li;
}

function saveToLocalStorage(note) {
    let noteList;
    if (localStorage.getItem('notes') === null) {
        noteList = []
    } else {
        noteList = JSON.parse(localStorage.getItem('notes'))
    }
    noteList.push(note)
    localStorage.setItem('notes', JSON.stringify(noteList))
}

function loadNotes() {
    input.value = ''
    let noteList;
    if (localStorage.getItem('notes') === null) {
        noteList = []
    } else {
        noteList = JSON.parse(localStorage.getItem('notes'))
    }
    // console.log(noteList);
    noteList.forEach(noteItem => notesContainer.appendChild(addNewNote(noteItem)))
}

function handleDeleteNote(currentNote) {
    // console.log(currentNote.children[0].innerHTML);
    const currentNoteItem = currentNote.children[0].innerHTML
    let noteList
    if (localStorage.getItem('notes') === null) {
        noteList = []
    } else {
        noteList = JSON.parse(localStorage.getItem('notes'))
    }
    const index = noteList.indexOf(currentNoteItem)
    // console.log(noteList);
    noteList.splice(index, 1)
    // console.log(noteList);
    localStorage.setItem('notes', JSON.stringify(noteList))
}

function handleEditNote(currentNote) {
    let notes = JSON.parse(localStorage.getItem('notes'))
    const index = notes.indexOf(currentNote)
    console.log(notes);
    notes[index] = input.value
    console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes))
}

function handleEditOrDelete(e) {
    // console.log(e.target.parentNode);
    if (e.target.textContent == 'Delete') {
        handleDeleteNote(e.target.parentNode)
        notesContainer.removeChild(e.target.parentNode)
        errorMessage.classList.remove('show')
    }
    if (e.target.textContent == 'Edit') {
        saveBtn.textContent = 'Update'
        input.value = e.target.parentNode.children[0].innerHTML
        currentEditedNote = e.target.parentNode
        errorMessage.classList.remove('show')
    }
}

saveBtn.addEventListener('click', createNewNote)
notesContainer.addEventListener('click', handleEditOrDelete)

loadNotes()