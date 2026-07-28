# Widget Agenda MBA
2
 
3
Agenda culturel du Musée des Beaux-Arts de Pau.
4
 
5
---
6
 
7
# Présentation
8
 
9
Le projet Widget Agenda MBA permet la diffusion des événements culturels du Musée des Beaux-Arts de Pau sur le site internet du musée.
10
 
11
L'objectif est de permettre aux équipes du musée d'administrer l'agenda sans modification du code source du widget.
12
 
13
---
14
 
15
# Objectifs
16
 
17
Le projet doit permettre :
18
 
19
- la création d'événements ;
20
- la modification des événements ;
21
- la publication des événements ;
22
- l'affichage automatique sur le site du musée ;
23
- la conservation d'une architecture simple et gratuite ;
24
- la transmission facile du projet à une autre équipe.
25
 
26
---
27
 
28
# Architecture générale
29
 
30
```text
31
Microsoft Lists
32
↓
33
Administration
34
 
35
agenda.json
36
↓
37
Diffusion
38
 
39
Widget Agenda MBA
40
↓
41
GitHub Pages
42
↓
43
iframe
44
↓
45
musee.pau.fr
46
```
47
 
48
Microsoft Lists constitue la source de gestion des événements.
49
 
50
Le widget ne contient pas les événements directement dans le code.
51
 
52
Les données affichées proviennent du fichier :
53
 
54
```text
55
agenda.json
56
```
57
 
58
---
59
 
60
# Fonctionnalités
61
 
62
## Recherche
63
 
64
Recherche temps réel sur :
65
 
66
- titre ;
67
- type d'événement ;
68
- public ;
69
- description.
70
 
71
Gestion des accents :
72
 
73
```text
74
tout public
75
tout-public
76
public
77
```
78
 
79
sont reconnus.
80
 
81
---
82
 
83
## Filtres
84
 
85
### Par date
86
 
87
- Aujourd'hui
88
- Demain
89
- Ce week-end
90
- Période personnalisée
91
 
92
### Par public
93
 
94
- Tout public
95
- Adulte
96
- Famille
97
- Jeune public
98
 
99
### Par type
100
 
101
- Exposition
102
- Conférence
103
- Concert
104
- Vernissage
105
- Visite atelier
106
- Visite commentée
107
- Visite flash
108
- etc.
109
 
110
---
111
 
112
## Affichage
113
 
114
### Accueil
115
 
116
Affichage limité aux 4 prochains événements.
117
 
118
### Agenda complet
119
 
120
Affichage intégral de la programmation.
121
 
122
---
123
 
124
## Modale événement
125
 
126
Affichage :
127
 
128
- visuel ;
129
- type d'événement ;
130
- public ;
131
- âge conseillé ;
132
- accessibilité PMR ;
133
- date ;
134
- horaire ;
135
- durée ;
136
- description ;
137
- tarif ;
138
- réservation ;
139
- partage.
140
 
141
---
142
 
143
## Partage
144
 
145
- Email
146
- Copie du lien
147
- Export calendrier ICS
148
 
149
---
150
 
151
# Technologies utilisées
152
 
153
## Front-end
154
 
155
- HTML
156
- CSS
157
- JavaScript Vanilla
158
 
159
## Hébergement
160
 
161
- GitHub Pages
162
 
163
## Administration
164
 
165
- Microsoft Lists
166
- SharePoint Online
167
 
168
---
169
 
170
# Structure du projet
171
 
172
```text
173
widget-agenda-mba
174
 
175
├── agenda.html
176
├── index.html
177
├── script.js
178
├── style.css
179
├── agenda.json
180
│
181
├── images/
182
├── fonts/
183
│
184
└── docs/
185
```
186
 
187
---
188
 
189
# Documentation
190
 
191
La documentation complète est disponible dans :
192
 
193
```text
194
docs/
195
```
196
 
197
et comprend :
198
 
199
## Projet
200
 
201
- ROADMAP
202
 
203
## Architecture
204
 
205
- Architecture SharePoint
206
- Architecture diffusion
207
- Stratégie SharePoint
208
 
209
## Métier
210
 
211
- Dictionnaire de données
212
- Règles métier
213
- Mapping SharePoint → Widget
214
 
215
## Historique
216
 
217
- Historique des décisions
218
- Reprise projet
219
 
220
---
221
 
222
# État du projet
223
 
224
## Réalisé
225
 
226
- Widget stabilisé
227
- Recherche
228
- Filtres
229
- Modale
230
- Export ICS
231
- SharePoint créé
232
- Liste Agenda MBA créée
233
- Bibliothèque Images Agenda créée
234
- Modèle de données validé
235
- Règles métier validées
236
 
237
## En cours
238
 
239
- Migration des données vers agenda.json
240
 
241
## À venir
242
 
243
- Génération automatique de agenda.json depuis Microsoft Lists
244
 
245
---
246
 
247
# Philosophie du projet
248
 
249
Le projet privilégie :
250
 
251
- la simplicité ;
252
- la maintenabilité ;
253
- la gratuité ;
254
- la documentation ;
255
- l'autonomie des équipes métier.
256
 
257
Toute décision technique doit respecter ces principes.