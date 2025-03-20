equipeDesenvolvimento = [
    {
        nome: 'Vitória Teixeira Meneses Mota Teixeira',
        funcao: 'Front-end',
        imagem: 'src/images/imagem-vitoria.jpg'
    }, 
    {
        nome: 'Felipe Rodrigues Santana',
        funcao: 'Front-end',
        imagem: 'src/images/imagem-felipe.jpeg'
    }, 
    {
        nome: 'Guilherme Trindade Souza',
        funcao: 'Back-end',
        imagem: 'src/images/imagem-guilherme.jpg'
    }, 
    {
        nome: 'Nicolas Vieira dos santos',
        funcao: 'Back-end',
        imagem: 'src/images/imagem-nicolas.jpeg'
    }, 
    {
        nome: 'Kaylane Vitória Batista Gomes',
        funcao: 'Back-end',
        imagem: 'src/images/imagem-kaylane.jpg'
    }, 
    {
        nome: 'Samuel Augusto Souza Alves Santana',
        funcao: 'Back-end',
        imagem: 'src/images/imagem-samuel.jpg'
    }, 
    {
        nome: 'João Paulo',
        funcao: 'Back-end',
        imagem: 'src/images/logo_dcomp.png'
    }
]

equipeOrientadores = [
    {
        nome: 'Débora Maria Coelho Nascimento',
        imagem: 'src/images/imagem-debora.jpg'
    },
    {
        nome: 'Ricardo José Paiva de Britto Salgueiro',
        imagem: 'src/images/imagem-ricardo.jpg'
    },
    {
        nome: 'Edilayne Meneses Salgueiro',
        imagem: 'src/images/imagem-edilayne.jpg'
    },
    {
        nome: 'Rogério Patrício Chagas do Nascimento',
        imagem: 'src/images/logo_dcomp.png'
    }
]

equipeEspecialistas = [
    {
        nome: 'José Aislan Correia Santos',
        imagem: 'src/images/logo_dcomp.png'
    },
    {
        nome: 'Karina Conceição Gomes Machado de Araújo',
        imagem: 'src/images/logo_dcomp.png'
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
    const oriendatoresContainer = $('#orientadores');
    const especialistasContainer = $('#especialistas');
    let isScrolling = false;

    function updateActiveSection() {
        if (isScrolling) return;
    
        const scrollPosition = $(window).scrollTop();
        let activeSectionIndex = 0;
    
        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 120;
            const sectionBottom = sectionTop + section.outerHeight();
    
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
            }
        });
    
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 10) {
            activeSectionIndex = sections.length - 1; // Garante que "Downloads" seja ativado no final
        }
    
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    }
    

    $(window).on('scroll', function () {
        updateActiveSection();

        /*const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 100;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                //return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');*/
    });

    $('.nav-item a').on('click', function (event) {
        event.preventDefault();

        isScrolling = true;

        const targetId = $(this).attr('href');
        const targetPosition = $(targetId).offset().top - 100;

        $('html, body').animate({ scrollTop: targetPosition }, 500, function () {
            isScrolling = false;
        });

        
        navItems.removeClass('active');
        $(this).parent().addClass('active');
    });

    updateActiveSection();


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
                <img src="${membro.imagem} " class="feedback-avatar" alt="">
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

    equipeOrientadores.forEach(orientador => {
        const orientadoresHTML = `
            <div class="feedback">
                <img src="${orientador.imagem}" class="feedback-avatar" alt="">
                <div class="feedback-content">
                    <h3>${orientador.nome}</h3>
                </div>
            </div>
        `;

        oriendatoresContainer.append(orientadoresHTML);
    });

    equipeEspecialistas.forEach(especialista => {
        const especialistasHTML = `
            <div class="feedback">
                <img src="${especialista.imagem}" class="feedback-avatar" alt="">
                <div class="feedback-content">
                    <h3>${especialista.nome}</h3>
                </div>
            </div>
        `;

        especialistasContainer.append(especialistasHTML);
    });
});