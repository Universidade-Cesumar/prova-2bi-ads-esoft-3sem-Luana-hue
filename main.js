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
                ${material.nome} - Quantidade:
                ${material.quantidade}
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
