# REPRISE_PROJET_WIDGET_MBA

Dernière mise à jour : 01/08/2026

---

# Présentation du projet

Projet de modernisation de l'agenda du Musée des Beaux-Arts de Pau.

Objectif :

Permettre aux équipes du musée de gérer l'intégralité de l'agenda depuis Microsoft Lists, sans modification du code du widget et sans utilisation de Git ou VS Code.

---

# Architecture finale

Microsoft Lists
↓
Power Automate
↓
Transformation JSON
↓
GitHub API
↓
agenda.json
↓
GitHub Pages
↓
Widget Agenda
↓
Site internet du musée

---

# État du projet

Statut :

🟢 Fonctionnel

Le projet est désormais opérationnel de bout en bout.

Publication GitHub automatisée validée.

---

# Dépôt Git

Dépôt :

widget-agenda-mba

Branche active :

integration-json

Fusion finale restant à effectuer :

integration-json
↓
v2-maquette

---

# Microsoft Lists

Liste :

Agenda musee.pau.fr

Gestion métier réalisée exclusivement dans cette liste.

Les agents du musée n'ont plus besoin de modifier le code du widget.

---

# Types d'événements

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

# Publics

Valeurs de référence :

- Adulte
- Jeune Public
- Famille

Règle métier :

Si :

Adulte
+
Famille
+
Jeune Public

sont sélectionnés

↓

categorie = Tout public

meta = Tout public

---

# Mapping validé

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

# Nettoyages réalisés

## Null → chaîne vide

Avant :

```json
"telephone": null
```

Après :

```json
"telephone": ""
```

Même traitement pour :

- ageMinimum
- duree
- telephone
- email

---

## Mois normalisés

Avant :

```json
"août"
```

Après :

```json
"AOÛT"
```

Même traitement pour :

- mois
- moisFin

---

# Liens complémentaires

Champ Lists :

Lien

Transformation :

Lien hypertexte fonctionnel dans les modales.

---

# Images

Champ Lists :

NomImage

Transformation :

```json
"image":"images/fichier.jpg"
```

Stockage :

Dépôt GitHub

dossier :

images/

---

# Audit des filtres

Audit effectué.

Résultat :

✅ Conforme

Publics :

- Adulte
- Jeune Public
- Famille

Types :

- Visite atelier
- Visite commentée
- Visite contée
- Visite flash
- etc.

---

# Bugs corrigés

## Jeune Public

Problème :

Jeune public ≠ Jeune Public

Statut :

✅ Corrigé

---

## Visite flash

Problème :

Visite Flash ≠ Visite flash

Statut :

✅ Corrigé

---

## Valeurs nulles

Statut :

✅ Corrigé

---

## Réservation

Statut :

✅ Corrigé

---

# Widget

Validation réalisée.

Fonctionnalités :

✅ Cartes

✅ Modales

✅ Recherche

✅ Filtres

✅ Responsive

✅ Expositions

✅ Agenda complet

✅ Accueil

---

# Flux Power Automate

## Flux manuel

Nom :

Génération agenda JSON (manuel) - GitHub

Objectif :

Publication immédiate.

Usage :

- correction urgente
- changement d'horaire
- changement de date
- ajout d'événement
- publication immédiate

Statut :

✅ Fonctionnel

---

## Flux automatique

Nom :

Génération agenda JSON (automatique)

Déclencheur :

Périodicité

Statut :

✅ Fonctionnel

---

# Publication GitHub

Solution retenue :

GitHub API

---

## Étapes automatisées

GET agenda.json
↓
Récupération SHA
↓
Génération JSON
↓
Encodage Base64
↓
PUT agenda.json
↓
Commit GitHub
↓
GitHub Pages

---

# GitHub API

Validations réalisées

✅ Token GitHub créé

✅ Action HTTP fonctionnelle

✅ Lecture du SHA

✅ Écriture dans GitHub

✅ Commit automatique GitHub

✅ Mise à jour automatique agenda.json

---

# Fichiers de test

Historique :

test.json

agenda-json-test.json

Utilisés uniquement pour validation.

Peuvent être supprimés après validation complète.

---

# Procédure de secours

En cas d'urgence :

Exécuter :

Génération agenda JSON (manuel) - GitHub

Permet de republier immédiatement agenda.json.

---

# Actions restant à réaliser

## Priorité 1

Surveiller quelques exécutions automatiques.

---

## Priorité 2

Supprimer :

- agenda-json-test.json

une fois la stabilité confirmée.

---

## Priorité 3

Fusion Git :

integration-json
↓
v2-maquette

---

## Priorité 4

Créer un tag Git :

v1-production

---

# Conclusion

Le projet est désormais fonctionnel de bout en bout.

Architecture validée :

Microsoft Lists
↓
Power Automate
↓
GitHub API
↓
GitHub Pages
↓
Widget

Aucune intervention Git n'est désormais nécessaire pour la publication de l'agenda.