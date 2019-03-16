var date_stamp = document.querySelector('.curr_year')
var navbar  = document.querySelector('.nav-outer-most')


var date = new Date();
date_stamp.innerHTML = date.getFullYear();


window.addEventListener('scroll', function(){
    if(this.scrollY > 130){
        navbar.style.backgroundColor = 'black';
    }else{
        navbar.style.backgroundColor = null;
    }
})


// Scrolling effect
$('.navbar-nav a').on('click', function(e){
    if(this.hash !== '')
    {
         e.preventDefault();

         const hash = this.hash ;
          $('html, body').animate({
              scrollTop : $(hash).offset().top
          },600)
    }
})
