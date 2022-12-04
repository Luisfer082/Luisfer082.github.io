 // funcion para guardar en local como cadena de texto
const guardarTarea = (local,datostarea) =>{
    local.setItem(datostarea.id, JSON.stringify(datostarea))
    // para actulizar pagian de manera forzada
    window.location.href ="/"

}
//para pasar a array
const cargartarea = (local, parentNode) =>{
    let claves = Object.keys(local)
    
    
    for(clave of claves){
        //pasar de string a valores
        let datostarea = JSON.parse(local.getItem(clave))
    
        creartarea(parentNode,datostarea,local)
    }

}
//crear elementos de html
const creartarea = (parentNode,datostarea,local) =>{
    let divTarea = document.createElement("div")
    let h4tarea = document.createElement("span")
    let h4desc = document.createElement("span")
    let iconoborrar = document.createElement("span")
    let iconoActualizar = document.createElement("span")

    h4tarea.innerHTML = datostarea.tarea
    h4desc.innerHTML = datostarea.descripcion
    iconoborrar.innerHTML = "Eliminar"
    iconoActualizar.innerHTML ="Editar"
// clases de css
    divTarea.classList.add("tareaContenedor")
    iconoborrar.classList.add("simbolo")
    iconoActualizar.classList.add("simboloActualizar")


    iconoborrar.onclick = () =>{
        local.removeItem(datostarea.id)
        window.location.href = "/"  
    }

    iconoActualizar.onclick = () =>{
        alert("aaaa")
       local.getItem(datostarea)

    }

    divTarea.appendChild(h4tarea)
    divTarea.appendChild(h4desc)
    divTarea.appendChild(iconoborrar)
    divTarea.appendChild(iconoActualizar)

    parentNode.appendChild(divTarea)

}
















