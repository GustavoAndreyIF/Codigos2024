// Função para carregar partidas do localStorage
function loadMatches() {
    try {
        const matches = localStorage.getItem('matches');
        if (!matches) {
            throw new Error('No matches found in localStorage');
        }
        return JSON.parse(matches);
    } catch (error) {
        console.error('Erro ao carregar dados do localStorage:', error);
        return [];
    }
}

// Função para organizar e exibir as partidas
function displayMatches() {
    const matches = loadMatches();
    const container = document.getElementById('matchesContainer');

    // Categorias de fases
    const stages = ['Round of 16', 'Quarter-finals', 'Semi-finals', 'Final'];
    
    stages.forEach(stage => {
        // Filtra partidas por fase
        const stageMatches = matches.filter(match => match.stage_name === stage);
        
        // Cria e exibe o título da fase
        const phaseTitle = document.createElement('div');
        phaseTitle.classList.add('phase');
        phaseTitle.textContent = stage;
        container.appendChild(phaseTitle);
        
        // Adiciona cards para cada partida
        stageMatches.forEach(match => {
            const matchCard = document.createElement('div');
            matchCard.classList.add('match-card');

            // Define o time vencedor
            const winner = match.winner_code;

            matchCard.innerHTML = `
                <span class="team-name ${winner === match.home_team_country ? 'winner' : ''}">
                    ${match.home_team.name}
                </span>
                <span class="score">${match.home_team.goals} - ${match.away_team.goals}</span>
                <span class="team-name ${winner === match.away_team_country ? 'winner' : ''}">
                    ${match.away_team.name}
                </span>
            `;
            container.appendChild(matchCard);
        });
    });
}

// Inicializa a exibição das partidas
function init() {
    displayMatches();
}

// Executa a função init quando a página carrega
document.addEventListener('DOMContentLoaded', init);
