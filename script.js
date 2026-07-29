let eventsJSON = [];

fetch("agenda.json")
  .then(response => response.json())
  .then(data => {
    console.log("JSON MBA :", data);
    console.log("Nombre d'événements :", data.length);
  })
  .catch(error => {
    console.error("Erreur JSON :", error);
  });

const app = document.getElementById("app");
const recherche = document.createElement("input");

recherche.type = "text";
recherche.placeholder = "Recherche...";

recherche.style.width = "98%";
recherche.style.padding = "12px";
recherche.style.marginBottom = "20px";
recherche.style.border =
  "1px solid #d8d8d8";

recherche.style.borderRadius =
  "10px";

recherche.style.fontSize =
  "16px";

app.appendChild(recherche);
const barreFiltres = document.createElement("div");
barreFiltres.className = "barre-filtres";

barreFiltres.style.display = "flex";
barreFiltres.style.gap = "10px";
barreFiltres.style.marginBottom = "20px";
const wrapperQuand = document.createElement("div");
wrapperQuand.className = "filtre-wrapper";

const wrapperPourQui = document.createElement("div");
wrapperPourQui.className = "filtre-wrapper";

const wrapperType = document.createElement("div");
wrapperType.className = "filtre-wrapper";
const boutonQuand = document.createElement("button");

boutonQuand.innerHTML =
  '<i data-lucide="calendar"></i><span>Quand</span><i data-lucide="chevron-down"></i>';

  lucide.createIcons();

boutonQuand.style.marginBottom = "10px";

const filtreQuand = document.createElement("div");

filtreQuand.innerHTML = `

<label><input type="checkbox" id="quand-aujourdhui">Aujourd'hui</label>

<label><input type="checkbox" id="quand-demain">Demain</label>

<label><input type="checkbox" id="quand-weekend">Ce week-end</label>

<label><input type="checkbox" id="quand-personnalise">Période personnalisée</label>

<div id="zone-periode">

Du :
<input type="date" id="date-debut">

<br><br>

Au :
<input type="date" id="date-fin">

</div>

`;


wrapperQuand.appendChild(boutonQuand);
wrapperQuand.appendChild(filtreQuand);

barreFiltres.appendChild(wrapperQuand);

filtreQuand.style.display = "none";
boutonQuand.addEventListener("click", (e) => {

  e.stopPropagation();

  const ouvert =
    filtreQuand.style.display === "block";

  fermerTousLesFiltres();

  if (!ouvert) {

    filtreQuand.style.display = "block";
    
    boutonQuand.innerHTML =
  '<i data-lucide="calendar"></i><span>Quand</span><i data-lucide="chevron-up"></i>';


lucide.createIcons();

  }

});

const boutonPourQui = document.createElement("button");

boutonPourQui.innerHTML =
  '<i data-lucide="users"></i><span>Pour qui</span><i data-lucide="chevron-down"></i>';

lucide.createIcons();

boutonPourQui.style.marginBottom = "10px";
const filtreBarre = document.createElement("div");

filtreBarre.style.marginBottom = "20px";

filtreBarre.innerHTML = `

<label><input type="checkbox" id="filtre-public">Tout public</label>

<label><input type="checkbox" id="filtre-adulte">Adulte</label>

<label><input type="checkbox" id="filtre-famille">Famille</label>

<label><input type="checkbox" id="filtre-jeune">Jeune public</label>

`;

wrapperPourQui.appendChild(boutonPourQui);
wrapperPourQui.appendChild(filtreBarre);

barreFiltres.appendChild(wrapperPourQui);
filtreBarre.style.display = "none";
boutonPourQui.addEventListener("click", (e) => {

  e.stopPropagation();

  const ouvert =
    filtreBarre.style.display === "block";

  fermerTousLesFiltres();

  if (!ouvert) {

    filtreBarre.style.display = "block";
    boutonPourQui.innerHTML =
  '<i data-lucide="users"></i><span>Pour qui</span><i data-lucide="chevron-up"></i>';

lucide.createIcons();

  }

});


const filtreType = document.createElement("div");

filtreType.style.marginTop = "20px";
filtreType.style.marginBottom = "20px";

filtreType.innerHTML = `

<label>
  <input type="checkbox" id="type-arret-oeuvre">
  Arrêt sur œuvre
</label>

<label>
  <input type="checkbox" id="type-conference">
  Conférence
</label>

<label>
  <input type="checkbox" id="type-concert">
  Concert
</label>

<label>
  <input type="checkbox" id="type-evenement-national">
  Événement national
</label>

<label>
  <input type="checkbox" id="type-exposition">
  Exposition
</label>

<label>
  <input type="checkbox" id="type-jeu-oie">
  Jeu de l'oie
</label>

<label>
  <input type="checkbox" id="type-conte">
  L'heure du conte
</label>

<label>
  <input type="checkbox" id="type-memory">
  Memory
</label>

<label>
  <input type="checkbox" id="type-nocturne">
  Nocturne
</label>

<label>
  <input type="checkbox" id="type-rencontre">
  Rencontre
</label>

<label>
  <input type="checkbox" id="type-sieste">
Sieste musicale
</label>

<label>
  <input type="checkbox" id="type-spectacle">
  Spectacle
</label>

<label>
  <input type="checkbox" id="type-vernissage">
  Vernissage
</label>

<label>
  <input type="checkbox" id="type-visite">
  Visite Atelier
</label>

<label>
  <input type="checkbox" id="type-visite-commentee">
  Visite commentée
</label>

<label>
  <input type="checkbox" id="type-visite-contee">
  Visite contée
</label>

<label>
  <input type="checkbox" id="type-visite-flash">
  Visite Flash
</label>
`;
filtreQuand.className = "menu-filtre";
filtreBarre.className = "menu-filtre";
filtreType.className = "menu-filtre";

function fermerTousLesFiltres() {

  filtreQuand.style.display = "none";
  filtreBarre.style.display = "none";
  filtreType.style.display = "none";

  boutonQuand.innerHTML =
  '<i data-lucide="calendar"></i><span>Quand</span><i data-lucide="chevron-down"></i>';


lucide.createIcons();
  boutonPourQui.innerHTML =
  '<i data-lucide="users"></i><span>Pour qui</span><i data-lucide="chevron-down"></i>';

lucide.createIcons();
  boutonType.innerHTML =
  '<i data-lucide="tag"></i><span>Type d’activité</span><i data-lucide="chevron-down"></i>';

lucide.createIcons();

}
const boutonType = document.createElement("button");


  boutonType.innerHTML =
  '<i data-lucide="tag"></i><span>Type d’activité</span><i data-lucide="chevron-down"></i>';

lucide.createIcons();

boutonType.style.marginBottom = "10px";
wrapperType.appendChild(boutonType);
wrapperType.appendChild(filtreType);

barreFiltres.appendChild(wrapperType);
filtreType.style.display = "none";
boutonType.addEventListener("click", (e) => {

  e.stopPropagation();

  const ouvert =
    filtreType.style.display === "block";

  fermerTousLesFiltres();

  if (!ouvert) {

    filtreType.style.display = "block";

      boutonType.innerHTML =
  '<i data-lucide="tag"></i><span>Type d’activité</span><i data-lucide="chevron-up"></i>';

lucide.createIcons();

  }

});

app.appendChild(barreFiltres);

document.addEventListener("click", (e) => {

  if (!e.target.closest(".filtre-wrapper")) {
    fermerTousLesFiltres();
  }

});

document.addEventListener("change", (e) => {

  if (e.target.id === "quand-personnalise") {

    document.getElementById("zone-periode").style.display =
      e.target.checked ? "block" : "none";

  }

});

setTimeout(() => {
  lucide.createIcons();
}, 0);

function fermerFiltresSecondaires() {

  filtreBarre.style.display = "none";
  filtreType.style.display = "none";

  boutonPourQui.textContent =
    boutonPourQui.innerHTML =
  '<i data-lucide="users"></i><span>Pour qui</span><i data-lucide="chevron-down"></i>';

lucide.createIcons();

    boutonType.innerHTML =
  '<i data-lucide="tag"></i><span>Type d’activité</span><i data-lucide="chevron-down"></i>';

lucide.createIcons();

}
const resetFiltres = document.createElement("button");


  resetFiltres.innerHTML =
  '<i data-lucide="rotate-ccw"></i><span>Réinitialiser les filtres</span>';
  
  lucide.createIcons();

resetFiltres.style.marginBottom = "20px";

barreFiltres.appendChild(resetFiltres);
resetFiltres.addEventListener("click", () => {

  document
    .querySelectorAll('input[type="checkbox"]')
    .forEach(caseACocher => {

      caseACocher.checked = false;
      filtreQuand.style.display = "none";

filtreBarre.style.display = "none";

filtreType.style.display = "none";


boutonQuand.innerHTML =
  '<i data-lucide="calendar"></i><span>Quand</span><i data-lucide="chevron-down"></i>';


lucide.createIcons();


boutonPourQui.innerHTML =
  '<i data-lucide="users"></i><span>Pour qui</span><i data-lucide="chevron-down"></i>';

lucide.createIcons();


boutonType.innerHTML =
  '<i data-lucide="tag"></i><span>Type d’activité</span><i data-lucide="chevron-down"></i>';

lucide.createIcons();

    });


  document
    .getElementById("date-debut").value = "";

  document
    .getElementById("date-fin").value = "";

  recherche.value = "";

if (!modeAgenda) {

  afficherAccueil();

} else {

  document
    .querySelectorAll(".event-card")
    .forEach((carte) => {

      carte.style.display = "";

    });


}
resultatInfo.style.display = "none";

});

const events = [
  {
    date: "18 SEPT. 2026",
    jour: "18",
    mois: "SEPT.",
    annee: "2026",
    heure: "14h30",
    duree: "",
    jourFin: "15",
    moisFin: "JANV.",
    anneeFin: "2027",
    dateFin: "15 JANV. 2027",
    reservationObligatoire: false,
    lienComplementaire: "https://musee.pau.fr/fr/l-art-au-service-des-travailleurs",
    dateISO: "2026-09-18",
    dateFinISO: "2027-01-15",
    image: "images/impressionnistes.jpg",
    title: "Les Impressionnistes",
    meta: "Tout public",
    categorie: "Tout public",
    ageMinimum: "",
    type: "Exposition",
    lieu: "",
    modaliteAcces: "Accès libre",
    statut: "Publié",
    description: "Découvrez les chefs-d'œuvre impressionnistes du musée.",
    accessibilitePMR: true,
    tarif: "Gratuit",
    telephone: "05 59 27 33 02",
    email: "impressionnistes@musee.fr",
    reservation: "Réserver en ligne"
  },
  {
    date: "19 SEPT. 2026",
    jour: "19",
    mois: "SEPT.",
    annee: "2026",
    heure: "14h30",
    duree: "1h30",
    dateISO: "2026-09-19",
    image: "images/portrait.jpg",
    title: "L'histoire du portrait",
    meta: "Adulte",
    categorie: "Adulte",
    type: "Conférence",
    lieu: "",
    modaliteAcces: "Réservation obligatoire",
    statut: "Publié",
    description: "Conférence autour de l'histoire du portrait.",
    accessibilitePMR: true,
    tarif: "5 €",
    telephone: "05 59 27 33 03",
    email: "portrait@musee.fr",
    reservation: "Places limitées"
  },
{
    date: "25 SEPT. 2026",
    jour: "25",
    mois: "SEPT.",
    annee: "2026",
    heure: "14h30",
    duree: "2h",
    dateISO: "2026-09-25",
    image: "images/atelier.jpg",
    title: "Les couleurs du musée",
    meta: "Famille",
    categorie: "Famille",
    ageMinimum: "5",
    type: "Visite atelier",
    lieu: "",
    modaliteAcces: "Réservation obligatoire",
    statut: "Publié",
    description: "Découverte créative des collections.",
    accessibilitePMR: true,
    tarif: "3 €",
    telephone: "05 59 27 33 04",
    email: "atelier@musee.fr",
    reservation: "Sur inscription"
},
  {
    date: "29 SEPT. 2026",
    jour: "29",
    mois: "SEPT.",
    annee: "2026",
    heure: "14h30",
    duree: "1h",
    dateISO: "2026-09-29",
    image: "images/conte.jpg",
    title: "Les petits explorateurs",
    meta: "Jeune public",
    categorie: "Jeune public",
    ageMinimum: "6",
    type: "L'heure du conte",
    description: "Visite ludique conçue spécialement pour les enfants.",
    tarif: "2 €",
    telephone: "05 59 27 33 05",
    email: "jeunepublic@musee.fr",
    reservation: "Sur inscription"
  },
  {
  date: "03 OCT. 2026",
  jour: "03",
  mois: "OCT.",
  annee: "2026",
  heure: "16h00",
  duree: "1h30",
  dateISO: "2026-10-03",

  image: "images/conference-cezanne.jpg",

  title: "Cézanne et la modernité",

  meta: "Adulte",
  categorie: "Adulte",

  ageMinimum: "",

  type: "Conférence",
  lieu: "",
  modaliteAcces: "Réservation obligatoire",
  statut: "Publié",

  description:
    "Une conférence consacrée à l'influence de Paul Cézanne sur les artistes du XXe siècle.",

  tarif: "5 €",

  telephone: "05 59 27 33 06",
  email: "conference@musee.fr",

  reservation: "Places limitées"
},
{
  date: "10 OCT. 2026",
  jour: "10",
  mois: "OCT.",
  annee: "2026",
  heure: "15h00",
  duree: "1h",
  dateISO: "2026-10-10",

  image: "images/projection.jpg",

  title: "Sieste musicale au musée",


  meta: "Famille",
  categorie: "Famille",

  ageMinimum: "8",

  type: "Sieste musicale",
  lieu: "",
  modaliteAcces: "Réservation obligatoire",
  statut: "Publié",

  description:
  "Une parenthèse sonore et contemplative au cœur des collections du musée. Installez-vous confortablement et laissez-vous porter par la musique.",

  tarif: "Gratuit",

  telephone: "05 59 27 33 07",
  email: "projection@musee.fr",

  reservation: "Sur inscription"
},
{
  date: "17 OCT. 2026",
  jour: "17",
  mois: "OCT.",
  annee: "2026",
  heure: "11h00",
  duree: "1h",
  dateISO: "2026-10-17",

  image: "images/sieste-musicale.jpg",

  title: "Sieste musicale au musée #2",

  meta: "Adulte",
  categorie: "Adulte",

  ageMinimum: "",

  type: "Sieste musicale",
  lieu: "",
  modaliteAcces: "Réservation obligatoire",
  statut: "Publié",

  description:
    "Installez-vous confortablement au cœur des collections et laissez-vous porter par une sélection musicale immersive.",

  tarif: "Gratuit",

  telephone: "05 59 27 33 08",
  email: "sieste@musee.fr",

  reservation: "Sur inscription"
},
{
  date: "24 OCT. 2026",
  jour: "24",
  mois: "OCT.",
  annee: "2026",
  heure: "11h00",
  duree: "1h",
  dateISO: "2026-10-24",

  image: "images/sieste-musicale.jpg",

  title: "Sieste musicale au musée #3",

  meta: "Adulte",
  categorie: "Adulte",

  ageMinimum: "",

  type: "Sieste musicale",
  lieu: "",
  modaliteAcces: "Réservation obligatoire",
  statut: "Publié",

  description:
    "Une nouvelle parenthèse musicale et contemplative dans les salles du musée.",

  tarif: "Gratuit",

  telephone: "05 59 27 33 08",
  email: "sieste@musee.fr",

  reservation: "Sur inscription"
},
{
  date: "31 OCT. 2026",
  jour: "31",
  mois: "OCT.",
  annee: "2026",
  heure: "10h30",
  duree: "1h30",
  dateISO: "2026-10-31",

  image: "images/bien-etre.jpg",

  title: "Bien-être au musée",

  meta: "Adulte",
  categorie: "Adulte",

  ageMinimum: "",

  type: "Activité bien-être",
  lieu: "",
  modaliteAcces: "Réservation obligatoire",
  statut: "Publié",

  description:
    "Une séance dédiée au bien-être et à la détente inspirée des œuvres du musée.",

  tarif: "5 €",

  telephone: "05 59 27 33 09",
  email: "bienetre@musee.fr",

  reservation: "Sur inscription"
},
{
  date: "07 NOV. 2026",
  jour: "07",
  mois: "NOV.",
  annee: "2026",
  heure: "18h30",
  duree: "1h30",
  dateISO: "2026-11-07",

  image: "images/concert.jpg",

  title: "Concert au musée",

  meta: "Tout public",
  categorie: "Tout public",

  ageMinimum: "",

  type: "Concert",
  lieu: "",
  modaliteAcces: "Réservation obligatoire",
  statut: "Publié",

  description:
    "Une soirée musicale exceptionnelle dans les espaces du musée.",

  tarif: "8 €",

  telephone: "05 59 27 33 10",
  email: "concert@musee.fr",

  reservation: "Réservation conseillée"
},
{
  date: "14 NOV. 2026",
  jour: "14",
  mois: "NOV.",
  annee: "2026",
  heure: "15h00",
  duree: "30min",
  dateISO: "2026-11-14",

  image: "images/visite-flash.jpg",

  title: "Visite flash : les chefs-d'œuvre",

  meta: "Famille",
  categorie: "Famille",

  ageMinimum: "8",

  type: "Visite flash",
  lieu: "",
  modaliteAcces: "Réservation obligatoire",
  statut: "Publié",

  description:
    "Une découverte rapide et accessible des œuvres incontournables du MBA.",

  tarif: "Gratuit",

  telephone: "05 59 27 33 11",
  email: "visite@musee.fr",

  reservation: "Sans réservation"
},
{
  date: "21 NOV. 2026",
  jour: "21",
  mois: "NOV.",
  annee: "2026",
  heure: "18h00",
  duree: "",
  dateISO: "2026-11-21",

  image: "images/vernissage.jpg",

  title: "Vernissage d'automne",

  meta: "Tout public",
  categorie: "Tout public",

  ageMinimum: "",

  type: "Vernissage",
  lieu: "",
  modaliteAcces: "Sans réservation",
  statut: "Publié",

  description:
    "Présentation officielle de la nouvelle exposition temporaire et rencontre avec les équipes du musée.",

  tarif: "Gratuit",

  telephone: "05 59 27 33 12",
  email: "vernissage@musee.fr",

  reservation: "Entrée libre"
}
];

const modeAgenda =
  window.location.pathname.includes("agenda.html");
function afficherCartes(events) {
const MAX_RESULTATS_ACCUEIL = 4;
  
let nombreVisible =
  modeAgenda
    ? events.length
    : 4;


events.forEach((event, index) => {

  const visibleAuChargement =
    index < nombreVisible;


  const card = document.createElement("div");
  card.className = "event-card";
  if (!visibleAuChargement) {
  card.style.display = "none";
}

  const image = document.createElement("img");
  image.className = "event-image";
  image.src = event.image;

  const date = document.createElement("div");

date.className = "event-date";

date.innerHTML = event.type === "Exposition"

? `

<div class="event-period-day">
  ${event.jour}
</div>

<div class="event-period-month">
  ${event.mois}
</div>

<div class="event-period-year">
  ${event.annee}
</div>

<div class="event-period-separator">
  —
</div>

<div class="event-period-end-day">
  ${event.jourFin}
</div>

<div class="event-period-end-month">
  ${event.moisFin}
</div>

<div class="event-period-end-year">
  ${event.anneeFin}
</div>

`

: `

<div class="event-day">${event.jour}</div>

<div class="event-month">${event.mois}</div>

<div class="event-year">${event.annee}</div>

<div class="event-hour">${event.heure}</div>

`;

  const content = document.createElement("div");
  content.className = "event-content";

  const type = document.createElement("p");

type.className = "event-type";
type.textContent = event.type;

  const title = document.createElement("h2");
  title.textContent = event.title;

 const meta = document.createElement("div");

meta.className = "meta-line";

meta.innerHTML = `
<i data-lucide="users"></i>
<span>${event.meta}</span>
`;
lucide.createIcons();

  content.appendChild(type);
content.appendChild(title);
content.appendChild(meta);
if (event.type === "Exposition") {

  const periode = document.createElement("p");

  periode.className = "event-period-mobile";

  periode.innerHTML = `
    <i data-lucide="calendar"></i>
    Du ${event.date} au ${event.dateFin}
  `;

  content.appendChild(periode);

}
if (event.type !== "Exposition") {

  const dateMobile = document.createElement("p");

dateMobile.className = "event-date-mobile";

dateMobile.innerHTML = `

  <div class="meta-line">
    <i data-lucide="calendar"></i>
    <span>${event.date}</span>
  </div>

  <div class="meta-line">
    <i data-lucide="clock-3"></i>
    <span>${event.heure}</span>
  </div>

`;

  content.appendChild(dateMobile);

}

  const more = document.createElement("button");

more.className = "event-more";

more.textContent = "+";

lucide.createIcons();

const left = document.createElement("div");
left.className = "event-left";

left.appendChild(image);
left.appendChild(date);

const right = document.createElement("div");
right.className = "event-right";

right.appendChild(content);
right.appendChild(more);

card.appendChild(left);
card.appendChild(right);

app.appendChild(card);

});
}
afficherCartes(events);

if (!modeAgenda) {

  afficherAccueil();

}


const overlay = document.createElement("div");

overlay.id = "overlay";

overlay.style.display = "none";

app.appendChild(overlay);

const detail = document.createElement("div");

const resultatInfo = document.createElement("div");
resultatInfo.style.color = "#555";
resultatInfo.style.fontSize = "14px";
resultatInfo.style.marginBottom = "20px";
resultatInfo.id = "resultat-info";

resultatInfo.style.display = "none";

resultatInfo.style.marginTop = "20px";
resultatInfo.style.textAlign = "center";
resultatInfo.style.fontWeight = "600";
const voirPlus = document.createElement("div");
if (modeAgenda) {

  voirPlus.style.display = "none";

}
voirPlus.id = "voir-plus";
voirPlus.addEventListener("click", () => {

  window.open("agenda.html", "_blank");

});


voirPlus.innerHTML =
  '<span>CONSULTER TOUT L\'AGENDA</span><i data-lucide="chevron-down"></i>';

lucide.createIcons();


voirPlus.style.marginTop = "20px";
detail.id = "event-detail";

detail.style.marginTop = "20px";
detail.style.padding = "20px";
detail.style.background = "white";
detail.style.borderRadius = "16px";

detail.style.display = "none";

app.appendChild(resultatInfo);
app.appendChild(voirPlus);
app.appendChild(detail);const buttons = document.querySelectorAll(".event-card button");

buttons.forEach((button, index) => {

  button.addEventListener("click", () => {
    
    overlay.style.display = "block";
    detail.style.display = "block";

    detail.innerHTML = `
<button id="fermer-detail">✕</button>

<div class="detail-layout">


  <!-- image masquée pour test -->



  <div class="detail-infos">

    <div class="detail-type">
  ${events[index].type}
</div>

    <h2 class="detail-title">
      ${events[index].title}
    </h2>

   <div class="detail-public">
  <i data-lucide="users"></i>

  <span class="detail-public-label">
    ${events[index].meta}
  </span>

  ${
    events[index].ageMinimum
      ? `
        <span class="detail-separator">•</span>
        <span class="detail-age">
          À partir de ${events[index].ageMinimum} ans
        </span>
      `
      : ""
  }
${
  events[index].accessibilitePMR
    ? `
      <span class="detail-separator">•</span>
      <span class="detail-pmr">
        <i data-lucide="accessibility"></i>
        PMR
      </span>
    `
    : ""
}
  </div>



   <div class="detail-datetime">

${
  events[index].type === "Exposition"

  ? `

  <span class="meta-line">
  <i data-lucide="calendar"></i>
  <span>
    Du ${events[index].date}
    au ${events[index].dateFin}
  </span>
</span>

  `

  : `

  <span class="meta-line">
  <i data-lucide="calendar"></i>
  <span>${events[index].date}</span>
</span>

<span class="meta-line">
  <i data-lucide="clock-3"></i>
  <span>${events[index].heure}</span>
</span>

${
  events[index].duree
    ? `
<span class="meta-line">
  <i data-lucide="timer"></i>
  <span>${events[index].duree}</span>
</span>
`
    : ""
}

  `
}

</div>
<div class="detail-tarif-mobile">
  <i data-lucide="ticket"></i>
  ${events[index].tarif}
</div>

    <p class="detail-description">
  ${events[index].description}
</p>

${
  events[index].lienComplementaire

  ? `

  <a
    href="${events[index].lienComplementaire}"
    target="_blank"
    class="detail-link"
  >
    En savoir plus →
  </a>

  `

  : ""

}
    <hr>

    <div class="detail-footer">

      <div>

        <h4>Tarif</h4>

        <p>${events[index].tarif}</p>
        </div>


      ${
events[index].reservationObligatoire !== false
  ? `

  <div>

    <h4 class="reservation-toggle">
  Sur réservation
</h4>

<div class="reservation-content">

  <p>${events[index].telephone}</p>

  <p>${events[index].email}</p>

  <p>${events[index].reservation}</p>

</div>

  </div>

  `

  : ""

}
<div class="share-section">

  <h4>Partager</h4>

  <div class="share-actions">

    <p class="email-btn">
  <i data-lucide="mail"></i>
  Email
</p>

<p class="copy-link-btn">
  <i data-lucide="link"></i>
  Copier le lien
</p>

    <p class="calendar-btn">
      <i data-lucide="calendar-plus"></i>
      Ajouter à mon calendrier
    </p>

  </div>

</div>

<p class="mobile-calendar-btn">
  <i data-lucide="calendar-plus"></i>
  Ajouter à mon calendrier
</p>

</div>

`;
lucide.createIcons();
const reservationToggle =
  document.querySelector(".reservation-toggle");

const reservationContent =
  document.querySelector(".reservation-content");

if(reservationToggle && reservationContent){

  reservationToggle.addEventListener(
    "click",
    () => {

      reservationContent.classList.toggle("open");

      reservationToggle.classList.toggle("open");

    }
  );

}
document
  .getElementById("fermer-detail")
  .addEventListener("click", () => {

    detail.style.display = "none";
overlay.style.display = "none";

  });
const calendarBtns = document.querySelectorAll(
  ".calendar-btn, .mobile-calendar-btn"
);

calendarBtns.forEach((btn) => {

  btn.addEventListener("click", () => {

    const event = events[index];

    const heure =
      event.heure
        ? event.heure.replace("h", ":")
        : "14:00";

    const debut = new Date(
      `${event.dateISO}T${heure}:00`
    );

    const fin = new Date(
      debut.getTime() + (60 * 60 * 1000)
    );

    const formatICS = (date) => {

      return date
        .toISOString()
        .replace(/[-:]/g, "")
        .split(".")[0] + "Z";

    };

    const contenuICS = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DESCRIPTION:${event.description}
DTSTART:${formatICS(debut)}
DTEND:${formatICS(fin)}
LOCATION:Musée des Beaux-Arts de Pau
END:VEVENT
END:VCALENDAR
`.trim();

    const blob = new Blob(
      [contenuICS],
      { type: "text/calendar" }
    );

    const url =
      URL.createObjectURL(blob);

    const lien =
      document.createElement("a");

    lien.href = url;

    lien.download =
      `${event.title}.ics`;

    document.body.appendChild(lien);

    lien.click();

    document.body.removeChild(lien);

    URL.revokeObjectURL(url);

  });

});
const emailBtn =
document.querySelector(".email-btn");

if (emailBtn) {

emailBtn.addEventListener("click", () => {

const sujet =
encodeURIComponent(events[index].title);

const contenu =
encodeURIComponent(
`Je souhaite partager cet événement du Musée des Beaux-Arts de Pau :

${events[index].title}

https://bandini77.github.io/widget-agenda-mba/agenda.html`
);

window.location.href =
`mailto:?subject=${sujet}&body=${contenu}`;

});

}

const copyLinkBtn =
document.querySelector(".copy-link-btn");

if (copyLinkBtn) {

copyLinkBtn.addEventListener("click", async () => {

try {

await navigator.clipboard.writeText(
"https://bandini77.github.io/widget-agenda-mba/agenda.html"
);

alert("✅ Lien copié dans le presse-papiers");

} catch(error) {

alert(
"Impossible de copier le lien."
);

}

});

}


  });

});
function afficherAccueil() {

  const cartes =
    document.querySelectorAll(".event-card");

    let compteur = 0;
let totalTrouves = 0;
  cartes.forEach((carte, index) => {

    if (index < 4) {

      carte.style.display = "";

    } else {

      carte.style.display = "none";

    }

  });

}
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

  const arretOeuvreCoche =
  document.getElementById("type-arret-oeuvre").checked;

const concertCoche =
  document.getElementById("type-concert").checked;

const evenementNationalCoche =
  document.getElementById("type-evenement-national").checked;

const jeuOieCoche =
  document.getElementById("type-jeu-oie").checked;

const memoryCoche =
  document.getElementById("type-memory").checked;
  
const nocturneCoche =
  document.getElementById("type-nocturne").checked;

const siesteCoche =
  document.getElementById("type-sieste").checked;

const rencontreCoche =
  document.getElementById("type-rencontre").checked;

const spectacleCoche =
  document.getElementById("type-spectacle").checked;

const vernissageCoche =
  document.getElementById("type-vernissage").checked;

const visiteCommenteeCoche =
  document.getElementById("type-visite-commentee").checked;

const visiteConteeCoche =
  document.getElementById("type-visite-contee").checked;

const visiteFlashCoche =
  document.getElementById("type-visite-flash").checked;

  const cartes =
    document.querySelectorAll(".event-card");
let compteur = 0;
let totalTrouves = 0;

  const aucunFiltre =
  !publicCoche &&
  !adulteCoche &&
  !familleCoche &&
  !jeuneCoche &&
  !expositionCoche &&
  !conferenceCoche &&
  !visiteCoche &&
  !conteCoche &&
  !arretOeuvreCoche &&
  !concertCoche &&
  !evenementNationalCoche &&
  !jeuOieCoche &&
  !memoryCoche &&
  !rencontreCoche &&
  !siesteCoche &&
  !spectacleCoche &&
  !vernissageCoche &&
  !visiteCommenteeCoche &&
  !visiteConteeCoche &&
  !visiteFlashCoche &&
  !nocturneCoche ;
  

  cartes.forEach((carte, index) => {

    if (aucunFiltre) {

  if (!modeAgenda) {

    afficherAccueil();

  } else {

    cartes.forEach((carte) => {

      carte.style.display = "";

    });

  }

  resultatInfo.style.display = "none";

return;


}

    const categorie =
  events[index].categorie;

const type =
  events[index].type;

    if (
  publicCoche ||

  (
    adulteCoche &&
    (
      categorie === "Adulte" ||
      categorie === "Tout public"
    )
  ) ||

  (
    familleCoche &&
    categorie === "Famille"
  ) ||

  (
    jeuneCoche &&
    categorie === "Jeune public"
  ) ||
      (expositionCoche && type === "Exposition") ||
(conferenceCoche && type === "Conférence") ||
(visiteCoche && type === "Visite atelier") ||
(conteCoche && type === "L'heure du conte") ||
(arretOeuvreCoche && type === "Arrêt sur œuvre") ||

(concertCoche && type === "Concert") ||

(evenementNationalCoche && type === "Événement national") ||

(jeuOieCoche && type === "Jeu de l'oie") ||

(memoryCoche && type === "Memory") ||

(siesteCoche && type === "Sieste musicale") ||

(rencontreCoche && type === "Rencontre") ||

(spectacleCoche && type === "Spectacle") ||

(nocturneCoche && type === "Nocturne") ||

(vernissageCoche && type === "Vernissage") ||

(visiteCommenteeCoche && type === "Visite commentée") ||

(visiteConteeCoche && type === "Visite contée") ||

(visiteFlashCoche && type === "Visite Flash")
    ) {
      
totalTrouves++;

if (
  modeAgenda ||
  compteur < MAX_RESULTATS_ACCUEIL
) {

  carte.style.display = "";
  compteur++;

} else {

  carte.style.display = "none";

}

    } else {
      carte.style.display = "none";
    }

  });
  
  if (
  (modeAgenda && totalTrouves > 0) ||
  (!modeAgenda && totalTrouves > MAX_RESULTATS_ACCUEIL)
) {

  resultatInfo.style.display = "block";

  if (modeAgenda) {

  resultatInfo.textContent =
    `${totalTrouves} résultats trouvés`;

} else {

  resultatInfo.textContent =
    `${Math.min(totalTrouves, MAX_RESULTATS_ACCUEIL)} résultats affichés sur ${totalTrouves} trouvés`;

}

} else {

  resultatInfo.style.display = "none";

}

}

document
  .getElementById("filtre-public")
  .addEventListener("change", () => {

    const coche =
      document.getElementById("filtre-public").checked;

    document.getElementById("filtre-adulte").checked = coche;
    document.getElementById("filtre-famille").checked = coche;
    document.getElementById("filtre-jeune").checked = coche;

    mettreAJourFiltres();

  });
  function mettreAJourToutPublic() {

  const adulte =
    document.getElementById("filtre-adulte").checked;

  const famille =
    document.getElementById("filtre-famille").checked;

  const jeune =
    document.getElementById("filtre-jeune").checked;

  document.getElementById("filtre-public").checked =
    adulte && famille && jeune;

}

document
  .getElementById("filtre-adulte")
  .addEventListener("change", () => {

    mettreAJourToutPublic();
    mettreAJourFiltres();

  });

document
  .getElementById("filtre-famille")
  .addEventListener("change", () => {

    mettreAJourToutPublic();
    mettreAJourFiltres();

  });

document
  .getElementById("filtre-jeune")
  .addEventListener("change", () => {

    mettreAJourToutPublic();
    mettreAJourFiltres();

  });

  recherche.addEventListener("input", () => {

  const texte =
  recherche.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const cartes =
    document.querySelectorAll(".event-card");
    let compteur = 0;
let totalTrouves = 0;


  cartes.forEach((carte, index) => {

    const contenu =
(
  events[index].title +
  " " +
  events[index].type +
  " " +
  events[index].categorie +
  " " +
  events[index].meta +
  " " +
  events[index].description
)
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "");
const rechercheToutPublic =
  "tout public".startsWith(texte) ||
  "tout-public".startsWith(texte) ||
  "public".startsWith(texte);
if (texte === "tout public") {


}
    if (
  contenu.includes(texte) ||
  (
    rechercheToutPublic &&
    (
      events[index].categorie === "Tout public" ||
      events[index].categorie === "Adulte" ||
      events[index].categorie === "Famille" ||
      events[index].categorie === "Jeune public"
    )
  )
) {

      totalTrouves++;

      if (
  modeAgenda ||
  compteur < MAX_RESULTATS_ACCUEIL
) {

        carte.style.display = "";
        compteur++;

      } else {

        carte.style.display = "none";

      }

    } else {

      carte.style.display = "none";

    }

  });

  if (
  (modeAgenda && totalTrouves > 0) ||
  (!modeAgenda && totalTrouves > MAX_RESULTATS_ACCUEIL)
) {

    resultatInfo.style.display = "block";

    if (modeAgenda) {

  resultatInfo.textContent =
    `${totalTrouves} résultats trouvés`;

} else {

  resultatInfo.textContent =
    `${Math.min(totalTrouves, MAX_RESULTATS_ACCUEIL)} résultats affichés sur ${totalTrouves} trouvés`;

}

  } else {

    resultatInfo.style.display = "none";

  }

  if (texte === "") {

  if (!modeAgenda) {

    resultatInfo.style.display = "none";

    afficherAccueil();

  } else {

    document
      .querySelectorAll(".event-card")
      .forEach((carte) => {

        carte.style.display = "";

      });

    resultatInfo.style.display = "none";

  }

}


});


document
  .getElementById("type-exposition")
  .addEventListener("change", () => {

    mettreAJourFiltres();

  });



document
  .getElementById("type-conference")
  .addEventListener("change", () => {

    mettreAJourFiltres();

  });



document
  .getElementById("type-visite")
  .addEventListener("change", () => {

    mettreAJourFiltres();

  });



document
  .getElementById("type-conte")
  .addEventListener("change", () => {

    mettreAJourFiltres();

  });

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

  const aujourdHui = new Date();

  const debutWeekend = new Date(aujourdHui);
  const finWeekend = new Date(aujourdHui);

  const jourActuel = aujourdHui.getDay();

  const joursAvantSamedi = (6 - jourActuel + 7) % 7;

  debutWeekend.setDate(
    aujourdHui.getDate() + joursAvantSamedi
  );

  finWeekend.setDate(
    debutWeekend.getDate() + 1
  );

  cartes.forEach((carte, index) => {

    if (!coche) {

      carte.style.display = "";
      return;

    }

    const dateEvenement =
      new Date(events[index].dateISO);

    if (
      dateEvenement >= debutWeekend &&
      dateEvenement <= finWeekend
    ) {

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

  let compteur = 0;
  let totalTrouves = 0;

  cartes.forEach((carte, index) => {

    let visible = false;

if (events[index].type === "Exposition") {

  const debutExpo = events[index].dateISO;
  const finExpo = events[index].dateFinISO;

  visible =
    (dateDebut === "" || finExpo >= dateDebut) &&
    (dateFin === "" || debutExpo <= dateFin);

} else {

  const dateEvenement = events[index].dateISO;

  visible =
    (dateDebut === "" || dateEvenement >= dateDebut) &&
    (dateFin === "" || dateEvenement <= dateFin);

}

if (visible) {

      totalTrouves++;

      if (
        modeAgenda ||
        compteur < MAX_RESULTATS_ACCUEIL
      ) {

        carte.style.display = "";
        compteur++;

      } else {

        carte.style.display = "none";

      }

    } else {

      carte.style.display = "none";

    }

  });

  console.log(
  "modeAgenda:",
  modeAgenda,
  "totalTrouves:",
  totalTrouves,
  "compteur:",
  compteur
);
  if (totalTrouves > 0) {

    resultatInfo.style.display = "block";

    if (modeAgenda) {

      resultatInfo.textContent =
        `${totalTrouves} résultats trouvés`;

    } else {

      resultatInfo.textContent =
        `${Math.min(totalTrouves, MAX_RESULTATS_ACCUEIL)} résultats affichés sur ${totalTrouves} trouvés`;

    }

  } else {

    resultatInfo.style.display = "none";

  }

}
  document
  .getElementById("date-debut")
  .addEventListener("change", filtrerPeriode);

document
  .getElementById("date-fin")
  .addEventListener("change", filtrerPeriode);
  document
  .getElementById("type-arret-oeuvre")
  .addEventListener("change", () => {

    
    mettreAJourFiltres();

  });

document
  .getElementById("type-concert")
  .addEventListener("change", () => {

    mettreAJourFiltres();

  });

document
  .getElementById("type-evenement-national")
  .addEventListener("change", () => {

    mettreAJourFiltres();

  });

document
  .getElementById("type-jeu-oie")
  .addEventListener("change", () => {

    mettreAJourFiltres();

  });

document
  .getElementById("type-memory")
  .addEventListener("change", () => {

    mettreAJourFiltres();

  });

document
  .getElementById("type-sieste")
  .addEventListener("change", () => {

    mettreAJourFiltres();

  });

  document
  .getElementById("type-nocturne")
  .addEventListener("change", () => {

    mettreAJourFiltres();

  });

document
  .getElementById("type-rencontre")
  .addEventListener("change", () => {

    mettreAJourFiltres();

  });

document
  .getElementById("type-spectacle")
  .addEventListener("change", () => {

    mettreAJourFiltres();

  });

document
  .getElementById("type-vernissage")
  .addEventListener("change", () => {

    mettreAJourFiltres();

  });

document
  .getElementById("type-visite-commentee")
  .addEventListener("change", () => {

    mettreAJourFiltres();

  });

document
  .getElementById("type-visite-contee")
  .addEventListener("change", () => {

    mettreAJourFiltres();

  });

document
  .getElementById("type-visite-flash")
  .addEventListener("change", () => {

    mettreAJourFiltres();

  });

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    fermerTousLesFiltres();

  }

});

const boutonRetourHaut =
  document.getElementById("retour-haut");

if (boutonRetourHaut) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

      boutonRetourHaut.style.display = "block";

    } else {

      boutonRetourHaut.style.display = "none";

    }

  });

  boutonRetourHaut.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}