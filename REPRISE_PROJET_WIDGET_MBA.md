Tu es mon assistant de développement pour le projet :

WIDGET AGENDA MBA
(Musée des Beaux-Arts de Pau)

Contexte :

Nous développons un widget d'agenda culturel destiné au site du Musée des Beaux-Arts de Pau.

Le projet est développé en HTML / CSS / JavaScript pur.

L'objectif à terme est une connexion à SharePoint afin que les équipes du musée puissent gérer les événements sans modifier le code.

--------------------------------------------------

ÉTAT DU PROJET

Version actuelle :

V2.20.8-beta5

Branche Git :

v2-maquette

--------------------------------------------------

V2.20.6 TERMINÉE

Cartes événements :

- Rééquilibrage général
- Refonte image / date / informations
- Bouton "+"
- Icônes Lucide
- Harmonisation avec la maquette MBA

--------------------------------------------------

V2.20.7 TERMINÉE

Filtres :

- Panneaux sous les boutons correspondants
- Filtre "Quand"
- Filtre "Pour qui"
- Filtre "Type d'activité"
- Logique métier :

Tout public
=
Adulte + Famille + Jeune public

- Correction du bouton Réinitialiser
- Correction de la flèche du filtre Quand

--------------------------------------------------

V2.20.8 TERMINÉE

Modale événement :

- Icônes Lucide partout
- Suppression des cartouches inutiles
- Affichage du type d'activité en texte éditorial
- Âge minimum

Exemple :

👥 Jeune public • À partir de 6 ans

- Expositions longues durées :

Carte :

18
SEPT.
2026

—

15
JANV.
2027

Modale :

Du 18 septembre 2026
au 15 janvier 2027

- Réservation conditionnelle

Si :

reservationObligatoire = false

Alors :

bloc réservation masqué

- Lien :

En savoir plus →

si :

lienComplementaire est renseigné

--------------------------------------------------

STRUCTURE ACTUELLE DES ÉVÉNEMENTS

Exemple :

{
  title: "",
  type: "",

  meta: "",
  categorie: "",

  ageMinimum: "",

  date: "",
  jour: "",
  mois: "",
  annee: "",

  dateFin: "",
  jourFin: "",
  moisFin: "",
  anneeFin: "",

  heure: "",

  tarif: "",

  reservationObligatoire: false,

  telephone: "",
  email: "",

  reservation: "",

  lienComplementaire: "",

  image: ""
}

--------------------------------------------------

DÉCISIONS MÉTIER VALIDÉES

PUBLIC

SharePoint stockera :

- Adulte
- Famille
- Jeune public

Le widget calculera automatiquement :

Tout public

si les trois catégories sont présentes.

--------------------------------------------------

ÂGE MINIMUM

Champ :

ageMinimum

Affichage :

👥 Jeune public • À partir de 6 ans

--------------------------------------------------

EXPOSITIONS

Affichage spécial :

Carte :

double date

Modale :

Du ... au ...

Pas d'heure affichée

--------------------------------------------------

RÉSERVATION

Champ :

reservationObligatoire

Si :

false

alors :

bloc réservation masqué

--------------------------------------------------

LIEN COMPLÉMENTAIRE

Champ :

lienComplementaire

Affichage :

En savoir plus →

--------------------------------------------------

LIEU

Décision validée :

Le lieu est facultatif.

Le musée est implicite.

Le lieu ne doit apparaître que si une valeur est renseignée.

Exemples :

- Château de Pau
- Hors les murs
- Auditorium
- Médiathèque

Si la valeur est vide :

aucun lieu affiché.

--------------------------------------------------

RECHERCHE

Décision validée :

Sans filtre :

Afficher uniquement les prochains événements.

Avec filtre ou recherche :

Rechercher dans toute la programmation.

La recherche doit porter sur :

- Titre
- Description
- Type
- Public

--------------------------------------------------

FUTURE PAGE AGENDA

Accueil :

Aperçu des événements.

Agenda :

Programmation complète.

Le même moteur sera utilisé.

--------------------------------------------------

V3 SHAREPOINT

Liste SharePoint :

Agenda MBA

Colonnes prévues :

Titre

Type d'activité

Publics concernés

Âge minimum

Date début

Heure début

Date fin

Heure fin

Lieu

Tarif

Réservation obligatoire

Téléphone

Email

Description

Lien complémentaire

Image

Statut

--------------------------------------------------

STATUTS

- Brouillon
- Publié
- Archivé

--------------------------------------------------

IMAGES

Format recommandé :

1200 x 900 px

Orientation :

Paysage

Format :

JPG

Poids :

< 2 Mo

--------------------------------------------------

ARCHIVAGE

Les événements expirés doivent être automatiquement masqués.

Aucune suppression automatique.

--------------------------------------------------

PROCHAINE ÉTAPE VALIDÉE

V2.21

Objectif :

Recherche globale.

Comportement attendu :

Sans filtre :

Afficher uniquement les prochains événements.

Avec filtre ou recherche :

Afficher tous les événements correspondants dans la programmation complète.

--------------------------------------------------

Lorsque je reprends le projet, considère que tout ce qui est ci-dessus est validé et ne reviens pas sur ces décisions sauf si je demande explicitement une modification.