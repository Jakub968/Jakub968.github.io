
let portfolioDesign = document.getElementsByClassName('portfolio-design')
let portfolioWeb = document.getElementsByClassName('portfolio-web')
let portfolioVideo = document.getElementsByClassName('portfolio-video')
let portfolioFoto = document.getElementsByClassName('portfolio-foto')

let portfolioList = document.getElementsByClassName('portfolio-list')

for (let e = 0; e < 4; e++) {
    portfolioList[e].addEventListener('mouseover', ()=>{
        portfolioList[e].style.color = 'white'
    })
    portfolioList[e].addEventListener('mouseout', ()=>{
        portfolioList[e].style.color = 'rgba(255, 255, 255, 0.774)'
    })
    
}


function design() {

    portfolioDesign[0].style.display = 'flex'
    portfolioWeb[0].style.display = 'none'
    portfolioVideo[0].style.display = 'none'
    portfolioFoto[0].style.display = 'none'

    portfolioList[0].style.borderBottom = '1px solid white'
    portfolioList[1].style.borderBottom = 'none'
    portfolioList[2].style.borderBottom = 'none'
    portfolioList[3].style.borderBottom = 'none'
}

function web() {
 
    portfolioDesign[0].style.display = 'none'
    portfolioWeb[0].style.display = 'flex'
    portfolioVideo[0].style.display = 'none'
    portfolioFoto[0].style.display = 'none'

    portfolioList[0].style.borderBottom = 'none'
    portfolioList[1].style.borderBottom = '1px solid white'
    portfolioList[2].style.borderBottom = 'none'
    portfolioList[3].style.borderBottom = 'none'
}

function video() {

    portfolioDesign[0].style.display = 'none'
    portfolioWeb[0].style.display = 'none'
    portfolioVideo[0].style.display = 'flex'
    portfolioFoto[0].style.display = 'none'

    portfolioList[0].style.borderBottom = 'none'
    portfolioList[1].style.borderBottom = 'none'
    portfolioList[2].style.borderBottom = '1px solid white'
    portfolioList[3].style.borderBottom = 'none'
}

function foto() {

    portfolioDesign[0].style.display = 'none'
    portfolioWeb[0].style.display = 'none'
    portfolioVideo[0].style.display = 'none'
    portfolioFoto[0].style.display = 'flex'

    portfolioList[0].style.borderBottom = 'none'
    portfolioList[1].style.borderBottom = 'none'
    portfolioList[2].style.borderBottom = 'none'
    portfolioList[3].style.borderBottom = '1px solid white'
}



let designShowcase = document.getElementsByClassName('design')
let designCover = document.getElementsByClassName('designCover')
let designLink = document.getElementsByClassName('designLink')

for (let i = 0; i < 4; i++) {
    designShowcase[i].addEventListener('mouseover', ()=>{
        designCover[i].style.opacity = 0.5
        designLink[i].style.opacity = 1
    })

    designShowcase[i].addEventListener('mouseout', ()=>{
        designCover[i].style.opacity = 1
        designLink[i].style.opacity = 0
    })
    
}

let webShowcase = document.getElementsByClassName('web')
let webCover = document.getElementsByClassName('webCover')
let webLink = document.getElementsByClassName('webLink')

for (let i = 0; i < 4; i++) {
    webShowcase[i].addEventListener('mouseover', ()=>{
        webCover[i].style.opacity = 0.5
        webLink[i].style.opacity = 1
    })

    webShowcase[i].addEventListener('mouseout', ()=>{
        webCover[i].style.opacity = 1
        webLink[i].style.opacity = 0
    })
    
}

