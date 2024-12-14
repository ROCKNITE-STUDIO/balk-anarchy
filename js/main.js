document.addEventListener("DOMContentLoaded", () => {
    // Simulez le statut du serveur
    const statusElement = document.querySelector("#status span");
    const playerCountElement = document.querySelector("#player-count span");

    // Simulation d'une requête
    setTimeout(() => {
        statusElement.textContent = "Hors ligne";
        statusElement.style.color = "red";
        playerCountElement.textContent = "0";
    }, 1000);
});
