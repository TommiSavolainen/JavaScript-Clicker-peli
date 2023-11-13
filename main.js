let tatti = document.getElementById('Sieni');
tatti.addEventListener('click', clikkaaTattia);
let kerroin = 1
let tuplaus2 = true
function clikkaaTattia(event) {
    let pisteet = Number(document.getElementById('pisteetTxt').innerText);
    let x2 = document.getElementById('2x');
    let x3 = document.getElementById('3x');
    let x4 = document.getElementById('4x');
    let x5 = document.getElementById('5x');
    pisteet = pisteet+kerroin;
    document.getElementById('pisteetTxt').innerText = pisteet
    if (pisteet >= 200 && tuplaus2){
        x2.style.cssText = 'opacity: 100%';
        x2.addEventListener('click', kerroin2)
    }else if (pisteet >= 2500){
        x3.style.cssText = 'opacity: 100%';
    }else if (pisteet >= 20000){
        x4.style.cssText = 'opacity: 100%';
    }else if (pisteet >= 250000){
        x5.style.cssText = 'opacity: 100%';
    }
    function kerroin2(){
        kerroin = 2
        pisteet -= 200
        document.getElementById('pisteetTxt').innerText = pisteet
        x2.disabled = 'disabled';
        tuplaus2 = false
    }
    console.log(pisteet);
}
