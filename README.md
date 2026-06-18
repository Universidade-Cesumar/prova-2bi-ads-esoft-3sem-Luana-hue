# Controle de Almoxarifado

Sistema web desenvolvido para o gerenciamento de materiais de um almoxarifado, permitindo cadastro, visualização, retirada e exclusão de itens através de integração com a MockAPI.

## Objetivo

O projeto foi desenvolvido como atividade prática da disciplina de Desenvolvimento Web, simulando um sistema de controle de estoque para auxiliar na organização e gerenciamento de materiais utilizados em aulas práticas.

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

## Sprint 1

input-nome
input-quantidade
btn-cadastrar
lista-materiais

## Sprint 2

input-retirada
btn-baixar
btn-excluir

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

## PUT

Atualiza a quantidade de materiais após uma retirada de estoque.

## DELETE

Remove um material do sistema.

## Desenvolvedora

Luana Taina Camargo Bueno

## Funcionalidades Implementadas

## Sprint 1 

✔ Cadastro de materiais

✔ Registro da quantidade em estoque

✔ Integração com MockAPI utilizando método POST

✔ Listagem dinâmica dos materiais utilizando método GET

✔ Interface responsiva e estilizada

## Sprint 2

✔ Retirada de materiais do estoque (baixa de estoque)

✔ Exclusão de materiais cadastrados

✔ Atualização de estoque utilizando método (PUT)

✔ Remoção de registros utilizando método (DELETE)

✔ Validação para impedir

✔ Quantidades negativas

✔ Quantidade igual a zero

✔ Retirada superior ao estoque disponível