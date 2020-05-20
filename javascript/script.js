//Get the current year for the copyright
$('#year').text(new Date().getFullYear());

//Lightbox
$(document).on("click", '[data-toggle="lightbox"]', function(e) {
    e.preventDefault();
    $(this).ekkoLightbox();
});

//Smooth Scrolling
$('#main-nav a').on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;
        console.log(hash);

        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            window.location.hash = hash;
        });
    }
});