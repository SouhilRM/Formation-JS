const boutton_s = document.querySelector('#sup')
let i = 0
function sup_function(){
    i++
    console.log('message de suppressionTestuelle')
    if(i>=3){
        boutton_s.removeEventListener('click',sup_function)
    }
}
boutton_s.addEventListener('click',sup_function)