const lazyImages = document.querySelectorAll('img[loading="lazy"]');
//Знайти всі картинки зі значенням lazy атрибуту loading
console.log(lazyImages);// Виведе масив NodeList з усіма картинками, в яких loading="lazy"

//---- Можна зробити делегування, але ми повішаємо слухача на кожну картинку:
// В циклі forEach для кожної картинки вішаємо слухача події 'load' 
// і передаємо функцію, яка буде викликана, коли завантажиться картинка.
// А налаштування  once: true дозволяє встановити це на 1 івент.
lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded, { once: true } );
});

function onImageLoaded(evt) {
    console.log('Картинка завантажилась');
    evt.target.classList.add('appear');
}

   
    // console.log(evt);//Можна подивитись, які є можливості в evt. напр в path елемент, на якому відбулась подія
     // ряд. 15 - Коли картинка завантажилась, вішаємо на неї клас appear

// але цей код в мене не працював поки в налаштуваннях браузера не вимкнула кеш, натиснувши на закладці 
// Network галочку Disable cache
