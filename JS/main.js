var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');
var body = document.body; 

menuIcon.addEventListener('click', () => {
   if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/icone.png';
        body.classList.remove('menu-aberto'); 
   } else {
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'img/close2.png';
        body.classList.add('menu-aberto'); 
   }
});
