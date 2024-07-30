let forwards = document.getElementById('forwards')
let backwards = document.getElementById('backwards')

let indicator = document.getElementsByClassName('indicator')

let portfolio1 = document.getElementsByClassName('portfolio1')
let portfolio2 = document.getElementsByClassName('portfolio2')

let a = 0


indicator[0].style.width = '10px'
indicator[0].style.transition = '0.4s ease'
backwards[0].style.transition = '0.4s ease'
forwards[0].style.transition = '0.4s ease'


function forWards() {
    a++
    if (a === 1) {
        portfolio1[0].style.display = 'none'
        portfolio2[0].style.display = 'flex'

        indicator[0].style.width = '100px'
    }
    if (a === 2){
        a = 1

        return(a)
    }

    return(a)
}

function backWards() {
    a--
    if (a === 0) {
        portfolio2[0].style.display = 'none'
        portfolio1[0].style.display = 'flex'

        indicator[0].style.width = '10px'
    }
    if (a === -1){
        a = 0

        return(a)
    }

    return(a)
}