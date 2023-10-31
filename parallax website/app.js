let Clouds = document.getElementById('clouds')

let text1 = document.getElementById('text')
let gateLeft = document.getElementById('gate-left')
let gateRight = document.getElementById('gate-right')
let sakuraRight = document.getElementById('sakura-left')
let sakuraLeft = document.getElementById('sakura-right')


window.addEventListener('scroll', () => {
   let value = window.scrollY;

   Clouds.style.marginBottom = value * 4.5 + 'px';
   gateLeft.style.left = value * -0.5 + 'px'
   gateRight.style.left = value * 0.5 + 'px'
   sakuraLeft.style.left = value * 0.5 + 'px'
   sakuraRight.style.left = value * -0.5 + 'px'
   text1.style.marginBottom = value * 2.5 + 'px';
})
