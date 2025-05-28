function atualizarContagem() {
    const dataAlvo = new Date('May 26, 2026 00:00:00').getTime();
    const agora = new Date().getTime();
    const distancia = dataAlvo - agora;

    if (distancia <= 0) {
        document.querySelector(".countdown").innerHTML = "<h2>🚀 GTA VI já foi lançado!</h2>";
        return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = dias.toString().padStart(2, '0');
    document.getElementById('hours').innerText = horas.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutos.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = segundos.toString().padStart(2, '0');
}

// Atualiza imediatamente ao abrir
atualizarContagem();

// Atualiza a cada segundo
setInterval(atualizarContagem, 1000);
