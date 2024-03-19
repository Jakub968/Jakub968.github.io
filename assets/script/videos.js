let video = document.getElementById('video')

function video1() {
    video.src = './assets/videos/KRIMI.mp4'
    video.play();
}

function video2() {
    video.src = './assets/videos/POUZITIE.mp4'
    video.play();
}

function video3() {
    video.src = './assets/videos/PREDSTAVENE.mp4'
    video.play();
}

function video4() {
    video.src = './assets/videos/BLENDER.mp4'
    video.play();
}


let playbackButton = document.getElementsByClassName('playback')

for (let i = 0; i < 4; i++) {
    playbackButton[i].addEventListener('mouseover', ()=>{
        playbackButton[i].style.borderBottom = '30px solid white'
    })

    playbackButton[i].addEventListener('mouseout', ()=>{
        playbackButton[i].style.borderBottom = ' 30px solid #e60c80'
    })
}