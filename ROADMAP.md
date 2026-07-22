# Widget Agenda MBA - Roadmap

## ✅ V2.20.5 - Stabilisation générale

- Intégration des icônes Lucide
- Harmonisation de la barre de filtres
- Optimisation des boutons
- Documentation du projet

---

## ✅ V2.20.6 - Rééquilibrage des cartes événements

### Cartes

- Réorganisation de la structure image/date | informations
- Réduction des espaces inutiles
- Repositionnement du bouton "+"
- Rééquilibrage visuel des cartes
- Ajustement de la largeur globale

### Informations

- Harmonisation du public
- Intégration de Lucide pour le public
- Amélioration de la hiérarchie visuelle

### Design

- Ajustement du séparateur central
- Fidélité renforcée à la maquette

---

## ✅ V2.20.7 - Refonte des filtres

### Structure

- Panneaux rattachés aux boutons correspondants
- Suppression des positions fixes
- Création des wrappers de filtres

### Filtre "Pour qui"

- Harmonisation visuelle
- Alignement des cases à cocher
- Transformation de "Tout public" en raccourci de sélection

#### Logique métier

- "Tout public" = Adulte + Famille + Jeune public
- Cocher "Tout public" coche automatiquement les trois catégories
- Cocher les trois catégories coche automatiquement "Tout public"
- Décocher une catégorie décoche "Tout public"

### Filtre "Type d'activité"

- Suppression du doublon de titre
- Suppression du bouton Fermer
- Suppression du bouton Appliquer
- Nettoyage visuel

### Filtre "Quand"

- Refonte complète
- Ajout de "Période personnalisée"
- Affichage conditionnel des dates
- Réduction de l'encombrement visuel

### Reste à faire

- Nettoyage final du CSS
- Harmonisation des largeurs
- Vérifications responsive

---

## 🔄 V2.20.8 - Refonte de la modale événement

### Icônes

- Remplacement des derniers emojis par Lucide

### Type d'activité

- Refonte du cartouche
- Harmonisation graphique

### Informations

- Alignement du bloc Tarif
- Harmonisation du bloc Public
- Harmonisation du bloc Réservation
- Harmonisation du bloc Partager

### Images

- Optimisation du cadrage
- Gestion du positionnement vertical

---

## 📋 V2.21 - Version tablette

- Réorganisation des cartes
- Adaptation des filtres
- Adaptation de la modale
- Tests multi-résolutions

---

## 📋 V2.22 - Version mobile

- Réorganisation verticale du widget
- Optimisation tactile
- Adaptation des cartes
- Adaptation des filtres
- Adaptation de la modale

---

# 🚀 V3 - Connexion SharePoint

## V3.0 - Source de données SharePoint

### Liste SharePoint "Agenda MBA"

- Titre
- Type d'activité
- Publics concernés
- Date début
- Date fin
- Horaire
- Tarif
- Description
- Réservation
- Image

### Fonctionnalités

- Synchronisation automatique du widget
- Fin du fichier JSON
- Mise à jour sans modification du code

### Gestion automatique

- Affichage uniquement des événements futurs
- Masquage automatique des événements passés
- Conservation de l'historique dans SharePoint

---

## V3.1 - Gestion des événements

- Création d'événements depuis SharePoint
- Modification d'événements depuis SharePoint
- Suppression de la dépendance au code

---

## V3.2 - Interface d'administration MBA

### Objectif

Permettre à tout agent du musée de gérer l'agenda sans toucher au code.

### Fonctionnalités

- Ajouter un événement
- Modifier un événement
- Dupliquer un événement
- Archiver un événement
- Prévisualiser un événement

---

# 🎯 Vision finale

Administrateur Agenda MBA

↓

Interface MBA

↓

Liste SharePoint

↓

Widget Agenda MBA

### Objectif

Ne plus modifier le JavaScript ou le CSS pour ajouter, modifier ou archiver un événement.
Toute la gestion se fait depuis SharePoint ou l'interface d'administration MBA.