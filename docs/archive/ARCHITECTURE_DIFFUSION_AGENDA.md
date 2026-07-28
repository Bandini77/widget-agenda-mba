# ARCHITECTURE DE DIFFUSION – AGENDA MBA
2
 
3
Version : 1.0
4
 
5
Statut : Validée
6
 
7
---
8
 
9
## Chaîne de publication
10
 
11
Microsoft Lists
12
↓
13
Agenda MBA
14
↓
15
agenda.json
16
↓
17
Widget Agenda MBA
18
↓
19
GitHub Pages
20
↓
21
iframe
22
↓
23
Site musee.pau.fr
24
 
25
---
26
 
27
## Rôle de chaque composant
28
 
29
### Microsoft Lists
30
 
31
Administration des événements.
32
 
33
### agenda.json
34
 
35
Jeu de données public du widget.
36
 
37
### Widget
38
 
39
Recherche
40
Filtres
41
Agenda complet
42
Modale
43
 
44
### GitHub Pages
45
 
46
Hébergement gratuit du widget.
47
 
48
### Site du musée
49
 
50
Affichage final.
51
 
52
---
53
 
54
## Règle
55
 
56
Aucun événement n'est codé directement dans script.js.
57
 
58
Toutes les données proviennent du fichier agenda.json.