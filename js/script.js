$(document).ready(function () {
  try {
    // Scroll event to add 'fixed' class to header
    $(document).ready(function () {
      function toggleHeaderClass() {
        if ($(window).scrollTop() > 50) {
          $("header").addClass("fixed");
        } else {
          $("header").removeClass("fixed");
        }
      }
      // Check on page load
      toggleHeaderClass();
      // Check on scroll
      $(window).on("scroll", toggleHeaderClass);
    });
    
    // Mobile Navbar toggle functionality
    $('.navbar-toggler').on('click', function (event) {
      const header = $('header');
      header.toggleClass('header-wrap-expanded');
      event.stopPropagation();
    });

  

    // // Youtube Modal
    const videoFrame = $("#video");
    const videoModal = $("#videoModal");
    const videoButtons = $(".video-btn");
    let lastFocusedElement = null;
    if (videoModal.length && videoButtons.length) {
        // Handle video button clicks
        videoButtons.on("click", function () {
            lastFocusedElement = document.activeElement; // Store the last focused element before opening modal
            const src = $(this).attr("data-bs-src"); // Get video source
            videoModal.data("bs-src", src); // Store src in modal's data
            if (src) {
                videoFrame.attr("src", src); // Set iframe src
            }
            // Move focus to modal to prevent accessibility issues
            setTimeout(() => {
                videoModal.attr("tabindex", "-1").focus();
            }, 100);
        });
        // Handle modal hide event
        videoModal.on("hide.bs.modal", function () {
            // Ensure focus is moved safely
            setTimeout(() => {
                $("<div>", {
                    id: "focus-fix",
                    tabindex: "0",
                    css: { position: "fixed", top: "0", left: "0", width: "1px", height: "1px", opacity: "0" }
                }).appendTo("body").focus();
            }, 50);
        });
        videoModal.on("hidden.bs.modal", function () {
            videoFrame.attr("src", ""); // Clear iframe src when modal is hidden
            
            // Restore focus to the last focused element without scrolling the page
            setTimeout(() => {
                if (lastFocusedElement) {
                    lastFocusedElement.focus({ preventScroll: true }); // Ensure no scroll occurs
                }
                $("#focus-fix").remove(); // Remove temporary focus element
            }, 100);
        });
    }


            /* Search hide show*/
            $(".search-btn").click(function (e) {
              e.stopPropagation();
              $(".search-input-elm").animate({
                width: 'toggle'
              });
              $(".search-input").on("click", function (event) {
                event.stopPropagation();
              });
            });
            $(document).on("click", function () {
              $(".search-input-elm").fadeOut("slow");
            });
    
      

    // Initialize home page partner carousels if it exists
    if ($(".partner-carousel").length) {
      $(".partner-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
          0: { items: 2 },
          600: { items: 3 },
          1000: { items: 6 },
        },
      });
    }

            // Initialize emiratisation partners carousel if it exists
            if ($(".emiratisation-partners-carousel").length) {
              $(".emiratisation-partners-carousel").owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                dots: false,
                responsive: {
                  0: { items: 2 },
                  600: { items: 3 },
                  1000: { items: 4 },
                },
              });
            }

                    
            // Initialize sports partners carousel if it exists
            if ($(".sports-partners-carousel").length) {
              $(".sports-partners-carousel").owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                dots: false,
                responsive: {
                  0: { items: 2 },
                  600: { items: 3 },
                  1000: { items: 4 },
                },
              });
            }

                    
            // Initialize sports partners carousel if it exists
            if ($(".community-partners-carousel").length) {
              $(".community-partners-carousel").owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                dots: false,
                responsive: {
                  0: { items: 2 },
                  600: { items: 3 },
                  1000: { items: 4 },
                },
              });
            }

    // Initialize news carousel if it exists
    if ($(".news-carousel").length) {
      $(".news-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
          0: { items: 2 },
          600: { items: 3 },
          1000: { items: 4 },
        },
      });
    }

        // Initialize news carousel if it exists
        if ($(".magazine-carousel").length) {
          $(".magazine-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            responsive: {
              0: { items: 1 },
              600: { items: 1 },
              1000: { items: 1 },
            },
          });
        }

    // Initialize gallery carousel if it exists
    if ($(".gallery-carousel").length) {
      $(".gallery-detail-content").append('<div class="owl-number-counter"></div>');

      var owl = $(".gallery-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        onInitialized: updateCounter,
        onTranslated: updateCounter,
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          1000: { items: 1 },
        },
      });

      function updateCounter(event) {
        let totalItems = event.item.count;
        let currentIndex = (event.item.index - event.relatedTarget._clones.length / 2 + totalItems) % totalItems;

        $(".owl-number-counter").text(`${currentIndex + 1}/${totalItems}`);
        // Update the total pages in the span
        $(".total-pages").text(`${totalItems} Images`);
      }
    }

    // our division carousel
    if ($(".division-carousel").length) {
      $(".division-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          1000: { items: 1 },
        },
      });
    }

    // copyright year
    document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
  
    // share button toggler
    document.querySelector('.share-icon').addEventListener('click', function () {
      document.querySelector('.shareon-container').classList.toggle('active');
    });
  }
  
  catch (error) {
    // handle error
  }
});







