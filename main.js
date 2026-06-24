const URL_API =
"https://6a29e4c4f59cb8f65f1db7d3.mockapi.io/materiais";

async function listarMateriais() {
    const resposta = await fetch(URL_API);
    const materiais = await resposta.json();

    const lista = document.getElementById("lista-materiais");
    document.getElementById("total-items").textContent = materiais.length;

    lista.innerHTML = "";

    try {

        const resposta =
            await fetch(URL_API);

        const materiais =
            await resposta.json();

    } catch (erro) {

        alert(
            "Erro ao carregar materiais."
        );

        console.error(erro);

    }


materiais.forEach(material => {

    const classe =
        Number(material.quantidade) < 10
        ? "estoque-critico"
        : "";

    lista.innerHTML += `
        <li class="${classe}">
            <strong>${material.nome}</strong>
            <br>
            Estoque: ${material.quantidade}

            <br><br>

            <input
                type="number"
                id="input-retirada"
                placeholder="Qtd retirar">

            <button
                class="btn-baixar"
                onclick="baixarMaterial('${material.id}', ${material.quantidade})">
                Retirar
            </button>

            <button
                class="btn-excluir"
                onclick="excluirMaterial('${material.id}')">
                Excluir
            </button>
        </li>
    `;
});
}

async function cadastrarMaterial() {

    const nome =
    document.getElementById("input-nome").value;

    const quantidade =
    document.getElementById("input-quantidade").value;

    const material = {
        nome,
        quantidade
    };

      try {

        const resposta =
            await fetch(URL_API);

        const materiais =
            await resposta.json();

    } catch (erro) {

        alert(
            "Erro ao carregar materiais."
        );

        console.error(erro);

    }

    await fetch(URL_API, {
        method: "POST",
        headers: {
            "Content-Type":
            "application/json"
        },
        body: JSON.stringify(material)
    });

    listarMateriais();
}

document
.getElementById("btn-cadastrar")
.addEventListener("click", cadastrarMaterial);

listarMateriais();

function validarRetirada(estoqueAtual, quantidadeRetirada) {

    if (quantidadeRetirada <= 0) {
        return false;
    }

    if (quantidadeRetirada > estoqueAtual) {
        return false;
    }

    return true;
}

async function excluirMaterial(id) {

      try {

        const resposta =
            await fetch(URL_API);

        const materiais =
            await resposta.json();

    } catch (erro) {

        alert(
            "Erro ao carregar materiais."
        );

        console.error(erro);

    }

    await fetch(`${URL_API}/${id}`, {
        method: "DELETE"
    });

    listarMateriais();
}


async function baixarMaterial(id, estoqueAtual) {

    const input =
        event.target.parentElement
        .querySelector("#input-retirada");

    const quantidadeRetirada =
        Number(input.value);

    const valida =
        validarRetirada(
            estoqueAtual,
            quantidadeRetirada
        );

    if (!valida) {
        alert("Quantidade inválida!");
        return;
    }

      try {

        const resposta =
            await fetch(URL_API);

        const materiais =
            await resposta.json();

    } catch (erro) {

        alert(
            "Erro ao carregar materiais."
        );

        console.error(erro);

    }

    const novoEstoque =
        estoqueAtual - quantidadeRetirada;

    await fetch(`${URL_API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type":
            "application/json"
        },
        body: JSON.stringify({
            quantidade: novoEstoque
        })
    });

    listarMateriais();
}

document
.getElementById("input-busca")
.addEventListener("input", pesquisarMaterial);

function pesquisarMaterial() {

    const busca =
        document
        .getElementById("input-busca")
        .value
        .toLowerCase();

    const itens =
        document.querySelectorAll("#lista-materiais li");

    itens.forEach(item => {

        if (
            item.textContent
            .toLowerCase()
            .includes(busca)
        ) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });
}