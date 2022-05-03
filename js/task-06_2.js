// =================feature detection=======================
// Перевіряємо, чи підтримує браузер відкладене завантаження.
// Якщо підтримує, то використовуємо його.А якщо не підтримує,
// то підключаємо бібліотеку lazysizes

if ('loading' in HTMLImageElement.prototype) {
    console.log('Бравзер підтримує ліниве завантаження зображень');
    addSrcAttrToLazyImages();
} else {
    console.log('Бравзер НЕ підтримує ліниве завантаження зображень');
    addLazySizesScript();
} // В умові else ми створюємо елемент script бібліотеки і вставляємо в кінець body

// А далі, як і в попередніх прикладах, підключаємо анімацію

const lazyImages = document.querySelectorAll('img[data-src]');
console.log(lazyImages);

lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded, { once: true});
});

function onImageLoaded (evt) {
    console.log('Картинка завантажилась');
    evt.target.classList.add('appear'); 
} 
function addSrcAttrToLazyImages() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
}
function addLazySizesScript() {
const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    script.integrity = 'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
    script.crossOrigin = 'anonymous';
    script.referrerpolicy = 'no-referrer';

    document.body.appendChild(script);
}
