    const wrapper = document.getElementById('wrapper');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('#sidebar-wrapper a');

    // 1. Alterna o menu ao clicar no botão 'hambúrguer'
    menuToggle.onclick = function() {
        wrapper.classList.toggle('toggled');
    };

    // 2. Fecha o menu ao clicar em qualquer link de navegação (útil no celular)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Só fecha se estiver aberto (possui a classe 'toggled')
            if (wrapper.classList.contains('toggled')) {
                wrapper.classList.remove('toggled');
            }
        });
    });

// Seleciona todas as seções com ID e todos os links do menu
const sections = document.querySelectorAll("section[id]");


// Função para ativar o link correspondente
function activateMenu() {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active-link");
            });

            const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${sectionId}"]`);
            if (activeLink) activeLink.classList.add("active-link");
        }
    });
}

window.addEventListener("scroll", activateMenu);
