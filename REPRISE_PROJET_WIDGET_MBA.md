# REPRISE PROJET – WIDGET AGENDA MBA
2
 
3
## Contexte
4
 
5
Le projet vise à moderniser et centraliser la diffusion de la programmation culturelle du Musée des Beaux-Arts de Pau.
6
 
7
L'objectif initial était de remplacer un agenda statique par un outil moderne, responsive et facilement maintenable.
8
 
9
---
10
 
11
# État du projet au 27 juillet 2026
12
 
13
## Statut général
14
 
15
Version V2 stabilisée.
16
 
17
Projet en état de production.
18
 
19
La phase de développement est terminée.
20
 
21
Le projet entre désormais dans une phase :
22
 
23
- de déploiement ;
24
- de maintenance ;
25
- d'intégration Microsoft 365.
26
 
27
---
28
 
29
# Architecture actuelle
30
 
31
## Front-end
32
 
33
Fichiers principaux :
34
 
35
- index.html
36
- agenda.html
37
- script.js
38
- style.css
39
 
40
## Hébergement
41
 
42
- GitHub
43
- GitHub Pages
44
 
45
## Données
46
 
47
Les événements sont actuellement stockés directement dans le JavaScript.
48
 
49
---
50
 
51
# Fonctionnalités disponibles
52
 
53
## Recherche
54
 
55
Recherche temps réel sur :
56
 
57
- titre ;
58
- description ;
59
- contenus.
60
 
61
## Filtres
62
 
63
### Public
64
 
65
- tout public
66
- adultes
67
- familles
68
- jeunes publics
69
 
70
### Types d'activités
71
 
72
- expositions
73
- conférences
74
- concerts
75
- visites
76
- spectacles
77
- vernissages
78
- etc.
79
 
80
### Dates
81
 
82
- aujourd'hui
83
- demain
84
- week-end
85
- période personnalisée
86
 
87
## Modale événement
88
 
89
Affichage détaillé :
90
 
91
- titre
92
- date
93
- horaire
94
- description
95
- tarif
96
- accessibilité
97
- réservation
98
 
99
## Partage
100
 
101
- export calendrier ICS
102
- partage email
103
- copie du lien
104
 
105
## Responsive
106
 
107
- desktop
108
- tablette
109
- mobile
110
 
111
---
112
 
113
# Travaux majeurs réalisés en juillet 2026
114
 
115
## Refonte Modale V2
116
 
117
Suppression de l'ancienne structure.
118
 
119
Création d'une nouvelle modale plus légère et plus lisible.
120
 
121
## Agenda complet
122
 
123
Création d'une page dédiée.
124
 
125
Navigation :
126
 
127
Widget → Agenda complet.
128
 
129
## Compteur de résultats
130
 
131
Harmonisation entre :
132
 
133
- accueil ;
134
- filtres ;
135
- recherche ;
136
- période personnalisée.
137
 
138
## Nettoyage
139
 
140
### JavaScript
141
 
142
- suppression des fonctions obsolètes ;
143
- suppression du code mort ;
144
- suppression des commentaires historiques.
145
 
146
### CSS
147
 
148
- suppression des doublons ;
149
- fusion des règles ;
150
- simplification.
151
 
152
### Git
153
 
154
- suppression des sauvegardes historiques ;
155
- utilisation exclusive du versionning Git.
156
 
157
---
158
 
159
# Prochaine étape stratégique
160
 
161
## Passage vers Microsoft 365
162
 
163
L'objectif est d'éviter à terme la modification directe du code source.
164
 
165
### Option privilégiée
166
 
167
Liste SharePoint comme source de données.
168
 
169
Chaque événement deviendrait un enregistrement SharePoint.
170
 
171
### Avantages
172
 
173
- saisie simplifiée ;
174
- gestion collaborative ;
175
- historique des modifications ;
176
- sécurité Microsoft 365 ;
177
- intégration native SharePoint.
178
 
179
## Scénario cible
180
 
181
Liste SharePoint
182
↓
183
Power Automate
184
↓
185
JSON/API
186
↓
187
Widget Agenda
188
↓
189
Site du musée
190
 
191
---
192
 
193
# Évolutions envisagées
194
 
195
## Court terme
196
 
197
- tests Android ;
198
- validation utilisateurs ;
199
- corrections mineures.
200
 
201
## Moyen terme
202
 
203
- migration des données vers SharePoint ;
204
- automatisation Power Automate ;
205
- administration simplifiée.
206
 
207
## Long terme
208
 
209
- portail culturel SharePoint ;
210
- statistiques d'usage ;
211
- calendrier institutionnel partagé ;
212
- intégration Outlook.
213
 
214
---
215
 
216
# Conclusion
217
 
218
La version V2 est considérée comme stable et exploitable.
219
 
220
Le projet n'est plus dans une phase de développement mais dans une phase de déploiement, de gouvernance et d'intégration à l'environnement Microsoft 365 du musée.