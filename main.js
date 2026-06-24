const URL_API =
"https://6a29e4c4f59cb8f65f1db7d3.mockapi.io/materiais";


async function listarMateriais() {

    try {

        const resposta =
            await fetch(URL_API);

        const materiais =
            await resposta.json();

        const lista =
            document.getElementById("lista-materiais");

        lista.innerHTML = "";

        document.getElementById("total-items").textContent =
            materiais.length;

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
                        onclick="baixarMaterial('${material.id}', ${material.quantidade}, this)">
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

    } catch (erro) {

        alert("Erro ao carregar materiais.");

        console.error(erro);
    }
}


async function cadastrarMaterial() {

    try {

        const nome =
            document.getElementById("input-nome").value;

        const quantidade =
            document.getElementById("input-quantidade").value;

        if (!nome || !quantidade) {
            alert("Preencha todos os campos.");
            return;
        }

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

        document.getElementById("input-nome").value = "";
        document.getElementById("input-quantidade").value = "";

        listarMateriais();

    } catch (erro) {

        alert("Erro ao cadastrar material.");

        console.error(erro);
    }
}


function validarRetirada(
    estoqueAtual,
    quantidadeRetirada
) {

    if (quantidadeRetirada <= 0) {
        return false;
    }

    if (quantidadeRetirada > estoqueAtual) {
        return false;
    }

    return true;
}


async function baixarMaterial(
    id,
    estoqueAtual,
    botao
) {

    try {

        const input =
            botao.parentElement
                .querySelector("#input-retirada");

        const quantidadeRetirada =
            Number(input.value);

        const valida =
            validarRetirada(
                estoqueAtual,
                quantidadeRetirada
            );

        if (!valida) {

            alert(
                "Quantidade inválida!"
            );

            return;
        }

        const novoEstoque =
            estoqueAtual -
            quantidadeRetirada;

        await fetch(`${URL_API}/${id}`, {

            method: "PUT",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({
                quantidade:
                    novoEstoque
            })
        });

        listarMateriais();

    } catch (erro) {

        alert(
            "Erro ao atualizar estoque."
        );

        console.error(erro);
    }
}


async function excluirMaterial(id) {

    try {

        await fetch(
            `${URL_API}/${id}`,
            {
                method: "DELETE"
            }
        );

        listarMateriais();

    } catch (erro) {

        alert(
            "Erro ao excluir material."
        );

        console.error(erro);
    }
}

function pesquisarMaterial() {

    const busca =
        document
            .getElementById("input-busca")
            .value
            .toLowerCase();

    const itens =
        document.querySelectorAll(
            "#lista-materiais li"
        );

    itens.forEach(item => {

        if (
            item.textContent
                .toLowerCase()
                .includes(busca)
        ) {

            item.style.display =
                "block";

        } else {

            item.style.display =
                "none";
        }
    });
}


document
    .getElementById("btn-cadastrar")
    .addEventListener(
        "click",
        cadastrarMaterial
    );

document
    .getElementById("input-busca")
    .addEventListener(
        "input",
        pesquisarMaterial
    );

listarMateriais();