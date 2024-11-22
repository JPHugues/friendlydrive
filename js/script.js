
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(2); 
}


document.querySelector("#calcularDistancia").addEventListener("click", () => {
    const lat1 = parseFloat(document.querySelector("#lat1").value);
    const lon1 = parseFloat(document.querySelector("#lon1").value);
    const lat2 = parseFloat(document.querySelector("#lat2").value);
    const lon2 = parseFloat(document.querySelector("#lon2").value);

    if (isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2)) {
        alert("Por favor, insira valores válidos para as coordenadas.");
        return;
    }

    const distancia = calcularDistancia(lat1, lon1, lat2, lon2);
    alert(`A distância aproximada é de ${distancia} km.`);
});
