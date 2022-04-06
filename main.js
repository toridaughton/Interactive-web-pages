let inputField = document.querySelector("input")
let message = document.querySelector("#message")

const addMovie = (event) => {
  event.preventDefault()
  let movie = document.createElement('li')
  let movieTitle = document.createElement("span")
  movieTitle.textContent = inputField.value
  movieTitle.addEventListener("click", crossOffMovie)
  movie.appendChild(movieTitle)

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = "x"
  deleteBtn.addEventListener('click', deleteMovie)
  movie.appendChild(deleteBtn)
  
  let list = document.querySelector("ul")
  list.appendChild(movie)
  inputField.value = " "
}

const form = document.querySelector('form')
form.addEventListener('submit', addMovie)

const deleteMovie = (event) => {
  event.target.parentNode.remove()
  message.textContent = `${event.target.parentNode.firstChild.textContent} Deleted!`
  revealMessage()
}

const crossOffMovie = (event) => {
  event.target.classList.toggle('checked')
  if(event.target.classList.contains("checked") === true){
    message.textContent = `${event.target.textContent} watched!`
  }else{
    message.textContent = `${event.target.textContent} added back!`
  }
  revealMessage()
}

const revealMessage = () => {
  message.classList.remove("hide")
  setTimeout(()=>{
    message.classList.add('hide')
  } ,1000)
}