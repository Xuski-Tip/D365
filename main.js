//  ПЕРЕМЕННЫЕ 
const burgerButton = document.querySelector('.burger-button')
const mobile = document.querySelector('.mobile-menu')

burgerButton.addEventListener('click', () => {
   burgerButton.classList.toggle('active')
   if (burgerButton.classList.contains('active')){
      mobile.classList.add('open')
   }
   else {
      mobile.classList.remove('open');
   }
})