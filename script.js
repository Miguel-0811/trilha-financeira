// 1. CONFIGURAÇÃO DO GRÁFICO DE PIZZA (ENDIVIDAMENTO)
const configPizza = {
    type: 'doughnut',
    data: {
        labels: ['Com Dívidas', 'Sem Dívidas'],
        datasets: [{
            data:,
            backgroundColor: ['#e74c3c', '#2ecc71']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
};

// 2. CONFIGURAÇÃO DO GRÁFICO DE BARRAS (VILÕES)
const configBarras = {
    type: 'bar',
    data: {
        labels: ['Cartão/Cheque Especial', 'Contas Altas', 'Compras Impulsivas', 'Tarifas'],
        datasets: [{
            label: '% de Impacto',
            data:,
            backgroundColor: '#1b4d3e'
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false
    }
};

// 3. INICIALIZAR OS DOIS GRÁFICOS QUANDO A PÁGINA CARREGAR
document.addEventListener('DOMContentLoaded', () => {
    const elPizza = document.getElementById('chartEndividamento');
    const elBarras = document.getElementById('chartViloes');
    
    if (elPizza) new Chart(elPizza.getContext('2d'), configPizza);
    if (elBarras) new Chart(elBarras.getContext('2d'), configBarras);

    // 4. SISTEMA DE BUSCA DA BIBLIOTECA
    const campoBusca = document.getElementById('wikiSearch');
    const artigos = document.querySelectorAll('.wiki-article');

    if (campoBusca) {
        campoBusca.addEventListener('input', () => {
            const termo = campoBusca.value.toLowerCase().trim();
            artigos.forEach(art => {
                const titulo = art.querySelector('h3').textContent.toLowerCase();
                const texto = art.querySelector('p').textContent.toLowerCase();
                art.style.display = (titulo.includes(termo) || texto.includes(termo)) ? 'block' : 'none';
            });
        });
    }
});
