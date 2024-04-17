document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("transformButton").addEventListener("click", transformText);
    var lowercaseRadio = document.getElementById("lowercaseRadio");
    var uppercaseRadio = document.getElementById("uppercaseRadio");

    lowercaseRadio.addEventListener("click", function() {
        lowercaseRadio.checked = true;
        uppercaseRadio.checked = false;
    });

    uppercaseRadio.addEventListener("click", function() {
        lowercaseRadio.checked = false;
        uppercaseRadio.checked = true;
    });
});

function transformText() {
    var input = document.getElementById("inputText").value;
    var lowercaseChecked = document.getElementById("lowercaseRadio").checked;
    var uppercaseChecked = document.getElementById("uppercaseRadio").checked;

    if (input.trim() === "") {
        alert("Kérlek, írj be egy szöveget!");
        return;
    }

    if (!lowercaseChecked && !uppercaseChecked) {
        alert("Kérlek, válassz ki egy átalakítást (kisbetűs vagy nagybetűs)!");
        return;
    }

    var transformation;

    if (lowercaseChecked) {
        transformation = "lowercase";
    } else if (uppercaseChecked) {
        transformation = "uppercase";
    }

    var output;

    if (transformation === "lowercase") {
        output = input.toLowerCase();
    } else if (transformation === "uppercase") {
        output = input.toUpperCase();
    }

    document.getElementById("outputText").innerText = output;
}
