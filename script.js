function mixWords() {
    let w1 = document.getElementById("word1").value.trim();
    let w2 = document.getElementById("word2").value.trim();

    if (!w1 || !w2) {
        document.getElementById("result").textContent = "Please enter two words 💛";
        return;
    }

    // Take first half of word 1 + second half of word 2
    let half1 = w1.slice(0, Math.ceil(w1.length / 2));
    let half2 = w2.slice(Math.floor(w2.length / 2));

    let mixed = half1 + half2;

    document.getElementById("result").textContent = mixed;
}

