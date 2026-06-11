# Controle de Almoxarifado

Projeto desenvolvido para a Sprint 1 da avaliação prática de Desenvolvimento Web.

## Objetivo

O sistema tem como objetivo auxiliar no controle de materiais de um almoxarifado, permitindo o cadastro e a visualização dos itens armazenados através de uma interface web conectada à MockAPI.

## Funcionalidades

* Cadastro de materiais;
* Registro da quantidade disponível;
* Listagem automática dos materiais cadastrados;
* Integração com API REST utilizando MockAPI;
* Atualização dinâmica da lista de materiais.

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* Fetch API
* MockAPI

## Estrutura do Projeto

```text
├── index.html
├── style.css
├── main.js
└── README.md
```

## IDs Obrigatórios Utilizados

Conforme especificado na Sprint 1:

* `input-nome`
* `input-quantidade`
* `btn-cadastrar`
* `lista-materiais`

## Como Executar

1. Clone o repositório:

   ```bash
   git clone URL_DO_REPOSITORIO
   ```

2. Abra o arquivo `index.html` no navegador.

3. Certifique-se de que a URL da MockAPI esteja configurada corretamente no arquivo `main.js`.

## API Utilizada

MockAPI:

```javascript
const URL_API = "https://6a29e4c4f59cb8f65f1db7d3.mockapi.io/materiais";
```

### Operações Implementadas

#### GET

Busca todos os materiais cadastrados e exibe na tela.

#### POST

Cadastra um novo material na API.

## Desenvolvedora

Luana Taina Camargo Bueno

## Sprint 1

✔ Estrutura HTML com IDs obrigatórios

✔ Integração com MockAPI

✔ Cadastro de materiais (POST)

✔ Listagem de materiais (GET)

✔ Interface estilizada com CSS
