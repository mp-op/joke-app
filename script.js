const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything!",
  "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Parallel lines have so much in common… it’s a shame they’ll never meet.",
  "Why don’t programmers like nature? Too many bugs."
];

function showJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  document.getElementById("joke").innerText = jokes[randomIndex];
}
