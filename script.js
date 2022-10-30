var requiredoutput
var c,a,d

function operation() {
    a = document.getElementById("operate").value
    requiredoutput = document.getElementById("result")
    requiredoutput.value = a.replace(/[[0-9]+]/g,'');
}

function copyfunction() {
    d = document.getElementById("result").select();
    document.execCommand("copy");
}
