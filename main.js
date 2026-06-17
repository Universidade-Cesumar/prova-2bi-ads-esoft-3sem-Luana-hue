const URL_API =
"https://6a29e4c4f59cb8f65f1db7d3.mockapi.io/materiais";

async function listarMateriais() {
    const resposta = await fetch(URL_API);
    const materiais = await resposta.json();

    const lista = document.getElementById("lista-materiais");

    lista.innerHTML = "";

    materiais.forEach(material => {
    lista.innerHTML += `
        <li>
            <strong>${material.nome}</strong>
            <br>
            Estoque: ${material.quantidade}

            <br><br>

            <input
                type="number"
                id="input-retirada"
                placeholder="Qtd retirar"
            >

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

async function cadastrarMaterial() {

    const nome =
    document.getElementById("input-nome").value;

    const quantidade =
    document.getElementById("input-quantidade").value;

    const material = {
        nome,
        quantidade
    };

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

    await fetch(`${URL_API}/${id}`, {
        method: "DELETE"
    });

    listarMateriais();
}