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
var degil = "!";

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
var degisDegisenler = ["[", "]", "(1)", "(0)", "1"+degil, "0"+degil, "11", "00", "10", "01",  "1"+ve+"1", "1"+ve+"0", "0"+ve+"1", "0"+ve+"0", "1"+veya+"1", "1"+veya+"0", "0"+veya+"1", "0"+veya+"0", "1"+yada+"1", "1"+yada+"0", "0"+yada+"1", "0"+yada+"0", "1"+ancak+"1", "1"+ancak+"0", "0"+ancak+"1", "0"+ancak+"0", "1"+ise+"1", "1"+ise+"0", "0"+ise+"1", "0"+ise+"0"];
var degisDegisimler = ["(", ")",  "1",   "0",  "0",       "1",       "1",  "0",  "1",  "0",   "1",       "0",        "0",        "0",        "1",          "1",          "1",          "0",          "0",          "1",          "1",          "0",          "1",           "0",           "0",           "1",            "1",         "0",         "1",         "1"];

// Değişken Değişmeleri / Variables
var degiskenler = [];
var degiskenDegerleri = [];

// Dil / Langs
const dilKey = ["title", "mantikPlchldr", "hspla", "tabloHsp",
            "degerHsp", "dgsknDegeren", "dgsknDegertr", "sonuc", "durumDflt",
            "durumDogru", "durumYanlis", "durumHata",
            "madeby", "tarafndan", "ve", "veya", "yada", "ise", "ancak", "degil"];

const dilTr = ['Mantık Hesaplayıcısı', 'Hesaplanacak mantığı yazın...', 'Hesapla', 'Doğruluk Tablosu Hesapla', 'Doğruluk Değeri Hesapla', '', ' değeri', 'Sonuç:',
                'Hesapla butonuna bastıktan sonra değeriniz hesaplanacaktır.', 'Doğru', 'Yanlış', 
                'Hata! Yazımı kontrol edin veya bunun bir hata olduğunu düşünüyorsanız benimle iletişime geçin.', 
                'Mantık Hesaplayıcısı ', ' tarafından yapıldı.', 'Ve', 'Veya', 'Ya da', 'İse', 'Ancak ve ancak', 'Değil', '', ' için sembol'];

const dilEn = ['Logic Calculator', 'Type your logic...', 'Calculate', 'Calculate Truth Table', 'Calculate Truth Value', 'value of ', '', 'Result:', 
                'Press the Calculate button to calculate.', 'True', 'False',
                'Error! Check the text or if you think this is a mistake, contact with me.',
                'Logic Calculator made by ', '.', 'And', 'Or', 'Xor', 'If...then', 'If and only if', 'Not'];

// Kod / Code

veButon.onclick = function(){
    giris.value += ve;
    giris.oninput();
}
veyaButon.onclick = function(){
    giris.value += veya;
    giris.oninput();
}
yadaButon.onclick = function(){
    giris.value += yada;
    giris.oninput();
}
iseButon.onclick = function(){
    giris.value += ise;
    giris.oninput();
}
ancakButon.onclick = function(){
    giris.value += ancak;
    giris.oninput();
}
degilButon.onclick = function(){
    giris.value += degil;
    giris.oninput();
}
qButon.onclick = function(){
    giris.value += "q";
    giris.oninput();
}
pButon.onclick = function(){
    giris.value += "p";
    giris.oninput();
}
rButon.onclick = function(){
    giris.value += "r";
    giris.oninput();
}
birButon.onclick = function(){
    giris.value += "1";
    giris.oninput();
}
sifirButon.onclick = function(){
    giris.value += "0";
    giris.oninput();
}
parantezAc.onclick = function(){
    giris.value += "(";
    giris.oninput();
}
parantezKapat.onclick = function(){
    giris.value += ")";
    giris.oninput();
}
sil.onclick = function(){
    giris.value = giris.value.substring(0, giris.value.length-1);
    giris.oninput();
}

function degiskenKontrolEkle(hangiDegisken = 0){

    var dgsknElement = document.createElement("input");
    dgsknElement.type = "checkbox";
    dgsknElement.id = degiskenler[hangiDegisken]
    dgsknElement.checked = (degiskenDegerleri[hangiDegisken] == 1);
    var label = document.createElement("label");
    label.classList.add("noselect", "checkboxvar");
    label.setAttribute("for", degiskenler[hangiDegisken]);
    label.innerText = dilKelimeAl("dgsknDegeren", dil.value) + degiskenler[hangiDegisken] + dilKelimeAl("dgsknDegertr", dil.value) + " (" + Number(dgsknElement.checked).toString() + ")" + "\n";
    degiskenDegerDiv.appendChild(dgsknElement);
    degiskenDegerDiv.appendChild(label);

    dgsknElement.onchange = function(){
        degiskenDegerleri[hangiDegisken] = Number(dgsknElement.checked).toString();
        document.body.classList.remove("dogru", "yanlis", "hata");
        link.classList.remove("dogru", "yanlis", "hata");
        sonucHeader.innerText = dilKelimeAl("durumDflt", dil.value);
        sonucYazili.innerText = "";
        label.innerText = dilKelimeAl("dgsknDegeren", dil.value) + degiskenler[hangiDegisken] + dilKelimeAl("dgsknDegertr", dil.value) + " (" + Number(dgsknElement.checked).toString() + ")" + "\n";
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

document.onsubmit = hesapla.onclick = function(){

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
    document.getElementById("madeby").innerText = dilKelimeAl("madeby", seciliDil);
    document.getElementById("tarafndan").innerText = dilKelimeAl("tarafndan", seciliDil);

//    var chkbxlar = document.getElementsByClassName("checkboxvar", seciliDil);
//    for(i=0; i<chkbxlar.length; i++){
//        if(dilKelimeler == dilTr){
//            chkbxlar[i].innerText = chkbxlar[i].attributes["for"].value + dilKelimeAl("dgsknDeger", seciliDil);
//        } else {
//            chkbxlar[i].innerText = dilKelimeAl("dgsknDeger", seciliDil) + chkbxlar[i].attributes["for"].value;
//        }
//    }

    veButon.innerText = dilKelimeAl("ve", dil.value);
    veyaButon.innerText = dilKelimeAl("veya", dil.value);
    yadaButon.innerText = dilKelimeAl("yada", dil.value);
    iseButon.innerText = dilKelimeAl("ise", dil.value);
    ancakButon.innerText = dilKelimeAl("ancak", dil.value);
    degilButon.innerText = dilKelimeAl("degil", dil.value);
    giris.oninput();
}

dil.onchange = function(){
    dilYukle(dil.value)
}