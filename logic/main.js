// Kurulum / Setup
var giris = document.getElementById("giris");
var hesapla = document.getElementById("hesapla");
var secenek = document.getElementById("mod");
var degiskenDegerDiv = document.getElementById("degiskenDegerler");
var sonucHeader = document.getElementById("sonucHeader");
var sonucYazili = document.getElementById("sonucYazili");
var dil = document.getElementById("dil");
var link = document.getElementsByTagName("a")[0];
var logictitle = document.getElementById("logicTitle");

// Semboller / Symbols
var ve = "&";
var veya = "|";
var yada = "+";
var ancak = "=";
var ise = ">";
var degil = "'";

var veText = document.getElementById("ve");
var veyaText = document.getElementById("veya");
var yadaText = document.getElementById("yada");
var iseText = document.getElementById("ise");
var ancakText = document.getElementById("ancak");
var degilText = document.getElementById("degil");

var veCls = document.getElementsByClassName("ve")[0];
var veyaCls = document.getElementsByClassName("veya")[0];
var yadaCls = document.getElementsByClassName("yada")[0];
var iseCls = document.getElementsByClassName("ise")[0];
var ancakCls = document.getElementsByClassName("ancak")[0];
var degilCls = document.getElementsByClassName("degil")[0];

// Değer Değişmeleri / Values
var degisDegisenler = ["[", "]", "(1)", "(0)", "1"+degil, "0"+degil, "11", "00", "10", "01",  "1"+ve+"1", "1"+ve+"0", "0"+ve+"1", "0"+ve+"0", "1"+veya+"1", "1"+veya+"0", "0"+veya+"1", "0"+veya+"0", "1"+yada+"1", "1"+yada+"0", "0"+yada+"1", "0"+yada+"0", "1"+ancak+"1", "1"+ancak+"0", "0"+ancak+"1", "0"+ancak+"0", "1"+ise+"1", "1"+ise+"0", "0"+ise+"1", "0"+ise+"0"];
var degisDegisimler = ["(", ")",  "1",   "0",  "0",       "1",       "1",  "0",  "1",  "0",   "1",       "0",        "0",        "0",        "1",          "1",          "1",          "0",          "0",          "1",          "1",          "0",          "1",           "0",           "0",           "1",            "1",         "0",         "1",         "1"];

// Değişken Değişmeleri / Variables
var degiskenler = [];
var degiskenDegerleri = [];

// Dil / Langs
const dilKey = ["title", "mantikPlchldr", "hspla", "tabloHsp",
            "degerHsp", "dgsknDeger", "sonuc", "durumDflt",
            "durumDogru", "durumYanlis", "durumHata",
            "madeby", "tarafndan", "ve", "veya", "yada", "ise", "ancak", "degil", "icinSembolen", "icinSemboltr"];

const dilTr = ['Mantık Hesaplayıcısı', 'Hesaplanacak mantığı yazın...', 'Hesapla', 'Doğruluk Tablosu Hesapla', 'Doğruluk Değeri Hesapla', ' değeri', 'Sonuç:',
                'Hesapla butonuna bastıktan sonra değeriniz hesaplanacaktır.', 'Doğru', 'Yanlış', 
                'Hata! Yazımı kontrol edin veya bunun bir hata olduğunu düşünüyorsanız benimle iletişime geçin.', 
                '', ' tarafından yapıldı.', 'Ve', 'Veya', 'Ya da', 'İse', 'Ancak ve ancak', 'Değil', '', ' için sembol'];

const dilEn = ['Logic Calculator', 'Type your logic...', 'Calculate', 'Calculate Truth Table', 'Calculate Truth Value', 'value of ', 'Result:', 
                'Press the Calculate button to calculate.', 'True', 'False',
                'Error! Check the text or if you think this is a mistake, contact with me.',
                'Made by ', '', 'And', 'Or', 'Xor', 'If...then', 'If and only if', 'Not', 'Symbol for ', ''];

// Kod / Code

veText.value = ve;
veyaText.value = veya;
yadaText.value = yada;
iseText.value = ise;
ancakText.value = ancak;
degilText.value = degil
function guncelle(){
    degisDegisenler = ["[", "]", "(1)", "(0)", "1"+degil, "0"+degil, "11", "00", "10", "01",  "1"+ve+"1", "1"+ve+"0", "0"+ve+"1", "0"+ve+"0", "1"+veya+"1", "1"+veya+"0", "0"+veya+"1", "0"+veya+"0", "1"+yada+"1", "1"+yada+"0", "0"+yada+"1", "0"+yada+"0", "1"+ancak+"1", "1"+ancak+"0", "0"+ancak+"1", "0"+ancak+"0", "1"+ise+"1", "1"+ise+"0", "0"+ise+"1", "0"+ise+"0"];
    degisDegisimler = ["(", ")",  "1",   "0",  "0",       "1",       "1",  "0",  "1",  "0",   "1",       "0",        "0",        "0",        "1",          "1",          "1",          "0",          "0",          "1",          "1",          "0",          "1",           "0",           "0",           "1",            "1",         "0",         "1",         "1"];
}
veText.onchange = function(){
    var rgx = new RegExp(/([a-z])/g);
    if(veText.value == "" || veText.value.match(rgx)){
        veText.value = ve;
    } else {
        ve = veText.value;
    }
    guncelle();
}
veyaText.onchange = function(){
    var rgx = new RegExp(/([a-z])/g);
    if(veyaText.value == "" || veyaText.value.match(rgx)){
        veyaText.value = veya;
    } else {
        veya = veyaText.value;
    }
    guncelle();
}
yadaText.onchange = function(){
    var rgx = new RegExp(/([a-z])/g);
    if(yadaText.value == "" || yadaText.value.match(rgx)){
        yadaText.value = yada;
    } else {
        yada = yadaText.value;
    }
    guncelle();
}
iseText.onchange = function(){
    var rgx = new RegExp(/([a-z])/g);
    if(iseText.value == "" || iseText.value.match(rgx)){
        iseText.value = ise;
    } else {
        ise = iseText.value;
    }
    guncelle();
}
ancakText.onchange = function(){
    var rgx = new RegExp(/([a-z])/g);
    if(ancakText.value == "" || ancakText.value.match(rgx)){
        ancakText.value = ancak;
    } else {
        ancak = ancakText.value;
    }
    guncelle();
}
degilText.onchange = function(){
    var rgx = new RegExp(/([a-z])/g);
    if(degilText.value == "" || degilText.value.match(rgx)){
        degilText.value = degil;
    } else {
        degil = degilText.value;
    }
    guncelle();
}


function degiskenKontrolEkle(hangiDegisken = 0){

    var dgsknElement = document.createElement("input");
    dgsknElement.type = "checkbox";
    dgsknElement.id = degiskenler[hangiDegisken]
    dgsknElement.checked = (degiskenDegerleri[hangiDegisken] == 1);
    var label = document.createElement("label");
    label.classList.add("noselect", "checkboxvar");
    label.setAttribute("for", degiskenler[hangiDegisken]);
    label.innerText = degiskenler[hangiDegisken] + " değeri\n";
    degiskenDegerDiv.appendChild(dgsknElement);
    degiskenDegerDiv.appendChild(label);

    dgsknElement.onchange = function(){
        degiskenDegerleri[hangiDegisken] = Number(dgsknElement.checked).toString();
    }

}

function degistir(txt = ""){

    var oldtxt = txt;
    for(i=0; i<degisDegisenler.length; i++){
        txt = txt.replace(degisDegisenler[i], degisDegisimler[i])
    }
    return [txt, oldtxt==txt];

}

function degiskenleriDegistir(txt = ""){

    var eskiTxt = txt;
    while(true){

       for(i=0; i<degiskenler.length; i++){
           txt = txt.replace(degiskenler[i], degiskenDegerleri[i])
        }
        if(eskiTxt == txt){
            break;
        } else {
            eskiTxt = txt;
        }

    }
    return txt;

}

giris.oninput = function(){

    giris.value = giris.value.toLowerCase();
    document.body.classList.remove("dogru", "yanlis", "hata");
    link.classList.remove("dogru", "yanlis", "hata");
    sonucHeader.innerText = dilKelimeAl("durumDflt", dil.value);
    sonucYazili.innerText = "";
    var matchRegex = RegExp(/([a-z])/g);
    var karakterler = giris.value.match(matchRegex);

    if(karakterler == null){
        degiskenDegerDiv.textContent = "";
        return;
    }

    degiskenler = [];
    for(i=0; i<karakterler.length; i++){
        if(!degiskenler.includes(karakterler[i])){
            degiskenler.push(karakterler[i])
            if (degiskenler.length > degiskenDegerleri.length)degiskenDegerleri.push("0");
        }
    }
    degiskenDegerDiv.textContent = "";

    for(i=0; i<degiskenler.length; i++){
        degiskenKontrolEkle(i);
    }

    
}

function mantikHesapla(mantik = ""){

    function bosluksuzMantik(){

        do{
            mantik = mantik.replace(" ", "");
        } while(mantik.includes(" "))

    }

    bosluksuzMantik();

    mantik = "(" + degiskenleriDegistir(mantik) + ")";

    while(mantik.length > 1){
        if(degistir(mantik)[1] == true) return ["", true];
        mantik = degistir(mantik)[0];
    }
    return [mantik, false];

}

document.onkeyup = function(ev){
    if(ev.code == "Enter"){
        hesapla.onclick();
    }
}

hesapla.onclick = function(){

    var sonuc = mantikHesapla(giris.value);
    if(sonuc[1]){
        sonucHeader.innerText = dilKelimeAl("durumHata", dil.value);
        sonucYazili.innerText = "";
        document.body.className = "hata";
        link.className = "hata";
    } else {
        sonucHeader.innerText = dilKelimeAl("sonuc", dil.value);
        if(sonuc[0] =='1'){
            sonucYazili.innerText = "✔️ | 1 | " + dilKelimeAl("durumDogru", dil.value);
            document.body.className = "dogru";
            link.className = "dogru";
        } else {
            sonucYazili.innerText = "❌ | 0 | " + dilKelimeAl("durumYanlis", dil.value);
            document.body.className = "yanlis";
            link.className = "yanlis";
        }
    }

}
function dilKelimeAl(key = "", dil = ""){
    if(dil == "tr-TR"){
        return dilTr[dilKey.indexOf(key)]
    } else {
        return dilEn[dilKey.indexOf(key)]
    }
}

var userLang = navigator.language;
if(userLang == "tr-TR"){
    dil.value = "tr-TR";
} else {
    dil.value = "en-EN";
}
dilYukle(dil.value);

function dilYukle(seciliDil = ""){

    var dilKelimeler = [];
    if(seciliDil == "tr-TR"){
        dilKelimeler = dilTr;
    } else {
        dilKelimeler = dilEn;
    }
    document.title = dilKelimeAl("title", seciliDil);
    logictitle.innerText = dilKelimeAl("title", seciliDil);
    giris.attributes["placeholder"].value = dilKelimeAl("mantikPlchldr", seciliDil);
    hesapla.innerText = dilKelimeAl("hspla", seciliDil);
    if(dilKelimeAl("madeby", seciliDil) !== undefined) document.getElementById("madeby").innerText = dilKelimeAl("madeby", seciliDil);

    if(dilKelimeAl("tarafndan", seciliDil) !== undefined) document.getElementById("tarafndan").innerText = dilKelimeAl("tarafndan", seciliDil);

    var chkbxlar = document.getElementsByClassName("checkboxvar", seciliDil);
    for(i=0; i<chkbxlar.length; i++){
        if(dilKelimeler == dilTr){
            chkbxlar[i].innerText = chkbxlar[i].attributes["for"].value + dilKelimeAl("dgsknDeger", seciliDil);
        } else {
            chkbxlar[i].innerText = dilKelimeAl("dgsknDeger", seciliDil) + chkbxlar[i].attributes["for"].value;
        }
    }

    veCls.innerText =  dilKelimeAl("icinSembolen", dil.value) + dilKelimeAl("ve", dil.value) + dilKelimeAl("icinSemboltr", dil.value) + ": ";
    veyaCls.innerText =  dilKelimeAl("icinSembolen", dil.value) + dilKelimeAl("veya", dil.value) + dilKelimeAl("icinSemboltr", dil.value) + ": ";
    yadaCls.innerText =  dilKelimeAl("icinSembolen", dil.value) + dilKelimeAl("yada", dil.value) + dilKelimeAl("icinSemboltr", dil.value) + ": ";
    iseCls.innerText =  dilKelimeAl("icinSembolen", dil.value) + dilKelimeAl("ise", dil.value) + dilKelimeAl("icinSemboltr", dil.value) + ": ";
    ancakCls.innerText =  dilKelimeAl("icinSembolen", dil.value) + dilKelimeAl("ancak", dil.value) + dilKelimeAl("icinSemboltr", dil.value) + ": ";
    degilCls.innerText =  dilKelimeAl("icinSembolen", dil.value) + dilKelimeAl("degil", dil.value) + dilKelimeAl("icinSemboltr", dil.value) + ": ";

    giris.oninput();
}

dil.onchange = function(){
    dilYukle(dil.value)
}