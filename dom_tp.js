function createArticle(post){
    const article = document.createElement('article')

    /*
    si tu fais comme ceci ca marche normal mais c'est pas trés sécur car on pourrai injecter du code via le innerhtml donc le mieux ca reste d'utiliser le innertext meme si ca prends plus de temps
    article.innerHTML = `
        <h2 style="color: red;">${post.title}</h2>
        <p style="color: blue;">${post.body}</p>
    `*/

    //la méthode plus sûr :
    //tu crees ton element
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    //tu le zawwak
    h2.style.color = 'red'
    p.style.color = 'blue'
    //tu le rempli avec innerText
    h2.innerText = post.title
    p.innerText = post.body
    //tu le rajoute dans ta balise article
    article.append(h2)
    article.append(p)

    return article
}

async function main(){
    const wrapper = document.querySelector('#lastPosts')

    try {
        const r = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=7', {
            headers: {
                Accept: 'application/json'
            }
        })
        if(!r.ok){
            throw new Error('impossible de contacté le serveur.')
        }

        const posts = await r.json()
        
        console.log(r)
        console.log(posts)

        for(let post of posts){
            wrapper.append(createArticle(post))
        }

    } catch (error) {
        //l'erreur s'affichera sur la console
        console.log('Ya une erreur hammouda')
        //l'erreur s'affichera dans l'ahtml
        const error_message = document.createElement('h2')
        error_message.innerText = `Impossible de contacté le serveur`
        error_message.style.color = 'red'
        wrapper.append(error_message)
        return
    }
    
}
main()