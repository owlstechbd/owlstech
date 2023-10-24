// hamburger menu
jQuery(document).ready(function () {
	jQuery('header .mainmenu').meanmenu({
    meanScreenWidth: "992",
  });
});


document.querySelectorAll('.menu-anim > li > a').forEach(button => button.innerHTML = '<div class="menu-text"><span>' + button.textContent.split('').join('</span><span>') + '</span></div>');

setTimeout(() => {
  var menu_text = document.querySelectorAll(".menu-text span")
  menu_text.forEach((item) => {
    var font_sizes = window.getComputedStyle(item, null);
    let font_size = font_sizes.getPropertyValue("font-size");
    let size_in_number = parseInt(font_size.replace("px", ""));
    let new_size = parseInt(size_in_number / 3)
    new_size = new_size + "px"
    if (item.innerHTML == " ") {
      item.style.width = new_size
    }
  })
}, 1000)
// hamburger menu End


// Search Start
document.addEventListener("click", (event) => {
  const searchToggle = event.target.closest(".search-icon");
  if (searchToggle) {
    searchToggle.classList.toggle("active");
  }
});
// Search End


///////////////////////////////////////////////////////
// Sticky Menu
$(window).on( 'scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $(".menu-area").addClass("sticky");
    } else {
        $(".menu-area").removeClass("sticky");
    }
});


// Sticky Menu End


///////////////////////////////////////////////////////
//hero-slider 

const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
      delay: 0,
      disableOnInteraction: false, 
  },
  speed: 3000,          
  slidesPerView: 3, 
  spaceBetween: 30,   
});
// hero-slider

//portfolio slider
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 3,
    responsiveClass:true,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:3
      }
    },
    autoplay: true,
    loop: true,
    autoplayTimeout: 4000, 
    autoplaySpeed: 400,   

  });

  // Custom Navigation
  $(".nav-btn.prev").click(function(){
    $(".owl-carousel").trigger('prev.owl.carousel');
  });

  $(".nav-btn.next").click(function(){
    $(".owl-carousel").trigger('next.owl.carousel');
  });
});
//portfolio slider



// scrolling top	
$('.top').click(function(){
  $("html, body").animate({
    scrollTop:0

  },1000);
});
$(window).scroll(function(){
  var ourwindow = $(this).scrollTop();
  if(ourwindow<800){
    $('.top').fadeOut();
  }else{
    $('.top').fadeIn();
  }
});

//scrrrly service section
const sections = document.querySelectorAll(".section-1");
const navLinks = document.querySelectorAll(".navigetor a");

function activateSection(index) {
    // sections.forEach((section, i) => {
    //     if (i === index) {
    //         section.classList.add("active");
    //     } else {
    //         section.classList.remove("active");
    //     }
    // });

    navLinks.forEach((link, i) => {
        if (i === index) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

}

function handleScroll() {

    const scrollY = window.scrollY;
    sections.forEach((section, index) => {
        const sectionRect = section.getBoundingClientRect();
        const sectionTop = sectionRect.top + scrollY - 80;
        const sectionHeight = sectionRect.height; // Account for both top and bottom padding
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            activateSection(index);
        }
    });

    // logic 1
    if (sections[sections.length - 1].getBoundingClientRect().top < -302) {
        document.querySelector('.navigetor').style.visibility = "hidden";
    } else {
        document.querySelector('.navigetor').style.visibility = "visible";
    }

    // Logic 2
    if (sections[0].getBoundingClientRect().top > 0) {
        document.querySelector('.navigetor').style.position = "absolute";
        document.querySelector('.navigetor').style.top = "10px";
    } else {
        document.querySelector('.navigetor').style.position = "fixed";
        document.querySelector('.navigetor').style.top = "10px";
    }

    console.log(sections[sections.length - 1].getBoundingClientRect())
    
}

window.addEventListener("scroll", handleScroll);

//faq
document.addEventListener('DOMContentLoaded', function() {
  // Get all the collapsible links
  var collapsibleLinks = document.querySelectorAll('.collapsible-link');

  // Loop through each link
  collapsibleLinks.forEach(function(link) {
    // Add an event listener for when the link is clicked
    link.addEventListener('click', function() {
      // Remove 'faq-active' class from all links
      collapsibleLinks.forEach(function(otherLink) {
        otherLink.classList.remove('faq-active');
      });

      // Add 'faq-active' class to the clicked link
      link.classList.add('faq-active');
    });
  });
});


// fillter pluging
var mixer = mixitup('.portfolio-container');
















