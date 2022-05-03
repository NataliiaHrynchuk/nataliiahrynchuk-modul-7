const lazyImages = document.querySelectorAll('img[loading="lazy"]');//Знайти всі картинки зі значенням lazy атрибуту loading
console.log(lazyImages);// Виведе масив NodeList з усіма картинками, в яких loading="lazy"

//---- Можна зробити делегування, але ми повішаємо слухача на кожну картинку:

lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded);
});// В циклі forEach для кожної картинки вішаємо слухача події 'load' і передаємо функцію, яка буде викликана, коли завантажиться картинка

function onImageLoaded (evt) {
    console.log('Картинка завантажилась');
    // console.log(evt);//Можна подивитись, які є можливості в evt. напр в path елемент, на якому відбулась подія
    console.log(evt.target);// покаже нашу картинку img
    evt.target.classList.add('appear'); // Коли картинка завантажилась, вішаємо на неї клас appear

} 
