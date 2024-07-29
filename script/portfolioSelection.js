let portfolioBox = document.getElementsByClassName('portfolio-box')
let selector = document.getElementsByClassName('selector')

function allP() {
    for (let e = 0; e < 9; e++) {
        portfolioBox[e].style.display = 'flex'
        console.log(e);
        
    }

    selector[0].style.color = 'white'
    selector[1].style.color = 'rgba(255, 255, 255, 0.603)'
    selector[2].style.color = 'rgba(255, 255, 255, 0.603)'
    selector[3].style.color = 'rgba(255, 255, 255, 0.603)'
    selector[4].style.color = 'rgba(255, 255, 255, 0.603)'
}

function web() {
    for (let a = 0; a < 9; a++) {
        portfolioBox[a].style.display = 'none'
        console.log(a);
    }

    portfolioBox[0].style.display = 'flex'
    portfolioBox[1].style.display = 'flex'
    portfolioBox[2].style.display = 'flex'
    portfolioBox[8].style.display = 'flex'

    selector[0].style.color = 'rgba(255, 255, 255, 0.603)'
    selector[1].style.color = 'white'
    selector[2].style.color = 'rgba(255, 255, 255, 0.603)'
    selector[3].style.color = 'rgba(255, 255, 255, 0.603)'
    selector[4].style.color = 'rgba(255, 255, 255, 0.603)'
}

function design() {
    for (let a = 0; a < 9; a++) {
        portfolioBox[a].style.display = 'none'
        console.log(a);
    }

    portfolioBox[0].style.display = 'flex'
    portfolioBox[2].style.display = 'flex'
    portfolioBox[3].style.display = 'flex'

    selector[0].style.color = 'rgba(255, 255, 255, 0.603)'
    selector[1].style.color = 'rgba(255, 255, 255, 0.603)'
    selector[2].style.color = 'white'
    selector[3].style.color = 'rgba(255, 255, 255, 0.603)'
    selector[4].style.color = 'rgba(255, 255, 255, 0.603)'
}

function video() {
    for (let a = 0; a < 9; a++) {
        portfolioBox[a].style.display = 'none'
        console.log(a);
    }

    portfolioBox[0].style.display = 'flex'
    portfolioBox[1].style.display = 'flex'
    portfolioBox[4].style.display = 'flex'
    portfolioBox[5].style.display = 'flex'

    selector[0].style.color = 'rgba(255, 255, 255, 0.603)'
    selector[1].style.color = 'rgba(255, 255, 255, 0.603)'
    selector[2].style.color = 'rgba(255, 255, 255, 0.603)'
    selector[3].style.color = 'white'
    selector[4].style.color = 'rgba(255, 255, 255, 0.603)'
}

function photo() {
    for (let a = 0; a < 9; a++) {
        portfolioBox[a].style.display = 'none'
        console.log(a);
    }

    portfolioBox[0].style.display = 'flex'
    portfolioBox[1].style.display = 'flex'
    portfolioBox[2].style.display = 'flex'
    portfolioBox[4].style.display = 'flex'
    portfolioBox[6].style.display = 'flex'
    portfolioBox[7].style.display = 'flex'

    selector[0].style.color = 'rgba(255, 255, 255, 0.603)'
    selector[1].style.color = 'rgba(255, 255, 255, 0.603)'
    selector[2].style.color = 'rgba(255, 255, 255, 0.603)'
    selector[3].style.color = 'rgba(255, 255, 255, 0.603)'
    selector[4].style.color = 'white'
}









