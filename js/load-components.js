// Função para carregar um arquivo HTML e injetar em um elemento
async function carregarComponente(url, elementoId) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        document.getElementById(elementoId).innerHTML = html;
    } catch (error) {
        console.error('Erro ao carregar componente:', error);
    }
}

// Carrega os componentes quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    carregarComponente('components/header.html', 'header-container');
    carregarComponente('components/nav.html', 'nav-container');
    carregarComponente('components/footer.html', 'footer-container');
});