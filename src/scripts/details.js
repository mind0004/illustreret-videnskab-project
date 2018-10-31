function changeImage(id) {
    if(id == 'tick1'){
        document.getElementById(id).src = './assets/images/untick.png'
        document.getElementById('tick2').src = './assets/images/tick.png'
        document.getElementById('tick3').src = './assets/images/tick.png'
    }
if(id == 'tick2'){
    document.getElementById(id).src = './assets/images/untick.png'
    document.getElementById('tick1').src = './assets/images/tick.png'
    document.getElementById('tick3').src = './assets/images/tick.png'
}
if(id == 'tick3'){
    document.getElementById(id).src = './assets/images/untick.png'
    document.getElementById('tick1').src = './assets/images/tick.png'
    document.getElementById('tick2').src = './assets/images/tick.png'
}
}