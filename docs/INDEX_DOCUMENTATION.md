# INDEX DOCUMENTATION – AGENDA MBA
2
 
3
Version : 2.0
4
 
5
Date : 28 juillet 2026
6
 
7
Statut : Référence documentaire du projet
8
 
9
---
10
 
11
# Présentation
12
 
13
Cette documentation accompagne le projet de modernisation de l'Agenda du Musée des Beaux-Arts de Pau.
14
 
15
Le projet repose sur l'architecture suivante :
16
 
17
```text
18
Microsoft Lists
19
↓
20
agenda.json
21
↓
22
Widget Agenda MBA
23
↓
24
GitHub Pages
25
↓
26
iframe
27
↓
28
musee.pau.fr
29
```
30
 
31
L'objectif est de permettre l'administration des événements sans modification du code source du widget.
32
 
33
---
34
 
35
# Lecture recommandée
36
 
37
## Pour comprendre rapidement le projet
38
 
39
Lire dans l'ordre :
40
 
41
```text
42
README.md
43
ROADMAP.md
44
REPRISE_PROJET_WIDGET_MBA.md
45
```
46
 
47
---
48
 
49
## Pour reprendre le projet après interruption
50
 
51
Lire :
52
 
53
```text
54
REPRISE_PROJET_WIDGET_MBA.md
55
```
56
 
57
Ce document constitue le dossier de reprise officiel.
58
 
59
---
60
 
61
## Pour comprendre l'architecture
62
 
63
Lire :
64
 
65
```text
66
ARCHITECTURE_SHAREPOINT_AGENDA_MBA.md
67
```
68
 
69
Ce document décrit :
70
 
71
- l'architecture générale ;
72
- les flux de données ;
73
- les choix techniques ;
74
- les solutions abandonnées ;
75
- les décisions d'intégration.
76
 
77
---
78
 
79
## Pour comprendre le fonctionnement métier
80
 
81
Lire :
82
 
83
```text
84
REGLES_METIER_AGENDA_MBA.md
85
```
86
 
87
Le document décrit :
88
 
89
- les publics ;
90
- les réservations ;
91
- la publication ;
92
- l'archivage ;
93
- les filtres ;
94
- la recherche ;
95
- les règles d'affichage.
96
 
97
---
98
 
99
## Pour comprendre les données
100
 
101
Lire :
102
 
103
```text
104
DICTIONNAIRE_DONNEES_AGENDA_MBA.md
105
```
106
 
107
Le document décrit :
108
 
109
- chaque colonne SharePoint ;
110
- son type ;
111
- son utilisation ;
112
- ses contraintes.
113
 
114
---
115
 
116
## Pour comprendre les transformations
117
 
118
Lire :
119
 
120
```text
121
MAPPING_SHAREPOINT_WIDGET.md
122
```
123
 
124
Le document décrit :
125
 
126
```text
127
Microsoft Lists
128
↓
129
agenda.json
130
↓
131
Widget
132
```
133
 
134
et la correspondance des champs.
135
 
136
---
137
 
138
## Pour comprendre l'historique des choix
139
 
140
Lire :
141
 
142
```text
143
HISTORIQUE_DES_DECISIONS.md
144
```
145
 
146
Le document conserve les décisions importantes :
147
 
148
- gestion des publics ;
149
- Tout public ;
150
- réservations ;
151
- suppression des pièces jointes ;
152
- architecture JSON ;
153
- abandon de la connexion directe SharePoint.
154
 
155
---
156
 
157
# Structure documentaire
158
 
159
```text
160
docs/
161
 
162
├── projet/
163
│ ├── README.md
164
│ └── ROADMAP.md
165
│
166
├── architecture/
167
│ └── ARCHITECTURE_SHAREPOINT_AGENDA_MBA.md
168
│
169
├── metier/
170
│ ├── REGLES_METIER_AGENDA_MBA.md
171
│ ├── DICTIONNAIRE_DONNEES_AGENDA_MBA.md
172
│ └── MAPPING_SHAREPOINT_WIDGET.md
173
│
174
├── reprise/
175
│ └── REPRISE_PROJET_WIDGET_MBA.md
176
│
177
├── historique/
178
│ └── HISTORIQUE_DES_DECISIONS.md
179
│
180
└── archive/
181
```
182
 
183
---
184
 
185
# Documentation active
186
 
187
Les documents suivants sont considérés comme la documentation officielle du projet :
188
 
189
## Projet
190
 
191
- README.md
192
- ROADMAP.md
193
 
194
## Architecture
195
 
196
- ARCHITECTURE_SHAREPOINT_AGENDA_MBA.md
197
 
198
## Métier
199
 
200
- REGLES_METIER_AGENDA_MBA.md
201
- DICTIONNAIRE_DONNEES_AGENDA_MBA.md
202
- MAPPING_SHAREPOINT_WIDGET.md
203
 
204
## Reprise
205
 
206
- REPRISE_PROJET_WIDGET_MBA.md
207
 
208
## Historique
209
 
210
- HISTORIQUE_DES_DECISIONS.md
211
 
212
---
213
 
214
# Documentation archivée
215
 
216
Le dossier :
217
 
218
```text
219
archive/
220
```
221
 
222
contient les documents conservés uniquement à titre historique.
223
 
224
Ils ne doivent plus être utilisés comme référence fonctionnelle ou technique.
225
 
226
---
227
 
228
# État du projet
229
 
230
## Réalisé
231
 
232
✅ Widget V2 stabilisé
233
 
234
✅ Recherche
235
 
236
✅ Filtres
237
 
238
✅ Modales
239
 
240
✅ Export ICS
241
 
242
✅ Site SharePoint créé
243
 
244
✅ Liste Agenda MBA créée
245
 
246
✅ Bibliothèque Images Agenda créée
247
 
248
✅ Modèle de données validé
249
 
250
✅ Règles métier validées
251
 
252
✅ API SharePoint testée
253
 
254
✅ agenda.json créé
255
 
256
✅ Lecture de agenda.json validée
257
 
258
---
259
 
260
## En cours
261
 
262
Migration progressive :
263
 
264
```javascript
265
const events = [...]
266
```
267
 
268
vers :
269
 
270
```text
271
agenda.json
272
```
273
 
274
---
275
 
276
## Prochaine étape
277
 
278
Faire fonctionner intégralement le widget à partir du fichier :
279
 
280
```text
281
agenda.json
282
```
283
 
284
puis étudier l'automatisation de sa génération depuis Microsoft Lists.
285
 
286
---
287
 
288
# Philosophie du projet
289
 
290
Toute évolution doit respecter les principes suivants :
291
 
292
- simplicité ;
293
- gratuité ;
294
- maintenabilité ;
295
- documentation ;
296
- autonomie métier.
297
 
298
Une solution simple doit toujours être préférée à une solution complexe.