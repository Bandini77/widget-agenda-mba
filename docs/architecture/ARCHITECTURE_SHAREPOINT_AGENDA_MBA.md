# ARCHITECTURE SHAREPOINT – AGENDA MBA
2
 
3
Version : 2.0
4
 
5
Date : 28 juillet 2026
6
 
7
Statut : Validée
8
 
9
---
10
 
11
# Objectif
12
 
13
Permettre l'administration autonome de l'agenda culturel du Musée des Beaux-Arts de Pau sans modification du code source du widget.
14
 
15
Le système doit être :
16
 
17
- simple ;
18
- gratuit ;
19
- maintenable ;
20
- documenté ;
21
- transmissible ;
22
- exploitable par les équipes métier.
23
 
24
---
25
 
26
# Contexte
27
 
28
Le widget Agenda MBA existe déjà et est utilisé pour diffuser les événements culturels du musée.
29
 
30
L'objectif du projet est de remplacer la gestion manuelle des événements dans le code JavaScript par une administration via Microsoft Lists.
31
 
32
Les équipes du musée doivent pouvoir :
33
 
34
- créer un événement ;
35
- modifier un événement ;
36
- publier un événement ;
37
- gérer un visuel ;
38
- voir automatiquement les modifications apparaître dans l'agenda.
39
 
40
Sans modification du code du widget.
41
 
42
---
43
 
44
# Principes directeurs
45
 
46
Le projet repose sur plusieurs principes :
47
 
48
- simplicité avant sophistication ;
49
- limitation des dépendances techniques ;
50
- maintenance minimale ;
51
- documentation systématique ;
52
- autonomie des équipes métier ;
53
- séparation entre administration et diffusion.
54
 
55
Le projet n'a pas vocation à devenir un portail SharePoint complexe.
56
 
57
Il doit rester un outil de gestion de programmation culturelle.
58
 
59
---
60
 
61
# Architecture générale
62
 
63
```text
64
Microsoft Lists
65
↓
66
Administration
67
 
68
agenda.json
69
↓
70
Diffusion
71
 
72
Widget Agenda MBA
73
↓
74
GitHub Pages
75
↓
76
iframe
77
↓
78
musee.pau.fr
79
```
80
 
81
---
82
 
83
# Rôle des composants
84
 
85
## Microsoft Lists
86
 
87
Microsoft Lists constitue la source de vérité du projet.
88
 
89
Les équipes du musée utilisent la liste Agenda MBA pour :
90
 
91
- créer des événements ;
92
- modifier des événements ;
93
- publier des événements ;
94
- associer un visuel ;
95
- conserver l'historique des activités.
96
 
97
Toutes les données métier sont stockées dans la liste.
98
 
99
---
100
 
101
## Site SharePoint
102
 
103
Site :
104
 
105
```text
106
Team Musées – AGENDA
107
```
108
 
109
Ce site contient :
110
 
111
```text
112
Accueil
113
Agenda MBA
114
Images Agenda
115
Documentation
116
```
117
 
118
Le site SharePoint est réservé à l'administration.
119
 
120
Il n'a pas vocation à devenir un site public.
121
 
122
---
123
 
124
## Bibliothèque Images Agenda
125
 
126
Bibliothèque dédiée aux visuels utilisés dans l'agenda.
127
 
128
Sources possibles :
129
 
130
- photothèque MBA ;
131
- production interne ;
132
- graphistes ;
133
- réseau Ville ;
134
- partenaires.
135
 
136
Les images sont associées aux événements via le champ :
137
 
138
```text
139
Visuel
140
```
141
 
142
---
143
 
144
## agenda.json
145
 
146
Fichier de diffusion utilisé par le widget.
147
 
148
Le JSON constitue la source publique de données.
149
 
150
Le widget ne lit jamais directement Microsoft Lists.