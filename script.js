const app = document.getElementById("app");
const recherche = document.createElement("input");

recherche.type = "text";
recherche.placeholder = "Recherche...";

recherche.style.width = "100%";
recherche.style.padding = "12px";
recherche.style.marginBottom = "20px";

app.appendChild(recherche);
const boutonPourQui = document.createElement("button");

boutonPourQui.textContent = "👥 Pour qui ▼";

boutonPourQui.style.marginBottom = "10px";
const filtreBarre = document.createElement("div");

filtreBarre.style.marginBottom = "20px";

filtreBarre.innerHTML = `
<label>
  <input type="checkbox" id="filtre-public">
  Tout public
</label>

<label>
  <input type="checkbox" id="filtre-adulte">
  Adulte
</label>

<label>
  <input type="checkbox" id="filtre-famille">
  Famille
</label>

<label>
  <input type="checkbox" id="filtre-jeune">
  Jeune public
</label>
`;

app.appendChild(filtreBarre);
filtreBarre.style.display = "none";
boutonPourQui.addEventListener("click", () => {

  if (filtreBarre.style.display === "none") {

    filtreBarre.style.display = "block";
    boutonPourQui.textContent = "👥 Pour qui ▲";

  } else {

    filtreBarre.style.display = "none";
    boutonPourQui.textContent = "👥 Pour qui ▼";

  }

});
app.insertBefore(boutonPourQui, filtreBarre);

const filtreType = document.createElement("div");

filtreType.style.marginTop = "20px";
filtreType.style.marginBottom = "20px";

filtreType.innerHTML = `
<strong>Type d'activité</strong><br>

<label>
  <input type="checkbox" id="type-exposition">
  Exposition
</label>

<label>
  <input type="checkbox" id="type-conference">
  Conférence
</label>

<label>
  <input type="checkbox" id="type-visite">
  Visite Atelier
</label>

<label>
  <input type="checkbox" id="type-conte">
  L'heure du conte
</label>
`;

app.appendChild(filtreType);



const events = [
  {
    date: "18 SEPT. 2026",
    title: "Les Impressionnistes",
    meta: "Tout public • 14h30",
    categorie: "Tout public",
    type: "Exposition",
    description: "Découvrez les chefs-d'œuvre impressionnistes du musée.",
    tarif: "Gratuit",
    telephone: "05 59 27 33 02",
    email: "impressionnistes@musee.fr",
    reservation: "Réserver en ligne"
  },
  {
    date: "22 SEPT. 2026",
    title: "L'histoire du portrait",
    meta: "Adulte • 16h00",
    categorie: "Adulte",
    type: "Conférence",
    description: "Conférence autour de l'histoire du portrait.",
    tarif: "5 €",
    telephone: "05 59 27 33 03",
    email: "portrait@musee.fr",
    reservation: "Places limitées"
  },
{
    date: "25 SEPT. 2026",
    title: "Les couleurs du musée",
    meta: "Famille • 10h00",
    categorie: "Famille",
    type: "Visite atelier",
    description: "Découverte créative des collections.",
    tarif: "3 €",
    telephone: "05 59 27 33 04",
    email: "atelier@musee.fr",
    reservation: "Sur inscription"
},
  {
    date: "29 SEPT. 2026",
    title: "Les petits explorateurs",
    meta: "Jeune public • 15h00",
    categorie: "Jeune public",
    type: "L'heure du conte",
    description: "Visite ludique conçue spécialement pour les enfants.",
    tarif: "2 €",
    telephone: "05 59 27 33 05",
    email: "jeunepublic@musee.fr",
    reservation: "Sur inscription"
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

  const type = document.createElement("p");

type.className = "event-type";
type.textContent = event.type;

  const title = document.createElement("h2");
  title.textContent = event.title;

  const meta = document.createElement("p");
  meta.textContent = event.meta;

  content.appendChild(type);
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

detail.style.display = "none";

app.appendChild(detail);const buttons = document.querySelectorAll(".event-card button");

buttons.forEach((button, index) => {

  button.addEventListener("click", () => {
    
    detail.style.display = "block";

    detail.innerHTML = `

<button id="fermer-detail">✕</button>

<h2>${events[index].title}</h2>

<p>${events[index].meta}</p>

<p>${events[index].date}</p>

<p><strong>Type :</strong> ${events[index].type}</p>

<p>${events[index].description}</p>

<p><strong>Tarif :</strong> ${events[index].tarif}</p>

<p><strong>Téléphone :</strong> ${events[index].telephone}</p>

<p><strong>Email :</strong> ${events[index].email}</p>

<p><strong>Réservation :</strong> ${events[index].reservation}</p>

`;document
  .getElementById("fermer-detail")
  .addEventListener("click", () => {

    detail.style.display = "none";

  });
    
  });

});
function mettreAJourFiltres() {

  const publicCoche =
    document.getElementById("filtre-public").checked;

  const adulteCoche =
    document.getElementById("filtre-adulte").checked;

  const familleCoche =
    document.getElementById("filtre-famille").checked;

  const jeuneCoche =
    document.getElementById("filtre-jeune").checked;
    const expositionCoche =
  document.getElementById("type-exposition").checked;

const conferenceCoche =
  document.getElementById("type-conference").checked;

const visiteCoche =
  document.getElementById("type-visite").checked;

const conteCoche =
  document.getElementById("type-conte").checked;

  const cartes =
    document.querySelectorAll(".event-card");

  const aucunFiltre =
  !publicCoche &&
  !adulteCoche &&
  !familleCoche &&
  !jeuneCoche &&
  !expositionCoche &&
  !conferenceCoche &&
  !visiteCoche &&
  !conteCoche;

  cartes.forEach((carte, index) => {

    if (aucunFiltre) {
      carte.style.display = "";
      return;
    }

    const categorie =
  events[index].categorie;

const type =
  events[index].type;

    if (
      (publicCoche && categorie === "Tout public") ||
      (adulteCoche && categorie === "Adulte") ||
      (familleCoche && categorie === "Famille") ||
      (jeuneCoche && categorie === "Jeune public") ||
      (expositionCoche && type === "Exposition") ||
(conferenceCoche && type === "Conférence") ||
(visiteCoche && type === "Visite atelier") ||
(conteCoche && type === "L'heure du conte")
    ) {
      carte.style.display = "";
    } else {
      carte.style.display = "none";
    }

  });

}

document
  .getElementById("filtre-public")
  .addEventListener("change", mettreAJourFiltres);

document
  .getElementById("filtre-adulte")
  .addEventListener("change", mettreAJourFiltres);

document
  .getElementById("filtre-famille")
  .addEventListener("change", mettreAJourFiltres);

document
  .getElementById("filtre-jeune")
  .addEventListener("change", mettreAJourFiltres);
  recherche.addEventListener("input", () => {

  const texte =
    recherche.value.toLowerCase();

  const cartes =
    document.querySelectorAll(".event-card");

  cartes.forEach((carte, index) => {

    const contenu =
      (
        events[index].title +
        " " +
        events[index].type +
        " " +
        events[index].categorie +
        " " +
        events[index].description
      ).toLowerCase();

    if (contenu.includes(texte)) {
      carte.style.display = "";
    } else {
      carte.style.display = "none";
    }

  });

});document
  .getElementById("type-exposition")
  .addEventListener("change", mettreAJourFiltres);

document
  .getElementById("type-conference")
  .addEventListener("change", mettreAJourFiltres);

document
  .getElementById("type-visite")
  .addEventListener("change", mettreAJourFiltres);

document
  .getElementById("type-conte")
  .addEventListener("change", mettreAJourFiltres);