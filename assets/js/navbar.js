/* window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    const icon = document.querySelector('.bi');
    header.classList.toggle("sticky", window.scrollY > 0);

    console.log(header.classList.value);

    if(header.classList.value == 'sticky'){
        icon.setAttribute('style', 'color: #ffff');
    }else{
        icon.setAttribute('style', 'color: #353535');
    }

    
}) */

function toggleMenu(){
    
    const menu = document.querySelector('.menuToggle');
    const menuOptions = document.querySelector('.navbar');
    menu.classList.toggle('active');
    menuOptions.classList.toggle('active');

    console.log(menu.classList.value);

    if(menu.classList.value == 'menuToggle active'){
        const menuToggle = document.querySelector('.bi-list');
        menuToggle.classList.remove('bi-list');
        menuToggle.classList.add('bi-x-lg');
    }else{
        const menuToggle = document.querySelector('.bi-x-lg');
        menuToggle.classList.remove('bi-x-lg');
        menuToggle.classList.add('bi-list');
    }
    
}
