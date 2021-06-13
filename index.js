document.addEventListener('DOMContentLoaded', () => {
  anime({
    targets: '.profile-content',
    translateX: [400, 0],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: 600,
    opacity: [0, 1],
  })

  anime({
    targets: '.navbar a',
    translateY: [50, 0],
    easing: 'easeOutExpo',
    delay: 700,
    duration: 1500,
    delay: (e, i) => {
      return 1000 + 100 * i;
    },
    opacity: [0, 1]
  })
})
