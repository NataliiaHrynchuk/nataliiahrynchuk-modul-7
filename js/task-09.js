const tagsContainer = document.querySelector('.js-tags');
// ====Зробимо, щоб можна було клікати кнопки, при цьому клікнуті зафарбовувались в інший колір, а при повторному кліку колір прибирався. При цьому значення дата-атрибуту буде додаватись в масив. Туди ж будуть потрапляти й значення дата-атрибутів тих кнопок, з яких прибрався колір.===========================================

// const selectedTags = [];

// tagsContainer.addEventListener('click',onTagsContainerclick);



// function onTagsContainerclick(evt) {
//     if(evt.target.nodeName !== 'BUTTON') {
//         return;
//     }
//     console.log(evt.target);

//     evt.target.classList.toggle('tags__btn--active');//Перевірить, якщо такий клас є, то прибере, а якщо немає, то додасть

//     selectedTags.push(evt.target.dataset.value);
//     console.log(selectedTags);
// }

// =======Другий варіант, при якому в колекцію будуть записуватись значення дата-атрибутів лише тих кнопок, які зафарбовані в даний момент=======

const selectedTags = new Set();
tagsContainer.addEventListener('click',onTagsContainerclick);
function onTagsContainerclick(evt) {
        if(evt.target.nodeName !== 'BUTTON') {
            return;
        }
        console.log(evt.target);
    
        evt.target.classList.toggle('tags__btn--active');
        console.log(selectedTags);
}