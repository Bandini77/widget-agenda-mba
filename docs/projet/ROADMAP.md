# ROADMAP – AGENDA MBA
2
 
3
Version : 2.0
4
 
5
Date : 28 juillet 2026
6
 
7
Statut : En cours
8
 
9
---
10
 
11
# Vision du projet
12
 
13
Mettre à disposition du Musée des Beaux-Arts de Pau un agenda culturel :
14
 
15
- simple à administrer ;
16
- indépendant du code du widget ;
17
- gratuit à exploiter ;
18
- facilement transmissible à une autre équipe.
19
 
20
---
21
 
22
# Architecture cible
23
 
24
```text
25
Microsoft Lists
26
↓
27
Administration
28
 
29
agenda.json
30
↓
31
Diffusion
32
 
33
Widget Agenda MBA
34
↓
35
GitHub Pages
36
↓
37
iframe
38
↓
39
musee.pau.fr
40
```
41
 
42
---
43
 
44
# Phase 1 – Construction du widget
45
 
46
## Objectif
47
 
48
Créer un agenda culturel moderne et responsive.
49
 
50
## Réalisations
51
 
52
### Cartes événement
53
 
54
✅ Image
55
 
56
✅ Type d'événement
57
 
58
✅ Titre
59
 
60
✅ Public
61
 
62
✅ Date
63
 
64
✅ Horaire
65
 
66
---
67
 
68
### Modale événement
69
 
70
✅ Visuel
71
 
72
✅ Public
73
 
74
✅ PMR
75
 
76
✅ Âge conseillé
77
 
78
✅ Date
79
 
80
✅ Horaire
81
 
82
✅ Durée
83
 
84
✅ Tarif
85
 
86
✅ Réservation
87
 
88
✅ Partage
89
 
90
---
91
 
92
### Fonctionnalités
93
 
94
✅ Recherche
95
 
96
✅ Filtres
97
 
98
✅ Agenda complet
99
 
100
✅ Widget accueil
101
 
102
✅ Export ICS
103
 
104
✅ Copie du lien
105
 
106
✅ Partage email
107
 
108
✅ Responsive mobile
109
 
110
---
111
 
112
# Phase 2 – Modèle métier
113
 
114
## Objectif
115
 
116
Définir les données nécessaires à la programmation culturelle.
117
 
118
## Réalisations
119
 
120
✅ Dictionnaire de données
121
 
122
✅ Règles métier
123
 
124
✅ Mapping SharePoint → Widget
125
 
126
✅ Validation des publics
127
 
128
✅ Validation des tarifs
129
 
130
✅ Validation des réservations
131
 
132
✅ Validation de la durée
133
 
134
✅ Validation des dates
135
 
136
✅ Validation de la publication
137
 
138
---
139
 
140
# Phase 3 – Mise en place SharePoint
141
 
142
## Objectif
143
 
144
Créer l'environnement d'administration.
145
 
146
## Réalisations
147
 
148
### Site
149
 
150
✅ Team Musées – Agenda
151
 
152
---
153
 
154
### Liste
155
 
156
✅ Agenda museepaufr
157
 
158
---
159
 
160
### Bibliothèque
161
 
162
✅ Images Agenda
163
 
164
---
165
 
166
### Paramétrage
167
 
168
✅ Colonnes créées
169
 
170
✅ Pièces jointes désactivées
171
 
172
✅ Événements tests créés
173
 
174
---
175
 
176
# Phase 4 – Validation technique SharePoint
177
 
178
## Objectif
179
 
180
Vérifier la récupération des données.
181
 
182
## Réalisations
183
 
184
### API SharePoint
185
 
186
✅ Test réussi
187
 
188
### Liste
189
 
190
✅ Métadonnées récupérées
191
 
192
### Événements
193
 
194
✅ Événements récupérés
195
 
196
### Colonnes
197
 
198
✅ Toutes les colonnes métier récupérées
199
 
200
### Images
201
 
202
✅ Champ Visuel identifié
203
 
204
---
205
 
206
## Découverte importante
207
 
208
Les visiteurs publics ne disposent pas des autorisations Microsoft 365 nécessaires pour interroger directement SharePoint.
209
 
210
Conséquence :
211
 
212
❌ Architecture directe abandonnée
213
 
214
```text
215
Widget
216
↓
217
SharePoint
218
```
219
 
220
---
221
 
222
# Phase 5 – Nouvelle architecture de diffusion
223
 
224
## Objectif
225
 
226
Découpler administration et diffusion.
227
 
228
### Architecture retenue
229
 
230
```text
231
Microsoft Lists
232
↓
233
agenda.json
234
↓
235
Widget
236
```
237
 
238
---
239
 
240
## Réalisations
241
 
242
✅ Création du premier agenda.json
243
 
244
✅ Lecture du JSON via fetch()
245
 
246
✅ Validation du chargement des données
247
 
248
---
249
 
250
# Phase 6 – En cours
251
 
252
## Migration du widget
253
 
254
Objectif :
255
 
256
Supprimer progressivement :
257
 
258
```javascript
259
const events = [...]
260
```
261
 
262
et remplacer la source des données par :
263
 
264
```javascript
265
agenda.json
266
```
267
 
268
---
269
 
270
### Travaux restants
271
 
272
- Structurer le JSON définitif
273
- Transformer les données SharePoint
274
- Faire consommer le JSON par le widget
275
- Vérifier les filtres
276
- Vérifier la recherche
277
- Vérifier les modales
278
 
279
---
280
 
281
# Phase 7 – Automatisation
282
 
283
## Objectif
284
 
285
Générer automatiquement :
286
 
287
```text
288
agenda.json
289
```
290
 
291
à partir des données Microsoft Lists.
292
 
293
---
294
 
295
## Questions à résoudre
296
 
297
- Mode de génération du JSON
298
- Fréquence de mise à jour
299
- Gestion des images
300
- Publication GitHub
301
 
302
---
303
 
304
# Phase 8 – Mise en production
305
 
306
## Objectif
307
 
308
Rendre le système totalement opérationnel.
309
 
310
### Chaîne finale
311
 
312
```text
313
Microsoft Lists
314
↓
315
agenda.json
316
↓
317
GitHub Pages
318
↓
319
iframe
320
↓
321
musee.pau.fr
322
```
323
 
324
---
325
 
326
# Niveau d'avancement estimé
327
 
328
## Métier
329
 
330
95 %
331
 
332
## Widget
333
 
334
95 %
335
 
336
## SharePoint
337
 
338
95 %
339
 
340
## Architecture
341
 
342
90 %
343
 
344
## Intégration
345
 
346
40 %
347
 
348
## Mise en production
349
 
350
20 %
351
 
352
---
353
 
354
# Prochaine étape
355
 
356
Faire fonctionner le widget à partir du fichier :
357
 
358
```text
359
agenda.json
360
```
361
 
362
au lieu du tableau :
363
 
364
```javascript
365
const events = [...]
366
```