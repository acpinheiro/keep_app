/*Toggle menu principal*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
//consulta log:
//console.log(toggle)
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*clique em opção do menu*/
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function (){
    nav.classList.remove('show')
  })
}
/* mudar o header da pagina com scroll */
const header = document.querySelector ('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if(window.scrolly >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}
/* Testimonials Sliders */
const swiper = new Swiper('.swiper', {
 slidesPerView: 1,
 pagination: {
   el: '.swiper-pagination'
 },
 mousewheel: true,
 keyboard: true,
 breakpoints: {
   767: {
     slidesPerView: 2,
     setWrapperSize: true
   }
 }
})
/* ScrollReveal - Mostrar elementos qdo der scroll na página */
const ScrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 7000,
  reset: true
})

ScrollReveal. reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #scope .header, #scope .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  footer .brand, footer .social
  `,  {interval: 100 }
  )
/* Botao voltar p/ o topo */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY>=560) {
    backToTopButton.classList.add('show')}
    else {
      backToTopButton.classList.remove('show')}
}

/*menu ativo conforme seção visivel na pagima */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
/* When scroll */
window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
 })