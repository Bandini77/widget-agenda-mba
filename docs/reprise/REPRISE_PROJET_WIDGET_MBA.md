# REPRISE DE PROJET – WIDGET AGENDA MBA
2
 
3
Dernière mise à jour : Juillet 2026
4
 
5
---
6
 
7
# État général du projet
8
 
9
Le projet Widget Agenda MBA est désormais fonctionnel.
10
 
11
L'architecture cible a été validée et la migration du widget vers une alimentation par fichier JSON a été réalisée avec succès.
12
 
13
Le widget fonctionne actuellement à partir du fichier :
14
 
15
```text
16
agenda.json
17
```
18
 
19
Les fonctionnalités suivantes sont opérationnelles :
20
 
21
✅ Affichage des événements
22
 
23
✅ Gestion des expositions multi-dates
24
 
25
✅ Modales événement
26
 
27
✅ Recherche libre
28
 
29
✅ Filtres publics
30
 
31
✅ Filtres types d'activité
32
 
33
✅ Filtres par période
34
 
35
✅ Export calendrier (.ics)
36
 
37
✅ Compteur de résultats
38
 
39
✅ Bouton "Consulter tout l'agenda"
40
 
41
---
42
 
43
# Architecture actuelle
44
 
45
```text
46
Microsoft Lists
47
↓
48
agenda.json
49
↓
50
Widget Agenda MBA
51
↓
52
GitHub Pages
53
↓
54
Site du musée
55
```
56
 
57
Le widget ne dépend plus directement du tableau embarqué dans le script.
58
 
59
Le JSON constitue désormais la source principale de données du widget.
60
 
61
---
62
 
63
# Branches Git
64
 
65
## Branche stable
66
 
67
```text
68
v2-maquette
69
```
70
 
71
Version de référence.
72
 
73
---
74
 
75
## Branche de développement
76
 
77
```text
78
integration-json
79
```
80
 
81
Branche de travail utilisée pour la migration JSON.
82
 
83
Fusion dans `v2-maquette` à réaliser après validation complète.
84
 
85
---
86
 
87
# Structure documentaire
88
 
89
```text
90
docs/
91
│
92
├── architecture
93
├── metier
94
├── projet
95
├── reprise
96
├── historique
97
└── archive
98
```
99
 
100
Document de reprise :
101
 
102
```text
103
docs/reprise/REPRISE_PROJET_WIDGET_MBA.md
104
```
105
 
106
---
107
 
108
# Évolutions réalisées
109
 
110
## Gestion des expositions
111
 
112
Correction du filtre par période.
113
 
114
Les expositions sont désormais affichées lorsqu'elles chevauchent une période sélectionnée.
115
 
116
Ajout de :
117
 
118
```json
119
dateFinISO
120
```
121
 
122
dans le modèle de données.
123
 
124
---
125
 
126
## Publics
127
 
128
Logique métier validée :
129
 
130
```text
131
Tout public
132
→ Tous les événements
133
 
134
Adulte
135
→ Adulte + Tout public
136
 
137
Famille
138
→ Famille uniquement
139
 
140
Jeune public
141
→ Jeune public uniquement
142
```
143
 
144
---
145
 
146
## Réservation
147
 
148
Modification du bloc :
149
 
150
```text
151
Réservation
152
```
153
 
154
vers :
155
 
156
```text
157
Sur réservation
158
```
159
 
160
Le terme :
161
 
162
```text
163
Obligatoire
164
```
165
 
166
n'est plus nécessaire dans l'interface.
167
 
168
---
169
 
170
## Migration JSON
171
 
172
Migration fonctionnelle terminée.
173
 
174
Le widget lit désormais :
175
 
176
```text
177
agenda.json
178
```
179
 
180
au chargement.
181
 
182
Fonctionnalités validées :
183
 
184
```text
185
✅ cartes
186
✅ modales
187
✅ recherche
188
✅ filtres
189
✅ agenda complet
190
✅ export calendrier
191
```
192
 
193
---
194
 
195
# Modèle de données recommandé
196
 
197
Deux gabarits existent :
198
 
199
```text
200
Événement classique
201
Exposition
202
```
203
 
204
Voir documentation métier.
205
 
206
Les champs doivent rester cohérents d'un événement à l'autre, même si certains sont vides.
207
 
208
---
209
 
210
# Travaux en cours
211
 
212
## Priorité haute
213
 
214
### Enrichir agenda.json
215
 
216
Ajouter davantage d'événements réels.
217
 
218
Vérifier :
219
 
220
- événements adultes ;
221
- famille ;
222
- jeune public ;
223
- expositions ;
224
- concerts ;
225
- vernissages.
226
 
227
---
228
 
229
### Étudier l'automatisation
230
 
231
Objectif :
232
 
233
```text
234
Microsoft Lists
235
↓
236
GitHub Action
237
↓
238
agenda.json
239
```
240
 
241
Solution privilégiée :
242
 
243
✅ gratuite
244
 
245
✅ automatisée
246
 
247
✅ peu de maintenance
248
 
249
---
250
 
251
## Priorité moyenne
252
 
253
### Nettoyage du code
254
 
255
Conserver temporairement :
256
 
257
```javascript
258
const eventsSauvegarde
259
```
260
 
261
comme sécurité.
262
 
263
Suppression envisagée après validation complète.
264
 
265
---
266
 
267
### Compte GitHub institutionnel
268
 
269
Étudier :
270
 
271
```text
272
museepau
273
```
274
 
275
ou équivalent.
276
 
277
Objectif :
278
 
279
remplacer l'URL actuelle :
280
 
281
```text
282
bandini77.github.io
283
```
284
 
285
par une adresse institutionnelle.
286
 
287
---
288
 
289
# Vérifications avant chaque séance
290
 
291
## Git
292
 
293
```bash
294
git status
295
```
296
 
297
Résultat attendu :
298
 
299
```text
300
working tree clean
301
```
302
 
303
---
304
 
305
## JSON
306
 
307
Vérifier :
308
 
309
```text
310
agenda.json
311
```
312
 
313
---
314
 
315
## Widget
316
 
317
Tester :
318
 
319
```text
320
✔ affichage
321
✔ recherche
322
✔ filtres
323
✔ modales
324
```
325
 
326
---
327
 
328
# Objectif final
329
 
330
Architecture cible :
331
 
332
```text
333
Microsoft Lists
334
↓
335
GitHub Action
336
↓
337
agenda.json
338
↓
339
Widget Agenda MBA
340
↓
341
Site du musée
342
```
343
 
344
Le widget doit fonctionner sans intervention technique quotidienne.
345
 
346
---
347
 
348
# Situation actuelle
349
 
350
Le projet n'est plus au stade prototype.
351
 
352
Le widget est opérationnel.
353
 
354
Les travaux restants concernent principalement :
355
 
356
- l'alimentation des données ;
357
- l'automatisation ;
358
- la préparation de la mise en production.