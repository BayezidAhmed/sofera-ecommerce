// mobile menu start

(() =>{
 
  const openNavMenu = document.querySelector(".open-nav-menu"),
  navMenu = document.querySelector(".nav-menu"),
  menuOverlay = document.querySelector(".menu-overlay"),
  mediaSize = 1199;

  openNavMenu.addEventListener("click", toggleNav);
 
  // close the navMenu by clicking outside
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
  	navMenu.classList.toggle("open");
  	menuOverlay.classList.toggle("active");
  	document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") && 
      	window.innerWidth <= mediaSize){
      	// prevent default anchor click behavior
      	event.preventDefault();
      	const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains("active")){
        	collapseSubMenu();
        }
        else{
          // collapse existing expanded menuItemHasChildren
          if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
  });
  function collapseSubMenu(){
  	navMenu.querySelector(".menu-item-has-children.active .sub-menu")
  	.removeAttribute("style");
  	navMenu.querySelector(".menu-item-has-children.active")
  	.classList.remove("active");
  }
  function resizeFix(){
  	 // if navMenu is open ,close it
  	 if(navMenu.classList.contains("open")){
  	 	toggleNav();
  	 }
  	 // if menuItemHasChildren is expanded , collapse it
  	 if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
     }
  }

  window.addEventListener("resize", function(){
     if(this.innerWidth > mediaSize){
     	resizeFix();
     }
  });

})();

// mobile menu end


(function ($) {

  // preloader start

  setTimeout(function () {
    $('.loader-bg').fadeToggle();
  }, 1500);
  // preloader end


// banner slider
$(document).ready(function () {
  $('.ban-slide').slick({
    arrows:false,
    dots:true,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
    ]
  });
});

// category slider
$(document).ready(function () {
  $('.cat-slide').slick({
    arrows:true,
    prevArrow: '<div class="prevarrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="nextarrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>',
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 559,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
    
  });
});

// most viewed slider
$(document).ready(function () {
  $('.viewed-slide').slick({
    arrows:true,
    prevArrow: '<div class="prevarrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="nextarrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>',
    autoplay: true,
    slidesToShow: 4,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 559,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
});

// latest post slider
$(document).ready(function () {
  $('.post-slide').slick({
    arrows:true,
    prevArrow: '<div class="prevarrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="nextarrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>',
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 559,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
});

// brand slider
$(document).ready(function () {
  $('.brand-slide').slick({
    arrows:false,
    // autoplay: true,
    slidesToShow: 6,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 559,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    ]
  });
});


}(jQuery));

// back to top btn script start
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  var topBtn = document.getElementById("b-to-t");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.right = "45px";
    topBtn.style.opacity = "1";
  } else {
    topBtn.style.opacity = "0";
    topBtn.style.right = "-100px";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// back to top script end

// suggest dropdown tab

var sggMenu = document.querySelector(".sgg-menu");
var tabDropdown = document.querySelector(".tab-dropdown");

sggMenu.addEventListener("click", toggleTabMenu);

function toggleTabMenu() {
  tabDropdown.classList.toggle("active");
}




