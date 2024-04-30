let figureBox = document.getElementsByClassName('galery-box')

let figureText = document.getElementsByClassName('galery-text')

for (let i = 0; i < 200; i++) {
    figureBox[i].addEventListener('mouseover', ()=>{
        figureBox[i].style.background = 'rgba(0, 0, 0, 0.349)'
        figureText[i].style.opacity = '1'
        figureText[i].style.transform = 'translateY(0)'
    })

    figureBox[i].addEventListener('mouseout', ()=>{
        figureBox[i].style.background = 'rgba(0, 0, 0, 0)'
        figureText[i].style.opacity = '0'
        figureText[i].style.transform = 'translateY(30px)'
    })
    
}



