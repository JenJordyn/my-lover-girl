/* script.js */
const messages = [
    "Hey Baby, I just want to say that I’m really proud of you.",
    "I see how hard you’ve been working, and even though I can’t be there to watch you perform, I still want to find ways to show my support.",
    "You already know I’m creative—so this is just one of those ways.",
    "Every time I get a glimpse of what you do, it kind of puts things into perspective for me. It’s not that I wish I could do what you do (I think I'd shrivel up from fear), but more that I know I never could—and I think that’s what makes it so impressive to me.",
    "We all have our own thing, and yours is something that takes guts. You choose passion every single day, and that’s something I’ve always admired about you.",
    "We both know I overthink everything, but watching you go all in on something you love reminds me why it matters to take risks for the things that mean the most. For things that we're passionate about, a part of me feels like I lost that a long time ago. But you remind me why passion is so important for purpose.",
    "And God I love getting to see you pursue your purpose."
];

let index = 0;
const textElement = document.getElementById("text");
const gifElement = document.getElementById("gif");
const finalTextElement = document.getElementById("final-text");

textElement.addEventListener("click", function() {
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
            gifElement.style.display = "block";
            finalTextElement.style.display = "block";
        }, 500);
    }
});