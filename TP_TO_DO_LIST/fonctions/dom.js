export function createElement(tagName, attributes = {}){
    const element = document.createElement(tagName)
    for(const [attribute,value] of Object.entries(attributes)){//va check la doc de mozila => "Object.entries"
        if(value !== false && value !== null){
            element.setAttribute(attribute, value)
        }
    }
    return element
}