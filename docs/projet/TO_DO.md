# TO DO – Agenda MBA

Dernière mise à jour : 31 juillet 2026

---

# Réalisé

## Widget

✅ Migration complète vers agenda.json

✅ Cartes événements

✅ Modales

✅ Recherche

✅ Filtres publics

✅ Filtres types

✅ Filtres périodes

✅ Gestion des expositions multi-dates

✅ Export calendrier

✅ Compteur de résultats

✅ Bouton "Consulter tout l'agenda"

---

## Architecture

✅ Architecture JSON validée

✅ Widget → agenda.json validé

✅ Structure du fichier agenda.json validée

---

## Power Automate

✅ POC 1 : création de fichier

✅ POC 2 : lecture Microsoft Lists

✅ POC 3 : injection de données

✅ POC 4 : génération JSON

✅ POC 5 : génération événement JSON

✅ POC 6 : tableau JSON

✅ POC 7 : JSON multi-événements

---

## Mapping terminé

✅ title

✅ type

✅ description

✅ ageMinimum

✅ duree

✅ tarif

✅ telephone

✅ email

✅ lienComplementaire

✅ statut

✅ reservationObligatoire

✅ accessibilitePMR

✅ dateISO

✅ dateFinISO

✅ jour

✅ mois

✅ annee

✅ date

✅ jourFin

✅ moisFin

✅ anneeFin

✅ dateFin

✅ heure

---

# En cours

## Publics

Implémenter :

Publics
↓
categorie

Publics
↓
meta

Règle métier :

- Adulte → Adulte
- Jeune Public → Jeune Public
- Famille → Famille

Si les trois publics sont sélectionnés :

- Adulte
- Jeune Public
- Famille

Alors :

categorie = Tout public

meta = Tout public

---

## Images

Étudier :

Visuel SharePoint
↓
URL image
↓
champ image

---

# À faire

## Génération agenda.json final

Produire une version complète du JSON compatible avec le widget.

---

## Tests musée

Validation :

- page agenda
- page accueil
- iframe
- mobile
- responsive

---

## Git

Fusion :

integration-json
↓
v2-maquette

---

## Nettoyage

Suppression des expérimentations Power Automate devenues inutiles.

Conserver :

Déclencheur manuel
↓
Obtenir les éléments
↓
Sélectionner
↓
Créer agenda.json

---

# Plus tard

## GitHub institutionnel

Étudier le transfert depuis bandini77.

---

## Événements hors-les-murs

Ajouter un champ Lieu si le besoin apparaît.

---

# État du projet

Migration JSON :
✅ Terminée

Architecture cible :
✅ Validée

Power Automate :
✅ Validé

Mapping :
🟨 Quasi terminé

Production :
🟨 En préparation

Mise en ligne finale :
⬜ À venir

## Lien hypertexte SharePoint

Le champ SharePoint "Lien" (type Hyperlien)
renvoie actuellement une chaîne HTML
lors de l'utilisation dans Power Automate.

Action à réaliser :

- identifier le format interne du champ ;
- récupérer uniquement l'URL ;
- alimenter lienComplementaire.

✅ Premier agenda.json généré automatiquement

✅ Mapping métier terminé

✅ Génération Power Automate validée