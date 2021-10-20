// Kurulum
var ilkSayiEl = document.getElementById("ilksayi");
var ikinciSayiEl = document.getElementById("ikincisayi");
var ucuncuSayiEl = document.getElementById("ucuncusayi");

var hesapla = document.getElementById("hesapla");
var secenek = document.getElementById("secenek");
var ucuncuSayiOlsunMu = document.getElementById("ucuncusayiolsunmu");

var sonucHeader = document.getElementById("sonucHeader");
var sonucYazi = document.getElementById("sonucYazi");

// Kod

//belki devam ederim *2021 29 Eylül 9.08*
//devam ediyorum *2021 15 Ekim 9.03*

var sonucDefault = "Sayıları girdikten sonra hesapla tuşuna basın.";

var birincisayi;
var ikincisayi;
var ucuncusayi;

hesapla.onclick = function () {
    var sonuc = 1; // Aşağıdaki çarpma işleminin çalışması için bu değişkene bir değer atamamız lazım.
    birincisayi = Number(ilkSayiEl.value);
    ikincisayi = Number(ikinciSayiEl.value);
    ucuncusayi = (ucuncuSayiOlsunMu.checked ? Number(ucuncuSayiEl.value) : birincisayi);
    // Eğer üçüncü sayı olacak ise üçüncü sayıyı olduğu gibi alıyor. Eğer alınmayacak ise ilk sayıyı üçüncü sayı olarak yazıyor.
    var carpanlar = carpanlarHesapla(birincisayi, ikincisayi, ucuncusayi);
    // Çarpanlarını hesaplamak için fonksiyonumsu şey.
    for (i = 0; i < carpanlar[Number(secenek.value == "ebob")].length; i++) {
        sonuc *= carpanlar[Number(secenek.value == "ebob")][i];
    }
    sonucHeader.innerHTML = "Sonuç:";
    sonucYazi.innerHTML = sonuc;
    sonucHeader.classList.add("sonucVar");
}

ucuncuSayiOlsunMu.onchange = function(){
    ucuncuSayiEl.disabled = !ucuncuSayiOlsunMu.checked;
}

secenek.onchange = ilkSayiEl.oninput = ikinciSayiEl.oninput = ucuncuSayiEl.oninput = normalDurumaGec;
/**
 * @param {Number} sayi1 İlk sayı
 * @param {Number} sayi2 İkinci sayı
 * @param {Number} sayi3 Üçüncü sayı
 * @return {*} 2 Küme: İlk küme tüm çarpanlar, İkinci küme ortak çarpanlar.
 */
function carpanlarHesapla(sayi1, sayi2, sayi3) {
    var a = (sayi1 < 1 ? 1 : sayi1);
    var b = (sayi2 < 1 ? 1 : sayi2);
    var c = (sayi3 < 1 ? 1 : sayi3);
    var bolen = 2;
    var ortakCarpanlar = [];
    var carpanlar = [];
    while (a > 1 || b > 1 || c > 1) {
        if (a % bolen == 0 || b % bolen == 0 || c % bolen == 0) carpanlar.push(bolen);
        if (a % bolen == 0 && b % bolen == 0 && c % bolen == 0) ortakCarpanlar.push(bolen);
        if (a % bolen == 0) a /= bolen;
        if (b % bolen == 0) b /= bolen;
        if (c % bolen == 0) c /= bolen;
        if (!(a % bolen == 0 || b % bolen == 0 || c % bolen == 0)) bolen++;
    }
    return [carpanlar, ortakCarpanlar];
}

function normalDurumaGec(){
    sonucHeader.innerText = sonucDefault;
    sonucYazi.innerText = "";
    sonucHeader.classList.remove("sonucVar");
}