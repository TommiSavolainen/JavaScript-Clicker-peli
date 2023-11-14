let tatti = document.getElementById('Sieni');
tatti.addEventListener('click', clikkaaTattia);
let kerroin = 1;
let tuplaus2 = true;
let tuplaus3 = true;
let tuplaus4 = true;
let tuplaus5 = true;
let viesti = document.getElementById('kannustusViesti');
let kannustusviestit = [
    'Hienoa aloitusta! Jatka klikkailua ja näytä kaikille, kuinka hyvä olet!',
    'Klikkaa, klikkaa, klikkaa! Sinä olet pelin kuningas/ kuningatar!',
    'Tatit eivät klikkaa itseään! Hyvä työ, jatka samaan malliin!',
    'Olet klikkauksen mestari! Tatti kiittää ahkeruudestasi!',
    'Tatit pyytävät apuasi! Klikkaa voittoon asti!',
    'Kuinka monta klikkausta voit tehdä minuutissa? Näytä se pelissä!',
    'Tatti antaa sinulle virtuaalisen high-fiven! Klikkaa vielä enemmän!',
    'Klikkauksen voima on vahva sinussa! Jatka taistelua!',
    'Olet kuin klikkausten taikuri! Tatit pelkäävät nimeäsi!',
    'Tatit pyytävät lisää klikkauksia, ja sinä vastaat kutsuun!',
    'Tatti hymyilee sinulle! Jatka klikkailua ja tee se ylpeäksi!',
    'Klikkausmaraton on alkanut, ja olet kärjessä! Pidä se!',
    'Sinä olet klikkausten kapteeni! Ohjaa peli voittoon asti!',
    'Tatit taputtavat sinulle! Olet paras klikkaaja tässä pelissä!',
    'Klikkausvoittosi on kuin musiikkia Tattejen korville! Jatka melodisesti!',
    'Huikea klikkausvoima! Et voi pysähtyä nyt, jatka klikkaamista!',
    'Sinä olet klikkauslegenda! Tatit kumartavat edessäsi!',
    'Klikkaa niin, kuin Tatit olisivat riippuvaisia siitä – koska he ovatkin!',
    'Tatit odottavat sankariaan! Klikkaa ja pelasta päivä!',
    'Sinä olet klikkauksen sankari! Keksi Tatti on ylpeä sinusta!',
    'Hakkaa sitä tattia!',
];
function clikkaaTattia(event) {
    let pisteet = Number(document.getElementById('pisteetTxt').innerText);
    let x2 = document.getElementById('2x');
    let s2 = document.getElementById('2s');
    let x3 = document.getElementById('3x');
    let x4 = document.getElementById('4x');
    let x5 = document.getElementById('5x');

    pisteet = pisteet + kerroin;
    document.getElementById('pisteetTxt').innerText = pisteet;

    gsap.to(tatti, {
        duration: 1,
        ease: 'elastic.out(1,0.3)',
        scale: 1.2,
        rotation: '20deg',
        yoyo: true,
    });
    gsap.to(tatti, {
        duration: 1,
        ease: 'elastic.out(1,0.3)',
        scale: 1,
        rotation: '0deg',
        yoyo: true,
    });

    if (pisteet % 100 === 0) {
        // Suorita toiminto joka 100 pisteen välein
        let kannustus = random_item(kannustusviestit);
        viesti.innerText = kannustus;
    }
    if (pisteet >= 200 && tuplaus2) {
        x2.style.cssText = 'opacity: 100%';
        x2.addEventListener('click', kerroin2);
    } else if (pisteet >= 500) {
        s2.style.cssText = 'opacity: 100%';
        s2.addEventListener('click', miinusPisteet);
        s2.addEventListener('click', sekuntiKerroin);
    } else if (pisteet >= 2500) {
        x3.style.cssText = 'opacity: 100%';
        x3.addEventListener('click', kerroin3);
    } else if (pisteet >= 10000) {
        x4.style.cssText = 'opacity: 100%';
        x4.addEventListener('click', kerroin4);
    } else if (pisteet >= 25000) {
        x5.style.cssText = 'opacity: 100%';
        x5.addEventListener('click', kerroin5);
    }
    function miinusPisteet(){
        pisteet -= 500
    }
    function sekuntiKerroin() {
        document.getElementById('pisteetTxt').innerText = pisteet++;
        setTimeout(sekuntiKerroin, 1000);
        s2.disabled = 'disabled';
    }
    function kerroin2() {
        kerroin = 2;
        pisteet -= 200;
        document.getElementById('pisteetTxt').innerText = pisteet;
        x2.disabled = 'disabled';
        tuplaus2 = false;
    }
    function kerroin3() {
        kerroin = 3;
        pisteet -= 2500;
        document.getElementById('pisteetTxt').innerText = pisteet;
        x3.disabled = 'disabled';
        tuplaus3 = false;
    }
    function kerroin4() {
        kerroin = 4;
        pisteet -= 10000;
        document.getElementById('pisteetTxt').innerText = pisteet;
        x4.disabled = 'disabled';
        tuplaus4 = false;
    }
    function kerroin5() {
        kerroin = 5;
        pisteet -= 25000;
        document.getElementById('pisteetTxt').innerText = pisteet;
        x5.disabled = 'disabled';
        tuplaus5 = false;
    }
    function random_item(items) {
        return items[Math.floor(Math.random() * items.length)];
    }
}
