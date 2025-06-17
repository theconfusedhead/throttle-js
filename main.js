const count = document.querySelector("h2 span");

const updateNumber = throttle(() => {
  count.innerText = ++count.innerText;
}, 800);

document.addEventListener("mousemove", () => {
  updateNumber();
});

function throttle(fn, delay = 1000) {
  let id = null;
  return (...arg) => {
    if (id) return;
    id = setTimeout(() => {
      id = null;
      fn(...arg);
    }, delay);
  };
}
