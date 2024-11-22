const motoristas = [
    { nome: "Mario Balotelli", localizacao: "Guarulhos", maxDistancia: 50 },
    { nome: "Enzo Fernandez", localizacao: "São Paulo", maxDistancia: 30 },
    { nome: "Lucca", localizacao: "Campinas", maxDistancia: 70 },
];

function calcularDistanciaSimulada(origem, destino) {
    const distanciasSimuladas = {
        "Guarulhos-São Paulo": 25,
        "São Paulo-Campinas": 100,
        "Guarulhos-Campinas": 95,
    };
    const chave = `${origem}-${destino}`;
    return distanciasSimuladas[chave] || Math.floor(Math.random() * 120) + 10;
}

function encontrarMotorista(origem, destino) {
    const distanciaParaDestino = calcularDistanciaSimulada(origem, destino);
    const motoristasValidos = motoristas.filter(
        (motorista) => distanciaParaDestino <= motorista.maxDistancia
    );

    if (motoristasValidos.length === 0) {
        return null; 
    }

    return motoristasValidos[0];
}

function solicitarCarona() {
    const origem = document.querySelector("#enderecoOrigem").value.trim();
    const destino = document.querySelector("#enderecoDestino").value.trim();
    const resultadoDiv = document.querySelector("#resultadoCarona");

    if (!origem || !destino) {
        resultadoDiv.textContent = "Por favor, preencha os campos de origem e destino.";
        resultadoDiv.style.color = "red";
        return;
    }

    const motorista = encontrarMotorista(origem, destino);

    if (!motorista) {
        resultadoDiv.innerHTML = `
            <p>Desculpe, nenhum motorista está disponível para sua rota.</p>
        `;
        resultadoDiv.style.color = "red";
        return;
    }

    resultadoDiv.innerHTML = `
        <p>Carona solicitada com sucesso!</p>
        <p><strong>Motorista:</strong> ${motorista.nome}</p>
        <p><strong>Localização:</strong> ${motorista.localizacao}</p>
        <p><strong>Distância estimada:</strong> ${calcularDistanciaSimulada(origem, destino)} km</p>
    `;
    resultadoDiv.style.color = "green";

    document.querySelector("#enderecoOrigem").value = "";
    document.querySelector("#enderecoDestino").value = "";
}

document.querySelector("#solicitarCarona").addEventListener("click", solicitarCarona);
