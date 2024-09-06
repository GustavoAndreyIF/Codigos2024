# Explicação do Código para Exibir Jogos de uma Equipe Específica

## Questão 3

O objetivo é fazer uma requisição para a API e exibir todos os jogos de uma equipe específica.

## Explicação do Código

### 1. Carregar Times no `<select>`

A função `carregarTimes` é responsável por buscar a lista de times da Copa do Mundo e carregá-los em um elemento `<select>` na página HTML.

-   **Requisição à API**: Utiliza o método `fetch` para fazer uma requisição à API que fornece dados sobre os times.
-   **Processamento da Resposta**: Converte a resposta da API para o formato JSON.
-   **População do `<select>`**: Itera sobre os grupos de times recebidos e adiciona cada time como uma opção no elemento `<select>`. Cada opção é identificada pelo código do país e exibe o nome do time.

### 2. Buscar Jogos da Equipe Selecionada

A função `buscarJogos` é responsável por buscar e exibir todos os jogos relacionados à equipe selecionada pelo usuário.

-   **Obtenção da Equipe Selecionada**: Obtém o código da equipe selecionada a partir do elemento `<select>`.
-   **Requisição à API de Jogos**: Faz uma nova requisição à API que fornece dados sobre as partidas.
-   **Filtragem dos Jogos**: Filtra os jogos para encontrar aqueles que envolvem a equipe selecionada, seja como time da casa ou como time visitante.
-   **Exibição dos Jogos**:
    -   Se jogos são encontrados, cria elementos HTML para exibir os detalhes de cada jogo, incluindo nomes dos times, gols, data e local.
    -   Se nenhum jogo é encontrado, exibe uma mensagem informando a ausência de jogos para a equipe selecionada.

Com essas funções, o código permite ao usuário selecionar uma equipe e visualizar todos os jogos dessa equipe, facilitando a análise dos resultados da Copa do Mundo.

# Explicação do Código para Exibir Tabelas de Classificação dos Grupos da Copa do Mundo

## Questão 4

O objetivo é fazer uma requisição para a API e exibir uma tabela de classificação dos grupos da Copa do Mundo.

## Explicação do Código

### 1. Requisição à API e Processamento dos Dados

A função `exibirClassificacao` é responsável por buscar os dados dos times da Copa do Mundo e exibir tabelas de classificação para cada grupo.

-   **Requisição à API**: Utiliza o método `fetch` para fazer uma requisição à API que fornece dados sobre os times.
-   **Processamento da Resposta**: Converte a resposta da API para o formato JSON.

### 2. Exibição das Tabelas de Classificação

-   **Obtendo o Elemento `<div>`**: Obtém o elemento `<div>` do HTML onde as tabelas de classificação serão exibidas e limpa o conteúdo anterior para garantir que apenas as tabelas mais recentes sejam exibidas.
-   **Iteração sobre os Grupos**: Itera sobre cada grupo de times na resposta da API.

#### 2.1. Criação da Tabela

-   **Criação da Tabela HTML**: Para cada grupo, cria uma tabela HTML com um cabeçalho que inclui os nomes das colunas como "Equipe", "Jogos", "Vitórias", etc.
-   **Ordenação dos Times**: Ordena os times dentro do grupo com base no número de pontos. Utiliza o método `sort()` para organizar os times em ordem decrescente de pontos, garantindo que os times com mais pontos apareçam primeiro.

#### 2.2. Preenchimento da Tabela

-   **Iteração sobre os Times Ordenados**: Itera sobre os times ordenados e cria uma nova linha na tabela para cada time.
-   **Adição das Informações dos Times**: Preenche cada linha da tabela com informações detalhadas do time, como nome, número de jogos jogados, vitórias, empates, derrotas, gols marcados, gols sofridos, saldo de gols e pontos acumulados.

-   **Adição da Tabela ao HTML**: Adiciona a tabela preenchida à `<div>` de classificação no HTML.

### 3. Chamada da Função

-   **Exibição ao Carregar a Página**: A função `exibirClassificacao` é chamada para exibir as tabelas de classificação quando a página é carregada, garantindo que as informações estejam atualizadas e visíveis para o usuário.

Com essa função, o código permite ao usuário visualizar as tabelas de classificação de todos os grupos da Copa do Mundo, facilitando a análise dos desempenhos das equipes.
