

window.addEventListener('load', function(){

    var bannerLeft = document.querySelector('.background > div:first-child');
    var bannerRight = document.querySelector('.background > div:last-child');

    bannerLeft.style.transform = "translateX(0px)"
    bannerRight.style.transform = "translateX(0px)"
    bannerLeft.style.opacity = "100%"
    bannerRight.style.opacity = "100%"
});






if (screen.width > 1024) {

        var cardProductos = document.querySelectorAll('.card-productos')
        var cardContenido = document.querySelectorAll('.card-productos-contenido')
    
        cardProductos.forEach(function(element){
    
        element.addEventListener("mouseover", function(event) {
    
            var content = this.querySelector('.card-productos-contenido')
            var content_a = this.querySelector('.card-productos-contenido>a')
    
            content.style.color = "rgba(255, 255, 255, 1)"
            content.style.transform = "translateY(0px)"
    
            content_a.style.color = "rgba(255, 255, 255, 1)"
    
        }, true);
    
        element.addEventListener("mouseout", function(event) {
    
            var content = this.querySelector('.card-productos-contenido')
            var content_a = this.querySelector('.card-productos-contenido>a')
    
            content.style.color = "rgba(255, 255, 255, 0)"
            content.style.transform = "translateY(100px)"
    
            content_a.style.color = "rgba(255, 255, 255, 0)"
    
        }, true);
        
    
    })


}else {
    var content = document.querySelector('.card-productos-contenido')
    var content_a = document.querySelector('.card-productos-contenido>a')

    content.style.color = "rgba(255, 255, 255, 1)"
    content.style.transform = "translateY(0px)"

    content_a.style.color = "rgba(255, 255, 255, 1)"
}



/* cardContenido.forEach(function(element2) {

    cardProductos.forEach(function(element) {
        element.addEventListener("mouseover", function(event) {
    
    
           
            
            element2.style.transform = "translateY(0px)"
            element2.style.color = "rgba(255, 255, 255, 1)"
        
        
    
            cardContenidoa = document.querySelector('.card-productos-contenido>a')
            cardContenidoa.style.color = "rgba(255, 255, 255, 1)" 
    
        }, true);
    });

    

}); */

 






/* cardProductos.addEventListener("mouseover", function() {

    

        cardContenido = document.querySelector('.card-productos-contenido')
        cardContenido.style.transform = "translateY(0px)"
        cardContenido.style.color = "rgba(255, 255, 255, 1)"
        
    
    

    cardContenidoa = document.querySelector('.card-productos-contenido>a')
    cardContenidoa.style.color = "rgba(255, 255, 255, 1)"

}, false); */