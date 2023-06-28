export function safariHacker(dom) {
  let windowsVH = window.innerHeight / 100;
  dom.style.setProperty('--vh', windowsVH + 'px');
  window.addEventListener('resize', function () {
    dom.style.setProperty('--vh', windowsVH + 'px');
  });
}
