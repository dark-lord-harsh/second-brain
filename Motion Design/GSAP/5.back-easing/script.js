const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector('.indicator');
const tabRow = document.querySelector('.tab-row');

function updateIndicator(target) {
  const tabBound = target.getBoundingClientRect();
  const rowBound = tabRow.getBoundingClientRect();

  const width = tabBound.width;
  const offset = tabBound.left - rowBound.left;

  gsap.to(indicator, {
    x: offset,
    width: width,
    duration: 0.4,
    ease: 'back.out(1.7)',
    force3D: true
  })
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('selected'));
    tab.classList.add('selected');
    updateIndicator(tab);
  })
})

updateIndicator(document.querySelector('.tab.selected'));