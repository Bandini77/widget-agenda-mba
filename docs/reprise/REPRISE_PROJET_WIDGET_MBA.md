# REPRISE DE PROJET – WIDGET AGENDA MBA

Dernière mise à jour : 01/08/2026

---

# Contexte

Projet de modernisation du widget Agenda du Musée des Beaux-Arts de Pau.

Objectif initial :

Remplacer la maintenance manuelle du widget par une alimentation automatique depuis Microsoft Lists.

Le projet est désormais fonctionnel de bout en bout.

---

# Architecture cible

Microsoft Lists
↓
Power Automate
↓
agenda.json
↓
GitHub
↓
GitHub Pages
↓
Widget Agenda
↓
Site du musée

---

# État général du projet

Statut :

🟢 Fonctionnel

Architecture validée.

Widget validé.

Power Automate validé.

Tests métier validés.

Le projet est désormais dans une phase d'industrialisation.

---

# Dépôts Git

## Dépôt principal

widget-agenda-mba

## Branche active

integration-json

Cette branche contient :

- le widget alimenté par agenda.json ;
- les corrections de filtres ;
- le mapping Power Automate validé ;
- les tests avec 10 événements.

GitHub Pages est actuellement publié depuis :

integration-json

---

# Architecture actuelle

## Source métier

Microsoft Lists

Liste :

Agenda musee.pau.fr

---

## Génération des données

Power Automate

Flux :

- Génération agenda JSON (manuel)
- Génération agenda JSON (planifié)

---

## Diffusion

GitHub Pages

Le widget charge désormais :

agenda.json

via :

```javascript
fetch("agenda.json")