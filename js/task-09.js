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

const selectedTags = new Set();//Створюємо колекцію
// selectedTags.add(5);
// selectedTags.add(5);
// selectedTags.add(5);
// selectedTags.add(4);
// Записує в колекцію лише не дубльовані ел-ти, тобто запише {5,4}
// selectedTags.add({a: 1});
// selectedTags.add({a: 1});
// А якщо додавати однакові об'єкти, то їх додасть обидва. В даному випадку буде {5, 4, {а: 1}, {a: 1}}
tagsContainer.addEventListener('click',onTagsContainerclick);
function onTagsContainerclick(evt) {
        if(evt.target.nodeName !== 'BUTTON') {
            return;
        }
        // console.log(evt.target);
        const btn = evt.target;
        const tag = btn.dataset.value;//Значення дата-атрибуту
        console.log(btn.classList.contains('tags__btn--active'));//Перевіряємо, чи є в кнопки вказаний клас
    const isActiveBtn = btn.classList.contains('tags__btn--active');//True, якщо кнопка має вказаний клас, і false, якщо не має
    if(isActiveBtn) {
        selectedTags.delete(tag);
    } else {
        selectedTags.add(tag);
    }//Якщо на поточному ел-ті вже є вказаний клас, то видали його, а якщо немає, то додай
        btn.classList.toggle('tags__btn--active');
        console.log(selectedTags); //виведи колекцію натиснутих кнопок
}
