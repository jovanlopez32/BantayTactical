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
    
    const menu = document.querySelector('.menutoggle');
    const menuOptions = document.querySelector('.navbar');
    menu.classList.toggle('active');
    menuOptions.classList.toggle('active');

    console.log(menu.classList.value);

    if(menu.classList.value == 'menutoggle active'){
        const menutoggle = document.querySelector('.bi-list');
        menutoggle.classList.remove('bi-list');
        menutoggle.classList.add('bi-x-lg');
    }else{
        const menutoggle = document.querySelector('.bi-x-lg');
        menutoggle.classList.remove('bi-x-lg');
        menutoggle.classList.add('bi-list');
    }
    
}
