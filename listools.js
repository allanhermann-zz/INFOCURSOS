// ponteiro para as datalist
const datalist = {
    "campus": document.getElementById('datalist-campus'),
    "cursos": document.getElementById('datalist-cursos'),
    "anos": document.getElementById('datalist-ano'),
    "turnos": document.getElementById('datalist-turno')
}

// impede a repetição de um elemento no Datalist
const match = prop => e => e.map(
  e => e[prop]
).reduce(
  (a, b) => a.includes(b) ? a : a.concat(b), []
)

//cria o Datalist com os campos, cursos e turnos
function updateDatalist (datalist, options) {
  datalist.innerHTML =  options.reduce((a, b) => a + `<option value="${b}"></option>`, '')
  return datalist

}
