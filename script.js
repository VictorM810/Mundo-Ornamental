document.addEventListener("DOMContentLoaded", () => {
  const fishContainer = document.getElementById("peces-container");
  if (fishContainer) {
    const speciesList = [
      "Betta", "Goldfish", "Guppy", "Tetra Neón", "Disco", "Pez Ángel",
      "Molly", "Platy", "Cola de Espada", "Corydora", "Danio Cebra",
      "Rasbora Arlequín", "Danio Perla", "Barbo Cereza", "Ramirezi Boliviano",
      "Cíclido Convicto", "Corydora Panda", "Cíclido Amarillo", "Barbo Tigre",
      "Gurami Enano", "Molly Balón", "Pez Lápiz", "Tetra Emperador", "Gurami Azul",
      "Tetra Falda Negra", "Gurami Perla", "Pez Lápiz Enano", "Tetra Transgénico",
      "Pleco Cebra", "Locha Payaso", "Cíclido de Fuego", "Oscar", "Acará Azul",
      "Cíclido Midas", "Pez Dólar", "Cíclido Diablo", "Gurami Miel",
      "Corydora Punteada", "Tetra Fantasma", "Gobio Abeja"
    ];
    const generarNombrePagina = species =>
      species.toLowerCase().normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "") + ".html";
      
    speciesList.forEach(species => {
      const pageName = generarNombrePagina(species);
      const card = document.createElement("div");
      card.className = "fish-card";
      card.innerHTML = `<img src="${pageName.replace(".html", ".jpg")}" alt="${species}">
        <div>
          <h3>${species}</h3>
          <p>Información básica sobre ${species}. (Contenido en construcción)</p>
          <button class="fish-info-button" onclick="window.location.href='${pageName}'">Leer más</button>
        </div>`;
      fishContainer.appendChild(card);
    });
    
    const fishSearch = document.getElementById("search-input");
    if (fishSearch) {
      fishSearch.addEventListener("keyup", () => {
        const filter = fishSearch.value.toLowerCase();
        document.querySelectorAll(".fish-card").forEach(card => {
          const title = card.querySelector("h3").innerText.toLowerCase();
          card.style.display = title.includes(filter) ? "flex" : "none";
        });
      });
    }
  }
  
  const menuButton = document.getElementById("menu-button");
  const sideMenu = document.getElementById("side-menu");
  const closeMenuButton = document.getElementById("close-menu-button");
  const overlay = document.getElementById("overlay");
  
  const openMenu = () => {
    sideMenu.classList.add("open");
    overlay.style.display = "block";
    menuButton.style.display = "none";
    document.body.classList.add("no-interaction");
  };
  
  const closeMenu = () => {
    sideMenu.classList.remove("open");
    overlay.style.display = "none";
    menuButton.style.display = "block";
    document.body.classList.remove("no-interaction");
  };
  
  if (menuButton) menuButton.addEventListener("click", e => { openMenu(); e.stopPropagation(); });
  if (closeMenuButton) closeMenuButton.addEventListener("click", e => { closeMenu(); e.stopPropagation(); });
  if (overlay) overlay.addEventListener("click", e => { closeMenu(); e.stopPropagation(); });
  if (sideMenu) sideMenu.addEventListener("touchmove", e => { e.preventDefault(); }, { passive: false });
  
  console.log("Se han generado las tarjetas de peces y el menú está activo.");
});