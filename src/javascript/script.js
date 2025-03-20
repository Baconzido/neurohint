equipeDesenvolvimento = [
    {
        nome: 'Vitória Teixeira',
        funcao: 'Front-end'
    }, 
    {
        nome: 'Felipe Rodrigues',
        funcao: 'Front-end'
    }, 
    {
        nome: 'Guilherme Trindade',
        funcao: 'Back-end'
    }, 
    {
        nome: 'Nicolas Vieira',
        funcao: 'Back-end'
    }, 
    {
        nome: 'Kaylane Batista',
        funcao: 'Back-end'
    }, 
    {
        nome: 'Samuel Santana',
        funcao: 'Back-end'
    }, 
    {
        nome: 'João Paulo',
        funcao: 'Back-end'
    }
]

$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');
    const devContainer = $('#desenvolvedores');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

    equipeDesenvolvimento.forEach(membro => {
        const devHTML = `
            <div class="feedback">
                <img src="src/images/avatar.png" class="feedback-avatar" alt="">
                <div class="feedback-content">
                    <h3>${membro.nome}</h3>
                    <p>
                        <span>${membro.funcao}</span>
                    </p>
                    
                </div>
            </div>
        `;

        devContainer.append(devHTML);
    });
});