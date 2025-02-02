document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        "Hiiii baby", 
        "I just want to say that I’m really proud of you.",
        "I see how hard you’ve been working, and even though I can’t be there to watch you perform, I still want to find ways to show my support—so this is just one of those ways.",
        "Every time I get a glimpse of what you do, it kind of puts things into perspective for me.",
        "It’s not that I wish I could do what you do, but more that I know I never could",
        "—and I think that’s what makes it so impressive to me.",
        "We’re all put onto this earth to fulfill a different purpose, and yours is something that takes guts. You choose passion every single day, and that’s something I love about you.",
        "We both know I overthink everything, but watching you go all in on something you love reminds me why it matters to take risks for the things that mean the most.",
        "For things that we're passionate about, a part of me feels like I lost that a long time ago. But you remind me why passion is so important for purpose.",
        "And I love getting to see you live your purpose."
    ];
   
    let index = 0;
    const textElement = document.getElementById("text");
    const imageContainer = document.getElementById("image-container");

    // Show first message instantly
    textElement.textContent = messages[index];

    // After 2 seconds, show the second message automatically
    setTimeout(() => {
        textElement.style.opacity = 0;
        setTimeout(() => {
            index++;
            textElement.textContent = messages[index];
            textElement.style.opacity = 1;

            // Now allow clicking to continue through the rest of the messages
            textElement.addEventListener("click", updateText);
        }, 500);
    }, 2000);

    function updateText() {
        if (index < messages.length - 1) {
            textElement.style.opacity = 0;
            setTimeout(() => {
                textElement.textContent = messages[++index];
                textElement.style.opacity = 1;
            }, 500);
        } else {
            textElement.style.opacity = 0;
            setTimeout(() => {
                textElement.style.display = "none";
                displayFinalMessage();
            }, 500);
        }
    }

    function displayFinalMessage() {
        const catGif = new Image();
        catGif.src = './cat-heart.gif';
        catGif.alt = 'Cat Heart';
        catGif.classList.add("centered-image");

        const finalText = document.createElement("p");
        finalText.textContent = "I love you Lili";
        finalText.style.fontSize = "2em";
        finalText.style.textAlign = "center";
        finalText.style.marginTop = "10px";

        imageContainer.appendChild(catGif);
        imageContainer.appendChild(finalText);

        setTimeout(() => {
            catGif.classList.add("fade-out");
            finalText.classList.add("fade-out");

            setTimeout(() => {
                catGif.style.display = "none";
                finalText.style.display = "none";

                const liliImage = new Image();
                liliImage.src = './Lili.jpg';
                liliImage.alt = 'Lili';
                liliImage.classList.add("lili-image");
                imageContainer.appendChild(liliImage);
            }, 500);
        }, 2000);
    }
});
