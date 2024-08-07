
let portfolioDesign = document.getElementsByClassName('portfolio-design')
let portfolioWeb = document.getElementsByClassName('portfolio-web')
let portfolioVideo = document.getElementsByClassName('portfolio-video')
let portfolioFoto = document.getElementsByClassName('portfolio-foto')

let portfolioList = document.getElementsByClassName('portfolio-list')

for (let e = 0; e < 4; e++) {
        portfolioList[e].style.padding = '10px 15px'
    
}


function design() {

    portfolioDesign[0].style.display = 'flex'
    portfolioWeb[0].style.display = 'none'
    portfolioVideo[0].style.display = 'none'
    portfolioFoto[0].style.display = 'none'

    portfolioList[0].style.background = 'white'
    portfolioList[0].style.color = 'black'
    portfolioList[1].style.background = 'none'
    portfolioList[1].style.color = 'white'
    portfolioList[2].style.background = 'none'
    portfolioList[2].style.color = 'white'
    portfolioList[3].style.background = 'none'
    portfolioList[3].style.color = 'white'
}

function web() {
 
    portfolioDesign[0].style.display = 'none'
    portfolioWeb[0].style.display = 'flex'
    portfolioVideo[0].style.display = 'none'
    portfolioFoto[0].style.display = 'none'

    portfolioList[0].style.background = 'none'
    portfolioList[0].style.color = 'white'
    portfolioList[1].style.background = 'white'
    portfolioList[1].style.color = 'black'
    portfolioList[2].style.background = 'none'
    portfolioList[2].style.color = 'white'
    portfolioList[3].style.background = 'none'
    portfolioList[3].style.color = 'white'
}

function video() {

    portfolioDesign[0].style.display = 'none'
    portfolioWeb[0].style.display = 'none'
    portfolioVideo[0].style.display = 'flex'
    portfolioFoto[0].style.display = 'none'

    portfolioList[0].style.background = 'none'
    portfolioList[0].style.color = 'white'
    portfolioList[1].style.background = 'none'
    portfolioList[1].style.color = 'white'
    portfolioList[2].style.background = 'white'
    portfolioList[2].style.color = 'black'
    portfolioList[3].style.background = 'none'
    portfolioList[3].style.color = 'white'
}

function foto() {

    portfolioDesign[0].style.display = 'none'
    portfolioWeb[0].style.display = 'none'
    portfolioVideo[0].style.display = 'none'
    portfolioFoto[0].style.display = 'flex'

    portfolioList[0].style.background = 'none'
    portfolioList[0].style.color = 'white'
    portfolioList[1].style.background = 'none'
    portfolioList[1].style.color = 'white'
    portfolioList[2].style.background = 'none'
    portfolioList[2].style.color = 'white'
    portfolioList[3].style.background = 'white'
    portfolioList[3].style.color = 'black'
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

let fotoShowcase = document.getElementsByClassName('foto')
let fotoCover = document.getElementsByClassName('fotoCover')
let fotoLink = document.getElementsByClassName('fotoLink')

for (let i = 0; i < 4; i++) {
    fotoShowcase[i].addEventListener('mouseover', ()=>{
        fotoCover[i].style.opacity = 0.5
        fotoLink[i].style.opacity = 1
    })

    fotoShowcase[i].addEventListener('mouseout', ()=>{
        fotoCover[i].style.opacity = 1
        fotoLink[i].style.opacity = 0
    })
    
}

