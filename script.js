const app = document.getElementById("app");
const recherche = document.createElement("input");

recherche.type = "text";
recherche.placeholder = "Recherche...";

recherche.style.width = "100%";
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
boutonQuand.addEventListener("click", () => {

  const ouvert =
    filtreQuand.style.display === "block";

  fermerTousLesFiltres();

  if (!ouvert) {

    filtreQuand.style.display = "block";
    
    boutonQuand.innerHTML =
  '<i data-lucide="calendar"></i><span>Quand</span><i data-lucide="chevron-down"></i>';


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
boutonPourQui.addEventListener("click", () => {

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
  <input type="checkbox" id="type-projection">
  Projection
</label>

<label>
  <input type="checkbox" id="type-rencontre">
  Rencontre
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
boutonType.addEventListener("click", () => {

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
console.log("je ferme");

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

boutonType.textContent = boutonType.innerHTML =
  '<i data-lucide="tag"></i><span>Type d’activité</span><i data-lucide="chevron-down"></i>';

lucide.createIcons();

    });

  document
    .getElementById("quand-date").value = "";

  document
    .getElementById("date-debut").value = "";

  document
    .getElementById("date-fin").value = "";

  recherche.value = "";

  document
    .querySelectorAll(".event-card")
    .forEach(carte => {

      carte.style.display = "";

    });

});

/*

document
  .getElementById("fermer-quand")
  .addEventListener("click", () => {

    filtreQuand.style.display = "none";

    boutonQuand.textContent =
      "📅 Quand ▼";

  });*/

/*

  document
  .getElementById("fermer-pourqui")
  .addEventListener("click", () => {

    filtreBarre.style.display = "none";

    boutonPourQui.textContent =
      "👥 Pour qui ▼";

  });*/

/*

document
  .getElementById("fermer-type")
  .addEventListener("click", () => {

    filtreType.style.display = "none";

    boutonType.textContent =
      "🏷️ Type d'activité ▼";

  });*/
  
  /*
  
  document
  .getElementById("appliquer-quand")
  .addEventListener("click", () => {

    filtrerDate();
    filtrerPeriode();

    filtreQuand.style.display = "none";

    boutonQuand.textContent =
      "📅 Quand ▼";

  });
  */
/*
document
  .getElementById("appliquer-pourqui")
  .addEventListener("click", () => {

    mettreAJourFiltres();

    filtreBarre.style.display = "none";

    boutonPourQui.textContent =
      "👥 Pour qui ▼";

  });

  */

  /*
document
  .getElementById("appliquer-type")
  .addEventListener("click", () => {

    mettreAJourFiltres();

    filtreType.style.display = "none";

    boutonType.textContent =
      "🏷️ Type d'activité ▼";

  });
  */

const events = [
  {
    date: "18 SEPT. 2026",
    jour: "18",
    mois: "SEPT.",
    annee: "2026",
    heure: "14h30",
    dateFin: "15 JANV. 2027",
    reservationObligatoire: false,
    lienComplementaire: "https://musee.pau.fr/fr/l-art-au-service-des-travailleurs",
    dateISO: "2026-07-19",
    image: "images/impressionnistes.jpeg",
    title: "Les Impressionnistes",
    meta: "Tout public",
    categorie: "Tout public",
    ageMinimum: "",
    type: "Exposition",
    description: "Découvrez les chefs-d'œuvre impressionnistes du musée.",
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
    dateISO: "2026-09-19",
    image: "images/portrait.jpeg",
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
    jour: "25",
    mois: "SEPT.",
    annee: "2026",
    heure: "14h30",
    dateISO: "2026-09-25",
    image: "images/atelier.jpg",
    title: "Les couleurs du musée",
    meta: "Famille",
    categorie: "Famille",
    ageMinimum: "5",
    type: "Visite atelier",
    description: "Découverte créative des collections.",
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
  image.src = event.image;

  const date = document.createElement("div");

date.className = "event-date";

date.innerHTML = `
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

  const meta = document.createElement("p");
  meta.innerHTML = `
<i data-lucide="users"></i> ${event.meta}
`;
lucide.createIcons();

  content.appendChild(type);
content.appendChild(title);
content.appendChild(meta);

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
const overlay = document.createElement("div");

overlay.id = "overlay";

overlay.style.display = "none";

app.appendChild(overlay);

const detail = document.createElement("div");

const voirPlus = document.createElement("div");
voirPlus.id = "voir-plus";
voirPlus.addEventListener("click", () => {

  localStorage.setItem(
    "nombreVisible",
    nombreVisible + 2
  );

  location.reload();

});


voirPlus.innerHTML =
  '<span>VOIR PLUS D\'ÉVÉNEMENTS</span><i data-lucide="chevron-down"></i>';

lucide.createIcons();


voirPlus.style.marginTop = "20px";
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
      src="${events[index].image}"
      alt="${events[index].title}"
    >

  </div>



  <div class="detail-infos">

    <div class="detail-type">
  ${events[index].type}
</div>

    <h2 class="detail-title">
      ${events[index].title}
    </h2>

    <div class="detail-public">
  <i data-lucide="users"></i>

  ${events[index].meta}

  ${
    events[index].ageMinimum
      ? ` • À partir de ${events[index].ageMinimum} ans`
      : ""
  }

</div>


   <div class="detail-datetime">

${
  events[index].type === "Exposition"

  ? `

  <span>
    <i data-lucide="calendar"></i>
    Du ${events[index].date}
    au ${events[index].dateFin}
  </span>

  `

  : `

  <span>
    <i data-lucide="calendar"></i>
    ${events[index].date}
  </span>

  <span>
    <i data-lucide="clock-3"></i>
    ${events[index].heure}
  </span>

  `
}

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
  events[index].reservationObligatoire

  ? `

  <div>

    <h4>Réservation</h4>

    <p>${events[index].telephone}</p>

    <p>${events[index].email}</p>

    <p>${events[index].reservation}</p>

  </div>

  `

  : ""

}
<div>

  <h4>Partager</h4>
<div class="share-actions">

<p>
  <i data-lucide="link"></i>
  Copier le lien
</p>

<p>
  <i data-lucide="mail"></i>
  Email
</p>

<button class="calendar-btn">
  <i data-lucide="calendar-plus"></i>
  Ajouter à mon calendrier
</button>

</div>

    </div>

  </div>

</div>

`;
lucide.createIcons();
document
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

const projectionCoche =
  document.getElementById("type-projection").checked;

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
  !projectionCoche &&
  !rencontreCoche &&
  !spectacleCoche &&
  !vernissageCoche &&
  !visiteCommenteeCoche &&
  !visiteConteeCoche &&
  !visiteFlashCoche;

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
(conteCoche && type === "L'heure du conte") ||
(arretOeuvreCoche && type === "Arrêt sur œuvre") ||

(concertCoche && type === "Concert") ||

(evenementNationalCoche && type === "Événement national") ||

(jeuOieCoche && type === "Jeu de l'oie") ||

(memoryCoche && type === "Memory") ||

(projectionCoche && type === "Projection") ||

(rencontreCoche && type === "Rencontre") ||

(spectacleCoche && type === "Spectacle") ||

(vernissageCoche && type === "Vernissage") ||

(visiteCommenteeCoche && type === "Visite commentée") ||

(visiteConteeCoche && type === "Visite contée") ||

(visiteFlashCoche && type === "Visite Flash")
    ) {
      
carte.style.display = "";

    } else {
      carte.style.display = "none";
    }

  });

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
  .getElementById("type-projection")
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