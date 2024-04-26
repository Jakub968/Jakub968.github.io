let number = 0
let heading = document.getElementsByClassName('serviceHeading')
let text = document.getElementsByClassName('serviceText')
let numBg = document.getElementsByClassName('num-bg')
let div = document.getElementsByClassName('service-left')

let bg0 = document.getElementById('img0')
let bg1 = document.getElementById('img1')
let bg2 = document.getElementById('img2')
let bg3 = document.getElementById('img3')







function num() {
    number++
    if (number > 3) {
        number = 3
        return(number)
    }
    if (number === 0) {
        bg0.style.opacity = '1'
        bg1.style.opacity = '0'
        bg2.style.opacity = '0'
        bg3.style.opacity = '0'
    
        heading[0].innerHTML = 'Kuchyne'
        text[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum consequatur explicabo quaerat saepe distinctio dolorum'
        numBg[0].innerHTML = '01'
        numBg[0].style.color = '#675854'
        div[0].style.background = '#444648'
        
    }
    if (number === 1) {
        bg0.style.opacity = '0'
        bg1.style.opacity = '1'
        bg2.style.opacity = '0'
        bg3.style.opacity = '0'
    
        heading[0].innerHTML = 'Nábytok'
        text[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum consequatur explicabo quaerat saepe distinctio dolorum'
        numBg[0].innerHTML = '02'
        numBg[0].style.color = '#1e1e1e'
        div[0].style.background ='#0a0a0a'
        
    }
    if (number === 2) {
        bg0.style.opacity = '0'
        bg1.style.opacity = '0'
        bg2.style.opacity = '1'
        bg3.style.opacity = '0'
    
        heading[0].innerHTML = 'Dvere'
        text[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum consequatur explicabo quaerat saepe distinctio dolorum'
        numBg[0].innerHTML = '03'
        numBg[0].style.color = '#372d2d'
        div[0].style.background = '#231f1c'
        
    }

    if (number === 3) {
        bg0.style.opacity = '0'
        bg1.style.opacity = '0'
        bg2.style.opacity = '0'
        bg3.style.opacity = '1'
    
        heading[0].innerHTML = 'Schodiská'
        text[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum consequatur explicabo quaerat saepe distinctio dolorum'
        numBg[0].innerHTML = '04'
        numBg[0].style.color = '#592b03'
        div[0].style.background = '#442001'
        
    }
    return(number)

   
}

function numNegative() {
    number--
    if (number < 0) {
        number = 0
        return(number)
    }
    if (number === 0) {
        bg0.style.opacity = '1'
        bg1.style.opacity = '0'
        bg2.style.opacity = '0'
        bg3.style.opacity = '0'
    
        heading[0].innerHTML = 'Kuchyne'
        text[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum consequatur explicabo quaerat saepe distinctio dolorum,'
        numBg[0].innerHTML = '01'
        numBg[0].style.color = '#675854'
        div[0].style.background = '#444648'
        
    }
    if (number === 1) {
        bg0.style.opacity = '0'
        bg1.style.opacity = '1'
        bg2.style.opacity = '0'
        bg3.style.opacity = '0'
    
        heading[0].innerHTML = 'Nábytok'
        text[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum consequatur explicabo quaerat saepe distinctio dolorum,'
        numBg[0].innerHTML = '02'
        numBg[0].style.color = '#1e1e1e'
        div[0].style.background = '#0a0a0a'
        
    }
    if (number === 2) {
        bg0.style.opacity = '0'
        bg1.style.opacity = '0'
        bg2.style.opacity = '1'
        bg3.style.opacity = '0'
    
        heading[0].innerHTML = 'Dvere'
        text[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum consequatur explicabo quaerat saepe distinctio dolorum,'
        numBg[0].innerHTML = '03'
        numBg[0].style.color = '#372d2d'
        div[0].style.background = '#231f1c'
        
    }

    if (number === 3) {
        bg0.style.opacity = '0'
        bg1.style.opacity = '0'
        bg2.style.opacity = '0'
        bg3.style.opacity = '1'
    
        heading[0].innerHTML = 'Schodiská'
        text[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum consequatur explicabo quaerat saepe distinctio dolorum,'
        numBg[0].innerHTML = '04'
        numBg[0].style.color = '#592b03'
        div[0].style.background = '#442001'
        
    }
    return(number)
}
