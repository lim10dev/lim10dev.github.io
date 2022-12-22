// Kurulum
var elektronSayiEl = document.getElementById("elektron-sayisi");

var hesapla = document.getElementById("hesapla");

var sonucHeader = document.getElementById("sonucHeader");
var sonucYazi = document.getElementById("sonucYazi");

// Kod
var elementler = [
"Hidrojen", 
"Helyum",
"Lityum",
"Berilyum",
"Bor",
"Karbon",
"Azot",
"Oksijen",
"Flor",
"Neon",
"Sodyum",
"Magnezyum",
"Alüminyum",
"Silikon",
"Fosfor",
"Kükürt",
"Klor", 
"Argon", 
"Potasyum", 
"Kalsiyum", 
"Skandiyum",
"Titanyum", 
"Vanadyum", 
"Krom", 
"Manganez", 
"Demir", 
"Kobalt", 
"Nikel",
"Bakır", 
"Çinko",
"Galyum", 
"Germanyum",
"Arsenik",
"Selenyum",
"Brom",
"Kripton",
"Rubidyum",
"Stronsiyum",
"İtriyum",
"Zirkonyum",
"Niyobyum",
"Molibden",
"Teknesyum",
"Rutenyum",
"Rodyum",
"Paladyum",
"Gümüş",
"Kadmiyum",
"İndiyum",
"Kalay",
"Antimon",
"Tellür",
"İyot",
"Ksenon",
"Sezyum",
"Baryum",
"Lantan",
"Seryum",
"Praseodim",
"Neodimyum",
"Prometyum",
"Samaryum",
"Evropiyum",
"Gadolinyum",
"Terbiyum",
"Disprozyum",
"Holmiyum",
"Erbiyum",
"Tulyum",
"İterbiyum",
"Lutesyum",
"Hafniyum",
"Tantal",
"Tungsten",
"Renyum",
"Osmiyum",
"İridyum",
"Platin",
"Altın",
"Cıva",
"Talyum",
"Kurşun",
"Bizmut",
"Polonyum",
"Astatin",
"Radon",
"Fransiyum",
"Radyum",
"Aktinyum",
"Toryum",
"Protaktinyum",
"Uranyum",
"Neptünyum",
"Plütonyum",
"Amerikyum",
"Küriyum",
"Berkelyum", 
"Kaliforniyum",
"Aynştaynyum", 
"Fermiyum",
"Mendelevyum", 
"Nobelyum", 
"Lavrensiyum", 
"Rutherfordiyum",
"Dubniyum", 
"Seaborgiyum", 
"Bohriyum", 
"Hassiyum", 
"Meitneriyum", 
"Darmstadtium",
"Röntgenyum", 
"Kopernikyum", 
"Nihoniyum", 
"Fleroviyum", 
"Moskoviyum", 
"Livermoriyum",
"Tennesin", 
"Oganesson"
]

var katmanElektronlar = [
        [1, 2],
        [2, 8],
        [3, 8],
        [4, 2],
        [3, 10],
        [4, 6],
        [5, 2],
        [4, 10],
        [5, 6],
        [6, 2],
        [4, 14],
        [5, 10],
        [6, 6],
        [7, 2],
        [5, 14],
        [6, 10],
        [7, 6]
]

var sonucDefault = "Sayıları girdikten sonra hesapla tuşuna basın.";

/**
 * 
 * @param {number} n Elektron Sayısı 
 * @returns {number[]} Elektron katman dizilimi
 */
function dizilimHesapla(n) {
    var dizilim = [];
    for (var katmanElektron of katmanElektronlar) {

        if( n <= 0 ) { break; }

        var katman = katmanElektron[0];
        var elektron = katmanElektron[1];

        if(dizilim.length < katman) {
            dizilim.push(Math.min(n, elektron));
        } else {
            dizilim[katman - 1] += Math.min(n, elektron);
        }

        n -= elektron;
    }
    return dizilim
}

elektronSayiEl.oninput = function(){
    normalDurumaGec();
}

elektronSayiEl.onchange = function() {
    var val = Number(elektronSayiEl.value);
    if(val < 1) { elektronSayiEl.value = 1; }
    if(val > 118) { elektronSayiEl.value = 118; }
}

document.onkeydown = function(ev) {
    if(ev.key == "Enter") {
        hesapla.click()
    }
}

hesapla.onclick = function() {
    var elektron = Number(elektronSayiEl.value)
    if(elektron < 1) { elektronSayiEl.value = elektron = 1; }
    if(elektron > 118) { elektronSayiEl.value = elektron = 118; }
    var dizilim = dizilimHesapla(elektron)
    sonucHeader.innerText = `${elementler[elektron - 1]} için elektron dizilimi:`
    sonucYazi.innerText = dizilim.join(" ) ")
    sonucHeader.classList.add("sonucVar")
}

function normalDurumaGec() {
    sonucHeader.innerText = sonucDefault;
    sonucYazi.innerText = "";
    sonucHeader.classList.remove("sonucVar");
}