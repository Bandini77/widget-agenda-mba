# REPRISE_PROJET_WIDGET_MBA

Dernière mise à jour : 01/08/2026

---

# Présentation du projet

Projet de création d'un widget Agenda pour le Musée des Beaux-Arts de Pau.

Objectif :

Construire une chaîne entièrement automatisée permettant aux équipes du musée de gérer l'agenda depuis Microsoft Lists sans modifier le code du widget.

Architecture cible :

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
↓
Site internet du musée

---

# État général du projet

Statut :

🟢 Fonctionnel

Le widget est désormais alimenté par agenda.json.

La génération du JSON depuis Microsoft Lists est validée.

Les tests fonctionnels sont validés.

Le projet est entré dans une phase d'industrialisation.

---

# Dépôt Git

Dépôt :

widget-agenda-mba

Branche de développement principale :

integration-json

GitHub Pages est actuellement publié depuis :

integration-json

---

# Architecture validée

## Source métier

Microsoft Lists

Liste :

Agenda musee.pau.fr

---

## Transformation des données

Power Automate

Flux :

- Génération agenda JSON (manuel)
- Génération agenda JSON (planifié)

---

## Diffusion

GitHub Pages

Chargement du widget :

```javascript
fetch("agenda.json")
```

---

# Mapping métier validé

## Champs principaux

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

✅ lienComplementaire

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

Source :

Réservation

Transformation :

Oui
↓
true

Non
↓
false

Champ JSON :

reservationObligatoire

---

## Accessibilité

Champ :

accessibilitePMR

Valeur actuelle :

true

---

# Publics

Champ Lists :

Public

Type :

Choix multiples

Valeurs :

- Adulte
- Jeune Public
- Famille

Règle métier :

Une seule valeur sélectionnée :

categorie = valeur

meta = valeur

Trois valeurs sélectionnées :

Adulte
+
Jeune Public
+
Famille

↓

categorie = Tout public

meta = Tout public

---

# Images

Champ Lists :

NomImage

Exemple :

atelier.jpg

Transformation :

```json
"image":"images/atelier.jpg"
```

Stockage actuel :

Dossier images du dépôt GitHub.

---

# Liens complémentaires

Champ Lists :

Lien

Type :

Lien hypertexte

Résultat :

Affichage d'un lien :

En savoir plus →

dans la modale événement.

Lien fonctionnel.

---

# Nettoyage JSON réalisé

## Valeurs nulles

Avant :

```json
"telephone": null
```

Après :

```json
"telephone": ""
```

Mêmes corrections pour :

- ageMinimum
- duree
- telephone
- email

---

## Mois

Avant :

```json
"mois":"août"
```

Après :

```json
"mois":"AOÛT"
```

Même traitement pour :

- mois
- moisFin

---

# Types d'événements Lists

Valeurs de référence :

- Arrêt sur oeuvre
- Conférence
- Concert
- Événement national
- Exposition
- Jeu de l'oie
- L'heure du conte
- Memory
- Nocturne
- Rencontre
- Sieste musicale
- Spectacle
- Vernissage
- Visite atelier
- Visite commentée
- Visite contée
- Visite flash
- Autre

---

# Audit des filtres

Audit réalisé le 01/08/2026.

Résultat :

✅ Publics conformes

✅ Types conformes

✅ Visite atelier conforme

✅ Visite commentée conforme

✅ Visite contée conforme

✅ Visite flash conforme

✅ Exposition conforme

✅ Aucun écart résiduel identifié

---

# Bugs corrigés

## Jeune Public

Problème :

Jeune public

≠

Jeune Public

Correction :

Alignement du libellé.

Statut :

✅ Corrigé

---

## Visite flash

Problème :

Visite Flash

≠

Visite flash

Correction :

Alignement du libellé.

Statut :

✅ Corrigé

---

## Réservation

Problème :

Affichage du texte :

undefined

dans la modale.

Cause :

Champ reservation absent du JSON.

Correction :

Affichage conditionnel.

Statut :

✅ Corrigé

---

# Widget

Validation réalisée avec :

10 événements

Résultats :

✅ Cartes

✅ Modales

✅ Recherche

✅ Filtres

✅ Responsive

✅ Expositions

✅ Accueil

✅ Agenda complet

✅ Liens complémentaires

---

# Flux Power Automate

## Flux manuel

Nom :

Génération agenda JSON (manuel)

Usage :

- correction urgente
- nouvelle publication
- test

Statut :

✅ opérationnel

---

## Flux planifié

Nom :

Génération agenda JSON

Type :

Planifié

Statut :

✅ créé

Automatisation à finaliser.

---

# GitHub API

Objectif :

Supprimer totalement :

- téléchargement manuel
- git add
- git commit
- git push

---

## Tests validés

### HTTP Power Automate

Test :

GET

Vers :

https://api.github.com

Résultat :

✅ succès

---

### GitHub API

Test :

GET agenda.json

Branche :

integration-json

Résultat :

✅ succès

Retour :

```json
{
  "name":"agenda.json",
  "path":"agenda.json",
  "sha":"054e5438c52a461f078c666d481ed2c8c9bfd7b2"
}
```

---

### Token GitHub

Créé.

Permissions :

Repository contents

Read and write

Statut :

✅ opérationnel

---

# Sujet actuellement en cours

Automatisation GitHub.

Objectif :

Power Automate
↓
GitHub API
↓
agenda.json
↓
GitHub Pages

sans :

- VS Code
- Git local
- git add
- git commit
- git push

---

# Prochaine étape

Créer dans le dépôt :

test.json

Tester :

Power Automate
↓
PUT GitHub API
↓
test.json

Une fois validé :

remplacer automatiquement agenda.json.

---

# Dette technique

## eventsSauvegarde

Toujours présent dans script.js.

N'est plus utilisé comme source principale.

À conserver temporairement.

---

## Type "Autre"

Pas de filtre dédié.

Choix assumé.

Utilisé comme catégorie de secours pour les événements exceptionnels.

---

# Situation actuelle

Le principal risque technique du projet est levé.

La chaîne :

Microsoft Lists
↓
Power Automate
↓
agenda.json
↓
GitHub Pages
↓
Widget

est validée.

Le projet est désormais dans sa phase finale d'industrialisation.

## GitHub API

✅ Token GitHub créé

✅ Lecture agenda.json

✅ Récupération du SHA

✅ Premier PUT GitHub réussi

✅ Modification automatique de test.json

✅ Commit GitHub créé automatiquement

La communication Power Automate ↔ GitHub est validée.

Prochaine étape :

Automatisation de la mise à jour de agenda.json.
## GitHub API

✅ Token GitHub créé

✅ Action HTTP Power Automate validée

✅ Lecture agenda.json validée

✅ Récupération du SHA validée

✅ Écriture dans GitHub validée

✅ Commit GitHub automatique validé

✅ Modification du fichier test.json validée

Architecture validée :

Power Automate
↓
GitHub API
↓
Commit automatique GitHub

Étape suivante :

Remplacer test.json par agenda.json.