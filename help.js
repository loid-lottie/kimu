const videos = [
    "videos/cap1.mp4",
    "videos/cap2.mp4",
    "videos/cap3.mp4"
];

const positions = [
    "bottom-center",
    "top-left",
    "top-middle"
]

const quotes = [
    "You don't have to figure everything out today.",
    "You're allowed to rest without earning it.",
    "Breathe. The world can wait for a moment.",
    "Be gentle with yourself today.",
    "Drink some water. Stretch a little. That's enough for now.",
    "You deserve kindness, especially from yourself.",
    "It's okay not to carry everything at once.",
    "You don't have to be productive every minute.",
    "You've survived every difficult day so far.",
    "The next five minutes are all you need to think about.",
    "Small victories still count.",
    "There is no deadline for feeling okay.",
    "The clouds can carry today's worries for a while.",
    "Even the capybara is taking a break.",
    "It's okay to simply exist for a while.",
    "Peace doesn't have to be earned.",
    "The capybara approves this break.",
    "Even capybaras know when it's time to rest.",
    "Your value isn't measured by how much you accomplish.",
    "Some days are for surviving. That's enough.",
    "It's okay to leave some things unfinished.",
    "You're allowed to choose peace.",
    "Nearvy - Kim 2026",
    "Chat mo ba yun kay loid (kausap niya ko) - Kim 2026",
    "Kokonak melk - Loid 2026",
    "May bush, may bush, malamang may bush - Kim 2026",
    "Tumatanda hanggang sa pagtanda - Kim 2026",
    "Particifaith - Kim 2026",
    "Two-handed Armor - Kim 2026",
    "Fast Forward - Kim 2026",
    "Zeyf Zone - Kim 2026",
    "Ano pangalan ni bear? - Kim 2026",
    "Nagraraban sila - Kim 2026",
    "Gaano ba ka corrupt yung soil dito na kailangan pa natin 'ahitin - Loid 2026",
    "Ferpect farry - Loid 2026",
    "Tinayuan lang ni Daren (Darius) - Loid 2026",
    "Homemade Gownpowder - Kim 2026",
    "Ikaw ba si veiger? Hindi, ikaw si Loid - Kim 2026",
    "Ally healding - Kim 2026",
    "You were never too much Kimchi remember that - Loid 2026",
];

const video = document.getElementById("bgVideo");
const quote = document.getElementById("quote");

const randomVideo = Math.floor(Math.random() * videos.length);
const randomQuote = Math.floor(Math.random() * quotes.length);

video.src = videos[randomVideo];

quote.textContent = quotes[randomQuote];
quote.classList.add(positions[randomVideo]);

document.getElementById("reloadBtn").addEventListener("click", () => {
    location.reload();
});