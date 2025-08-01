const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const message = document.createElement('p');
input.insertAdjacentElement("afterend", message); //message after input

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {

    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');

    li.textContent = item;
    deleteBtn.textContent = '❌';
    deleteBtn.setAttribute('aria-label', `Remove ${item}`);

    li.append(deleteBtn);
    list.append(li);

    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent)
        input.focus();
    });
}

button.addEventListener('click', () => {
    if (input.value !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();

    }
    else {
        message.textContent = 'Please enter a book and a chapter';
        input.focus();
    }
});

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}



// Using Event Delegation to handle events on multiple elements
// list.addEventListener('click', (e) => {
//     if (e.target.tagName === 'BUTTON') {
//         const li = e.target.closest('li'); 
//         li.remove();
//         input.focus();
//     }
// });







