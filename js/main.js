document.addEventListener("DOMContentLoaded", () => {
    // Simulez le statut du serveur
    const statusElement = document.querySelector("#status span");
    const playerCountElement = document.querySelector("#player-count span");

    // Simulation d'une requête
    setTimeout(() => {
        statusElement.textContent = "En ligne";
        statusElement.style.color = "green";
        playerCountElement.textContent = "42";
    }, 1000);
});
