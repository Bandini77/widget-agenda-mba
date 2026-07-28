# REPRISE PROJET – WIDGET AGENDA MBA & SHAREPOINT
2
 
3
Version : 1.0
4
 
5
Date : 28 juillet 2026
6
 
7
Statut : Document de référence pour reprise de projet
8
 
9
---
10
 
11
# Contexte
12
 
13
Le projet concerne l'Agenda du Musée des Beaux-Arts de Pau.
14
 
15
Un widget Agenda V2 a été développé et stabilisé.
16
 
17
Le projet entre désormais dans une nouvelle phase :
18
 
19
Migration de l'administration des événements vers Microsoft 365 / SharePoint.
20
 
21
---
22
 
23
# État actuel du widget
24
 
25
Version :
26
 
27
V2 stable
28
 
29
Statut :
30
 
31
✅ Recette terminée
32
 
33
✅ Déploiement fonctionnel
34
 
35
✅ Nettoyage effectué
36
 
37
---
38
 
39
# Fonctionnalités disponibles
40
 
41
## Recherche
42
 
43
Recherche temps réel.
44
 
45
---
46
 
47
## Filtres
48
 
49
### Publics
50
 
51
- Adulte
52
- Famille
53
- Jeune public
54
- Tout public (calculé)
55
 
56
### Types d'activités
57
 
58
- Exposition
59
- Visite Atelier
60
- Visite commentée
61
- Conférence
62
- Concert
63
- Spectacle
64
- Rencontre
65
- Visite Flash
66
- Événement national
67
- Vernissage
68
- Memory
69
- Jeu de l'oie
70
- Visite contée
71
- L'heure du conte
72
- Arrêt sur œuvre
73
- Sieste musicale
74
- Nocturne
75
- Autre
76
 
77
### Dates
78
 
79
- Aujourd'hui
80
- Demain
81
- Week-end
82
- Période personnalisée
83
 
84
---
85
 
86
## Affichage
87
 
88
### Widget CMS
89
 
90
Affichage limité à :
91
 
92
4 événements
93
 
94
maximum.
95
 
96
---
97
 
98
### Agenda complet
99
 
100
Tous les événements.
101
 
102
---
103
 
104
## Modale
105
 
106
Informations affichées :
107
 
108
- type d'événement ;
109
- titre ;
110
- public ;
111
- PMR ;
112
- date ;
113
- horaire ;
114
- résumé ;
115
- description ;
116
- tarif ;
117
- réservation ;
118
- partage.
119
 
120
---
121
 
122
## Partage
123
 
124
- Email
125
- Copie du lien (desktop)
126
- Export calendrier ICS
127
 
128
---
129
 
130
# Décisions prises sur le widget
131
 
132
## PMR
133
 
134
Tous les événements sont considérés accessibles PMR.
135
 
136
Aucune donnée spécifique n'est stockée.
137
 
138
Le pictogramme est affiché automatiquement.
139
 
140
---
141
 
142
## Tout public
143
 
144
Le statut :
145
 
146
Tout public
147
 
148
n'est pas stocké.
149
 
150
Il est calculé automatiquement.
151
 
152
---
153
 
154
## Durée
155
 
156
Nouvelle donnée métier validée.
157
 
158
La durée devra apparaître dans l'en-tête de la modale.
159
 
160
Exemple :
161
 
162
📅 19 SEPT. 2026
163
 
164
🕒 14h30
165
 
166
⏱️ 1h30
167
 
168
sur la même ligne visuelle.
169
 
170
---
171
 
172
# Objectif de la V3
173
 
174
Supprimer la nécessité de modifier :
175
 
176
script.js
177
 
178
pour ajouter ou modifier un événement.
179
 
180
L'administration devra être réalisée depuis Microsoft 365.
181
 
182
---
183
 
184
# Philosophie retenue
185
 
186
Priorité absolue :
187
 
188
Simplicité.
189
 
190
Éviter :
191
 
192
- Power Automate ;
193
- Dataverse ;
194
- SPFx ;
195
- développements complexes ;
196
- dépendances inutiles.
197
 
198
Le projet doit rester facilement transmissible.
199
 
200
---
201
 
202
# Architecture SharePoint retenue
203
 
204
Site :
205
 
206
Agenda MBA
207
 
208
Titre :
209
 
210
Agenda du Musée des Beaux-Arts de Pau
211
 
212
---
213
 
214
Structure cible :
215
 
216
Agenda MBA
217
 
218
│
219
 
220
├── Accueil
221
 
222
├── Événements
223
 
224
├── Images Agenda
225
 
226
└── Documentation
227
 
228
---
229
 
230
# Accueil
231
 
232
Page d'entrée.
233
 
234
Accès rapide vers :
235
 
236
- créer un événement ;
237
- voir les événements ;
238
- ouvrir la bibliothèque d'images ;
239
- accéder à la documentation.
240
 
241
---
242
 
243
# Gestion des événements
244
 
245
Les événements sont stockés dans :
246
 
247
Microsoft Lists
248
 
249
Liste :
250
 
251
Agenda MBA
252
 
253
Principe :
254
 
255
Une occurrence = une ligne.
256
 
257
Exemple :
258
 
259
Sieste musicale :
260
 
261
10 mars
262
 
263
12 avril
264
 
265
15 mai
266
 
267
=
268
 
269
3 lignes distinctes.
270
 
271
---
272
 
273
# Formulaire
274
 
275
Décision validée :
276
 
277
L'utilisateur travaille via un formulaire métier.
278
 
279
Pas via l'édition directe des colonnes SharePoint.
280
 
281
Logique :
282
 
283
Nouvel événement
284
 
285
↓
286
 
287
Formulaire
288
 
289
↓
290
 
291
Liste SharePoint
292
 
293
↓
294
 
295
Widget
296
 
297
---
298
 
299
# Bibliothèque Images
300
 
301
Nom :
302
 
303
Images Agenda
304
 
305
Objectif :
306
 
307
Stocker uniquement les visuels utilisés dans l'agenda.
308
 
309
Sources possibles :
310
 
311
- Photothèque du musée ;
312
- Réseau Ville ;
313
- Visuels graphiste ;
314
- Production interne.
315
 
316
---
317
 
318
# Publication
319
 
320
Un événement est visible si :
321
 
322
Statut = Publié
323
 
324
ET
325
 
326
Date/heure de fin > maintenant
327
 
328
---
329
 
330
# Brouillon
331
 
332
Visible dans SharePoint.
333
 
334
Invisible sur le widget.
335
 
336
---
337
 
338
# Événement terminé
339
 
340
Invisible sur le widget.
341
 
342
Toujours conservé dans SharePoint.
343
 
344
---
345
 
346
# Décision sur l'archivage
347
 
348
Pas de statut :
349
 
350
Archivé
351
 
352
dans la V1.
353
 
354
La liste SharePoint joue déjà le rôle d'historique.
355
 
356
Statuts retenus :
357
 
358
- Brouillon
359
- Publié
360
 
361
---
362
 
363
# Modèle de données validé
364
 
365
Colonnes retenues :
366
 
367
- ID
368
- Statut
369
- Type d'événement
370
- Titre
371
- Date début
372
- Heure début
373
- Date fin
374
- Heure fin
375
- Public
376
- Résumé
377
- Description
378
- Âge conseillé
379
- Durée
380
- Tarif
381
- Réservation
382
- Lien
383
- Email
384
- Téléphone
385
- Image
386
 
387
---
388
 
389
# Colonne supprimée
390
 
391
Lieu
392
 
393
Motif :
394
 
395
- quasiment toujours identique ;
396
- non utilisé dans les filtres ;
397
- non affiché dans la modale actuelle.
398
 
399
Réintégration possible plus tard.
400
 
401
---
402
 
403
# Types d'événements validés
404
 
405
- Exposition
406
- Visite Atelier
407
- Visite commentée
408
- Conférence
409
- Concert
410
- Spectacle
411
- Rencontre
412
- Visite Flash
413
- Événement national
414
- Vernissage
415
- Memory
416
- Jeu de l'oie
417
- Visite contée
418
- L'heure du conte
419
- Arrêt sur œuvre
420
- Sieste musicale
421
- Nocturne
422
- Autre
423
 
424
Le type :
425
 
426
Autre
427
 
428
sert à gérer les événements exceptionnels.
429
 
430
---
431
 
432
# Organisation métier
433
 
434
Dans 99 % des cas :
435
 
436
Sébastien crée l'événement.
437
 
438
Le système doit néanmoins pouvoir être transmis à d'autres agents.
439
 
440
---
441
 
442
# Circuit métier actuel
443
 
444
Réunion programmation
445
 
446
↓
447
 
448
Validation programmation
449
 
450
↓
451
 
452
Saisie événement
453
 
454
↓
455
 
456
Publication
457
 
458
↓
459
 
460
Fin événement
461
 
462
↓
463
 
464
Disparition automatique du widget
465
 
466
↓
467
 
468
Conservation dans SharePoint
469
 
470
---
471
 
472
# Documents de référence existants
473
 
474
- README.md
475
- ROADMAP.md
476
- REPRISE_PROJET_WIDGET_MBA.md
477
- MODELE_DONNEES_AGENDA_MBA.md
478
- STRATEGIE_SHAREPOINT_AGENDA_MBA.md
479
- ARCHITECTURE_SHAREPOINT_AGENDA_MBA.md
480
- DICTIONNAIRE_DONNEES_AGENDA_MBA.md
481
 
482
---
483
 
484
# Questions encore ouvertes
485
 
486
## Intégration technique
487
 
488
À déterminer :
489
 
490
Option A :
491
 
492
Widget intégré directement dans SharePoint.
493
 
494
Option B :
495
 
496
Widget conservé en externe et connecté à SharePoint.
497
 
498
---
499
 
500
## Images
501
 
502
À confirmer :
503
 
504
- colonne Image SharePoint ;
505
ou
506
- liaison vers bibliothèque dédiée.
507
 
508
---
509
 
510
# Prochaine étape
511
 
512
1. Création du site SharePoint Agenda MBA.
513
 
514
2. Création de la bibliothèque Images Agenda.
515
 
516
3. Création de la liste Agenda MBA.
517
 
518
4. Création des colonnes.
519
 
520
5. Création du formulaire métier.
521
 
522
6. Étude de la connexion SharePoint ↔ Widget.
523
 
524
---
525
 
526
# Résumé
527
 
528
Le widget V2 est considéré comme stabilisé.
529
 
530
La prochaine phase du projet consiste à transformer l’administration des événements en une solution Microsoft Lists / SharePoint simple, documentée et maintenable, sans complexité inutile.