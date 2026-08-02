# TO_DO - Clôture du projet Widget Agenda MBA

## Statut général

Le projet est fonctionnel de bout en bout.

Architecture validée :

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

---

# Finalisation SharePoint

## Historique des publications

### Flux manuel

- [x] Création de la liste "Historique publications Agenda"
- [x] Alimentation de la liste depuis le flux manuel

### Flux automatique

- [x] Ajouter l'action "Créer un élément" dans le flux automatique
- [x] Renseigner :
  - TypePublication = Automatique
  - Statut = Succès
  - DatePublication = utcNow()
  - Commentaire = Publication automatique exécutée avec succès
- [x] Tester le fonctionnement
- [x] Vérifier l'écriture dans la liste

---

## Page SharePoint

### Publication

- [x] Créer une vue "Dernière publication"
- [x] Trier par DatePublication décroissante
- [x] Limiter l'affichage à 1 élément
- [x] Intégrer la vue dans la page SharePoint

### Ergonomie

- [ ] Finaliser les intitulés des liens rapides
- [ ] Harmoniser les textes d'accompagnement
- [ ] Vérifier l'affichage mobile

### Bouton de publication (mis en pause)

- [ ] Étudier l'intégration directe du flux manuel dans SharePoint
- [ ] Tester les possibilités offertes par l'identifiant du flux
- [ ] Évaluer un bouton "Publier les modifications"
- [ ] Éviter l'ouverture manuelle de Power Automate si possible

---

# Validation métier

## Contrôles fonctionnels

- [ ] Vérifier une exécution automatique complète
- [ ] Vérifier la création automatique du commit GitHub
- [ ] Vérifier la mise à jour de agenda.json
- [ ] Vérifier le widget après exécution automatique
- [ ] Vérifier la liste Historique publications Agenda

## Vérifications finales

- [ ] Vérifier les filtres
- [ ] Vérifier les modales
- [ ] Vérifier les liens complémentaires
- [ ] Vérifier les images
- [ ] Vérifier la recherche

---

# Nettoyage

## GitHub

- [x] Suppression de test.json
- [ ] Suppression de agenda-json-test.json

## Dépôt

- [ ] Vérifier qu'aucun fichier temporaire ne subsiste
- [ ] Vérifier les branches

---

# Documentation

## Documentation métier

- [x] Guide utilisateur
- [x] Procédure de gestion de l'agenda
- [x] Reprise de projet technique

## Mise à jour finale

- [ ] Ajouter la partie Historique des publications
- [ ] Ajouter le portail SharePoint
- [ ] Ajouter le flux automatique finalisé
- [ ] Ajouter le bouton de publication (si retenu)

---

# Git

## Fusion

- [ ] Fusionner integration-json vers v2-maquette
- [ ] Vérifier la branche fusionnée
- [ ] Publier la branche

## Version

- [ ] Créer le tag :

v1-production

Exemple :

git tag -a v1-production -m "Premiere version industrialisee"
git push origin v1-production

---

# Mise en production

Le projet sera considéré comme officiellement opérationnel lorsque :

- [x] Publication GitHub automatique validée
- [x] Flux manuel validé
- [x] Widget alimenté depuis Microsoft Lists
- [ ] Flux automatique validé en condition réelle
- [ ] Historique automatique validé
- [ ] Dernière publication affichée sur SharePoint
- [ ] agenda-json-test.json supprimé
- [ ] Fusion Git réalisée

---

# Après clôture

## Surveillance

- [ ] Contrôler les premières publications automatiques
- [ ] Vérifier l'absence d'erreurs GitHub
- [ ] Vérifier l'affichage du widget après plusieurs jours

## Évolutions futures (facultatives)

- [ ] Bouton SharePoint de publication directe
- [ ] Tableau de bord de suivi des publications
- [ ] Notification Teams après publication
- [ ] Notification d'échec de publication
## Migration GitHub institutionnel

- [ ] Créer le compte GitHub institutionnel
- [ ] Transférer le dépôt widget-agenda-mba
- [ ] Créer un nouveau token GitHub
- [ ] Mettre à jour les flux Power Automate
- [ ] Mettre à jour les liens GitHub Pages
- [ ] Vérifier la publication automatique
## V2 - Gestion des images Microsoft 365

Objectif :

Permettre l'utilisation directe des images SharePoint
sans dépôt GitHub.

Étapes :

- analyser la colonne Visuel
- récupérer l'URL SharePoint
- modifier le flux
- modifier le widget
- tester les droits d'accès externes