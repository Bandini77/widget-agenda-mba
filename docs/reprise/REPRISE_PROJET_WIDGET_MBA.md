# REPRISE DE PROJET – WIDGET AGENDA MBA

Dernière mise à jour : 31 juillet 2026

Document de référence permettant la reprise du projet dans une nouvelle conversation Copilot.

---

# Objectif du projet

Créer un widget Agenda pour le Musée des Beaux-Arts de Pau alimenté automatiquement depuis Microsoft Lists.

Architecture cible :

Microsoft Lists
↓
Power Automate
↓
agenda.json
↓
GitHub Pages
↓
Widget
↓
Site internet du musée

---

# État général

Le projet est fonctionnel.

Le widget est alimenté via agenda.json.

La génération automatique du JSON depuis Microsoft Lists a été validée.

---

# Jalons majeurs validés

## Migration JSON

✅ Le widget n'utilise plus le tableau JavaScript historique.

✅ agenda.json est la source principale de données.

---

## Validation Power Automate

POC réalisés :

✅ Création de fichier

✅ Lecture Microsoft Lists

✅ Transformation des données

✅ Génération JSON

✅ Génération tableau multi-événements

✅ Génération du premier agenda.json complet

---

## Architecture validée

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

# Mapping métier terminé

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

---

## Autres champs

✅ reservationObligatoire

✅ accessibilitePMR

✅ heure

✅ categorie

✅ meta

✅ image (version GitHub)

---

# Règle métier Publics

Source :

Champ SharePoint multi-sélections

Valeurs possibles :

- Adulte
- Jeune Public
- Famille

Règle :

Une seule valeur sélectionnée :

→ categorie = valeur

→ meta = valeur

Trois valeurs sélectionnées :

- Adulte
- Jeune Public
- Famille

→ categorie = Tout public

→ meta = Tout public

---

# État Power Automate

Flux actuel :

Déclencheur manuel
↓
Obtenir les éléments
↓
Sélectionner
↓
Créer agenda.json

Le flux n'est pas encore automatisé.

La génération est actuellement déclenchée manuellement.

---

# Sujets restant à traiter

## Priorité haute

### Test du widget avec le JSON généré

Validation :

- cartes
- modales
- filtres
- responsive
- expositions

---

### Test dans le site du musée

Validation iframe dans l'environnement réel.

---

## Priorité moyenne

### Champ lienComplementaire

Le champ SharePoint de type Hyperlien est actuellement mal interprété par Power Automate.

Solution définitive à identifier.

---

### Images SharePoint

Version actuelle :

image = images/*.jpg

Étudier ultérieurement une alimentation directe depuis SharePoint.

---

## Priorité basse

### Automatisation du flux

Déclenchement :

- quotidien ;
- horaire ;
- ou à la modification d'un élément.

---

### Fusion Git

integration-json
↓
v2-maquette

---

# Situation actuelle

Le principal risque technique du projet est considéré comme levé.

La chaîne complète :

Microsoft Lists
↓
Power Automate
↓
agenda.json
↓
Widget

est désormais démontrée et fonctionnelle.

Le projet est entré dans sa phase de finalisation.