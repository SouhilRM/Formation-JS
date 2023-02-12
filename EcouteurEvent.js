const boutton = document.querySelector('button')

//la méthode "addEventListener" prends en 1er paramettres l'evenement il y'en a plein : click, copy, ..., et en 2eme parammetre une fonction qui va faire un truc quand l'evenement sera declancher
boutton.addEventListener('click', function () {
    console.log('coucou')
    //alert('coucou')
})

//on peut passer en parammetre un event qui sera de type PointerEvent et qui contiens pas mal d'attribut et de méthode qu'on va essayer de checké les prioritaires les autres va voir la doc
boutton.addEventListener('click', function (event) {
    console.log(event)
})

//pour utiliser un ecouteur devent sur plusieurs sections comme ici on a plusieurs boutsons tu peux boucler via le ".foreach(boutton => {boutton.addEventListener('click', function(event){ ton code }})"
//la différence entre le 'target' et le 'currentTarget' c'est que le current target montre la balise exacte comme ici pour le deuxiemme bouton => <button><span></span></button>
document.querySelectorAll('button').forEach(boutton => {
    boutton.addEventListener('click', function(event){
        console.log(event.target, event.currentTarget)
        //remarque le 'this' est équivalent au 'currentTarget'
        console.log(this)
    })
})

//une autre méthode utile c'est "preventDefault()" qui permet d'empecher le comportement par defaut de certains prenons par exemple les liens : 
document.querySelector('#lien').addEventListener('click', e => e.preventDefault())

//passons mnt au ".stopImmediatePropagation()" il permet de stopper la propagation comment ?? par exemple ici normalement les trois evenements se declanchent donc les trois console.log affichent à linterieur du boutton de la div et du body vu que lorceque tu click sur le boutton tu click automatiquement sur le div et le body mais moi je veux juste que l'event se declanche dans mon bouttton c tt donc à l'iterieur du addEventListener de mon boutton jajoute mon event.stopImmediatePropagation() tt simplement
document.querySelector('#popo').addEventListener('click', e=>{
    console.log("à l'interieur du boutton")
    e.stopImmediatePropagation()
})
document.querySelector('#toto').addEventListener('click', ()=>console.log("à l'interieur de la div"))
//document.querySelector('body').addEventListener('click', ()=>console.log("à l'interieur du body"))

//voyons maintenant quelques autres evenements : 
//sur la "form" on a "submit" => specifique au formulaire
document.querySelector('form').addEventListener('submit',(e)=>{
    console.log(e)
    e.preventDefault()//on a rajouter le preventDefault pour empecher l'envoie et pouvoir voir le submit-event dans la console

    //l'un des trucs les plus interessant avec le submitevent c'est qu'il dispose de l'objet FormData() qui permet de recuperer la valeur tapper par l'utilisateur et c'est super utile
    const form = e.currentTarget
    const data = new FormData(form)
    console.log(data.get('prenom'))//et la turecupere ta data via la méthode get()
    /* 
        ce que tu pourrais faire par exemple c'est stocké ta data dans une var et lui dire que tans que ta chaine de cara est trop court je blocke l'envoie de données : 
        const prenom = data.get('prenom')
        if(prenom.length < 5){
            e.preventDefault()
        }
    */
})

//sur "l'input" on a "change" qui permet de savoir si le champ a changé :
document.querySelector('input').addEventListener('change',(e)=>{
    console.log("change a été appelé !!")
    //l'événement sera appelé quand l'utilisateur tape quelque chose dans le champ ET click autre part
})
//si tu veux détécté quand l'utilisateur tape quelque chose dans le champ utilise 'input' :
document.querySelector('input').addEventListener('input',(e)=>{
    console.log("input a été appelé !!")
    //si tu veux voir ce que l'utilisateur est entrein de taper tu mets : 
    console.log(e.currentTarget.value)
})
//petite remarque : le preventDefault() de fonctionne pas sur les 'input'

//maintenant comment recuperer la touche spécifique sur laquelle l'utilisateur a tapé ? => tu utilises l'évent "keydown" et tu peux l'utiliser par tout pas juste sur les 'input' : 
document.addEventListener('keydown',e=>{
    console.log('keydown',e)
    //c'est tres pratique pour fair des racourcis sur un site par exemple si dans mon site l'utilisateur presses Ctrl+s j'aimerai qu'il puisse faire une recherche et coment savoir si il a aussi appuyer sur le Ctrl avec le 's' dans les propriétées de mon event j'ai un attribut "ctrlKey: true"
    if(e.ctrlKey === true && e.key === 's'){
        console.log("tu fais ta recherche :")
    }
})
/*
    tu as "keypress" => qui detecte le moment ou la touche a été appuyée
    tu as "keyup" => qui detecte le moment ou la touche a été relaché
    l'ordre est le suivant : "keydown" ensuite "keypress" ensuite "keyup"
*/

/*
    il y a aussi les event :
    'focus' permet de voir quand un élément sera focus
    'blur' va etre appelé quand je suis focus sur un élément puis je le quitte
*/

//voyons maintenant un autre type d'input qui est les checkbox 
document.querySelector('#form_01 > input').addEventListener('change',e=>{
    console.log(e,'change')
    //pour savoir si la balise est coché ou non : 
    console.log(e.currentTarget.checked)
})

//passons au select : l'event sera ici aussi un change
document.querySelector('select').addEventListener('change',e=>{
    console.log(e)
    //pour avoir la valeur de l'option séléctionnée
    console.log(e.currentTarget.value)
    //pour avoir la l'option séléctionnée
    console.log(e.currentTarget.selectedOptions)//contiens pas mal d'options selon tes besoin
})

//petit exo pour finir : on a un paragraphe qui spoil des éléments et on veux qu'une fois qu'ona clické sur ces elements ils apparaissent
document.querySelectorAll('.spoiler').forEach(spoiler=>{
    spoiler.addEventListener('click',e=>{
        e.currentTarget.classList.remove('spoiler')
    })
})