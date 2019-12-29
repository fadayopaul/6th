$(document).ready(() => {
    var checkbox = document.getElementById('switch');
    var logo = sessionStorage.getItem('logo');
    var modeText = document.getElementById('mode_text');
    var currentThemeDefault = sessionStorage.getItem('currentTheme');

    //Theme
    if(logo) {
        document.getElementById('logo').setAttribute('src',logo);
    }

    if(currentThemeDefault != null) {
        if (currentTheme === 'light') { 
            modeText.innerText = "Dark Mode";
        }else {
            modeText.innerText = "Light Mode";
        }
    }else {
        modeText.innerText = "Light Mode";
    }

    checkbox.addEventListener('change', () => {
       changeTheme();
    });

    let changeTheme= () => {
        var currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'light') {
            trans();
            modeText.innerText = "Light Mode";
            sessionStorage.setItem('logo','images/69.png');
            document.getElementById('logo').setAttribute('src','images/69.png');
            sessionStorage.setItem('currentTheme',"dark");
            document.documentElement.setAttribute('data-theme','dark');
        }else {
            trans();     
            modeText.innerText = "Dark Mode"; 
            sessionStorage.setItem('logo','images/69light.png');
            document.getElementById('logo').setAttribute('src','images/69light.png');
            sessionStorage.setItem('currentTheme',"light");
            document.documentElement.setAttribute('data-theme','light');
        }
    }
    
    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        },1000);
    } 


    //Navigation 
    $("#button").click(() => {
        $(".hamburger").toggleClass("focus");
        $(".content").toggleClass("show");
    });

    $("#dropdown").click(() => {
        $(".dropdown__container").toggleClass("show");
    });
  
    //gallery
    $('.js-images-loaded').imagesLoaded(() => {
        $('.js-masonry').masonry({
            itemSelector: '.js-masonry-item'
        });
    }); 

    //Scroll
    $("#top").click(()=> {
        $("html,body").animate({
            scrollTop:0
        },"slow");
    });

    baguetteBox.run('.tz-gallery');

    //testimonial carousel
    var sync2 = $("#sync2");
    sync2.owlCarousel({
            items : 1,
            smartSpeed: 200,
            slideSpeed : 1000,
            slideBy:1, 
            responsiveRefreshRate : 100,
            nav: true,
            autoplay: true,
            loop: true
    });


    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

});