import { createElement } from "../fonctions/dom.js"

export class ToDolist {

    #todos = []

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
        const list = element.querySelector('.list-group')
        for(let todo of this.#todos){
            const t = new ToDolistItem(todo)
            t.appendTo(list)
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

        button.addEventListener('click',(e) => this.remove(e))

        this.#element = li
    }

    appendTo(element){
        element.append(this.#element)
    }

    remove(e) {
        //e.peventDefault
        this.#element.remove()
    }
}