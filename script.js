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

    detail.innerHTML = "";

const image = document.createElement("img");
image.src = "images/event1.jpg";
image.style.maxWidth = "600px";
image.style.width = "100%";

const title = document.createElement("h2");
title.textContent = events[index].title;

const meta = document.createElement("p");
meta.textContent = events[index].meta;

const date = document.createElement("p");
date.textContent = events[index].date;

const tarif = document.createElement("p");
tarif.textContent = "Tarif : Gratuit";
const telephone = document.createElement("p");
telephone.textContent = "Téléphone : 05 59 27 33 02";

const email = document.createElement("p");
email.textContent = "Email : contact@museebap.fr";

const reservation = document.createElement("p");
reservation.textContent = "Réserver en ligne";

const closeButton = document.createElement("button");
closeButton.textContent = "Fermer";

closeButton.addEventListener("click", () => {
  detail.textContent = "Sélectionnez un événement.";
});

detail.appendChild(closeButton);
detail.appendChild(image);
detail.appendChild(title);
detail.appendChild(meta);
detail.appendChild(date);
detail.appendChild(tarif);const sectionTitle = document.createElement("h3");
sectionTitle.textContent = "Informations";

detail.appendChild(sectionTitle);const reservationTitle =
document.createElement("h3");

reservationTitle.textContent =
"Réservation";

detail.appendChild(reservationTitle);
detail.appendChild(telephone);
detail.appendChild(email);
detail.appendChild(reservation);const partageTitle =
document.createElement("h3");

partageTitle.textContent =
"Partager";

detail.appendChild(partageTitle);

const partager =
document.createElement("p");

partager.textContent =
"Copier le lien";

detail.appendChild(partager);const calendrier =
document.createElement("button");

calendrier.textContent =
"Ajouter à mon calendrier";

detail.appendChild(calendrier);
    
  });

});