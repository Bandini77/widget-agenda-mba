# ETUDE ALIMENTATION JSON MBA

Dernière mise à jour : 31 juillet 2026

---

# Objectif

Déterminer une méthode simple, robuste et pérenne permettant de générer automatiquement le fichier :

agenda.json

à partir de la Microsoft Lists Agenda du Musée des Beaux-Arts de Pau.

---

# Contraintes du projet

## Fonctionnelles

- simplicité d'utilisation ;
- maintenance minimale ;
- transmission facile à un collègue ;
- exploitation possible sans connaissances techniques avancées.

## Techniques

- éviter Visual Studio Code ;
- éviter les scripts locaux ;
- éviter les secrets et jetons complexes ;
- privilégier les outils déjà disponibles dans Microsoft 365 ;
- limiter les dépendances extérieures.

---

# Architecture étudiée

Microsoft Lists
↓
Power Automate
↓
agenda.json
↓
GitHub
↓
Widget Agenda MBA
↓
Site internet du musée

---

# Historique de l'étude

## Hypothèse initiale

Utiliser une GitHub Action afin de :

Microsoft Lists
↓
Microsoft Graph
↓
GitHub Action
↓
agenda.json

---

## Limites identifiées

- authentification Microsoft Graph ;
- gestion des secrets ;
- maintenance potentielle ;
- complexité inutile pour le besoin réel.

---

# Découverte Power Automate

L'environnement Microsoft 365 du musée dispose :

✅ Power Automate

✅ Flux instantanés

✅ Flux planifiés

✅ Connecteur SharePoint

✅ Connecteur Microsoft Lists

✅ Création de fichiers SharePoint

---

# POC réalisés

## POC 1

Création d'un fichier SharePoint.

Résultat :

✅ Succès

---

## POC 2

Lecture des données de Microsoft Lists.

Résultat :

✅ Succès

La liste Agenda est accessible par le flux.

---

## POC 3

Injection d'une donnée de Lists dans un fichier.

Résultat :

✅ Succès

Le titre d'un événement est récupéré dynamiquement.

---

## POC 4

Création d'un objet JSON.

Résultat :

✅ Succès

Exemple :

{
  "title": "Initiation au quilling"
}

---

## POC 5

Création d'un événement JSON métier.

Résultat :

✅ Succès

Exemple :

{
  "title": "Initiation au quilling",
  "type": "Visite atelier",
  "description": "..."
}

---

## POC 6

Mise en place d'une structure de type tableau.

Résultat :

✅ Succès

Power Automate gère nativement les tableaux JSON.

---

## POC 7

Génération d'un tableau JSON multi-événements.

Résultat :

✅ Succès

Exemple :

[
  {
    "title": "Formes et couleurs"
  },
  {
    "title": "Initiation au quilling"
  }
]

---

# Découverte importante

L'action :

Sélectionner

permet de transformer directement les données Lists en JSON.

Exemple :

Titre
↓
title

Type Événement
↓
type

Description
↓
description

---

# Flux minimal validé

Déclencher manuellement un flux
↓
Obtenir les éléments
↓
Sélectionner
↓
Créer un fichier

---

# Exemple de génération réussie

[
  {
    "title":"Formes et couleurs",
    "type":"Visite atelier",
    "description":"..."
  },
  {
    "title":"Initiation au quilling",
    "type":"Visite atelier",
    "description":"..."
  }
]

---

# Conclusion

La faisabilité technique de :

Microsoft Lists
↓
Power Automate
↓
agenda.json

est démontrée.

Le projet ne se situe plus dans une phase d'étude.

Il se situe désormais dans une phase de mise en œuvre.

---

# Étape suivante

Construire le mapping complet :

Microsoft Lists
↓
agenda.json

afin de reproduire l'ensemble du modèle attendu par le widget.
