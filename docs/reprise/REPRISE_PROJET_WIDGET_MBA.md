# REPRISE DE PROJET – WIDGET AGENDA MBA

Dernière mise à jour : 31 juillet 2026

---

# Contexte

Projet de refonte du widget Agenda du Musée des Beaux-Arts de Pau.

Objectif :

Remplacer l'alimentation manuelle du widget par une génération automatique d'un fichier agenda.json depuis Microsoft Lists via Power Automate.

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
Site du Musée

---

# État actuel du projet

## Statut général

✅ Architecture validée

✅ Widget fonctionnel

✅ Power Automate fonctionnel

✅ agenda.json généré automatiquement

✅ Tests visuels concluants

Projet en phase de finalisation.

---

# Réalisations majeures

## Migration JSON

Le widget fonctionne désormais à partir de :

agenda.json

Les anciennes données JavaScript historiques ne constituent plus la source principale du widget.

---

## Validation Power Automate

POC validés :

✅ Création de fichier

✅ Lecture Microsoft Lists

✅ Génération JSON

✅ Génération multi-événements

✅ Génération agenda.json complet

---

## Validation bout en bout

Chaîne validée :

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
Widget

Validation réalisée le 31 juillet 2026.

---

# Mapping métier final

## Champs directs

✅ title

✅ type

✅ description

✅ ageMinimum

✅ duree

✅ tarif

✅ telephone

✅ email

✅ statut

✅ image

---

## Dates

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

## Réservation

✅ reservationObligatoire

Transformation :

Oui
↓
true

Non
↓
false

---

## Accessibilité

✅ accessibilitePMR

Valeur fixe :

true

---

## Publics

Source :

Champ SharePoint multi-sélections

Valeurs :

- Adulte
- Jeune Public
- Famille

Règle métier :

Une seule valeur :

categorie = valeur

meta = valeur

Trois valeurs :

Adulte
+
Jeune Public
+
Famille

↓

categorie = Tout public

meta = Tout public

---

# Correctifs réalisés

## Filtre Jeune Public

Bug constaté :

Le filtre ne retournait aucun résultat.

Cause :

Différence de casse :

Jeune public

vs

Jeune Public

Correction :

Alignement des valeurs du filtre sur celles du JSON.

Statut :

✅ Corrigé

---

## Réservation

Bug constaté :

Affichage :

undefined

dans la modale.

Cause :

Le champ reservation n'existe plus dans le JSON.

Correction :

Affichage conditionnel :

${events[index].reservation ? `<p>${events[index].reservation}</p>` : ''}

Statut :

✅ Corrigé

---

# Points restant à traiter

## Priorité haute

### lienComplementaire

Champ SharePoint :

Lien hypertexte

Problème :

Power Automate récupère actuellement un contenu HTML incorrect.

Objectif :

Obtenir :

"lienComplementaire":"https://..."

Utilisations :

- informations complémentaires ;
- expositions ;
- plateforme de réservation.

Statut :

🟨 À résoudre

---

## Priorité moyenne

### Images SharePoint

Solution actuelle :

"image":"images/*.jpg"

stockées dans le dépôt GitHub.

Question ouverte :

Faut-il basculer vers une alimentation directe depuis une bibliothèque SharePoint ?

Statut :

🟨 À étudier

---

## Priorité moyenne

### Tests dans le site du musée

Validation :

✅ cartes

✅ modales

✅ filtres

✅ recherche

✅ expositions

À réaliser :

iframe en environnement réel.

---

## Priorité basse

### Automatisation Power Automate

Flux actuel :

Déclencheur manuel

Objectif :

Déclenchement :

- quotidien
- horaire
- ou à la modification d'un élément

---

## Git

Fusion future :

integration-json
↓
v2-maquette

---

# Situation actuelle

Le principal risque technique du projet est levé.

La génération automatique de agenda.json depuis Microsoft Lists est validée.

Le projet est désormais en phase de finalisation, de tests et d'industrialisation.