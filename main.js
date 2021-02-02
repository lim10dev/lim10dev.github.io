{ // Setup
var EnableMods = document.getElementById("EnableMods");
var SilenceSounds = document.getElementById("SilenceSounds");
var Task_CanAttackMouse = document.getElementById("Task_CanAttackMouse");
var AttackRandomly = document.getElementById("AttackRandomly");
var UseCustomColors = document.getElementById("UseCustomColors");
var GooseDefaultWhite = document.getElementById("GooseDefaultWhite");
var GooseDefaultOrange = document.getElementById("GooseDefaultOrange");
var GooseDefaultOutline = document.getElementById("GooseDefaultOutline");
var MaxWanderingTimeSeconds = document.getElementById("MaxWanderingTimeSeconds");
var MinWanderingTimeSeconds = document.getElementById("MinWanderingTimeSeconds");
var FirstWanderTimeSeconds = document.getElementById("FirstWanderTimeSeconds");
var copy = document.getElementById("copy");
var success = document.getElementById("success");
var down = document.getElementById("download");
var share = document.getElementById("share");

var apply = document.getElementById("apply");
var config = document.getElementById("config-text");
var config_text = "Version_DoNotEdit=1\nEnableMods=False\nSilenceSounds=False\nTask_CanAttackMouse=True\nAttackRandomly=False\nUseCustomColors=True\nGooseDefaultWhite=#ffffff\nGooseDefaultOrange=#ffa500\nGooseDefaultOutline=#d3d3d3\nMinWanderingTimeSeconds=20\nMaxWanderingTimeSeconds=40\nFirstWanderTimeSeconds=20";
config.value = config_text;
} // Setup End

addEventListener("load", function(){
    const urlParams = new URLSearchParams(window.location.search);
    if(!(urlParams == "")){
        var nms = ["EnableMods", "SilenceSounds", "Task_CanAttackMouse", "AttackRandomly", "UseCustomColors", "GooseDefaultWhite", "GooseDefaultOrange", 
        "GooseDefaultOutline", "MaxWanderingTimeSeconds", "MinWanderingTimeSeconds", "FirstWanderTimeSeconds"];
        var txt = "";

        function chknul() {
            var j = "";
            for(i = 0;i < 11;i++){
                j += urlParams.get(nms[i]);
            }
            return j.includes("null");
        }
        function s2b(str)
        {
            switch(str.toLowerCase().trim()){
                case "true": case "True": return true;
                case "false": case "False": return false;
                default: return Boolean(str);
            }
        }
        function isHexColor (hex) {
            return typeof hex === 'string'
                && hex.length === 6
                && !isNaN(Number('0x' + hex))
          } //https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation/8027444
            if(!chknul()) {
                for(i = 0;i < 11;i++){
                    switch (nms[i]) {
                        case "EnableMods":
                            EnableMods.checked = s2b(urlParams.get(nms[i]));
                            break;
                        case "SilenceSounds":
                            SilenceSounds.checked = (s2b(urlParams.get(nms[i])));
                            break;
                        case "Task_CanAttackMouse":
                            Task_CanAttackMouse.checked = (s2b(urlParams.get(nms[i])));
                            break;
                        case "AttackRandomly":
                            AttackRandomly.checked = (s2b(urlParams.get(nms[i])));
                            break;
                        case "UseCustomColors":
                            UseCustomColors.checked = s2b(urlParams.get(nms[i]));
                            break;
                        case "GooseDefaultWhite":
                            if(isHexColor(urlParams.get(nms[i])))
                            GooseDefaultWhite.value = '#' + urlParams.get(nms[i]);
                            break;
                        case "GooseDefaultOrange":
                            if(isHexColor(urlParams.get(nms[i])))
                            GooseDefaultOrange.value = '#' + urlParams.get(nms[i]);
                            break;
                        case "GooseDefaultOutline":
                            if(isHexColor(urlParams.get(nms[i])))
                            GooseDefaultOutline.value = '#' + urlParams.get(nms[i]);
                            break;
                        case "MaxWanderingTimeSeconds":
                            if(!isNaN(urlParams.get(nms[i])))
                            MaxWanderingTimeSeconds.value = urlParams.get(nms[i]);
                            break;
                        case "MinWanderingTimeSeconds":
                            if(!isNaN(urlParams.get(nms[i])))
                            MinWanderingTimeSeconds.value = urlParams.get(nms[i]);
                            break;
                        case "FirstWanderTimeSeconds":
                            if(!isNaN(urlParams.get(nms[i])))
                            FirstWanderTimeSeconds.value = urlParams.get(nms[i]);
                            break;
                    }
                    if(i >= 5 && i <= 7){
                        txt += nms[i] + "=#" + urlParams.get(nms[i]) + "\n";
                    } else {
                        if(i == 10){
                            txt += nms[i] + "=" + urlParams.get(nms[i]);
                        } else {
                            txt += nms[i] + "=" + urlParams.get(nms[i]) + "\n";
                        }
                    }
                }
            }
        if(!txt.includes("null") && txt != ""){
            config_text="Version_DoNotEdit=1\n"+txt;
            config.value = config_text;
        }
    }
    apply.click();
})

share.addEventListener("click", function() {
    apply.click();
    var i =  `https://lim10dev.github.io/?EnableMods=${capitalizeFirstLetter( EnableMods.checked.toString() )}&SilenceSounds=${capitalizeFirstLetter(SilenceSounds.checked.toString())}&Task_CanAttackMouse=${capitalizeFirstLetter(Task_CanAttackMouse.checked.toString())}&AttackRandomly=${capitalizeFirstLetter(AttackRandomly.checked.toString())}&UseCustomColors=${capitalizeFirstLetter(UseCustomColors.checked.toString())}&GooseDefaultWhite=${GooseDefaultWhite.value.slice(1)}&GooseDefaultOrange=${GooseDefaultOrange.value.slice(1)}&GooseDefaultOutline=${GooseDefaultOutline.value.slice(1)}&MinWanderingTimeSeconds=${MinWanderingTimeSeconds.value}&MaxWanderingTimeSeconds=${MaxWanderingTimeSeconds.value}&FirstWanderTimeSeconds=${FirstWanderTimeSeconds.value}`;
    navigator.clipboard.writeText(i);
});

// Function to capitalize first letter of a word
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function getKey(e)
  {
      window.alert("The key code is: " + e.keyCode);
  }
  
  document.onkeyup = function(e){
        if(e.keyCode == 13)
        apply.click();  
  };

// when apply click
apply.addEventListener("click", function() {
    var nllchk = ""+GooseDefaultWhite.value + GooseDefaultOrange.value + GooseDefaultOutline.value + MaxWanderingTimeSeconds.value + MinWanderingTimeSeconds.value + FirstWanderTimeSeconds.value;
    if(nllchk.includes("null")){
        console.error("Invalid Input");
        EnableMods.checked = false;
        SilenceSounds.checked = false;
        Task_CanAttackMouse.checked = true;
        AttackRandomly.checked = false;
        UseCustomColors.checked = true;
        GooseDefaultWhite.value = "#ffffff";
        GooseDefaultOrange.value = "#ffa500";
        GooseDefaultOutline.value = "#d3d3d3";
        MaxWanderingTimeSeconds.value = 20;
        MinWanderingTimeSeconds.value = 40;
        FirstWanderTimeSeconds.value = 20;
    }
    config_text = `Version_DoNotEdit=1\nEnableMods=${capitalizeFirstLetter( EnableMods.checked.toString() )}\nSilenceSounds=${capitalizeFirstLetter(SilenceSounds.checked.toString())}\nTask_CanAttackMouse=${capitalizeFirstLetter(Task_CanAttackMouse.checked.toString())}\nAttackRandomly=${capitalizeFirstLetter(AttackRandomly.checked.toString())}\nUseCustomColors=${capitalizeFirstLetter(UseCustomColors.checked.toString())}\nGooseDefaultWhite=${GooseDefaultWhite.value}\nGooseDefaultOrange=${GooseDefaultOrange.value}\nGooseDefaultOutline=${GooseDefaultOutline.value}\nMinWanderingTimeSeconds=${MinWanderingTimeSeconds.value}\nMaxWanderingTimeSeconds=${MaxWanderingTimeSeconds.value}\nFirstWanderTimeSeconds=${FirstWanderTimeSeconds.value}`;
    config.value = config_text;
    config.focus();
});
// Spaghettiest code i've ever seen
MaxWanderingTimeSeconds.addEventListener("change", function() {
    if (MaxWanderingTimeSeconds.value < MinWanderingTimeSeconds.value)
        MaxWanderingTimeSeconds.value = MinWanderingTimeSeconds.value;
    
    if (MaxWanderingTimeSeconds.value < 1) {
        MaxWanderingTimeSeconds.value = 0;
    } else if (MaxWanderingTimeSeconds.value > 99999){
        MaxWanderingTimeSeconds.value = 99999;
    }
});
MinWanderingTimeSeconds.addEventListener("change", function() {
    if (MinWanderingTimeSeconds.value > MaxWanderingTimeSeconds.value)
        MinWanderingTimeSeconds.value = MaxWanderingTimeSeconds.value;
    
        if (MinWanderingTimeSeconds.value < 1) {
            MinWanderingTimeSeconds.value = 0;
        } else if (MinWanderingTimeSeconds.value > 99999){
            MinWanderingTimeSeconds.value = 99999;
        }
} );
FirstWanderTimeSeconds.addEventListener("change", function() {
    if (FirstWanderTimeSeconds.value < 1) {
        FirstWanderTimeSeconds.value = 0;
    } else if (FirstWanderTimeSeconds.value > 99999){
        FirstWanderTimeSeconds.value = 99999;
    }
} );

copy.addEventListener("click", function() {
    config.select();
    config.setSelectionRange(0, 99999);
    document.execCommand("copy");
});
// Copy text

down.addEventListener("click", function(){download(config_text, "config.ini", "plain/text")});
// Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
} // https://stackoverflow.com/questions/13405129/javascript-create-and-save-file/53864791
