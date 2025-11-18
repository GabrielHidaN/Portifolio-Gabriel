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


