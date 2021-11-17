var ilkSayiEl = document.getElementById("ilkSayi");
var ilkTabanEl = document.getElementById("ilkTaban");
var ikinciTabanEl = document.getElementById("ikinciTaban");

var hesapla = document.getElementById("hesapla");

var sonucHeader = document.getElementById("sonucHeader");
var sonucYazi = document.getElementById("sonucYazi");
var ekYazi = document.getElementById("ekYazi");
var kopyala = document.getElementById("kopyala");

const anaSayilar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V"];
const maxDeger = 32;

document.onkeyup = function (ev) {
    if (ev.key == "Enter") {
        hesapla.onclick();
    }
    ev.preventDefault();
}

ilkTabanEl.onchange = ikinciTabanEl.onchange = function (event) {
    var olanElement = event.target; var a = olanElement.value;
    olanElement.value = Math.floor(a) < 2 ? 2 : (Math.floor(a) > maxDeger ? maxDeger : Math.floor(a));
}
ikinciTabanEl.oninput = normalDurumaGec;

ilkTabanEl.oninput = ilkSayiEl.oninput = function () {
    var ilkSayiSecim = ilkSayiEl.selectionStart;
    var ilkSayi = ilkSayiEl.value.toString().toUpperCase();
    var yeniSayi = "";
    ilkSayiEl.value = ilkSayi;
    for (i = 0; i < ilkSayi.length; i++) {
        yeniSayi += ((anaSayilar.includes(ilkSayi.charAt(i))) && anaSayilar.indexOf(ilkSayi.charAt(i)) < Number(ilkTabanEl.value) ? ilkSayi.charAt(i) : "");
    }
    normalDurumaGec();
    ilkSayiEl.value = yeniSayi;
    ilkSayiEl.selectionStart = ilkSayiEl.selectionEnd = (ilkSayiSecim + (yeniSayi.length - ilkSayi.length))
};
ilkSayiEl.onchange = function () { ilkSayiEl.value = (ilkSayiEl.value == "" ? 0 : ilkSayiEl.value); };

hesapla.onclick = function () {
    var s = ilkSayiEl.value;
    var t1 = Number(ilkTabanEl.value);
    var t2 = Number(ikinciTabanEl.value);
    var sonuc = tabanCevir(s, t1, t2);

    sonucHeader.innerText = "Sonuç:";
    sonucHeader.classList.add("sonucVar");
    sonucYazi.innerText = sonuc;
    ekYazi.innerText = `Kullanılan sayı kümesi: {${(anaSayilar.slice(0, (t1 > t2 ? t1 : t2)).join(", "))}}\n${s}${altaCevir(t1)} → ${sonuc}${altaCevir(t2)}`;
    kopyala.hidden = false;
}

kopyala.onclick = function(){
    if(sonucYazi.innerText != ""){
        navigator.clipboard.writeText(sonucYazi.innerText);
    }
}

/**
 * 
 * @param {Number} sayi Üs haline çevrilecek sayı.
 * @return {String} Üs haline çevrilmiş yazı. 
 */
function altaCevir(sayi) {
    var altlar = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];
    var a = sayi.toString();
    var altHali = "";
    for (var j = 0; j < a.length; j++) {
        altHali += altlar[Number(a.charAt(j))];
    }
    return altHali;
}

/**
 * @param {String} s Çevrilecek sayı
 * @param {Number} t Çevrilecek sayının tabanı
 * @return {Number} Onluk hali
 */
function onlugaCevir(s, t) {
    var sonuc = 0;
    var sUzunluk = s.toString().length;
    for (var i = 0; i < sUzunluk; i++) {
        sonuc += anaSayilar.indexOf(s.charAt(i)) * Math.pow(t, sUzunluk - (i + 1))
    }
    return sonuc;
}
/**
 * @param {String} s Çevrilecek sayı
 * @param {Number} t1 Çevrilecek sayının tabanı
 * @param {Number} t2 Sonucun tabanı
 * @return {String} Çevrilmiş hali
 */
function tabanCevir(s, t1, t2) {
    var x = onlugaCevir(s, t1);
    var sayilar = [];
    while (x >= t2) {
        sayilar.push(x % t2);
        x = (x - (x % t2)) / t2;
    }
    sayilar.push(x);
    sayilar.reverse();

    for (var i = 0; i < sayilar.length; i++) {
        sayilar[i] = anaSayilar[sayilar[i]];
    }

    return sayilar.join("");
}

function normalDurumaGec() {
    sonucHeader.classList.remove("sonucVar")
    sonucHeader.innerText = "Sayıları girdikten sonra hesapla tuşuna basın.";
    sonucYazi.innerText = "";
    ekYazi.innerText = "";
    kopyala.hidden = true;
}