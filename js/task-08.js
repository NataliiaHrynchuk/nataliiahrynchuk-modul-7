
const tagsContainer = document.querySelector('.js-tags');
let selectedTag = null;

tagsContainer.addEventListener('click',onTagsContainerclick);

function onTagsContainerclick(evt) {
    if(evt.target.nodeName !== 'BUTTON') {
        return;
    }

    const currentActiveBtn = document.querySelector('.tags__btn--active');// Пошук активної кнопки. при першому кліку буде null

    console.log(currentActiveBtn);

    if(currentActiveBtn) {
        currentActiveBtn.classList.remove('tags__btn--active');
    } //якщо є активна кнопка, то зняти з неї вказаний клас
    
    // currentActiveBtn?.classList.remove('tags__btn--active'); //замінює попередній if (якщо те, що лівіше знаку запитання, true, то знайде в нього classList. А якщо null або undefind, то далі нічого виконувати не буде.)

    console.log(evt.target);

    const nextActiveBtn = evt.target;
    nextActiveBtn.classList.add('tags__btn--active');//а щойно клікнутій кнопці додати вказаний клас

    selectedTag = nextActiveBtn.dataset.value;//значення data-атрибуту клікнутої кнопки

    console.log(selectedTag);
}