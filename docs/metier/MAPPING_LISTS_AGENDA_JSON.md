# MAPPING MICROSOFT LISTS → AGENDA.JSON

Version : 1.0

---

# Principe

Ce document constitue la référence entre :

Microsoft Lists

et

agenda.json

---

# Mapping validé

Titre
↓
title

Type Événement
↓
type

Description
↓
description

Âge conseillé
↓
ageMinimum

Durée
↓
duree

Tarif
↓
tarif

Téléphone
↓
telephone

Email
↓
email

Lien
↓
lienComplementaire

Publics
↓
categorie

Publics
↓
meta

Réservation
↓
reservationObligatoire

Date début
↓
dateISO

Date fin
↓
dateFinISO

---

# Champs à calculer

Les champs suivants peuvent être générés automatiquement :

date

jour

mois

annee

jourFin

moisFin

anneeFin

---

# Exemple d'événement généré

{
  "title": "Initiation au quilling",
  "type": "Visite atelier",
  "description": "...",
  "ageMinimum": 7,
  "duree": "2h",
  "tarif": "5 €",
  "telephone": "05 59 27 33 02",
  "email": "accueil.musee@ville-pau.fr"
}

---

# Objectif final

Produire automatiquement :

agenda.json

directement à partir de Microsoft Lists via Power Automate.