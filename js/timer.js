   // Total waktu (detik)
    let waktu = 90061;

    function updateTimer() {
        const days = Math.floor(waktu / 86400);
        const hours = Math.floor((waktu % 86400) / 3600);
        const minutes = Math.floor((waktu % 3600) / 60);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');

        if (waktu > 0) waktu--;
    }

    updateTimer();
    setInterval(updateTimer, 1000);