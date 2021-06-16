# Mobi PoA
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/jeangregolon/mobi-poa/blob/main/LICENSE)

## Sobre o projeto
É uma aplicação que lista as linhas e itinerários de ônibus e táxi lotação de Porto Alegre a partir de dados obtidos de uma API disponível em http://www.poatransporte.com.br . O usuário pode buscar por uma linha específica digitando o nome ou código da linha no campo de pesquisa que conta com "live search". Ao clicar em uma linha, o usuário é levado a uma tela com as coordenada do itinerário. Cada coordenada pode ser clicada e o usuário é redirecionado para o ponto no mapa no Google Maps. Futuramente, pode-se implementar uma lista de linhas favoritas do usuário, bem como uma página de perfil e ao invés de exibir as coordenadas do itinerário, poderiam ser exibidos os nomes das ruas do itinerário através da API do Google Maps.

# Tecnologias utilizadas
- React JS
- Redux
- HTML 
- CSS 
- Axios

## Layout web

Página inicial:
![Página inicial](https://github.com/jeangregolon/assets/blob/main/mobi-poa-desktop.png)

Busca:
![Página de busca](https://github.com/jeangregolon/assets/blob/main/mobi-poa-busca-desktop.png)

Página de Itinerário:
![Página de itinerário](https://github.com/jeangregolon/assets/blob/main/mobi-poa-itinerario-desktop.png)

## Layout mobile

Página inicial:

![Página inicial](https://github.com/jeangregolon/assets/blob/main/mobi-poa-mobile.png)

Busca:

![Página de busca](https://github.com/jeangregolon/assets/blob/main/mobi-poa-busca-mobile.png)

Página de Itinerário:

![Página de itinerário](https://github.com/jeangregolon/assets/blob/main/mobi-poa-itinerario-mobile.png)

# Como executar o projeto

Pré-requisitos: npm

```bash
# clonar repositório
git clone https://github.com/jeangregolon/mobi-poa

# instalar dependências
npm install

# executar o projeto
npm start
```

# Autor

Jean Gregolon

https://www.linkedin.com/in/jeangregolon/
