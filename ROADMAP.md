
# Widget Agenda MBA - Roadmap

---

# ✅ V2.20.6 - Rééquilibrage des cartes événements

## Cartes

- Réorganisation de la structure des cartes
- Séparation Image / Date / Informations
- Réduction des espaces inutiles
- Repositionnement du bouton "+"
- Rééquilibrage global de la carte
- Harmonisation avec la maquette MBA

## Informations

- Harmonisation du type d'activité
- Harmonisation du public
- Intégration des icônes Lucide

## Design

- Ajustement du séparateur central
- Optimisation de la lisibilité
- Fidélité renforcée à la maquette

---

# ✅ V2.20.7 - Refonte des filtres

## Structure

- Panneaux rattachés aux boutons correspondants
- Suppression des positions fixes
- Création de wrappers de filtres

## Filtre "Pour qui"

- Harmonisation visuelle
- Alignement des cases à cocher
- Transformation de "Tout public" en raccourci de sélection

### Logique métier

- Tout public = Adulte + Famille + Jeune public
- Cocher Tout public coche automatiquement les trois catégories
- Cocher les trois catégories active automatiquement Tout public
- Décocher une catégorie désactive Tout public

## Filtre "Type d'activité"

- Suppression du doublon de titre
- Suppression du bouton Fermer
- Suppression du bouton Appliquer
- Nettoyage visuel général

## Filtre "Quand"

- Refonte complète
- Ajout de "Période personnalisée"
- Affichage conditionnel des dates
- Harmonisation des comportements
- Correction de l'icône d'ouverture / fermeture

## Correctifs

- Correction du bouton Réinitialiser les filtres
- Harmonisation du comportement des icônes Lucide

---

# ✅ V2.20.8 - Refonte de la modale événement

## Design

- Remplacement des derniers emojis par Lucide
- Harmonisation des espacements
- Harmonisation du footer
- Harmonisation du bouton de fermeture

## Type d'activité

- Suppression du cartouche
- Affichage éditorial du type :

Exemple :

EXPOSITION

CONFÉRENCE

VISITE ATELIER

## Public

- Suppression du cartouche gris
- Affichage simplifié du public

Exemple :

👥 Tout public

👥 Jeune public • À partir de 6 ans

## Âge minimum

Ajout de la notion :

- À partir de 6 ans
- Dès 8 ans
- Dès 12 ans

Selon l'activité concernée.

## Expositions

Création d'une logique spécifique :

### Carte

Affichage :

18
SEPT.
2026

—

15
JANV.
2027

### Modale

Affichage :

Du 18 septembre 2026
au 15 janvier 2027

## Réservation conditionnelle

Si :

Réservation obligatoire = Non

Alors :

- le bloc Réservation disparaît

## Lien complémentaire

Si :

Lien complémentaire renseigné

Alors :

- affichage de "En savoir plus →"

renvoyant vers le site du musée.

## Footer

- Tarif
- Réservation
- Partager

adaptatifs selon les données disponibles.

---

# 📋 V2.21 - Recherche et navigation

## Recherche globale

### Sans filtre

Afficher uniquement les prochains événements.

### Avec filtre ou recherche

Rechercher dans toute la programmation.

Le moteur de recherche doit rechercher dans :

- Titre
- Description
- Type d'activité
- Public

Afficher tous les résultats correspondants.

## Objectif UX

Un visiteur doit pouvoir :

- trouver un événement immédiatement
- depuis la page d'accueil
- sans changer de page
- sans connaître le fonctionnement du widget

## Navigation

Remplacer progressivement :

Voir plus d'événements

par :

Consulter tout l'agenda →

ou

Voir la programmation complète →

## Agenda complet

Création future d'une page :

Agenda

reprenant :

- recherche
- filtres
- programmation complète

---

# 📋 V2.22 - Responsive

## Tablette

- Vérification des cartes
- Vérification des filtres
- Vérification de la modale

## Mobile

- Réorganisation verticale
- Optimisation tactile
- Adaptation des filtres
- Adaptation des modales

---

# 🚀 V3 - SharePoint

## V3.0 - Liste SharePoint Agenda MBA

### Principe

1 ligne = 1 événement

### Colonnes

Titre

Type d'activité

Publics concernés

Âge minimum

Date début

Heure début

Date fin

Heure fin

Tarif

Lieu (facultatif)

Réservation obligatoire

Téléphone

Email

Description

Lien complémentaire

Image

Statut

## Types d'activité

- Exposition
- Conférence
- Visite atelier
- Visite commentée
- Visite flash
- Visite contée
- Arrêt sur œuvre
- Concert
- Projection
- Rencontre
- Spectacle
- Vernissage
- Jeu de l'oie
- Memory

## Public

Valeurs :

- Adulte
- Famille
- Jeune public

Le widget calcule automatiquement :

Tout public

si les trois catégories sont sélectionnées.

## Lieu

Facultatif.

Par défaut :

aucun lieu affiché.

Le lieu n'est affiché que lorsqu'une valeur est renseignée.

Exemples :

- Hors les murs
- Château de Pau
- Auditorium
- Médiathèque

## Statut

- Brouillon
- Publié
- Archivé

## Images

Format recommandé :

- JPG
- Paysage
- 1200 x 900 px
- < 2 Mo

## Archivage automatique

Si :

Date et heure de fin dépassées

Alors :

- événement masqué automatiquement
- événement conservé dans SharePoint

---

# 🚀 V3.1 - Administration simplifiée

Objectif :

Permettre à toute l'équipe du MBA de gérer l'agenda sans toucher au code.

Fonctionnalités :

- Ajouter un événement
- Modifier un événement
- Dupliquer un événement
- Archiver un événement
- Prévisualiser un événement

---

# 🎯 Vision finale

Médiateur culturel

↓

SharePoint Agenda MBA

↓

Widget Agenda MBA

↓

Site du musée

Objectif :

Ne plus modifier le JavaScript ou le CSS pour créer, modifier ou archiver un événement.
Toute la gestion se fait depuis SharePoint.
