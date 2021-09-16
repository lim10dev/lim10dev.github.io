{ // Kurulum
console.log("Kuş Dili Çeviricisi! Kurulum yapılıyor...");
var cevrilen = document.getElementById("Cevrilen");
var ceviri = document.getElementById("Ceviri");
var cevirMod = document.getElementById("CevirMod");
var cevirHarf = document.getElementById("CevirHarf");
var cvrButon = document.getElementById("Cevir");
var kopyala = document.getElementById("Kopyala");
var ters = document.getElementById("Ters");
var kaydet_hatirla = document.getElementById("Kaydet-Hatirla");
}

addEventListener("load", function(){
    
    console.log("Ayarlar kontrol ediliyor...")
    if(localStorage.getItem("ayarlar") != null && localStorage.getItem("ayarlar").split(";")[0] == "true"){

        console.log("Ayarlar tespit edildi. Ayarlar yükleniyor...");
        cevirMod.value = localStorage.getItem("ayarlar").split(";")[1];
        cevirHarf.value = localStorage.getItem("ayarlar").split(";")[2]

    }

    kaydet_hatirla.checked = (localStorage.getItem("ayarlar").split(";")[0] == "true");
})

cvrButon.addEventListener("click", function(){

    if(cevrilen.value == "") {
        
    console.error("Boş metin çevrilemez.");
    return;

    }
    console.log("Çevrilmeye başlanıyor...");
    var kucukSesliHarfler = ["a","e","ı","i","u","ü","o","ö"];
    var buyukSesliHarfler = ["A", "E", "I", "İ", "U", "Ü", "O", "Ö"];
    ceviri.value = "";
    if(cevirMod.value == "Turkce"){
        // Türkçe'den Kuş Dili'ne

        for(i = 0; i < cevrilen.value.length; i++){

            if(kucukSesliHarfler.includes(cevrilen.value.charAt(i)) || buyukSesliHarfler.includes(cevrilen.value.charAt(i))){

                if(kucukSesliHarfler.includes(cevrilen.value.charAt(i))){
                    // Eğer küçük harfse

                ceviri.value += cevrilen.value.charAt(i) + cevirHarf.value + cevrilen.value.charAt(i);

                } else {

                    ceviri.value += cevrilen.value.charAt(i) + cevirHarf.value.toUpperCase() + cevrilen.value.charAt(i);

                }
            } else {

                ceviri.value += cevrilen.value.charAt(i);

            }

        }

    } else {
        // Kuş Dili'nden Türkçe'ye

        for(i = 0; i < cevrilen.value.length; i++){

            ceviri.value += cevrilen.value.charAt(i);
            if(kucukSesliHarfler.includes(cevrilen.value.charAt(i).toLowerCase())){

                i+= cevirHarf.value.length + 1;

            }

        }

    }
    kopyala.disabled = (ceviri.value == "")

});

kopyala.addEventListener("click", function(){

    console.log("Çeviri kopyalanıyor...");
    ceviri.select(); ceviri.setSelectionRange(0, 99999);
    document.execCommand("copy");

});

document.onkeyup = function(ev){

    if(ev.code == "Enter" && (document.activeElement == ceviri))
    cvrButon.click();

}

ters.addEventListener("click", function(){

    var cevrilenYeni = ceviri.value;
    var ceviriYeni = cevrilen.value;

    cevrilen.value = cevrilenYeni;
    ceviri.value = ceviriYeni;
    
    kopyala.disabled = (ceviri.value == "")

})

function Kaydet(){

    console.log("Tercihler kaydediliyor...");
    localStorage.setItem("ayarlar", `${kaydet_hatirla.checked};${cevirMod.value};${cevirHarf.value}`);  

}

kaydet_hatirla.addEventListener("change", Kaydet);

cevirMod.addEventListener("change", Kaydet);

cevirHarf.addEventListener("change", Kaydet);