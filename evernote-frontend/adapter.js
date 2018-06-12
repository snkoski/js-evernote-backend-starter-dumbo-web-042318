function urlMaker(id = '') {
  return 'http://localhost:3000/api/v1/notes/' + id
}

function getNotes() {
  return fetch(urlMaker()).
  then(res => res.json())
}

function showNote(id) {
  return fetch(urlMaker(id)).
  then(res => res.json())
}

function deleteNote(id) {
  return fetch(urlMaker(id), {
    headers: {
      'content-type': 'application/json'
    },
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
  })
}

function updateNote(data) {
  return fetch(urlMaker(data.id), {
    body: JSON.stringify(data), // must match
    headers: {
      'content-type': 'application/json'
    },
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
  })
  .then(response => response.json())
}

// NEEDS WORK
function createNote(data) {
  return fetch(urlMaker(), {
    body: JSON.stringify(data), // must match
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
  })
  .then(response => response.json()) // parses response to JSON
}
