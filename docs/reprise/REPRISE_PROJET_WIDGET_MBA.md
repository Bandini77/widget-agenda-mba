# REPRISE PROJET – WIDGET AGENDA MBA
2
 
3
Version : 2.0
4
 
5
Date : 28 juillet 2026
6
 
7
Statut : Document de reprise de projet
8
 
9
---
10
 
11
# Objet du document
12
 
13
Ce document permet une reprise rapide du projet Agenda MBA.
14
 
15
Il doit permettre à un nouveau développeur, un prestataire ou une nouvelle conversation Copilot de comprendre :
16
 
17
- le contexte ;
18
- l'architecture ;
19
- les choix réalisés ;
20
- l'état actuel du projet ;
21
- les prochaines étapes.
22
 
23
---
24
 
25
# Présentation du projet
26
 
27
Le projet concerne l'Agenda du Musée des Beaux-Arts de Pau.
28
 
29
L'objectif est de permettre aux équipes du musée d'administrer les événements sans modification du code JavaScript du widget.
30
 
31
---
32
 
33
# Situation actuelle
34
 
35
## Widget
36
 
37
Version :
38
 
39
```text
40
V2 stable
41
```
42
 
43
Statut :
44
 
45
✅ Fonctionnel
46
 
47
✅ Utilisé comme référence
48
 
49
✅ Recherche opérationnelle
50
 
51
✅ Filtres opérationnels
52
 
53
✅ Modales opérationnelles
54
 
55
✅ Export ICS opérationnel
56
 
57
✅ Responsive
58
 
59
---
60
 
61
## Microsoft 365
62
 
63
Statut :
64
 
65
✅ Site SharePoint créé
66
 
67
✅ Liste Microsoft Lists créée
68
 
69
✅ Bibliothèque Images Agenda créée
70
 
71
✅ Colonnes validées
72
 
73
✅ Données de test créées
74
 
75
✅ API SharePoint testée
76
 
77
---
78
 
79
## JSON
80
 
81
Statut :
82
 
83
✅ agenda.json créé
84
 
85
✅ Lecture JSON validée
86
 
87
✅ Structure compatible avec le widget
88
 
89
---
90
 
91
# Architecture retenue
92
 
93
```text
94
Microsoft Lists
95
↓
96
Administration
97
 
98
agenda.json
99
↓
100
Diffusion
101
 
102
Widget Agenda MBA
103
↓
104
GitHub Pages
105
↓
106
iframe
107
↓
108
musee.pau.fr
109
```
110
 
111
---
112
 
113
# Architecture abandonnée
114
 
115
Architecture étudiée :
116
 
117
```text
118
Microsoft Lists
119
↓
120
Widget
121
```
122
 
123
---
124
 
125
## Résultat des tests
126
 
127
Les appels API SharePoint fonctionnent.
128
 
129
Les données sont récupérables.
130
 
131
Exemples récupérés :
132
 
133
- titre ;
134
- description ;
135
- publics ;
136
- durée ;
137
- réservation ;
138
- email ;
139
- téléphone ;
140
- visuel.
141
 
142
---
143
 
144
## Limitation rencontrée
145
 
146
Les visiteurs publics ne disposent pas des autorisations Microsoft 365 nécessaires.
147
 
148
Erreur obtenue :
149
 
150
```text
151
403 Unauthorized
152
```
153
 
154
---
155
 
156
## Décision
157
 
158
Abandon de la connexion directe.
159
 
160
Adoption d'une couche intermédiaire :
161
 
162
```text
163
agenda.json
164
```
165
 
166
---
167
 
168
# Philosophie du projet
169
 
170
Le projet privilégie :
171
 
172
- la simplicité ;
173
- la gratuité ;
174
- la maintenabilité ;
175
- la documentation ;
176
- l'autonomie métier.
177
 
178
Les solutions complexes doivent être évitées lorsque des solutions plus simples permettent d'obtenir le même résultat.
179
 
180
---
181
 
182
# Décisions structurantes
183
 
184
## Réservation
185
 
186
Valeurs autorisées :
187
 
188
```text
189
Oui
190
Non
191
```
192
 
193
Le widget affiche automatiquement le bloc réservation si :
194
 
195
```text
196
Réservation = Oui
197
```
198
 
199
---
200
 
201
## Publics
202
 
203
Valeurs autorisées :
204
 
205
```text
206
Adulte
207
Famille
208
Jeune public
209
```
210
 
211
---
212
 
213
## Tout public
214
 
215
La valeur :
216
 
217
```text
218
Tout public
219
```
220
 
221
n'est jamais stockée.
222
 
223
Elle est calculée automatiquement lorsque :
224
 
225
```text
226
Adulte
227
Famille
228
Jeune public
229
```
230
 
231
sont tous présents.
232
 
233
---
234
 
235
## PMR
236
 
237
Tous les événements sont considérés accessibles PMR.
238
 
239
Aucune colonne spécifique n'existe.
240
 
241
---
242
 
243
## Durée
244
 
245
Champ texte libre.
246
 
247
Exemples :
248
 
249
```text
250
45 min
251
1 h
252
1 h 30
253
2 h
254
Toute la journée
255
```
256
 
257
---
258
 
259
## Archivage
260
 
261
Statuts retenus :
262
 
263
```text
264
Brouillon
265
Publié
266
```
267
 
268
Aucun statut :
269
 
270
```text
271
Archivé
272
```
273
 
274
n'est prévu.
275
 
276
---
277
 
278
# Liste SharePoint
279
 
280
Site :
281
 
282
```text
283
https://agglopau.sharepoint.com/sites/TeamMuses-AGENDA
284
```
285
 
286
Liste :
287
 
288
```text
289
Agenda museepaufr
290
```
291
 
292
---
293
 
294
# Colonnes validées
295
 
296
- Statut
297
- Type d'événement
298
- Titre
299
- Date début
300
- Heure début
301
- Date fin
302
- Heure fin
303
- Publics
304
- Description
305
- Âge conseillé
306
- Durée
307
- Tarif
308
- Réservation
309
- Lien
310
- Email
311
- Téléphone
312
- Visuel
313
 
314
---
315
 
316
# Fonctionnement métier
317
 
318
Principe :
319
 
320
```text
321
Une occurrence = une ligne
322
```
323
 
324
Exemple :
325
 
326
```text
327
Sieste musicale
328
 
329
10 mars
330
12 avril
331
15 mai
332
```
333
 
334
correspond à :
335
 
336
```text
337
3 lignes différentes dans Microsoft Lists
338
```
339
 
340
---
341
 
342
# Publication
343
 
344
Visible dans le widget si :
345
 
346
```text
347
Statut = Publié
348
```
349
 
350
et :
351
 
352
```text
353
Date/heure de fin > maintenant
354
```
355
 
356
---
357
 
358
# Brouillon
359
 
360
Visible dans Microsoft Lists.
361
 
362
Invisible dans le widget.
363
 
364
---
365
 
366
# Événement terminé
367
 
368
Invisible dans le widget.
369
 
370
Toujours conservé dans Microsoft Lists.
371
 
372
---
373
 
374
# Documents de référence
375
 
376
## Architecture
377
 
378
```text
379
ARCHITECTURE_SHAREPOINT_AGENDA_MBA.md
380
```
381
 
382
---
383
 
384
## Métier
385
 
386
```text
387
REGLES_METIER_AGENDA_MBA.md
388
```
389
 
390
---
391
 
392
## Données
393
 
394
```text
395
DICTIONNAIRE_DONNEES_AGENDA_MBA.md
396
```
397
 
398
---
399
 
400
## Mapping
401
 
402
```text
403
MAPPING_SHAREPOINT_WIDGET.md
404
```
405
 
406
---
407
 
408
## Décisions
409
 
410
```text
411
HISTORIQUE_DES_DECISIONS.md
412
```
413
 
414
---
415
 
416
# État d'avancement estimé
417
 
418
## Widget
419
 
420
95 %
421
 
422
---
423
 
424
## Métier
425
 
426
100 %
427
 
428
---
429
 
430
## SharePoint
431
 
432
95 %
433
 
434
---
435
 
436
## Architecture
437
 
438
95 %
439
 
440
---
441
 
442
## Intégration JSON
443
 
444
50 %
445
 
446
---
447
 
448
## Mise en production
449
 
450
30 %
451
 
452
---
453
 
454
# Prochaine étape
455
 
456
Objectif immédiat :
457
 
458
```text
459
Remplacer progressivement :
460
 
461
const events = [...]
462
 
463
par
464
 
465
agenda.json
466
```
467
 
468
---
469
 
470
Étapes :
471
 
472
1. Finaliser la structure JSON.
473
2. Faire consommer agenda.json par le widget.
474
3. Remplacer les événements de démonstration.
475
4. Tester filtres et recherche.
476
5. Étudier l'automatisation de génération du JSON.
477
 
478
---
479
 
480
# Consignes pour toute reprise du projet
481
 
482
Toujours privilégier :
483
 
484
- GitHub Pages ;
485
- agenda.json ;
486
- Microsoft Lists ;
487
- documentation complète.
488
 
489
Éviter autant que possible :
490
 
491
- Power Apps ;
492
- Dataverse ;
493
- SPFx ;
494
- architectures complexes ;
495
- dépendances inutiles.