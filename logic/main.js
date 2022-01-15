// Kurulum / Setup
var giris = document.querySelector("input")
var hesapla = document.getElementById("hesapla");
var hesaplaSecenek = document.getElementById("mod");
var degerDiv = document.getElementById("DegerlerDiv");
var sonucHeader = document.getElementById("sonucHeader");
var sonucYazili = document.getElementById("sonucYazili");
var dil = document.getElementById("dil");
var link = document.getElementsByTagName("a");
var logictitle = document.getElementById("logicTitle");
var contactLink = document.getElementById("contactLink");
var tablo = document.querySelector("table");
var kaynakKod = document.getElementById("kaynakKod");

// Semboller / Symbols
var ve = "∧";
var veya = "∨";
var yada = "⊻";
var ancak = "⇔";
var ise = "⇒";
var degil = "'";

var veButon = document.getElementById("ve");
var veyaButon = document.getElementById("veya");
var yadaButon = document.getElementById("yada");
var iseButon = document.getElementById("ise");
var ancakButon = document.getElementById("ancak");
var degilButon = document.getElementById("degil");
var birButon = document.getElementById("1");
var sifirButon = document.getElementById("0");
var pButon = document.getElementById("pBut");
var qButon = document.getElementById("qBut");
var rButon = document.getElementById("rBut");
var parantezAc = document.getElementById("parantezAc");
var parantezKapat = document.getElementById("parantezKapat");
var sil = document.getElementById("sil");

// Değer Değişmeleri / Values
const degisDegisenler = ["[", "]", "(1)", "(0)", degil + degil, "1" + degil, "0" + degil,
    "1" + ve + "1", "1" + ve + "0", "0" + ve + "1", "0" + ve + "0",
    "1" + veya + "1", "1" + veya + "0", "0" + veya + "1", "0" + veya + "0",
    "1" + yada + "1", "1" + yada + "0", "0" + yada + "1", "0" + yada + "0",
    "1" + ancak + "1", "1" + ancak + "0", "0" + ancak + "1", "0" + ancak + "0",
    "1" + ise + "1", "1" + ise + "0", "0" + ise + "1", "0" + ise + "0"];
const degisDegisimler = ["(", ")", "1", "0", "", "0", "1",
    "1", "0", "0", "0",
    "1", "1", "1", "0",
    "0", "1", "1", "0",
    "1", "0", "0", "1",
    "1", "0", "1", "1"];

// Değişken Değişmeleri / variables
var degiskenler = [];
var degiskenDegerleri = [];

// Dil / Langs
const dilKey = ['title', 'mantikPlchldr', 'hspla', 'tabloHsp',
    'degerHsp', 'dgsknDegeren', 'dgsknDegertr', 'sonuc', 'durumDflt',
    'durumDogru', 'durumYanlis', 'durumHata', 'iletisim',
    'madeby', 'tarafndan', 've', 'veya', 'yada', 'ise', 'ancak', 'degil',
    'parantezAc', 'parantezKapat', 'sil', 'kaynakKod'];

const dilTr = ['Mantık Hesaplayıcısı', 'Hesaplanacak mantığı yazın...', 'Hesapla', 'Doğruluk Tablosu Hesapla', 'Doğruluk Değeri Hesapla', '', ' değeri', 'Sonuç',
    'Hesapla butonuna bastıktan sonra değeriniz hesaplanacaktır.', 'Doğru', 'Yanlış',
    'Hata! Yazımı kontrol edin veya bunun bir hata olduğunu düşünüyorsanız ', 'benimle iletişime geçin.',
    'Mantık Hesaplayıcısı ', ' tarafından yapıldı.', 'Ve', 'Veya', 'Ya da', 'İse', 'Ancak ve ancak', 'Değil',
    'Parantez Aç', 'Parantez Kapat', 'Sil', 'Kaynak Kodu'];

const dilEn = ['Logic Calculator', 'Type your logic...', 'Calculate', 'Calculate Truth Table', 'Calculate Truth Value', 'value of ', '', 'Result',
    'Press the Calculate button to calculate.', 'True', 'False',
    'Error! Check the text or if you think this is a mistake, ', 'contact with me.',
    'Logic Calculator made by ', '.', 'And', 'Or', 'Xor', 'If...then', 'If and only if', 'Not',
    'Open Brackets', 'Close Brackets', 'Erase', 'Source Code'];

// Kod / Code

veButon.onclick = veyaButon.onclick = yadaButon.onclick =
    iseButon.onclick = ancakButon.onclick = degilButon.onclick =
    pButon.onclick = qButon.onclick = rButon.onclick = birButon.onclick =
    sifirButon.onclick = parantezAc.onclick = parantezKapat.onclick = (ev) => { 

        var elementler = [veButon, veyaButon, yadaButon,
            iseButon, ancakButon, degilButon,
            pButon, qButon, rButon, birButon,
            sifirButon, parantezAc, parantezKapat];
        var elementYazilari = [ve, veya, yada,
            ise, ancak, degil,
            "p", "q", "r", "1",
            "0", "(", ")"]
        giriseEkle(elementYazilari[elementler.indexOf(ev.target)]);
    }

veButon.onmousedown = veyaButon.onmousedown = yadaButon.onmousedown =
    iseButon.onmousedown = ancakButon.onmousedown = degilButon.onmousedown =
    pButon.onmousedown = qButon.onmousedown = rButon.onmousedown = birButon.onmousedown =
    sifirButon.onmousedown = parantezAc.onmousedown = parantezKapat.onmousedown = sil.onmousedown = (ev) => { ev.preventDefault(); }

function giriseEkle(txt = "") {
    var girisTxt = giris.value;
    var girisSecimBaslangic = giris.selectionStart;
    var girisSecimBitis = giris.selectionEnd;
    if (document.activeElement == giris) {
        girisOncesi = girisTxt.substring(0, girisSecimBaslangic);
        girisSonrasi = girisTxt.substring(girisSecimBitis, girisTxt.length);
        giris.value = girisOncesi + txt + girisSonrasi;
        giris.selectionStart = giris.selectionEnd = ++girisSecimBaslangic;
    } else {
        giris.value += txt;
    }
    giris.oninput();
}

sil.onclick = function () {
    var girisTxt = giris.value;
    var girisSecimBaslangic = giris.selectionStart;
    var girisSecimBitis = giris.selectionEnd;
    if (document.activeElement == giris) {
        girisOncesi = girisTxt.substring(0, girisSecimBaslangic - (girisSecimBaslangic == girisSecimBitis));
        girisSonrasi = girisTxt.substring(girisSecimBitis, girisTxt.length);
        giris.value = girisOncesi + girisSonrasi;
        giris.selectionStart = giris.selectionEnd = (girisSecimBaslangic - (girisSecimBaslangic == girisSecimBitis));
    } else {
        giris.value = giris.value.substring(0, giris.value.length - 1);
    }
    giris.oninput();
}

hesaplaSecenek.onchange = function () { giris.oninput() };

function degiskenKontrolEkle(hangiDegisken = 0) {

    var dgsknElement = document.createElement("input");
    dgsknElement.type = "checkbox";
    dgsknElement.id = degiskenler[hangiDegisken]
    dgsknElement.checked = (degiskenDegerleri[hangiDegisken] == 1);
    var label = document.createElement("label");
    label.classList.add("noselect", "checkboxvar");
    label.setAttribute("for", degiskenler[hangiDegisken]);
    label.innerText = dilKelimeAl("dgsknDegeren", dil.value) + degiskenler[hangiDegisken] + dilKelimeAl("dgsknDegertr", dil.value) + " (" + Number(dgsknElement.checked).toString() + ")" + "\n";
    degerDiv.appendChild(dgsknElement);
    degerDiv.appendChild(label);

    dgsknElement.onchange = function () {
        degiskenDegerleri[hangiDegisken] = Number(dgsknElement.checked).toString();
        document.body.classList.remove("dogru", "yanlis", "hata");
        link[0].classList.remove("dogru", "yanlis", "hata");
        link[1].classList.remove("dogru", "yanlis", "hata");
        sonucHeader.innerText = dilKelimeAl("durumDflt", dil.value);
        sonucYazili.innerText = "";
        contactLink.innerText = "";
        label.innerText = dilKelimeAl("dgsknDegeren", dil.value) + degiskenler[hangiDegisken] + dilKelimeAl("dgsknDegertr", dil.value) + " (" + Number(dgsknElement.checked).toString() + ")" + "\n";
    }

}

function degistir(txt = "") {

    var oldtxt = txt;
    var gecicitxt;
    for (i = 0; i < degisDegisenler.length; i++) {
        do {
            gecicitxt = txt;
            txt = txt.replace(degisDegisenler[i], degisDegisimler[i])
        } while (gecicitxt != txt)
    }
    return [txt, oldtxt == txt];

}

function degiskenleriDegistir(txt = "") {

    var eskiTxt = txt;
    while (true) {

        for (i = 0; i < degiskenler.length; i++) {
            txt = txt.replace(degiskenler[i], degiskenDegerleri[i])
        }
        if (eskiTxt == txt) {
            break;
        } else {
            eskiTxt = txt;
        }

    }
    return txt;

}

giris.oninput = function () {

    var girisIndex = [giris.selectionStart, giris.selectionEnd];
    giris.value = giris.value.toLowerCase();
    giris.setSelectionRange(girisIndex[0], girisIndex[1]);
    document.body.classList.remove("dogru", "yanlis", "hata");
    link[0].classList.remove("dogru", "yanlis", "hata");
    link[1].classList.remove("dogru", "yanlis", "hata");
    link[2].classList.remove("dogru", "yanlis", "hata");
    contactLink.innerText = "";
    sonucHeader.innerText = dilKelimeAl("durumDflt", dil.value);
    sonucYazili.innerText = "";
    var matchRegex = RegExp(/([a-z])/g);
    var karakterler = giris.value.match(matchRegex);

    if (karakterler == null) {
        degerDiv.textContent = "";
        degiskenler.length = 0;
        return;
    }

    degiskenler = [];
    for (i = 0; i < karakterler.length; i++) {
        if (!degiskenler.includes(karakterler[i])) {
            degiskenler.push(karakterler[i])
            if (degiskenler.length > degiskenDegerleri.length) degiskenDegerleri.push("0");
        }
    }
    degerDiv.textContent = "";
    tablo.textContent = "";

    if (hesaplaSecenek.value == "deger-hesap") {
        for (i = 0; i < degiskenler.length; i++) {
            degiskenKontrolEkle(i);
        }
    }


}

function mantikHesapla(mantik = "") {

    do {
        mantik = mantik.replace(" ", "");
    } while (mantik.includes(" "))

    mantik = "(" + degiskenleriDegistir(mantik) + ")";
    var degisenSonuc = degistir(mantik);
    while (mantik.length > 1) {
        if (degisenSonuc[1] == true) return ["", true];

        mantik = degisenSonuc[0];
        degisenSonuc = degistir(mantik);
    }
    return [mantik, false];

}

document.onkeyup = function (ev) {
    if (ev.code == "Enter") {
        hesapla.onclick();
    }
}

function hatayaGit() {
    sonucHeader.innerText = dilKelimeAl("durumHata", dil.value);
    contactLink.innerText = dilKelimeAl("iletisim", dil.value);
    sonucYazili.innerText = "";
    document.body.className = "hata";
    link[0].className = "hata";
    link[1].className = "hata";
    link[2].className = "hata";
}

hesapla.onclick = function () {

    if (hesaplaSecenek.value == "deger-hesap") {
        var sonuc = mantikHesapla(giris.value);
        if (sonuc[1]) {
            hatayaGit();
        } else {
            sonucHeader.innerText = dilKelimeAl("sonuc", dil.value) + ":";
            if (sonuc[0] == '1') {
                sonucYazili.innerText = "✔️ | 1 | " + dilKelimeAl("durumDogru", dil.value);
                document.body.className = "dogru";
                link[0].className = "dogru";
                link[1].className = "dogru";
                link[2].className = "dogru";
            } else {
                sonucYazili.innerText = "❌ | 0 | " + dilKelimeAl("durumYanlis", dil.value);
                document.body.className = "yanlis";
                link[0].className = "yanlis";
                link[1].className = "yanlis";
                link[2].className = "yanlis";
            }
        }
    } else {
        tablo.textContent = "";
        if (degiskenler.length == 0) {
            hatayaGit();
            return;
        }
        var eskiDegiskenDegerleri = degiskenDegerleri;
        var deger = "";
        var tabloDegerler = [];
        var tabloDegerlerIslem = [];
        var sonuc;
        degiskenDegerleri.length = degiskenler.length;
        for (i = 0; i < degiskenDegerleri.length; i++) {
            deger += "0";
        }
        var degerLength = deger.length;
        while (deger.length == degerLength) {
            degiskenDegerleri = deger.split("");
            sonuc = mantikHesapla(giris.value);
            if (sonuc[1]) {
                hatayaGit();
                return;
            }
            tabloDegerler.push(mantikHesapla(giris.value)[0]);
            tabloDegerlerIslem.push(deger);
            deger = addBinary(deger, "1");
        }
        degiskenDegerleri = eskiDegiskenDegerleri;

        tablo.insertRow();
        for (i = 0; i < degiskenDegerleri.length; i++) {
            tablo.rows[0].insertCell();
            tablo.rows[0].cells[i].innerText = degiskenler[i];
        }
        tablo.rows[0].insertCell();
        tablo.rows[0].cells[degiskenDegerleri.length].innerText = dilKelimeAl("sonuc", dil.value);
        for (i = 1; i < Math.pow(2, degerLength) + 1; i++) {
            tablo.insertRow();
            for (j = 0; j < degiskenDegerleri.length; j++) {
                tablo.rows[i].insertCell();
                tablo.rows[i].cells[j].innerText = tabloDegerlerIslem[i - 1].charAt(j);
                if (tabloDegerlerIslem[i - 1].charAt(j) == "0") {
                    tablo.rows[i].cells[j].classList.add("yanlis");
                } else {
                    tablo.rows[i].cells[j].classList.add("dogru");
                }
            }
            tablo.rows[i].insertCell();
            tablo.rows[i].cells[j].innerText = tabloDegerler[i - 1];
            if (tabloDegerler[i - 1] == "0") {
                tablo.rows[i].cells[j].classList.add("yanlis");
            } else {
                tablo.rows[i].cells[j].classList.add("dogru");
            }
        }
    }

}
function dilKelimeAl(key = "", dil = dil.value) {
    if (dil == "tr-TR") {
        return dilTr[dilKey.indexOf(key)]
    } else {
        return dilEn[dilKey.indexOf(key)]
    }
}

var userLang = navigator.language;
if (userLang == "tr-TR") {
    dil.value = "tr-TR";
} else {
    dil.value = "en-EN";
}
dilYukle(dil.value);

function dilYukle(seciliDil = "") {

    var dilKelimeler = [];
    if (seciliDil == "tr-TR") {
        dilKelimeler = dilTr;
    } else {
        dilKelimeler = dilEn;
    }
    document.title = dilKelimeAl("title", seciliDil);
    logictitle.innerText = dilKelimeAl("title", seciliDil);
    giris.attributes["placeholder"].value = dilKelimeAl("mantikPlchldr", seciliDil);
    hesapla.innerText = dilKelimeAl("hspla", seciliDil);
    document.getElementById("madeby").innerText = dilKelimeAl("madeby", seciliDil);
    document.getElementById("tarafndan").innerText = dilKelimeAl("tarafndan", seciliDil);
    hesaplaSecenek.children[0].innerText = dilKelimeAl("degerHsp", seciliDil)
    hesaplaSecenek.children[1].innerText = dilKelimeAl("tabloHsp", seciliDil)

    veButon.innerText = dilKelimeAl("ve", dil.value);
    veyaButon.innerText = dilKelimeAl("veya", dil.value);
    yadaButon.innerText = dilKelimeAl("yada", dil.value);
    iseButon.innerText = dilKelimeAl("ise", dil.value);
    ancakButon.innerText = dilKelimeAl("ancak", dil.value);
    degilButon.innerText = dilKelimeAl("degil", dil.value);
    parantezAc.innerText = dilKelimeAl("parantezAc", dil.value);
    parantezKapat.innerText = dilKelimeAl("parantezKapat", dil.value);
    sil.innerText = dilKelimeAl("sil", dil.value);
    kaynakKod.innerText = dilKelimeAl("kaynakKod", dil.value)
    giris.oninput();
}

dil.onchange = function () {
    dilYukle(dil.value)
}
// Binary https://stackoverflow.com/a/41373971/14033383
function xor(a, b) { return (a === b ? 0 : 1); }
function and(a, b) { return a == 1 && b == 1 ? 1 : 0; }
function or(a, b) { return (a || b); }

function halfAdder(a, b) {
    const sum = xor(a, b);
    const carry = and(a, b);
    return [sum, carry];
}

function fullAdder(a, b, carry) {
    halfAdd = halfAdder(a, b);
    const sum = xor(carry, halfAdd[0]);
    carry = and(carry, halfAdd[0]);
    carry = or(carry, halfAdd[1]);
    return [sum, carry];
}

function addBinary(a, b) {

    while (a.length > b.length) {
        b = "0" + b;
    }
    while (b.length > a.length) {
        a = "0" + a;
    }
    let sum = '';
    let carry = '';

    for (var i = a.length - 1; i >= 0; i--) {
        if (i == a.length - 1) {
            //half add the first pair
            const halfAdd1 = halfAdder(a[i], b[i]);
            sum = halfAdd1[0] + sum;
            carry = halfAdd1[1];
        } else {
            //full add the rest
            const fullAdd = fullAdder(a[i], b[i], carry);
            sum = fullAdd[0] + sum;
            carry = fullAdd[1];
        }
    }

    return carry ? carry + sum : sum;
}