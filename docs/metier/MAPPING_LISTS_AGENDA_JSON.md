# MAPPING_LISTS_AGENDA_JSON.md

Dernière mise à jour : 31 juillet 2026

---

# Objectif

Ce document constitue la référence officielle entre :

Microsoft Lists

et

agenda.json

utilisé par le Widget Agenda MBA.

---

# Principe

Trois types de champs existent :

## Champs directs

Valeur copiée directement depuis la Lists.

Exemple :

Titre
↓
title

---

## Champs transformés

Valeur issue d'une transformation simple.

Exemple :

Réservation
↓
reservationObligatoire

---

## Champs calculés

Valeur produite à partir d'une date ou d'une règle métier.

Exemple :

Date début
↓
jour
↓
mois
↓
annee

---

# Mapping des champs

## Titre

Microsoft Lists :

Titre

agenda.json :

```json
"title"
```

Type :

Direct

---

## Type d'événement

Microsoft Lists :

Type Événement

agenda.json :

```json
"type"
```

Type :

Direct

---

## Publics

Microsoft Lists :

Publics

agenda.json :

```json
"categorie"
```

```json
"meta"
```

Type :

Transformé

Règle :

```text
Publics = Jeune public
↓
categorie = Jeune public
meta = Jeune public

Publics = Famille
↓
categorie = Famille
meta = Famille

Publics = Tout public
↓
categorie = Tout public
meta = Tout public

Publics = Adulte
↓
categorie = Adulte
meta = Adulte
```

---

## Description

Microsoft Lists :

Description

agenda.json :

```json
"description"
```

Type :

Direct

---

## Âge conseillé

Microsoft Lists :

Âge conseillé

agenda.json :

```json
"ageMinimum"
```

Type :

Direct

---

## Durée

Microsoft Lists :

Durée

agenda.json :

```json
"duree"
```

Type :

Direct

---

## Tarif

Microsoft Lists :

Tarif

agenda.json :

```json
"tarif"
```

Type :

Direct

---

## Téléphone

Microsoft Lists :

Téléphone

agenda.json :

```json
"telephone"
```

Type :

Direct

---

## Email

Microsoft Lists :

Email

agenda.json :

```json
"email"
```

Type :

Direct

---

## Lien

Microsoft Lists :

Lien

agenda.json :

```json
"lienComplementaire"
```

Type :

Direct

---

## Lieu

Microsoft Lists :

Lieu

agenda.json :

```json
"lieu"
```

Type :

Direct

Remarque :

Le champ est conservé afin de permettre des événements hors-les-murs.

---

## Statut

Microsoft Lists :

Statut

agenda.json :

```json
"statut"
```

Type :

Direct

Valeurs attendues :

```text
Publié
Brouillon
```

---

# Gestion de la réservation

Microsoft Lists :

Réservation

agenda.json :

```json
"reservationObligatoire"
```

Type :

Transformé

Règle :

```text
Oui
↓
true

Non
↓
false
```

---

# Images

Microsoft Lists :

Visuel

agenda.json :

```json
"image"
```

Type :

Transformé

Principe retenu :

Le visuel est stocké dans SharePoint.

Le flux Power Automate devra produire une URL exploitable par le widget.

Point restant à finaliser.

---

# Accessibilité PMR

agenda.json :

```json
"accessibilitePMR"
```

Type :

Calculé

Valeur :

```json
true
```

Règle :

Tous les événements sont considérés accessibles PMR.

Aucune colonne Lists n'est nécessaire.

---

# Date de début

Microsoft Lists :

Date début

agenda.json :

```json
"dateISO"
```

Type :

Direct

Format :

```text
YYYY-MM-DD
```

---

# Champs calculés depuis la date de début

À partir de :

Date début

produire :

```json
"date"
```

```json
"jour"
```

```json
"mois"
```

```json
"annee"
```

Exemple :

```text
2026-08-13
↓
date = 13 AOÛT 2026
jour = 13
mois = AOÛT
annee = 2026
```

---

# Heure

Microsoft Lists :

Heure début

agenda.json :

```json
"heure"
```

Type :

Transformé

Format attendu :

```text
14h30
```

---

# Gestion des expositions

Les expositions utilisent une date de fin.

---

## Date de fin

Microsoft Lists :

Date fin

agenda.json :

```json
"dateFinISO"
```

Type :

Direct

---

## Champs calculés depuis la date de fin

Produire :

```json
"dateFin"
```

```json
"jourFin"
```

```json
"moisFin"
```

```json
"anneeFin"
```

Exemple :

```text
2026-09-27
↓
dateFin = 27 SEPT. 2026
jourFin = 27
moisFin = SEPT.
anneeFin = 2026
```

---

# Exemple d'événement classique

```json
{
  "date": "13 AOÛT 2026",
  "jour": "13",
  "mois": "AOÛT",
  "annee": "2026",
  "heure": "14h30",
  "duree": "2h",
  "dateISO": "2026-08-13",
  "title": "Formes et couleurs",
  "categorie": "Jeune public",
  "meta": "Jeune public",
  "ageMinimum": "6",
  "type": "Visite atelier"
}
```

---

# Exemple d'exposition

```json
{
  "date": "29 MAI 2026",
  "dateISO": "2026-05-29",
  "dateFin": "27 SEPT. 2026",
  "dateFinISO": "2026-09-27",
  "title": "L'art au service des travailleurs",
  "type": "Exposition",
  "categorie": "Tout public",
  "meta": "Tout public"
}
```

---

# Étape suivante

Adapter l'action :

Sélectionner

dans Power Automate afin de produire automatiquement l'intégralité de cette structure JSON.

## Publics

Source :

Public (champ SharePoint multi-sélections)

### Règle métier

1 valeur :
- Adulte
- Jeune Public
- Famille

=> categorie = valeur
=> meta = valeur

3 valeurs :
- Adulte
- Jeune Public
- Famille

=> categorie = Tout public
=> meta = Tout public