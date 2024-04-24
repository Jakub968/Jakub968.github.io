let box = document.getElementsByClassName('service')
let button = document.getElementsByClassName('service-button')



for (let i = 0; i < 5; i++) {
    box[i].addEventListener('mouseover', ()=>{
        box[i].style.height = '40vh'
        button[i].style.opacity = '1'
    })
    
    box[i].addEventListener('mouseout', ()=>{
        box[i].style.height = '30vh'
        button[i].style.opacity = '0'
    })
    
}