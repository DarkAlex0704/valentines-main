document.addEventListener('DOMContentLoaded', function () {
    const siBtn = document.getElementById('siBtn');
    const noBtn = document.getElementById('noBtn');

    function entrarPantallaCompleta() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error("Error al intentar entrar en pantalla completa:", err);
            });
        }
    }

    document.addEventListener('click', function () {
        entrarPantallaCompleta();
    });

    document.addEventListener('fullscreenchange', function () {
        if (!document.fullscreenElement) {
            entrarPantallaCompleta();
        }
    });

    noBtn.addEventListener('mouseover', function () {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    noBtn.addEventListener('click', function (e) {
        e.preventDefault();
    });

    siBtn.addEventListener('click', function () {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        alert('¡Sabia que dirias que si! ¡Feliz San Valentín! ❤️');
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'F11' || e.key === 'Escape') {
            e.preventDefault();
        }
    });

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
});
