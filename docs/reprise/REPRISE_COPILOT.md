# REPRISE PROJET - Widget Agenda MBA

Contexte :

Projet de gestion et publication automatisée de l'agenda du Musée des Beaux-Arts de Pau.

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

---

# Situation actuelle

Le projet est opérationnel.

Les flux manuel et automatique fonctionnent.

La publication GitHub automatique est validée.

Le portail SharePoint est finalisé et défini comme future page d'accueil du site Team Musées - AGENDA.

---

# Dépôt Git

Dépôt actuel :

Bandini77/widget-agenda-mba

Branche de travail :

integration-json

Fusion finale restant à réaliser :

integration-json
↓
v2-maquette

---

# Power Automate

## Flux manuel

Nom :

Génération agenda JSON (manuel) - GitHub

État :

✅ Fonctionnel

---

## Flux automatique

Nom :

Génération agenda JSON (automatique)

État :

✅ Fonctionnel

Publication automatique validée.

Historisation validée.

---

# Historique des publications

Liste :

Historique publications Agenda

Types :

- Manuel
- Automatique

Statuts :

- Succès
- Échec

Affichage SharePoint :

Mise en forme JSON personnalisée.

---

# Fonctionnalité Brouillon / Publié

État :

✅ Validée

Comportement :

Brouillon
↓
non publié dans agenda.json

Publié
↓
publié dans agenda.json

Implémentation :

Filtrer un tableau

Expression :

@equals(item()?['Statut']?['Value'],'Publié')

Le résultat de cette action est utilisé comme entrée de l'action Sélectionner.

⚠️ Important :

Sélectionner ne doit plus utiliser la sortie directe de "Obtenir les éléments".

---

# Gestion des images

Situation actuelle :

Le widget utilise encore :

NomImage

Exemple :

atelier.jpg

Transformé en :

images/atelier.jpg

Les visuels doivent actuellement exister dans :

/images

du dépôt GitHub.

---

# Évolution future possible

Objectif :

Utiliser directement la colonne SharePoint de type Image (Visuel).

Bénéfices :

- plus besoin de GitHub pour les images ;
- gestion 100 % Microsoft 365 ;
- autonomie des utilisateurs.

Aucune implémentation réalisée à ce jour.

Sujet réservé à une future V2.

---

# Test d'archivage en cours

Événement :

Titre :

Test

Statut :

Publié

Date :

02/08/2026

Heure :

12h00

Objectif :

Observer le comportement le lendemain.

Questions :

- disparaît-il automatiquement du widget ?
- disparaît-il automatiquement de agenda.json ?
- faut-il mettre en place un filtre supplémentaire ?

Résultat attendu :

À vérifier lors de la prochaine session.

---

# Portail SharePoint

Page :

Agenda du Musée des Beaux-Arts de Pau

Statut :

✅ Terminée

Contenu :

- Actions rapides
- Dernière mise à jour
- Liste Agenda
- Documentation

La bibliothèque documentaire a été remplacée par trois liens :

- Guide utilisateur
- Procédure de gestion
- Reprise technique

---

# Points restants avant clôture

- Vérifier le comportement de l'événement Test après sa date.
- Corriger éventuellement l'archivage.
- Supprimer agenda-json-test.json.
- Fusionner integration-json vers v2-maquette.
- Créer éventuellement un tag Git v1-production.
- Étudier un futur compte GitHub institutionnel.

---

# Points d'attention

Les images SharePoint ne sont pas encore exploitées.

Une image inexistante dans GitHub peut provoquer :

- image cassée ;
- comportement inattendu des icônes Lucide.

Sujet détecté lors du test avec :

Musée.jpg

À revalider avec une image existante.