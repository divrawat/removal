var requiredoutput
var c,a,d

function operation() {
    a = document.getElementById("operate").value
    requiredoutput = document.getElementById("result")
    requiredoutput.value = a.replace(/[[0-9]+]/g,'');
}

function copyfunction() {
    c = document.getElementById("result").value = requiredoutput;
    d = document.getElementById("result").select();
    document.execCommand("copy");
}