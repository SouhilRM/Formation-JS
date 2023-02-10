export async function fetchJson(url, options = {}){
    const headers = {Accept: 'application/json', ...options.headers}
    const r = await fetch(url, {headers, options})
    if(r.ok){
        return r.json()
    }
    throw new Error('Erreur Serveur !!!', {cause: r})
}

/*
async function main(){
    const r = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=7', {
        headers: {
            Accept: 'application/json'
        }
        option1 : {

        }
        option2 : {
            
        }
        option3 : {
            
        }
    })
    if(!r.ok){
        throw new Error('impossible de contacté le serveur.')
    }

    const posts = await r.json()
    
    console.log(r)
    console.log(posts)
}
*/  