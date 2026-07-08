// Função para scroll suave entre seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Função para lidar com o envio do formulário
function handleSubmit(event) {
    event.preventDefault();
    
    // Pega os valores do formulário
    const form = event.target;
    const formData = new FormData(form);
    
    // Mostra mensagem de sucesso
    alert('✅ Mensagem enviada com sucesso! Obrigado pelo contato.');
    
    // Limpa o formulário
    form.reset();
}

// Adiciona animação quando elementos aparecem na tela
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observa todos os cards quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card, .consequence');
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
});

// Adiciona efeito de scroll na navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});
