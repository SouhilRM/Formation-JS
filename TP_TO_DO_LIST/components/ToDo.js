import { createElement } from "../fonctions/dom.js"

export class ToDolist {

    #todos = []
    #listElement = []

    constructor(todos) {
        this.#todos = todos
    }

    appendTo(element){
        element.innerHTML = `
        <form class="d-flex pb-4">
            <input required="" class="form-control" type="text" placeholder="Acheter des patates..." name="title" data-com.bitwarden.browser.user-edited="yes">
            <button class="btn btn-primary">Ajouter</button>
        </form>
        <main>
            <div class="btn-group mb-4" role="group">
                <button type="button" class=" btn btn-outline-primary active" data-filter="all">Toutes</button>
                <button type="button" class=" btn btn-outline-primary" data-filter="todo">A faire</button>
                <button type="button" class=" btn btn-outline-primary" data-filter="done">Faites</button>
            </div>

            <ul class="list-group">
                
            </ul>
        </main>
        `
        this.#listElement = element.querySelector('.list-group')
        for(let todo of this.#todos){
            const t = new ToDolistItem(todo)
            this.#listElement.append(t.element)
        }
        element.querySelector('form').addEventListener('submit',(e)=>this.#onSubmit(e))

        element.querySelectorAll('.btn-group button').forEach(button => {
            button.addEventListener('click', e => this.#toggleFilter(e))            
        })
    }

    #onSubmit(e){
        const form = e.currentTarget
        e.preventDefault()//pour annuler l'envoie du formulaire
        const title = new FormData(form).get('title').toString().trim()
        //le .tostring()c'est pour sassurer d'avoir bien une chaine de caracteres
        //le .trim()permet de retirer les espaces au debut et à la fin de ma chaine de cara
        if(title === '') return //car j'ai pas envie d'ajouter une tache vide
        
        const todo ={
            id: Date.now(),
            title,
            completed: false,
        }

        const item = new ToDolistItem(todo)
        this.#listElement.prepend(item.element)
        form.reset()// c'st une méthode qui permet de vider les champs d'un formulaire trés pratique
    }

    #toggleFilter(e){
        e.preventDefault()
        const filter = e.currentTarget.getAttribute('data-filter')
        //console.log(filter)
        e.currentTarget.parentElement.querySelector('.active').classList.remove('active')
        e.currentTarget.classList.add('active')

        if(filter === 'todo'){
            this.#listElement.classList.add('hide-completed')
            this.#listElement.classList.remove('hide-todo')
        }else if(filter === 'done'){
            this.#listElement.classList.add('hide-todo')
            this.#listElement.classList.remove('hide-completed')
        }else{
            this.#listElement.classList.remove('hide-todo')
            this.#listElement.classList.remove('hide-completed')
        }
    }
}

class ToDolistItem{
    #element
    constructor(todo){
        const id = `todo-${todo.id}`//tu declare l'id ici pour eviter la repitition
        const li = createElement('li',{
            class: 'todo list-group-item d-flex align-items-center'
        })
        this.#element = li

        const checkbox = createElement('input',{
            class : 'form-check-input',
            type: 'checkbox',
            id: id,
            checked: todo.completed
            //checked: todo.completed ? '' : null
        })
        const label = createElement('label',{
            class: 'ms-2 form-check-label',
            for: id
        })
        label.innerText = todo.title
        const button = createElement('button',{
            class: 'ms-auto btn btn-danger btn-sm'
        })
        button.innerHTML = `<i class="bi-trash"></i>`

        li.append(checkbox)
        li.append(label)
        li.append(button)
        this.toggle(checkbox)

        button.addEventListener('click',(e) => this.remove(e))

        checkbox.addEventListener('change', e => this.toggle(e.currentTarget))

        //this.#element = li
    }

    get element(){
        return this.#element
    }

    remove(e) {
        e.preventDefault()
        this.#element.remove()
    }

    toggle(checkbox){
        if(checkbox.checked){
            this.#element.classList.add('is-completed')
        }
        else{
            this.#element.classList.remove('is-completed')
        }
    }
}