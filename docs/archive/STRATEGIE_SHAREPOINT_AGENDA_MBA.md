# Stratégie retenue
2
 
3
## Administration
4
 
5
Microsoft Lists
6
 
7
Utilisé pour :
8
 
9
- créer les événements ;
10
- modifier les événements ;
11
- publier les événements.
12
 
13
---
14
 
15
## Diffusion
16
 
17
agenda.json
18
 
19
Source publique utilisée par le widget.
20
 
21
---
22
 
23
## Affichage
24
 
25
GitHub Pages
26
 
27
Intégration sur musee.pau.fr via iframe.
28
 
29
---
30
 
31
## Pourquoi cette architecture ?
32
 
33
Les tests API SharePoint ont démontré :
34
 
35
- que les données sont récupérables ;
36
- que les visiteurs publics ne disposent pas des autorisations SharePoint nécessaires.
37
 
38
L'utilisation d'un fichier agenda.json évite la gestion complexe de l'authentification Microsoft 365.