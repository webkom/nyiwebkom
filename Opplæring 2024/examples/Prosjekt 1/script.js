

console.log("hdwd")

årEl = document.getElementById("år")
navnEl = document.getElementById("navn")
årOutputEl = document.getElementById("opÅr")
navnOutPutEl = document.getElementById("opNavn")


function newUser(e) {

    console.log("jkfwe")
    navnOutPutEl.innerText = "Hei! \n Det var hyggelig å hilse på deg " + navnEl.value + "."

    startår = årEl.value;
    årOutputEl.innerText = "Du har vært med i webkom årene:\n"
    for(let i=startår; i <= 2024; i++) {
        årOutputEl.innerText += i + "\n"

    }

    if (startår-2024 > 5) {
        årOutputEl.innerText += "Du har her i mer enn 5 år, da må du ha tatt noen ekstra år. Håper du har kost deg i webkom"
    }else if (startår-2024 > 5) {
        årOutputEl.innerText += "Du har her i mer enn 3 år, det begynner å bli en del år"
    }else if (startår==2024){
        årOutputEl.innerText += "Du har nettopp blitt med. Gratulerer! Dette kommer til å bli gøy"
    }

}