//L'objet document contient la structure de notre html tu peux mettre window.document mais pas la peine avec document
console.log(document) //affiche le contenu html de ta page

//document.querySelector('#id_1') prends en parametre l'id de l'element html et renvoie ce meme élément trés pratique
console.log(document.querySelector('#id_1')) //affiche le titre h1

//si plusieurs éléments possedent ce meme id il faudra utitliser alor .querySelectorAll('#id_1') pour qu'il renvoie touts les elements sous forme de nodelits
console.log(document.querySelectorAll('#id_1')) //affiche et le titre et la premiere division

//à noter aussi que la methode .querySelector() ne prend pas en parametres que des id mais peux aussi prendre des balises html directement
const nodeList = document.querySelectorAll('li')
console.log(nodeList) //affiche toutes les listes

//Attention une nodeList n'est pas un tableau oui c'est vrai que tu peux acceder à certain éléments comme un tableau comme ca 
console.log(nodeList[1]) //affiche le premier li qui est "LoremLoremLoremLoremLo...."

//mais tu ne peux pas utiliser les méthodes spécifique des tableaux dessus; si toute fois tu voudrai les utiliser il suffit de transformer ta nodeList en un tableau; comment faire ?? => Array.from()
const tabList = Array.from(nodeList)
console.log(tabList) //et mnt tu peux utiliser les methodes des tableaux sur ta var tabList


//Remarque : avant on utilisait la methode .getElementById() au lieu du .querySelector() ca marche tjr mais ca deviendra obcelete car ca prends en compte que les id alors que le selecteur tu peux luis passer pas mal de choses comme des balise (ul), les li qui sont des enfants directs du ul (ul > li), le premier enfant (ul li:first-child),... ca fonctonne comme un selector css

//Explorons quelques methodes du querry selector : 
const ul = document.querySelector('ul') 
console.log(ul) //renvoie tout l'élément UL

console.log(ul.nodeName) //renvoie le nom du noeud html actuel en maj ici c "UL"

console.log(ul.innerHTML) //renvoie la partie html complete de cette element ul; attention tu peux changer le contenu si je fais par exemple un ul.innerHTML = 'coucocu' ca remplacera ta liste par la chainne coucou

console.log(ul.innerText) //renvoie la representation textuelle de l'élément seulement sans balise sans espaces...

console.log(ul.textContent) //renvoie le text aussi mais avec les espaces et les tabulations aussi 

//la difference majeure entre ".innerText" et ".textContent" c'est que ".textContent" AFFICHE du text mis en hidden et meme les script JavaScript contrairement à l'autre méthode

ul.setAttribute('hidden','') //raouter un attribut ici c'est hidden
ul.removeAttribute('hidden') //supprimer un attribut ici c'est hidden

//const classe = document.getElementById('id03') //ca on l'utiliser avant
const classe = document.querySelector('#id_02 > h2')
classe.getAttribute('class') //.getAttribute() recuperer un attribut ici c'est "class" qui est dans h2 à l'interieur de #id_02
console.log(classe.getAttribute('class')) //affiche 'red' et 'bold'
console.log(classe.getAttribute('id')) //affiche id03

//pour manipuler la valeur de attribut html en rajouter ou supprimer on utiliser l'attribut ".classList"
console.log(classe.classList) //affiche le domtokenList qui est constitué de la class "red" et "bold"

classe.classList.remove('rouge')//retire la classe red donc le text redevient noir
classe.classList.add('rouge')//ajoute la classe red donc le text reredevient rouge

//.toggle() : retire la classe si elle existe et l'ajoute si elle n'existe pas. pratique pour faire des clignotements
classe.classList.toggle('rouge')
classe.classList.toggle('rouge')

//Pour manipuler le style d'un element on utilise l'attribut '.style'
const stile = document.querySelector('#id_s')
console.log(stile.style)

stile.style.color = 'green' //changer la couleur en vert
stile.style.fontWeight = 'bold' //rendre le text en gras

//attention toute fois car cette methode ne retourne le style de l'élément QUE si l'attribut style="" est declaré à l'iterieure de la balise html ca veut dire que si tu as un style qui est déclaré comme une class comme vu un peu avant alors ".style" ne va pas le prendre en comte !!! comment faire ?? => tu utilise la méthode getComputedStyle() qui te renvoie un gros objet qui contient tous les style de ton élément
console.log(getComputedStyle(stile)) //te renvoie TOUT
console.log(getComputedStyle(stile).color) //te renvoie la couleur


//Comment ajouter de nouveaux éléments html ??? : 
const newLi = document.createElement('li') //etre paranthèses tu met c koi lelement que tu veux ajouter
//mon element est mnt cree dans la memoire du JS mais j'ai envie de mettre des choses dedans 
newLi.innerHTML = `Ceci est un nouvel élément monsieur Souhil` //on a deja vu cette méthode un peu plus haut
//maintenant on veut ajouter ce contenu dans notre ul
document.querySelector('ul').append(newLi) //ajoute l'élement à la fin
document.querySelector('ul').prepend(newLi) //ajoute l'élément au début
//atention c'est pas parceque t'as mis les deux dernières lignes de codes que ton élément va etre mis au debut et à la fin en mm temps il va prendre en compte juste la dernniere instruction pk ?? => parceque UN ELEMENT NE PEUT PAS ETRE A PLUSIEURS ENDROITS EN MEME TEMPS DANS UNE STRUCTURE HTML ne l'oublie jamais

//alors comment faire si je le veux quand mm au debut et à la fin ?? c'est simple tu duplique ton element avec la méthode .cloneNode(true)
document.querySelector('ul').append(newLi.cloneNode(true)) //et voila mnt ton "Ceci est un nouvel élément monsieur Souhil" apparait en haut et en bas ez

//il existe une autre méthode pour placer un élément par rapport à un autre element qui est insertAdjacentElement('motcle', tonElement) par exemple on veut jouer avec un div par rapport à notre ul
const div = document.createElement('div')
div.innerHTML = `Ceci est un exemple de div qu'on a ajouté via notre fichier JS`
document.querySelector('ul').insertAdjacentElement('afterbegin', div)
//afterbegin :  comme le ".prepend()"
//beforebegin : avant l'element qu'on a selectioné
//beforeend :  comme le ".append()"
//afterend :  apres l'element qu'on a selectioné

//Remarque : le querry selector n'est pas obligé que sur le document tu peux aussi le mettre sur des docuent parent pour spécifier un fils en particulier
const parent = document.querySelector('#parent')
console.log(parent)

const petit_fils = parent.querySelector('#petit_fils')
console.log(petit_fils)

//pour supprimer un élément déffinitivement du DOM .remove()
document.querySelector('#test_sup').remove()