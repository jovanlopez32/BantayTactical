
var pos = 0

var totalSlides = document.querySelectorAll('.slider-wrap ul li')

var sliderWidth = 100

console.log(totalSlides.length)
	
var ulslider = document.querySelector('.slider-wrap ul.slider')

ulslider.style.width = (sliderWidth * totalSlides.length) + 'vw'


//next slide
document.querySelector('.next').addEventListener('click', slideRight)

//previous slide
document.querySelector('.previous').addEventListener('click', slideLeft)

//automatic slider
var autoSlider = setInterval(slideRight, 3000)


document.querySelectorAll('.slider-wrap ul li').forEach(function(element){
    
    var li = document.createElement('li')
    document.querySelector('.pagination-wrap ul').append(li)

})

pagination()


document.querySelector('.slider-wrap').addEventListener('mouseover', function(){

    this.classList.add('active')
    clearInterval(autoSlider)
    
})

document.querySelector('.slider-wrap').addEventListener('mouseleave', function(){
    this.classList.remove('active')
    autoSlider = setInterval(slideRight, 3000)
})


function slideLeft(){
    
    pos--
    if(pos == -1){
        pos = totalSlides.length - 1
    }

    ulslider.style.left = (-sliderWidth*pos) + 'vw'

    pagination()
}

function slideRight(){
    
    pos++
    if(pos == totalSlides.length ){
        pos = 0
    }

    ulslider.style.left = (-sliderWidth*pos) + 'vw'

    pagination()
}

function pagination(){


   
    document.querySelectorAll('.pagination-wrap ul li').forEach(function(element){
        element.classList.remove('active')
    })

    document.querySelector('.pagination-wrap ul li:nth-child('+(pos+1)+')').classList.add('active')
    
    document.querySelector('.slider-wrap ul.slider li:nth-child('+(pos+1)+')').style.background = 'url(assets/img/banner-'+(pos+1)+'.webp)'
    document.querySelector('.slider-wrap ul.slider li:nth-child('+(pos+1)+')').style.backgroundPosition = 'center'
    document.querySelector('.slider-wrap ul.slider li:nth-child('+(pos+1)+')').style.backgroundSize = 'cover'
    document.querySelector('.slider-wrap ul.slider li:nth-child('+(pos+1)+')').style.backgroundAttachment = 'fixed'
    
}






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
