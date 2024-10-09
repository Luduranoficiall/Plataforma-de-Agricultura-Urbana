document.addEventListener('DOMContentLoaded', () => {
    // Elementos do DOM
    const registerModal = document.getElementById('register-modal');
    const loginModal = document.getElementById('login-modal');
    const addProjectModal = document.getElementById('add-project-modal');
    const addPostModal = document.getElementById('add-post-modal');
    const registerBtn = document.getElementById('register-btn');
    const loginBtn = document.getElementById('login-btn');
    const addProjectBtn = document.getElementById('add-project-btn');
    const addPostBtn = document.getElementById('add-post-btn');
    const closeBtns = document.querySelectorAll('.close');
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const addProjectForm = document.getElementById('add-project-form');
    const addPostForm = document.getElementById('add-post-form');
    const contactForm = document.getElementById('contact-form');

    // Funções de utilidade
    const showModal = (modal) => modal.style.display = 'block';
    const hideModal = (modal) => modal.style.display = 'none';

    // Event listeners para abrir modais
    registerBtn.addEventListener('click', () => showModal(registerModal));
    loginBtn.addEventListener('click', () => showModal(loginModal));
    addProjectBtn.addEventListener('click', () => showModal(addProjectModal));
    addPostBtn.addEventListener('click', () => showModal(addPostModal));

    // Event listeners para fechar modais
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            hideModal(btn.closest('.modal'));
        });
    });

    // Fechar modal ao clicar fora dele
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            hideModal(e.target);
        }
    });

    // Event listeners para formulários
    registerForm.addEventListener('submit', handleRegister);
    loginForm.addEventListener('submit', handleLogin);
    addProjectForm.addEventListener('submit', handleAddProject);
    addPostForm.addEventListener('submit', handleAddPost);
    contactForm.addEventListener('submit', handleContact);

    // Carregar conteúdo inicial
    loadProjects();
    loadCommunityFeed();

    // Funções de manipulação de formulários
    function handleRegister(e) {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const userData = Object.fromEntries(formData.entries());

        if (validateRegisterForm(userData)) {
            // Aqui você implementaria a lógica de registro real
            console.log('Dados de registro:', userData);
            alert('Registro realizado com sucesso!');
            hideModal(registerModal);
            registerForm.reset();
        }
    }

    function handleLogin(e) {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const loginData = Object.fromEntries(formData.entries());

        if (validateLoginForm(loginData)) {
            // Aqui você implementaria a lógica de login real
            console.log('Dados de login:', loginData);
            alert('Login realizado com sucesso!');
            hideModal(loginModal);
            loginForm.reset();
        }
    }

    function handleAddProject(e) {
        e.preventDefault();
        const formData = new FormData(addProjectForm);
        const projectData = Object.fromEntries(formData.entries());

        if (validateProjectForm(projectData)) {
            // Aqui você implementaria a lógica para adicionar o projeto ao backend
            console.log('Dados do novo projeto:', projectData);
            addProjectToGrid(projectData);
            alert('Projeto adicionado com sucesso!');
            hideModal(addProjectModal);
            addProjectForm.reset();
        }
    }

    function handleAddPost(e) {
        e.preventDefault();
        const formData = new FormData(addPostForm);
        const postData = Object.fromEntries(formData.entries());

        if (validatePostForm(postData)) {
            // Aqui você implementaria a lógica para adicionar o post ao backend
            console.log('Dados do novo post:', postData);
            addPostToFeed(postData);
            alert('Post adicionado com sucesso!');
            hideModal(addPostModal);
            addPostForm.reset();
        }
    }

    function handleContact(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const contactData = Object.fromEntries(formData.entries());

        if (validateContactForm(contactData)) {
            // Aqui você implementaria a lógica de envio de contato real
            console.log('Dados de contato:', contactData);
            alert('Mensagem enviada com sucesso!');
            contactForm.reset();
        }
    }

    // Funções de validação
    function validateRegisterForm(data) {
        // Implemente a validação do formulário de registro
        return true; // Retorne true se válido, false caso contrário
    }

    function validateLoginForm(data) {
        // Implemente a validação do formulário de login
        return true; // Retorne true se válido, false caso contrário
    }

    function validateProjectForm(data) {
        // Implemente a validação do formulário de projeto
        return true; // Retorne true se válido, false caso contrário
    }

    function validatePostForm(data) {
        // Implemente a validação do formulário de post
        return true; // Retorne true se válido, false caso contrário
    }

    function validateContactForm(data) {
        // Implemente a validação do formulário de contato
        return true; // Retorne true se válido, false caso contrário
    }

    // Funções para carregar e manipular conteúdo dinâmico
    function loadProjects() {
        const projects = [
            { title: 'Horta Comunitária Central', description: 'Projeto de horta comunitária no centro da cidade.' },
            { title: 'Jardins Verticais', description: 'Implementação de jardins verticais em prédios públicos.' },
            { title: 'Agricultura em Telhados', description: 'Cultivo de alimentos em telhados de edifícios comerciais.' },
        ];

        const projectGrid = document.querySelector('.project-grid');
        projectGrid.innerHTML = ''; // Limpa o conteúdo existente
        projects.forEach(project => {
            addProjectToGrid(project);
        });
    }

    function addProjectToGrid(project) {
        const projectGrid = document.querySelector('.project-grid');
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectGrid.appendChild(projectCard);
    }

    function loadCommunityFeed() {
        const posts = [
            { author: 'Maria Silva', content: 'Acabei de colher meus primeiros tomates!' },
            { author: 'João Santos', content: 'Alguém tem dicas para controle natural de pragas?' },
            { author: 'Ana Oliveira', content: 'Organizando um workshop de compostagem. Quem topa?' },
        ];

        const communityFeed = document.querySelector('.community-feed');
        communityFeed.innerHTML = ''; // Limpa o conteúdo existente
        posts.forEach(post => {
            addPostToFeed(post);
        });
    }

    function addPostToFeed(post) {
        const communityFeed = document.querySelector('.community-feed');
        const postElement = document.createElement('div');
        postElement.classList.add('community-post');
        postElement.innerHTML = `
            <h4>${post.author}</h4>
            <p>${post.content}</p>
        `;
        communityFeed.prepend(postElement); // Adiciona o novo post no topo do feed
    }

    // Sistema de navegação suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animações ao scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});