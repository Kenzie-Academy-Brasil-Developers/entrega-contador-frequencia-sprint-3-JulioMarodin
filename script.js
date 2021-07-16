const button = document.getElementById("countButton");
button.addEventListener("click", function() {
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLocaleLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    let typedWords = typedText.split(/\s/);
    const letterCounts = {};
    const wordCounts = {};

    for(let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];

        if(letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }

    for(let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent;
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span);
    }

    for(let i = 0; i < typedWords.length; i++) {
        currentWord = typedWords[i];

        if(wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1;
        } else {
            wordCounts[currentWord]++;
        }
    }
    
    for(let words in wordCounts) {
        const span2 = document.createElement("span");
        const textContent2 = `"${words}": ${wordCounts[words]}, `;
        span2.innerText = textContent2;
        const word = document.getElementById("wordsDiv");
        word.appendChild(span2);
    }
})