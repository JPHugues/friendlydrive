function validarDemandaPassageiros(capacidadeTotal, totalPassageiros) {
    if (totalPassageiros > capacidadeTotal) {
        return `Capacidade insuficiente para ${totalPassageiros} passageiros. O motorista NÃO pode oferecer a carona.`;
    }
    return `Demanda validada! O motorista PODE oferecer a carona para ${totalPassageiros} passageiro(s).`;
}

document.addEventListener("DOMContentLoaded", () => {
    const botaoValidar = document.getElementById("validarDemanda");
    const campoResultado = document.getElementById("resultado");

    botaoValidar.addEventListener("click", () => {
        const capacidadeTotal = 4; 
        const totalPassageiros = parseInt(document.getElementById("totalPassageiros").value, 10);

        if (isNaN(totalPassageiros) || totalPassageiros < 1) {
            campoResultado.textContent = "Por favor, insira um número válido de passageiros.";
            return;
        }

        const mensagem = validarDemandaPassageiros(capacidadeTotal, totalPassageiros);
        campoResultado.textContent = mensagem;
    });
});