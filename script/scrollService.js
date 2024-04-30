let number = 0
let heading = document.getElementsByClassName('serviceHeading')
let text = document.getElementsByClassName('serviceText')
let numBg = document.getElementsByClassName('num-bg')
let div = document.getElementsByClassName('service-left')

let bg0 = document.getElementById('img0')
let bg1 = document.getElementById('img1')
let bg2 = document.getElementById('img2')
let bg3 = document.getElementById('img3')


number = localStorage.getItem('furniture-number')

 function linkNumber() {

    console.log(number);
    num()
    
}

// sipka dopredu
function num() {
    number++
    slider()
    return(number)
}
// sipka dozadu
function numNegative() {
    number--
    slider()
   
    return(number)
}
// hodnoty podla value number 
function slider() {
    console.log("kokot");
    if (number > 3) {
        number = 3
        return(number)
    }

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
        text[0].innerHTML = 'Prinášame vám kuchyne na mieru, spájajúce dokonalý dizajn s použitím najkvalitnejších materiálov a komponentov. <br> Náš sortiment zahŕňa kuchyne v rôznych štýloch a povrchových úpravách a kombináciách, aby sme vyhoveli každému vkusu a preferencii. <br> S použitím inovatívnej nanoteQ technológie ponúkame najvyšší štandard v odolnosti proti poškriabaniu a znečisteniu na povrchoch z bežného používania. <br> Vytvoríme vám kuchyňu, ktorá bude nielen centrom vášho diania, ale aj miestom, kde sa budete každý deň radi vracať..'
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
        text[0].innerHTML = 'Vyrábame na mieru kuchyne, šatníkové zostavy, vstavané skrine, knižnice, poličkové zostavy, štýlové stoly a atypické prvky, ktoré dodajú vášmu interiéru osobitý nádych. Naša filozofia spočíva v rešpektovaní individuality. Práca s rozsiahlym portfóliom materiálov zaručuje, že bude od nás odchádzať spokojný naozaj každý. S úctou k prírode a dôrazom na detail, vytvárame nábytok, ktorý je nielen esteticky krásny, ale aj ekologicky udržateľný.'
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
        text[0].innerHTML = 'Dvere sú vstupnou bránou do vášho sveta. Sú prvou vecou, ktorú si človek všimne, keď prichádza. Zároveň sú tiež významným bezpečnostným prvkom. <br> Bez ohľadu na to, či preferujete klasický dizajn, staviate útulnú drevenicu v horách, alebo vyznávate moderné trendy, máme pre vás širokú škálu možností pri výrobe dverí . Príďte si k nám vysnívať tie vaše...'
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
        text[0].innerHTML = 'Ponúkame riešenia všetkých druhov schodísk, vrátane samonosných, mlynárskych, ktoré vdýchnu do vášho domu kúsok histórie, cez moderné, ktoré zaujmú svojím minimalistickým dizajnom , až po podkrovné schodiská, ktoré vám umožnia efektívne využiť každý meter vášho priestoru. Zhotovíme pre vás stupnice na schody, obloženia existujúcich betónových schodísk až po detailne vyhotovené zábradlia. <br> Povedzte nám, akú máte predstavu a my sa postaráme o to, aby sa stala skutočnosťou.'
        numBg[0].innerHTML = '04'
        numBg[0].style.color = '#592b03'
        div[0].style.background = '#442001'
        
    }

    return(number)
}



