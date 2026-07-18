const app = document.getElementById("app");
const filtreBarre = document.createElement("div");

filtreBarre.style.marginBottom = "20px";

filtreBarre.innerHTML = `
<button id="filtre-public">Tout public</button>
<button id="filtre-adulte">Adulte</button>
<button id="filtre-famille">Famille</button>
<button id="filtre-jeune">Jeune public</button>
`;

app.appendChild(filtreBarre);


const events = [
  {
    date: "18 SEPT. 2026",
    title: "Les Impressionnistes",
    meta: "Tout public • 14h30",
    categorie: "Tout public",
    tarif: "Gratuit",
    telephone: "05 59 27 33 02",
    email: "impressionnistes@musee.fr",
    reservation: "Réserver en ligne",
    description: "Découvrez les chefs-d'œuvre impressionnistes du musée."
  },
  {
    date: "22 SEPT. 2026",
    title: "L'histoire du portrait",
    meta: "Adulte • 16h00",
    categorie: "Adulte",
    tarif: "5 €",
    telephone: "05 59 27 33 03",
    email: "portrait@musee.fr",
    reservation: "Places limitées",
    description: "Conférence autour de l'histoire du portrait."
  },
{
    date: "25 SEPT. 2026",
    title: "Les couleurs du musée",
    meta: "Famille • 10h00",
    categorie: "Famille",
    tarif: "3 €",
    telephone: "05 59 27 33 04",
    email: "atelier@musee.fr",
    reservation: "Sur inscription",
    description: "Découverte créative des collections."
  },
  {
    date: "29 SEPT. 2026",
    title: "Les petits explorateurs",
    meta: "Jeune public • 15h00",
    categorie: "Jeune public",
    tarif: "2 €",
    telephone: "05 59 27 33 05",
    email: "jeunepublic@musee.fr",
    reservation: "Sur inscription",
    description: "Visite ludique conçue spécialement pour les enfants."
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

  <p>${events[index].meta}</p>

  <p>${events[index].date}</p>

  <p><strong>Tarif :</strong> ${events[index].tarif}</p>

  <p><strong>Téléphone :</strong> ${events[index].telephone}</p>

  <p><strong>Email :</strong> ${events[index].email}</p>

  <p><strong>Réservation :</strong> ${events[index].reservation}</p>

  <p>${events[index].description}</p>
`;
    
  });

});document
  .getElementById("filtre-adulte")
  .addEventListener("click", () => {

    const cartes =
      document.querySelectorAll(".event-card");

    cartes.forEach((carte, index) => {

      if (events[index].categorie === "Adulte") {
        carte.style.display = "";
      } else {
        carte.style.display = "none";
      }

    });

  });document
  .getElementById("filtre-famille")
  .addEventListener("click", () => {

    const cartes =
      document.querySelectorAll(".event-card");

    cartes.forEach((carte, index) => {

      if (events[index].categorie === "Famille") {
        carte.style.display = "";
      } else {
        carte.style.display = "none";
      }

    });

  });
document
  .getElementById("filtre-public")
  .addEventListener("click", () => {

    const cartes =
      document.querySelectorAll(".event-card");

    cartes.forEach((carte, index) => {

      if (events[index].categorie === "Tout public") {
        carte.style.display = "";
      } else {
        carte.style.display = "none";
      }

    });

  });

document
  .getElementById("filtre-jeune")
  .addEventListener("click", () => {

    const cartes =
      document.querySelectorAll(".event-card");

    cartes.forEach((carte, index) => {

      if (events[index].categorie === "Jeune public") {
        carte.style.display = "";
      } else {
        carte.style.display = "none";
      }

    });

  });
    document
  .getElementById("filtre-jeune")
  .addEventListener("click", () => {

    const cartes =
      document.querySelectorAll(".event-card");

    cartes.forEach((carte, index) => {

      if (events[index].categorie === "Jeune public") {
        carte.style.display = "";
      } else {
        carte.style.display = "none";
      }

    });

  });