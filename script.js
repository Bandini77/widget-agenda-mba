const app = document.getElementById("app");

const events = [
  {
    date: "18 SEPT. 2026",
    title: "Les Impressionnistes",
    meta: "Tout public • 14h30"
  },
  {
    date: "22 SEPT. 2026",
    title: "L'histoire du portrait",
    meta: "Adultes • 16h00"
  },
  {
    date: "25 SEPT. 2026",
    title: "Les couleurs du musée",
    meta: "Famille • 10h00"
  }
];

events.forEach(event => {

  const card = document.createElement("div");
  card.className = "event-card";

  const image = document.createElement("img");
  image.className = "event-image";
  image.src = "images/event1.jpg";

  const date = document.createElement("div");
  date.className = "event-date";
  date.textContent = event.date;

  const content = document.createElement("div");
  content.className = "event-content";

  const title = document.createElement("h2");
  title.textContent = event.title;

  const meta = document.createElement("p");
  meta.textContent = event.meta;

  content.appendChild(title);
  content.appendChild(meta);

  const more = document.createElement("button");
  more.textContent = "+";

  card.appendChild(image);
  card.appendChild(date);
  card.appendChild(content);
  card.appendChild(more);

  app.appendChild(card);

});
const detail = document.createElement("div");
detail.id = "event-detail";

detail.style.marginTop = "20px";
detail.style.padding = "20px";
detail.style.background = "white";
detail.style.borderRadius = "16px";

detail.textContent = "Sélectionnez un événement.";

app.appendChild(detail);const buttons = document.querySelectorAll(".event-card button");

buttons.forEach((button, index) => {

  button.addEventListener("click", () => {

    detail.innerHTML = `
      <h2>${events[index].title}</h2>

      <p>
        ${events[index].meta}
      </p>

      <p>
        ${events[index].date}
      </p>
    `;
    
  });

});