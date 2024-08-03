// ikony=======================================
let designIconLayer1 = document.getElementsByClassName('icon-design-line1')
let designIconLayer2 = document.getElementsByClassName('icon-design-line2')

let designWebLayer1 = document.getElementsByClassName('icon-web-line1')

let designvideoLayer1 = document.getElementsByClassName('icon-video-line1')

let designFotoLayer1 = document.getElementsByClassName('icon-foto-line1')
let designFotoLayer2 = document.getElementsByClassName('icon-foto-line2')

let designSocLayer1 = document.getElementsByClassName('icon-soc-line1')
let designSocLayer2 = document.getElementsByClassName('icon-soc-line2')

let designAdLayer1 = document.getElementsByClassName('icon-ad-line1')
// elemonty====================================
let MainServiceBox = document.getElementsByClassName('service-box')
let serviceH2 = document.getElementsByClassName('js-h2')
let serviceLi = document.getElementsByClassName('js-li')
let serviceDiv = document.getElementsByClassName('js-div')
let serviceDIvP = document.getElementsByClassName('js-div-p')
let serviceP = document.getElementsByClassName('js-p')


MainServiceBox[0].addEventListener('mouseover', ()=>{
    MainServiceBox[0].style.background = 'white'
    serviceH2[0].style.color = 'black'

    serviceLi[0].style.color = 'black'
    serviceLi[1].style.color = 'black'
    serviceLi[2].style.color = 'black'

    serviceDiv[0].style.background = 'black'
    serviceDIvP[0].style.color = 'white'
    serviceP[0].style.color = 'black'

    for (let a = 0; a < 20; a++) {

        designIconLayer2[a].style.stroke = 'black'
        designIconLayer1[0].style.fill = 'black'

    }
})

MainServiceBox[0].addEventListener('mouseout', ()=>{
    MainServiceBox[0].style.background = 'rgba(255, 255, 255, 0.075)'
    serviceH2[0].style.color = 'white'

    serviceLi[0].style.color = 'white'
    serviceLi[1].style.color = 'white'
    serviceLi[2].style.color = 'white'

    serviceDiv[0].style.background = 'white'
    serviceDIvP[0].style.color = 'black'
    serviceP[0].style.color = 'white'

    for (let b = 0; b < 20; b++) {

        designIconLayer2[b].style.stroke = 'white'
        designIconLayer1[0].style.fill = 'white'

    }
})

MainServiceBox[1].addEventListener('mouseover', ()=>{
    MainServiceBox[1].style.background = 'white'
    serviceH2[1].style.color = 'black'

    serviceLi[3].style.color = 'black'
    serviceLi[4].style.color = 'black'
    serviceLi[5].style.color = 'black'

    serviceDiv[1].style.background = 'black'
    serviceDIvP[1].style.color = 'white'
    serviceP[1].style.color = 'black'

    for (let a = 0; a < 20; a++) {

        designWebLayer1[a].style.fill = 'black'

    }
})

MainServiceBox[1].addEventListener('mouseout', ()=>{
    MainServiceBox[1].style.background = 'rgba(255, 255, 255, 0.075)'
    serviceH2[1].style.color = 'white'

    serviceLi[3].style.color = 'white'
    serviceLi[4].style.color = 'white'
    serviceLi[5].style.color = 'white'

    serviceDiv[1].style.background = 'white'
    serviceDIvP[1].style.color = 'black'
    serviceP[1].style.color = 'white'

    for (let b = 0; b < 20; b++) {

        designWebLayer1[b].style.fill = 'white'

    }
})

MainServiceBox[2].addEventListener('mouseover', ()=>{
    MainServiceBox[2].style.background = 'white'
    serviceH2[2].style.color = 'black'

    serviceLi[6].style.color = 'black'
    serviceLi[7].style.color = 'black'
    serviceLi[8].style.color = 'black'

    serviceDiv[2].style.background = 'black'
    serviceDIvP[2].style.color = 'white'
    serviceP[2].style.color = 'black'

    for (let a = 0; a < 20; a++) {

        designvideoLayer1[a].style.stroke = 'black'

    }
})

MainServiceBox[2].addEventListener('mouseout', ()=>{
    MainServiceBox[2].style.background = 'rgba(255, 255, 255, 0.075)'
    serviceH2[2].style.color = 'white'

    serviceLi[6].style.color = 'white'
    serviceLi[7].style.color = 'white'
    serviceLi[8].style.color = 'white'

    serviceDiv[2].style.background = 'white'
    serviceDIvP[2].style.color = 'black'
    serviceP[2].style.color = 'white'

    for (let b = 0; b < 20; b++) {

        designvideoLayer1[b].style.stroke = 'white'

    }
})

MainServiceBox[3].addEventListener('mouseover', ()=>{
    MainServiceBox[3].style.background = 'white'
    serviceH2[3].style.color = 'black'

    serviceLi[9].style.color = 'black'
    serviceLi[10].style.color = 'black'
    serviceLi[11].style.color = 'black'

    serviceDiv[3].style.background = 'black'
    serviceDIvP[3].style.color = 'white'
    serviceP[3].style.color = 'black'

    for (let a = 0; a < 20; a++) {

        designFotoLayer2[a].style.stroke = 'black'
        designFotoLayer1[0].style.fill = 'black'
    }
})

MainServiceBox[3].addEventListener('mouseout', ()=>{
    MainServiceBox[3].style.background = 'rgba(255, 255, 255, 0.075)'
    serviceH2[3].style.color = 'white'

    serviceLi[9].style.color = 'white'
    serviceLi[10].style.color = 'white'
    serviceLi[11].style.color = 'white'

    serviceDiv[3].style.background = 'white'
    serviceDIvP[3].style.color = 'black'
    serviceP[3].style.color = 'white'

    for (let b = 0; b < 20; b++) {

        designFotoLayer2[b].style.stroke = 'white'
        designFotoLayer1[0].style.fill = 'white'

    }
})

MainServiceBox[4].addEventListener('mouseover', ()=>{
    MainServiceBox[4].style.background = 'white'
    serviceH2[4].style.color = 'black'

    serviceLi[12].style.color = 'black'
    serviceLi[13].style.color = 'black'
    serviceLi[14].style.color = 'black'

    serviceDiv[4].style.background = 'black'
    serviceDIvP[4].style.color = 'white'

    for (let a = 0; a < 20; a++) {

        designSocLayer2[a].style.stroke = 'black'
        designSocLayer1[0].style.fill = 'black'
        designSocLayer1[1].style.fill = 'black'
    }
})

MainServiceBox[4].addEventListener('mouseout', ()=>{
    MainServiceBox[4].style.background = 'rgba(255, 255, 255, 0.075)'
    serviceH2[4].style.color = 'white'

    serviceLi[12].style.color = 'white'
    serviceLi[13].style.color = 'white'
    serviceLi[14].style.color = 'white'

    serviceDiv[4].style.background = 'white'
    serviceDIvP[4].style.color = 'black'

    for (let b = 0; b < 20; b++) {

        designSocLayer2[b].style.stroke = 'white'
        designSocLayer1[0].style.fill = 'white'
        designSocLayer1[1].style.fill = 'white'

    }
})

MainServiceBox[5].addEventListener('mouseover', ()=>{
    MainServiceBox[5].style.background = 'white'
    serviceH2[5].style.color = 'black'

    serviceLi[15].style.color = 'black'
    serviceLi[16].style.color = 'black'
    serviceLi[17].style.color = 'black'

    serviceDiv[5].style.background = 'black'
    serviceDIvP[5].style.color = 'white'

    for (let a = 0; a < 20; a++) {

        designAdLayer1[a].style.stroke = 'black'
    }
})

MainServiceBox[5].addEventListener('mouseout', ()=>{
    MainServiceBox[5].style.background = 'rgba(255, 255, 255, 0.075)'
    serviceH2[5].style.color = 'white'

    serviceLi[15].style.color = 'white'
    serviceLi[16].style.color = 'white'
    serviceLi[17].style.color = 'white'

    serviceDiv[5].style.background = 'white'
    serviceDIvP[5].style.color = 'black'

    for (let b = 0; b < 20; b++) {

        designAdLayer1[b].style.stroke = 'white'

    }
})








