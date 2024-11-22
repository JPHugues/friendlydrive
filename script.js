// Uso de caso de dar carona
function adicionarCarona(nomeMotorista, origem, destino, distancia) {
    const listaCaronas = document.getElementById('lista-caronas');
    
    const carona = document.createElement('div');
    carona.classList.add('carona-item');

    carona.innerHTML = `
        <h3>Motorista: ${nomeMotorista}</h3>
        <p><strong>Origem:</strong> ${origem}</p>
        <p><strong>Destino:</strong> ${destino}</p>
        <p><strong>Distância:</strong> ${distancia} km</p>
        <button class="aceitar-carona">Aceitar Carona</button>
    `;

    listaCaronas.appendChild(carona);
}


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('aceitar-carona')) {
        const nomeMotorista = event.target.parentNode.querySelector('h3').innerText.split(': ')[1];
        alert(`Você aceitou a carona com ${nomeMotorista}!`);
    }
});