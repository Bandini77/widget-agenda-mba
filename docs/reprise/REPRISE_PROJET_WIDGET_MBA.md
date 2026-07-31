# REPRISE DE PROJET - WIDGET AGENDA MBA

Dernière mise à jour : 31 juillet 2026

Document destiné à permettre la reprise complète du projet dans une nouvelle conversation Copilot.

---

# Présentation du projet

Le projet consiste à créer un widget Agenda pour le Musée des Beaux-Arts de Pau.

Le widget est affiché sur le site internet du musée.

---

# Objectif final

Permettre la gestion complète des événements depuis Microsoft Lists.

Architecture cible :

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

# État actuel

Le widget est fonctionnel.

La migration vers agenda.json est terminée.

Le widget n'est plus dépendant du tableau JavaScript historique.

---

# Fonctionnalités validées

✅ Cartes événements

✅ Modales

✅ Recherche

✅ Filtres publics

✅ Filtres types

✅ Filtres périodes

✅ Gestion des expositions multi-dates

✅ Export calendrier ICS

✅ Bouton Consulter tout l'agenda

✅ Compteur de résultats

---

# Migration JSON

Migration réalisée avec succès.

Le widget lit désormais :

agenda.json

comme source principale de données.

---

# Structure actuelle du projet

Branches Git :

v2-maquette
↓
branche stable

integration-json
↓
branche de développement

---

# Structure documentaire

docs/

architecture/
metier/
projet/
reprise/
historique/
archive/

---

# Données

Le widget fonctionne avec un fichier :

agenda.json

contenant actuellement plusieurs événements réels de test.

Les catégories testées :

✅ Exposition

✅ Famille

✅ Jeune public

✅ Adulte

✅ Visites

✅ Ateliers

---

# Architecture validée

Widget
↓
agenda.json

✅ validé

---

Power Automate
↓
génération JSON

✅ validé

---

Microsoft Lists
↓
Power Automate
↓
JSON

✅ validé

---

# Microsoft Lists

Liste utilisée :

Agenda musee.pau.fr

Principales colonnes :

Titre

Statut

Type Événement

Publics

Date début

Heure début

Date fin

Heure fin

Description

Âge conseillé

Durée

Tarif

Réservation

Lien

Email

Téléphone

Visuel

---

# Power Automate

POC réalisés :

POC 1
Création de fichier

✅ validé

POC 2
Lecture de Microsoft Lists

✅ validé

POC 3
Injection de données Lists

✅ validé

POC 4
Création JSON

✅ validé

POC 5
Création événement JSON réel

✅ validé

POC 6
Gestion tableau JSON

✅ validé

POC 7
Génération JSON multi-événements

✅ validé

---

# Conclusion Power Automate

La chaîne suivante est démontrée :

Microsoft Lists
↓
Power Automate
↓
agenda.json

---

# Documents importants

REPRISE_PROJET_WIDGET_MBA.md

ETUDE_ALIMENTATION_JSON_MBA.md

MAPPING_LISTS_AGENDA_JSON.md

REGLES_METIER_AGENDA_MBA.md

DICTIONNAIRE_DONNEES_AGENDA_MBA.md

---

# Travaux restant à réaliser

## Priorité haute

Créer le mapping complet :

Microsoft Lists
↓
agenda.json

pour l'ensemble des champs utilisés par le widget.

---

## Priorité moyenne

Construire la première version complète de :

agenda.json

générée automatiquement depuis Microsoft Lists.

---

## Priorité basse

Fusion de integration-json dans v2-maquette.

Suppression définitive du tableau historique eventsSauvegarde.

Compte GitHub institutionnel.

Remplacement des URL bandini77.

---

# État du projet

Le projet n'est plus au stade prototype.

Les deux points critiques du projet sont désormais validés :

✅ Migration du widget vers agenda.json

✅ Génération automatique JSON depuis Microsoft Lists via Power Automate

Le risque technique majeur est considéré comme levé.

La prochaine phase consiste à industrialiser le mapping métier afin de produire le fichier agenda.json définitif.
