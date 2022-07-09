$(document).ready(function() {
    $('.burger-menu').click(function(event) {
        $('.burger-menu,.header-menu').toggleClass('active');
        $('body').toggleClass('lock')
    });

    $('.header-list').click(function(event) {
        $('.burger-menu,.header-menu').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.text').on("change keyup paste",
        function() {
            if ($(this).val()) {
                $('.icon-paper-plane').addClass("next");
            } else {
                $('.icon-paper-plane').removeClass("next");
            }
        }
    );

    $('.next-button').hover(
        function() {
            $(this).css('cursor', 'pointer');
        }
    );

    $('.next-button.text').click(
        function() {
            console.log("Something");
            $('.text-section').addClass("fold-up");
            $('.email-section').removeClass("folded");
        }
    );

    $('.email').on("change keyup paste",
        function() {
            if ($(this).val()) {
                $('.icon-lock').addClass("next");
            } else {
                $('.icon-lock').removeClass("next");
            }
        }
    );

    $('.next-button').hover(
        function() {
            $(this).css('cursor', 'pointer');
        }
    );

    $('.next-button.email').click(
        function() {
            console.log("Something");
            $('.email-section').addClass("fold-up");
            $('.success').css("marginTop", 0);
        }
    );

    $('.work-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 435,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    })

    $('.slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
    })

});

$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(600);
    $('html').addClass('popup-scroll');
});
$('.close-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeOut(600);
    $('html').toggleClass('popup-scroll');
});

// $('.popup-bg').click(function(e) {
//     if (!$(e.target).closest(".popup").length) {
//         $('.popup-bg').fadeOut(600);
//     }
// });

$(".next-button.email").click(function() {
    $(".hed p").text("УРА!");
    $(".hed p").addClass("ura");
});

const menuLinks = document.querySelectorAll('.header-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener('click', onMenuInkClick);
    });

    function onMenuInkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'auto'
            })
            e.preventDefault();
        }
    }
}

console.log('Работает!');

new window.JustValidate('.form', {
    rules: {
        tel: {
            required: true,
            function: () => {
                const phone = telSelector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            }
        }
    },
    colorWrong: '#ff0f0f',
    messages: {
        name: {
            required: 'Введите имя',
            minLength: 'Введите 3 и более символов',
            maxLength: 'Запрещено вводить более 15 символов'
        },
        email: {
            email: 'Введите корректный email',
            required: 'Введите email'
        },
        tel: {
            required: 'Введите телефон',
            function: 'Здесь должно быть 10 символов без +7'
        }
    },
    submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено');
                }
            }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        thisForm.reset();
    }
})