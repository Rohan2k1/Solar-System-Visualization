function createGalaxy() {
    const container = document.querySelector("body");

    // Create stars with varied sizes and colors, but minimal pulsing
    for (let i = 0; i < 600; i++) {
        const star = document.createElement("div");
        star.className = "star";
        
        const size = Math.random() * 2 + 0.5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        
        const colors = ["#ffffff", "#ffe9c4", "#d4fbff"];
        star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Subtle animation delay for gentle pulsing
        star.style.animationDelay = `${Math.random() * 8}s`;
        
        container.appendChild(star);
    }

    // Create larger, slower-moving asteroids with a light glow
    for (let i = 0; i < 40; i++) {
        const asteroid = document.createElement("div");
        asteroid.className = "asteroid";
        
        const size = Math.random() * 6 + 3;
        asteroid.style.width = `${size}px`;
        asteroid.style.height = `${size}px`;

        asteroid.style.top = Math.random() * 100 + "%";
        asteroid.style.left = Math.random() * 100 + "%";
        
        container.appendChild(asteroid);
    }

    // Create occasional moving stars for that mystical, "wish-like" effect
    for (let i = 0; i < 5; i++) {
        const movingStar = document.createElement("div");
        movingStar.className = "moving-star";
        
        movingStar.style.top = Math.random() * 100 + "%";
        movingStar.style.left = Math.random() * 100 + "%";
        
        container.appendChild(movingStar);
    }
}
createGalaxy();
const planetInfo = {
    mercury: "Mercury: The smallest planet in our Solar System, closest to the Sun.",
    venus: "Venus: Known for its extreme temperatures and thick atmosphere.",
    earth: "Earth: Our home planet, the only planet known to support life.",
    mars: "Mars: The Red Planet, known for its iron oxide surface and potential for exploration.",
    jupiter: "Jupiter: The largest planet in our Solar System, with a massive storm.",
    saturn: "Saturn: Known for its beautiful ring system and numerous moons.",
    uranus: "Uranus: A gas giant with a tilted axis and faint rings.",
    neptune: "Neptune: The farthest planet, known for its deep blue color and strong winds."
};

function zoomToPlanet(planetName) {
    // Reset zoom for all planets
    document.querySelectorAll('.planet').forEach(planet => {
        planet.classList.remove('active');
    });
    
    // Apply zoom to the selected planet
    const selectedPlanet = document.querySelector(`.${planetName}`);
    selectedPlanet.classList.add('active');

    // Display planet details
    const planetDetails = document.getElementById('planetDetails');
    planetDetails.textContent = planetInfo[planetName];
    planetDetails.style.display = 'block';
}
