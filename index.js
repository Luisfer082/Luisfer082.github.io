//datos inputs
let tarea = document.querySelector(".tarea")
let descripcion = document.querySelector(".tdescrip")
let agregar = document.querySelector(".agregar")
let Actualizar = document.querySelector(".actualizar")

const listaDeTareas = document.querySelector(".listaDeTareas")
//guardados en local
const local = window.localStorage
//evento guardar objets
agregar.onclick = () => {
    //Ojeto con datos de los inputs
    let datostarea = {
        id: Math.random(1,100),
        tarea: tarea.value,
        descripcion: descripcion.value
        
    }
    guardarTarea(local,datostarea)

}
//funcion para crear los elementos html en la lista con los datos 
cargartarea(local,listaDeTareas)