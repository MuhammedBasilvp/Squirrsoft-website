$(function() {
    /* mobile menu */
    $('.mobile.ham_menu').on('click', function(){ $('.ham_menu_wrapper').addClass('open'); })
    $('.clz').on('click', function(){ $('.ham_menu_wrapper').removeClass('open'); })

  
});

// jQuery(document).ready(function($) {
//     "use strict";
//     $('#customers-testimonials').owlCarousel( {
//             loop: true,
//             center: true,
//             items: 3,
//             margin: 30,
//             autoplay: true,
//             dots:true,
//         nav:true,
//             autoplayTimeout: 8500,
//             smartSpeed: 450,
//           navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
//             responsive: {
//                 0: {
//                     items: 1
//                 },
//                 768: {
//                     items: 2
//                 },
//                 1170: {
//                     items: 3
//                 }
//             }
//         });
//     });

//     jQuery(document).ready(function($) {
//         "use strict";
//         //  TESTIMONIALS CAROUSEL HOOK
//         $('#customers-testimonials').owlCarousel({
//             loop: true,
//             center: true,
//             items: 3,
//             margin: 0,
//             autoplay: true,
//             dots:true,
//             autoplayTimeout: 8500,
//             smartSpeed: 450,
//             responsive: {
//               0: {
//                 items: 1
//               },
//               768: {
//                 items: 2
//               },
//               1170: {
//                 items: 3
//               }
//             }
//         });
//     });
function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }

      $("a[href*='" + location.pathname + "']").addClass("n1");