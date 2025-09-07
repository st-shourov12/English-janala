const allLevel = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(data => displayLesson(data.data) )
};




const showLesson = (id) => {
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then(r => r.json())
    .then(load => displayLevelWord(load.data))
};


const displayLevelWord = (words) =>{
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML= "";

    words.forEach(word => {
        const card = document.createElement("div");

        console.log(word);
        card.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
                <h2 class="font-bold text-2xl">${word.word}
                </h2>
                <p class="font-semibold">
                    Meaning / Pronounciation
                </p>
                <h3 class="text-2xl font-medium fb">
                    ${word.meaning} / ${word.pronounciation}
                </h3>
                <div class="flex justify-between items-center">
                    <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
        `;

        wordContainer.append(card);
    });
}

const displayLesson = (lessons) => {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = ``;
    
    lessons.forEach(element => {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button onclick="showLesson(${element.level_no})" href="" class="btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open"></i>
            Lesson -${element.level_no}
        </button>
        `;
        levelContainer.append(btnDiv)
    });

};













allLevel();