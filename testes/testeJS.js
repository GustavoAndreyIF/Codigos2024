document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os elementos do DOM
    const openPopupButton = document.getElementById("openPopup");
    const popup = document.getElementById("popup");
    const closePopupButton = document.getElementById("closePopup");

    // Função para abrir o pop-up
    openPopupButton.addEventListener("click", () => {
        popup.style.display = "flex";
    });

    // Função para fechar o pop-up
    closePopupButton.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Fechar o pop-up clicando fora dele
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    // Verifica se os dados já estão armazenados
    if (!localStorage.getItem("matches1")) {
        async function fetchData() {
            try {
                const matchesResponse = await fetch("https://worldcupjson.net/matches/1");
                const matchesData = await matchesResponse.json();
                
                localStorage.setItem("matches1", JSON.stringify(matchesData));
                
                console.log("Dados carregados e armazenados no localStorage");
                displayData(); // Chama a função para exibir os dados
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        }
        
        fetchData();
    } else {
        displayData(); // Exibe os dados armazenados
    }

    function displayData() {
        // Obtém o elemento onde os dados serão exibidos
        const container = document.getElementById('popup-content');
        
        // Obtém os dados armazenados do localStorage
        const storedData = localStorage.getItem('matches1');
        
        // Verifica se os dados existem e são válidos
        if (storedData) {
            const data = JSON.parse(storedData);
            
            // Aqui estamos assumindo que `data` é um objeto com uma estrutura específica
            // Ajuste o código abaixo conforme a estrutura real dos dados
            let content = '<h2>Detalhes da Partida</h2>';
            
            // Ajuste a estrutura conforme os dados reais da API
            if (data.home_team && data.away_team) {
                content += `<p><strong>Home Team:</strong> ${data.home_team.country}</p>`;
                content += `<p><strong>Away Team:</strong> ${data.away_team.country}</p>`;
                content += `<p><strong>Score:</strong> ${data.home_team.goals} - ${data.away_team.goals}</p>`;
                content += `<p><strong>Date:</strong> ${data.date}</p>`;
                content += `<p><strong>Venue:</strong> ${data.venue}</p>`;
            } else {
                content += '<p>Dados da partida não encontrados.</p>';
            }
            
            // Insere o conteúdo formatado no elemento HTML
            container.innerHTML = content;
        } else {
            container.innerHTML = '<p>Dados não encontrados.</p>';
        }
    }
});
