import { ToDolist } from "./components/ToDo.js";
import { fetchJson } from "./fonctions/api.js";
import { createElement } from "./fonctions/dom.js";

try {

    const todos = await fetchJson('https://jsonplaceholder.typicode.com/todos/?_limit=7')
    console.log(todos)
    const list = new ToDolist(todos)
    list.appendTo(document.querySelector('#todolist'))

} catch (error) {
    //pour l'erreur on aimerait bien afficher l'alerte que propose bootstrap en rouge

    /* Alors tu pourrais faire ca mais tu devra le fair à chaque fois que tu voudras creer un nouvel élément alors autant creer une fonction
    const alert = document.createElement('div')
    alert.setAttribute('class','alert alert-danger')
    alert.setAttribute('role','alert')
    */
    
    const alertElement = createElement('div',{
            class: 'alert alert-danger m-5',
            role: 'alert'
    })
    alertElement.innerText = `Impossinle de Charger les éléments !!!`
    document.body.prepend(alertElement)
}
