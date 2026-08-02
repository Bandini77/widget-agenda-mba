# Fonctionnement de l'agenda

## Vue d'ensemble

L'agenda n'est plus alimenté manuellement.

Les données proviennent de Microsoft Lists.

Architecture :

Microsoft Lists
↓
Power Automate
↓
GitHub API
↓
agenda.json
↓
GitHub Pages
↓
Widget Agenda

## Flux disponibles

### Génération agenda JSON (manuel) - GitHub

Utilisation :

- correction urgente
- ajout d'événement
- publication immédiate

### Génération agenda JSON (automatique)

Publication quotidienne automatique.

## Publication

Le flux :

1. récupère les données Lists ;
2. génère le JSON ;
3. convertit le contenu en Base64 ;
4. récupère le SHA GitHub ;
5. met à jour agenda.json ;
6. crée automatiquement un commit GitHub.

## Historique

Toutes les publications sont enregistrées dans :

Historique publications Agenda

sur SharePoint.