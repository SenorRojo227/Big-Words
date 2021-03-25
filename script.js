const WORDS = [
    {
        word: "Effervescent",
        type: "adj",
        def: "marked by or expressing an appealingly lively quality.",
        sentence: "She took his hand, her expression efforvescent as ever."
    },
    {
        word: "Proficuous",
        type: "adj",
        def: "profitable; advantageous; useful.",
        sentence: "They walked across the pier, the handrail proving rather proficuous."
    },
    {
        word: "Excogitate",
        type: "verb",
        def: "to think out, plan, or devise.",
        sentence: "Choosing to excogitate his next words, he continued in silence."
    },
    {
        word: "Cynosure",
        type: "noun",
        def: "a person or thing that is the center of attention or admiration.",
        sentence: "He sought to make her laugh, the pleasant sound acting as his sole cynosure."
    }
];

function generateWords() {

    let usedNums = [-1, -1, -1];
    let num = 0;

    for (let i = 0; i < 3; i++) {

        do {
            num = Math.floor(Math.random() * WORDS.length);
        } while (usedNums.includes(num));
        usedNums[i] = num;

        document.getElementById("word" + (i+1)).innerHTML = WORDS[num].word;
        document.getElementById("sentence" + (i+1)).innerHTML = WORDS[num].sentence;
        document.getElementById("def" + (i+1)).innerHTML = WORDS[num].word 
            + " (" + WORDS[num].type + "): " 
            + WORDS[num].def;

    }

}