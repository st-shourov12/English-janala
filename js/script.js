const allLevel = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(data => displayLesson(data.data) )
};

const displayLesson = (lessons) => {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = ``;
    
    lessons.forEach(element => {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button href="" class="btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open"></i>
            Lesson -${element.level_no}
        </button>
        `;
        levelContainer.append(btnDiv)
    });

};
















allLevel();