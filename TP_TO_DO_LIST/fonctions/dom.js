export function createElement(tagName, attributes = {}){
    const element = document.createElement(tagName)
    for(const [attribute,value] of Object.entries(attributes)){//va check la doc de mozila => "Object.entries"
        element.setAttribute(attribute, value)
    }
    return element
}