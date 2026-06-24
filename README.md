#  Controle de Almoxarifado

Sistema web desenvolvido para o gerenciamento de materiais de um almoxarifado, permitindo cadastro, visualização, retirada e exclusão de itens por meio da integração com a MockAPI.

##  Objetivo

O projeto foi desenvolvido como atividade prática da disciplina de Desenvolvimento Web, simulando um sistema de controle de estoque para auxiliar no gerenciamento de materiais utilizados em aulas práticas.

---

##  Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* Fetch API
* MockAPI

---

##  Estrutura do Projeto

```text
├── index.html
├── style.css
├── main.js
└── README.md
```

---

##  API Utilizada

```javascript
const URL_API = "https://6a29e4c4f59cb8f65f1db7d3.mockapi.io/materiais";
```

---

##  IDs e Classes Obrigatórias

### Sprint 1

* `input-nome`
* `input-quantidade`
* `btn-cadastrar`
* `lista-materiais`

### Sprint 2

* `input-retirada`
* `btn-baixar`
* `btn-excluir`

### Sprint 3

* `input-busca`
* `total-items`
* `estoque-critico`

---

##  Operações Implementadas

### GET

Busca todos os materiais cadastrados e exibe na tela.

### POST

Realiza o cadastro de novos materiais.

### PUT

Atualiza a quantidade de materiais após uma retirada de estoque.

### DELETE

Remove um material do sistema.

---

#  Funcionalidades Implementadas

## Sprint 1 - Fundação, API e Inventário

* Cadastro de materiais;
* Registro da quantidade em estoque;
* Integração com MockAPI utilizando método POST;
* Listagem dinâmica dos materiais utilizando método GET;
* Interface responsiva e estilizada.

## Sprint 2 - Regras de Negócio e Saídas

* Retirada de materiais do estoque (baixa de estoque);
* Exclusão de materiais cadastrados;
* Atualização de estoque utilizando método PUT;
* Remoção de registros utilizando método DELETE;
* Validação para impedir:

  * Quantidades negativas;
  * Quantidades iguais a zero;
  * Retiradas superiores ao estoque disponível.

## Sprint 3 - Dashboard e Publicação

* Barra de pesquisa de materiais;
* Dashboard com total de itens cadastrados;
* Destaque visual para estoque crítico (menos de 10 unidades);
* Tratamento de erros utilizando `try/catch`;
* Preparação para publicação em nuvem.

---

## ✔ Critérios Atendidos

### Sprint 1

* ✔ Cadastro de materiais
* ✔ Integração com MockAPI
* ✔ Listagem dinâmica de dados
* ✔ Interface estilizada

### Sprint 2

* ✔ Baixa de estoque
* ✔ Exclusão de materiais
* ✔ Atualização via PUT
* ✔ Exclusão via DELETE
* ✔ Validação das regras de negócio

### Sprint 3

* ✔ Barra de pesquisa
* ✔ Dashboard com total de itens
* ✔ Estoque crítico destacado
* ✔ Tratamento de erros com try/catch
* ✔ Projeto documentado

---

##  Desenvolvedora

**Luana Tainá Camargo Bueno**

---

##  Status do Projeto

 Sprint 1 concluída

 Sprint 2 concluída

 Sprint 3 concluída

## Projeto finalizado
