# ETUDE_ALIMENTATION_JSON_MBA.md

Date : juillet 2026

---

# Contexte

Le widget Agenda MBA est désormais alimenté par :

```text
agenda.json
```

La migration fonctionnelle a été validée :

✅ affichage des cartes

✅ modales

✅ recherche

✅ filtres

✅ gestion des expositions

✅ agenda complet

---

# Objectif

Automatiser autant que possible la production de :

```text
agenda.json
```

à partir de :

```text
Microsoft Lists
```

sans dépendre de Visual Studio Code.

Contraintes :

✅ gratuit

✅ simple

✅ transmissible

✅ peu de maintenance

✅ authentification robuste

---

# État actuel

Microsoft Lists dispose déjà :

```text
Exporter
↓
Exporter au format CSV
```

accessible directement depuis l'interface.

L'export CSV est obtenu en un clic.

---

# Structure des données

Les colonnes de la liste sont déjà fortement compatibles avec le widget :

| Microsoft Lists | agenda.json |
|----------------|-------------|
| Titre | title |
| Type Événement | type |
| Publics | categorie / meta |
| Description | description |
| Âge conseillé | ageMinimum |
| Durée | duree |
| Tarif | tarif |
| Email | email |
| Téléphone | telephone |
| Date début | dateISO |
| Date fin | dateFinISO |

Peu de transformations sont nécessaires.

---

# Solutions envisagées

## Option 1 : Export CSV manuel

Architecture :

```text
Microsoft Lists
        ↓
Export CSV
        ↓
agenda.json
        ↓
GitHub
        ↓
Widget
```

Avantages :

✅ très simple

✅ robuste

✅ aucune authentification complexe

✅ aucune maintenance

Inconvénients :

⚠️ nécessite une intervention manuelle.

---

## Option 2 : Power Automate

Architecture :

```text
Microsoft Lists
        ↓
Power Automate
        ↓
agenda.json
        ↓
GitHub
        ↓
Widget
```

Avantages :

✅ intégré à Microsoft 365

✅ pas de VS Code

✅ authentification Microsoft native

✅ possibilité d'un déclenchement manuel

✅ possibilité d'un déclenchement automatique

---

### Déclencheur recommandé

```text
Flux de cloud instantané
```

Scénario :

```text
Mise à jour de la liste
        ↓
Clic sur :
"Générer agenda.json"
        ↓
Création du JSON
        ↓
Publication
```

---

## Option 3 : GitHub Actions + Microsoft Graph

Architecture :

```text
Microsoft Lists
        ↓
Microsoft Graph
        ↓
GitHub Actions
        ↓
agenda.json
```

Avantages :

✅ automatisation complète

Inconvénients :

⚠️ authentification plus complexe

⚠️ secrets et permissions

⚠️ maintenance plus élevée

---

# Constat actuel

Après analyse :

Option 2 apparaît comme la solution la plus équilibrée.

Elle répond aux contraintes :

✅ simplicité

✅ robustesse

✅ faible maintenance

✅ fonctionnement sans VS Code

---

# Points à vérifier

## Power Automate

Vérifier :

- récupération de tous les éléments d'une Lists ;
- génération d'un fichier JSON ;
- écriture du fichier dans un emplacement exploitable ;
- éventuelle connexion GitHub.

---

## Authentification

Éviter :

- secrets expirant régulièrement ;
- manipulations Azure complexes ;
- dépendance à un poste de développement.

---

# Conclusion provisoire

Architecture privilégiée :

```text
Microsoft Lists
        ↓
Flux Power Automate
        ↓
agenda.json
        ↓
GitHub
        ↓
Widget Agenda MBA
```

La décision finale sera prise après tests Power Automate.
