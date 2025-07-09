const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const message = document.createElement('p');
input.insertAdjacentElement("afterend", message); //message after input

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const chapter = input.value.trim();
        input.value = '';

        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');

        li.textContent = chapter;
        deleteBtn.textContent = '❌';
        deleteBtn.setAttribute('aria-label', `Remove ${chapter}`);

        li.append(deleteBtn);
        list.append(li);

        input.focus();
        message.textContent = '';

        // deleteBtn.addEventListener('click', () => {
        //     list.removeChild(li);
        //     input.focus();
        // });
    }
    else {
        message.textContent = 'Please enter a book and a chapter';
        input.focus();
    }
});
// Using Event Delegation to handle events on multiple elements
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const li = e.target.closest('li'); 
        li.remove();
        input.focus();
    }
});