const app = document.getElementById("app");
const recherche = document.createElement("input");

recherche.type = "text";
recherche.placeholder = "Recherche...";

recherche.style.width = "100%";
recherche.style.padding = "12px";
recherche.style.marginBottom = "20px";

app.appendChild(recherche);
const barreFiltres = document.createElement("div");
barreFiltres.className = "barre-filtres";

barreFiltres.style.display = "flex";
barreFiltres.style.gap = "10px";
barreFiltres.style.marginBottom = "20px";
const boutonQuand = document.createElement("button");

boutonQuand.textContent = "📅 Quand ▼";

boutonQuand.style.marginBottom = "10px";

const filtreQuand = document.createElement("div");

filtreQuand.innerHTML = `
<label>
  
<input type="checkbox" id="quand-aujourdhui">

  Aujourd'hui
</label>

<label>
  
<input type="checkbox" id="quand-demain">

  Demain
</label>

<label>
  
<input type="checkbox" id="quand-weekend">

  Ce week-end
</label>

<br><br>

<input type="date" id="quand-date">
<br><br>

Du :
<input type="date" id="date-debut">

<br><br>

Au :
<input type="date" id="date-fin">
`; 
barreFiltres.appendChild(boutonQuand);

app.appendChild(filtreQuand);

filtreQuand.style.display = "none";
boutonQuand.addEventListener("click", () => {

  if (filtreQuand.style.display === "none") {

    filtreQuand.style.display = "block";
    boutonQuand.textContent = "📅 Quand ▲";

  } else {

    filtreQuand.style.display = "none";
    boutonQuand.textContent = "📅 Quand ▼";

  }

});
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
barreFiltres.appendChild(boutonPourQui);

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
filtreQuand.className = "menu-filtre";
filtreBarre.className = "menu-filtre";
filtreType.className = "menu-filtre";
filtreQuand.style.top = "50px";
filtreQuand.style.left = "0px";

filtreBarre.style.top = "50px";
filtreBarre.style.left = "150px";

filtreType.style.top = "50px";
filtreType.style.left = "320px";
const boutonType = document.createElement("button");

boutonType.textContent =
  "🏷️ Type d'activité ▼";

boutonType.style.marginBottom = "10px";
barreFiltres.appendChild(boutonType);

app.appendChild(filtreType);
filtreType.style.display = "none";
boutonType.addEventListener("click", () => {

  if (filtreType.style.display === "none") {

    filtreType.style.display = "block";

    boutonType.textContent =
      "🏷️ Type d'activité ▲";

  } else {

    filtreType.style.display = "none";

    boutonType.textContent =
      "🏷️ Type d'activité ▼";

  }

});
app.appendChild(barreFiltres);



const events = [
  {
    date: "18 SEPT. 2026",
    heure: "14h30",
    dateISO: "2026-07-19",
    title: "Les Impressionnistes",
    meta: "Tout public",
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
    heure: "14h30",
    dateISO: "2026-09-19",
    title: "L'histoire du portrait",
    meta: "Adulte",
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
    heure: "14h30",
    dateISO: "2026-09-25",
    title: "Les couleurs du musée",
    meta: "Famille",
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
    heure: "14h30",
    dateISO: "2026-09-29",
    title: "Les petits explorateurs",
    meta: "Jeune public",
    categorie: "Jeune public",
    type: "L'heure du conte",
    description: "Visite ludique conçue spécialement pour les enfants.",
    tarif: "2 €",
    telephone: "05 59 27 33 05",
    email: "jeunepublic@musee.fr",
    reservation: "Sur inscription"
  }
];
let nombreVisible =
  Number(localStorage.getItem("nombreVisible")) || 2;

events.forEach((event, index) => {

  if (index >= nombreVisible) {
  return;
}

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
const overlay = document.createElement("div");

overlay.id = "overlay";

overlay.style.display = "none";

app.appendChild(overlay);

const detail = document.createElement("div");
const voirPlus = document.createElement("button");
voirPlus.addEventListener("click", () => {

  localStorage.setItem(
    "nombreVisible",
    nombreVisible + 2
  );

  location.reload();

});

voirPlus.textContent = "VOIR PLUS D'ÉVÉNEMENTS";

voirPlus.style.marginTop = "20px";
voirPlus.style.padding = "12px 24px";
detail.id = "event-detail";

detail.style.marginTop = "20px";
detail.style.padding = "20px";
detail.style.background = "white";
detail.style.borderRadius = "16px";

detail.style.display = "none";

app.appendChild(voirPlus);
app.appendChild(detail);const buttons = document.querySelectorAll(".event-card button");

buttons.forEach((button, index) => {

  button.addEventListener("click", () => {
    
    overlay.style.display = "block";
    detail.style.display = "block";

    detail.innerHTML = `

<button id="fermer-detail">✕</button>

<div class="detail-layout">


  <div class="detail-image">

    <img
      src="images/event1.jpg"
      alt="${events[index].title}"
    >

  </div>



  <div class="detail-infos">

    <p class="detail-type">
      ${events[index].type}
    </p>

    <h2 class="detail-title">
      ${events[index].title}
    </h2>

    <p class="detail-meta">
      ${events[index].meta}
    </p>

    <p class="detail-date">

  ${events[index].date}
  •
  ${events[index].heure}

</p>

    <hr>

    <p class="detail-description">
      ${events[index].description}
    </p>

    <hr>

    <div class="detail-footer">

      <div>

        <h4>Tarif</h4>

        <p>${events[index].tarif}</p>

      </div>

      <div>

        <h4>Contact</h4>

        <p>${events[index].telephone}</p>

        <p>${events[index].email}</p>

      </div>

      <div>

        <h4>Réservation</h4>

        <p>${events[index].reservation}</p>

      </div>

    </div>

  </div>

</div>

`;document
  .getElementById("fermer-detail")
  .addEventListener("click", () => {

    detail.style.display = "none";
overlay.style.display = "none";

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
  
  function filtrerDate() {

  const dateChoisie =
    document.getElementById("quand-date").value;

  const cartes =
    document.querySelectorAll(".event-card");

  cartes.forEach((carte, index) => {

    if (
      dateChoisie === "" ||
      events[index].dateISO === dateChoisie
    ) {

      carte.style.display = "";

    } else {

      carte.style.display = "none";

    }

  });

}
  document
  .getElementById("quand-date")
  .addEventListener("change", filtrerDate);
  function filtrerAujourdHui() {

  const coche =
    document.getElementById("quand-aujourdhui").checked;

  const cartes =
    document.querySelectorAll(".event-card");

  const aujourdHui =
    new Date().toISOString().slice(0, 10);

  cartes.forEach((carte, index) => {

    if (!coche) {

      carte.style.display = "";
      return;

    }

    if (events[index].dateISO === aujourdHui) {

      carte.style.display = "";

    } else {

      carte.style.display = "none";

    }

  });

}
  document
  .getElementById("quand-aujourdhui")
  .addEventListener("change", filtrerAujourdHui);
  function filtrerDemain() {

  const coche =
    document.getElementById("quand-demain").checked;

  const cartes =
    document.querySelectorAll(".event-card");

  const demain = new Date();

  demain.setDate(demain.getDate() + 1);

  const dateDemain =
    demain.toISOString().slice(0, 10);

  cartes.forEach((carte, index) => {

    if (!coche) {

      carte.style.display = "";
      return;

    }

    if (events[index].dateISO === dateDemain) {

      carte.style.display = "";

    } else {

      carte.style.display = "none";

    }

  });

}
  document
  .getElementById("quand-demain")
  .addEventListener("change", filtrerDemain);
  function filtrerWeekend() {

  const coche =
    document.getElementById("quand-weekend").checked;

  const cartes =
    document.querySelectorAll(".event-card");

  cartes.forEach((carte, index) => {

    if (!coche) {

      carte.style.display = "";
      return;

    }

    const dateEvenement =
      new Date(events[index].dateISO);

    const jour =
      dateEvenement.getDay();

    if (jour === 0 || jour === 6) {

      carte.style.display = "";

    } else {

      carte.style.display = "none";

    }

  });

}
  document
  .getElementById("quand-weekend")
  .addEventListener("change", filtrerWeekend);
  function filtrerPeriode() {

  const dateDebut =
    document.getElementById("date-debut").value;

  const dateFin =
    document.getElementById("date-fin").value;

  const cartes =
    document.querySelectorAll(".event-card");

  cartes.forEach((carte, index) => {

    const dateEvenement =
      events[index].dateISO;

    if (
      (dateDebut === "" || dateEvenement >= dateDebut) &&
      (dateFin === "" || dateEvenement <= dateFin)
    ) {

      carte.style.display = "";

    } else {

      carte.style.display = "none";

    }

  });

}
  document
  .getElementById("date-debut")
  .addEventListener("change", filtrerPeriode);

document
  .getElementById("date-fin")
  .addEventListener("change", filtrerPeriode);