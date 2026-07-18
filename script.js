const eventsList = document.getElementById("events-list");

const card = document.createElement("div");
card.className = "event-card";

const image = document.createElement("img");
image.className = "event-image";
image.src = "https://picsum.photos/id/1015/600/400";
image.alt = "Les Impressionnistes";

const date = document.createElement("div");
date.className = "event-date";
date.innerHTML = `
<div class="day">18</div>
<div class="month">SEPT.</div>
<div class="year">2026</div>
`;

const content = document.createElement("div");
content.className = "event-content";
content.innerHTML = `
<div class="event-type">Exposition temporaire</div>
<div class="event-title">Les Impressionnistes</div>
<div class="event-meta">Tout public • 14h30</div>
`;

const more = document.createElement("div");
more.className = "event-more";

const button = document.createElement("button");
button.textContent = "+";

more.appendChild(button);

card.appendChild(image);
card.appendChild(date);
card.appendChild(content);
card.appendChild(more);

eventsList.appendChild(card);

button.addEventListener("click", () => {

  const detail = document.getElementById("event-detail");

  detail.classList.add("open");

  detail.innerHTML = `
    <h2>Les Impressionnistes</h2>

    <p>
      Découvrez les chefs-d'œuvre impressionnistes du musée.
    </p>

    <p><strong>Date :</strong> 18 septembre 2026</p>
    <p><strong>Horaire :</strong> 14h30</p>
    <p><strong>Public :</strong> Tout public</p>
    <p><strong>Tarif :</strong> Gratuit</p>
  `;

});