const imageListEl = document.querySelector(".imageList")
const stuckPopupEl = document.querySelector("#stuckPopup")
const buttons = document.querySelectorAll("button")
const body = document.body

imageLinks = [
    {
        imageLink: "badet",
        imageText: "Satte meg fast på badet, men det var ikke særlig stress. Bare tok det med et smil. Prøvde å klatre ut med stige, men hoftene mine kom seg ikke gjennom ventilasjonsanlegget."

    },
    {
        imageLink: "vegar_busk",
        imageText: "Har en kompis som satte seg fast i en busk en gang. Det kom grevlinger som begynte å gnage, men han kunne i det minste gå på do uten at noen så han"

    },
    {
        imageLink: "tre",
        imageText: "Jeg har vært borti det meste. Det er en grunn til at jeg foretrekker å sitte fast i en busk og det er fordi da jeg satt fast i et tre var det helt jævlig."

    },
    {
        imageLink: "bakken",
        imageText: "Satt meg fast i bakken og ja det sugde som faen. Kom meg løs men skoen min har asfalt på seg og det stinker."

    },
    {
        imageLink: "dress",
        imageText: "Satt meg fast i veggen med dress, men det var jo chill det ser ut som at jeg slapper av."

    },

    {
        imageLink: "hule",
        imageText: "Auuuuuuu!!! Men i faens! "

    },

    {
        imageLink: "kul",
        imageText: "Gikk langs veggen da jeg plutselig satte meg fast I veggen på en heft10 måte ): Hater når jeg blir tvunget til å være chill og fet. "

    },
    {
        imageLink: "sofa",
        imageText: "Denne har du kanskje ikke sett før, men ja jeg satt meg faktisk fast i sofaen og slappet av hele dagen. Tok rundt 2 timer å komme meg løs."

    },

]

let scrollLocked = false;

/* Stuck button */
buttons[0].addEventListener("click", () => {
    scrollLocked = !scrollLocked;
    document.body.style.overflow = scrollLocked ? "hidden" : "auto";
    stuckPopupEl.style.display = scrollLocked ? "block" : "none";
});

/* Chill mode button */
chillElementsList = [body, buttons[0], buttons[1]]

buttons[1].addEventListener("click", () => {
    chillElementsList.forEach(element => {
        console.log(element)
     
    });
})


imageLinks.forEach(image => {
    imageListEl.innerHTML += `
        <div class="imageBox">
            <p>${image.imageText}</p>
            <div class="imageDiv"><img src="${image.imageLink}.jpeg"></div>
      </div>
    `
});
