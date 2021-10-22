// Kurulum
var ilkSayiEl = document.getElementById("ilksayi");
var ikinciSayiEl = document.getElementById("ikincisayi");
var ucuncuSayiEl = document.getElementById("ucuncusayi");

var hesapla = document.getElementById("hesapla");
var secenek = document.getElementById("secenek");
var ucuncuSayiOlsunMu = document.getElementById("ucuncusayiolsunmu");

var sonucHeader = document.getElementById("sonucHeader");
var sonucYazi = document.getElementById("sonucYazi");
var carpanlarYazi = document.getElementById("carpanlarYazi");

// Kod

//belki devam ederim *2021 29 Eylül 9.08*
//devam ediyorum *2021 15 Ekim 9.03*

var sonucDefault = "Sayıları girdikten sonra hesapla tuşuna basın.";

var birincisayi;
var ikincisayi;
var ucuncusayi;

var maxDeger = 4294967295; // (2^32)-1 olması için neden yok sadece havalı olsun diye öyle yazdım

document.onkeyup = function (ev) {
    if (ev.key == "Enter") hesapla.onclick();
}

hesapla.onclick = function () {
    var sonuc = 1; // Aşağıdaki çarpma işleminin çalışması için bu değişkene bir değer atamamız lazım.
    birincisayi = Number(ilkSayiEl.value);
    ikincisayi = Number(ikinciSayiEl.value);
    ucuncusayi = (ucuncuSayiOlsunMu.checked ? Number(ucuncuSayiEl.value) : birincisayi);
    var sadeceCarpanlar = [];
    // Eğer üçüncü sayı olacak ise üçüncü sayıyı olduğu gibi alıyor. Eğer alınmayacak ise ilk sayıyı üçüncü sayı olarak yazıyor.
    var carpanlar = carpanlarHesapla(birincisayi, ikincisayi, ucuncusayi)[Number(secenek.value == "ebob")];
    // Çarpanlarını hesaplamak için fonksiyonumsu şey.
    for (i = 0; i < carpanlar.length; i++) {
        if (!sadeceCarpanlar.includes(carpanlar[i])) sadeceCarpanlar.push(carpanlar[i]);
        sonuc *= carpanlar[i];
    }
    sonucHeader.innerText = "Sonuç:";
    sonucYazi.innerText = sonuc;
    var txt = "Çarpanlar: "
    const kacKereGecer = (number, numbers) => numbers.reduce((counter, currentNumber) => (number === currentNumber ? counter + 1 : counter), 0);
    // https://stackoverflow.com/a/62722045/14033383
    if (sadeceCarpanlar.length == 0) {
        txt = "Asal çarpan yok."
    } else {
        for (i = 0; i < sadeceCarpanlar.length; i++) {
            txt += `${sadeceCarpanlar[i]}(${kacKereGecer(carpanlar[i], carpanlar)})${(i + 1 == sadeceCarpanlar.length ? "" : ", ")}`
        }
    }
    carpanlarYazi.innerText = txt;
    sonucHeader.classList.add("sonucVar");
}

ucuncuSayiOlsunMu.onchange = function () {
    ucuncuSayiEl.disabled = !ucuncuSayiOlsunMu.checked;
    normalDurumaGec();
}

secenek.onchange = normalDurumaGec;

ilkSayiEl.onchange = function () {
    var a = ilkSayiEl.value;
    ilkSayiEl.value = Math.floor(a) < 1 ? 1 : (Math.floor(a) > maxDeger ? maxDeger : Math.floor(a));
    normalDurumaGec();
}
ikinciSayiEl.onchange = function () {
    var a = ikinciSayiEl.value;
    ikinciSayiEl.value = Math.floor(a) < 1 ? 1 : (Math.floor(a) > maxDeger ? maxDeger : Math.floor(a));
    normalDurumaGec();
}
ucuncuSayiEl.onchange = function () {
    var a = ucuncuSayiEl.value;
    ucuncuSayiEl.value = Math.floor(a) < 1 ? 1 : (Math.floor(a) > maxDeger ? maxDeger : Math.floor(a));
    normalDurumaGec();
}

/**
 * @param {Number} sayi1 İlk sayı
 * @param {Number} sayi2 İkinci sayı
 * @param {Number} sayi3 Üçüncü sayı
 * @return {Number[][]} 2 Küme: İlk küme tüm çarpanlar, İkinci küme ortak çarpanlar.
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

function normalDurumaGec() {
    sonucHeader.innerText = sonucDefault;
    sonucYazi.innerText = "";
    sonucHeader.classList.remove("sonucVar");
    carpanlarYazi.innerText = "";
    // Her şeyi varsayılan ayarlara ayarlar
}