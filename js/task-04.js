// Приклад для перевірки підключення бібліотеки Lodash

const result = _?.add(2, 3);
console.log(result);


// приклад роботи Throttle і Debounce

const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const debouncedOutput = document.querySelector(".output.debounced");

const eventCounter = {
  vanilla: 0,
  throttled: 0,
  debounced: 0,
};

document.addEventListener("scroll", () => {
  eventCounter.vanilla += 1;
  vanillaOutput.textContent = eventCounter.vanilla;
});

document.addEventListener(
  "scroll",
  _.throttle(() => {
    eventCounter.throttled += 1;
    throttledOutput.textContent = eventCounter.throttled;
  }, 300)
);

document.addEventListener(
    "scroll",
    _.debounce(() => {
      eventCounter.debounced += 1;
      debouncedOutput.textContent = eventCounter.debounced;
    }, 300)
  );
  