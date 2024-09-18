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
    for (let i = startår; i <= 2024; i++) {
        årOutputEl.innerText += i + "\n"

    }

    if (startår > 2024) {
        årOutputEl.innerText = "Time traveler? 🤔"
    } else if (startår < 2015) {
        årOutputEl.innerText = "Du er ikke såå gammel, right? 🤔"
    } else if (2024 - startår > 5) {
        årOutputEl.innerText += "Du har vært her i mer enn 5 år, da må du ha tatt noen ekstra år. Håper du har kost deg i Webkom! ❤"
    } else if (2024 - startår > 3) {
        årOutputEl.innerText += "Du har vært her i mer enn 3 år, det begynner å bli en del år! 🤩"
    } else if (startår == 2024) {
        årOutputEl.innerText += "Du har nettopp blitt med. Gratulerer! Dette kommer til å bli gøy 😊"
    } else {
        årOutputEl += "Glade for å ha deg her 🥰"
    }

    document.getElementById('bilde').style.display = 'block';
}
