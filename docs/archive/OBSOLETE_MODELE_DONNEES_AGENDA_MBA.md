# Modèle de données – Agenda MBA
2
 
3
Version : 1.1
4
 
5
Statut : Validé pour implémentation SharePoint / Microsoft Lists
6
 
7
---
8
 
9
# Objectif
10
 
11
Permettre l'administration autonome de la programmation culturelle du Musée des Beaux-Arts de Pau sans modification du code du widget.
12
 
13
Chaque événement correspond à une ligne SharePoint.
14
 
15
Une occurrence = une ligne.
16
 
17
Exemple :
18
 
19
Sieste musicale :
20
 
21
- 10 mars = 1 ligne
22
- 12 avril = 1 ligne
23
- 15 mai = 1 ligne
24
 
25
---
26
 
27
# Principes métier
28
 
29
## Types d'activité
30
 
31
Les types d'activité sont enrichissables.
32
 
33
Le widget ne doit jamais dépendre d'une liste fermée.
34
 
35
De nouveaux types peuvent être ajoutés à tout moment sans modification du code.
36
 
37
Exemples :
38
 
39
- Exposition
40
- Conférence
41
- Concert
42
- Atelier
43
- Visite commentée
44
- Visite flash
45
- Rencontre
46
- Spectacle
47
- Vernissage
48
- Projection
49
- Performance
50
- Événement partenaire
51
- Autre
52
 
53
---
54
 
55
## Publics concernés
56
 
57
Les publics réels sont :
58
 
59
- Adulte
60
- Famille
61
- Jeune public
62
 
63
Le statut :
64
 
65
Tout public
66
 
67
n'est pas stocké dans SharePoint.
68
 
69
Il est calculé automatiquement par le widget selon les règles métier retenues.
70
 
71
---
72
 
73
## PMR
74
 
75
Tous les événements sont considérés comme accessibles PMR.
76
 
77
Aucune colonne spécifique n'est nécessaire.
78
 
79
Le widget affiche automatiquement le pictogramme PMR.
80
 
81
---
82
 
83
## Publication
84
 
85
Seuls les événements :
86
 
87
- Statut = Publié
88
- Date de fin ≥ date du jour
89
 
90
sont visibles dans le widget.
91
 
92
---
93
 
94
# Structure des données
95
 
96
## Titre
97
 
98
Nom interne :
99
 
100
Titre
101
 
102
Type :
103
 
104
Texte simple
105
 
106
Obligatoire :
107
 
108
Oui
109
 
110
Exemple :
111
 
112
Visite commentée – Berthe Morisot
113
 
114
---
115
 
116
## Type d'activité
117
 
118
Nom interne :
119
 
120
TypeActivite
121
 
122
Type :
123
 
124
Choix
125
 
126
Obligatoire :
127
 
128
Oui
129
 
130
Liste enrichissable.
131
 
132
Valeurs initiales :
133
 
134
- Arrêt sur œuvre
135
- Concert
136
- Conférence
137
- Événement national
138
- Exposition
139
- Jeu de l'oie
140
- Memory
141
- Rencontre
142
- Sieste musicale
143
- Spectacle
144
- Vernissage
145
- Visite atelier
146
- Visite commentée
147
- Visite contée
148
- Visite flash
149
 
150
---
151
 
152
## Publics concernés
153
 
154
Nom interne :
155
 
156
Publics
157
 
158
Type :
159
 
160
Choix multiples
161
 
162
Obligatoire :
163
 
164
Oui
165
 
166
Valeurs :
167
 
168
- Adulte
169
- Famille
170
- Jeune public
171
 
172
---
173
 
174
## Âge minimum
175
 
176
Nom interne :
177
 
178
AgeMinimum
179
 
180
Type :
181
 
182
Nombre
183
 
184
Obligatoire :
185
 
186
Non
187
 
188
Exemples :
189
 
190
- 3
191
- 5
192
- 8
193
- 12
194
 
195
Affichage :
196
 
197
À partir de X ans
198
 
199
---
200
 
201
## Date début
202
 
203
Nom interne :
204
 
205
DateDebut
206
 
207
Type :
208
 
209
Date / Heure
210
 
211
Obligatoire :
212
 
213
Oui
214
 
215
---
216
 
217
## Heure début
218
 
219
Nom interne :
220
 
221
HeureDebut
222
 
223
Type :
224
 
225
Date / Heure
226
 
227
Obligatoire :
228
 
229
Oui
230
 
231
---
232
 
233
## Date fin
234
 
235
Nom interne :
236
 
237
DateFin
238
 
239
Type :
240
 
241
Date / Heure
242
 
243
Obligatoire :
244
 
245
Non
246
 
247
Utilisée principalement pour :
248
 
249
- Expositions
250
- Événements multi-jours
251
 
252
---
253
 
254
## Heure fin
255
 
256
Nom interne :
257
 
258
HeureFin
259
 
260
Type :
261
 
262
Date / Heure
263
 
264
Obligatoire :
265
 
266
Non
267
 
268
---
269
 
270
## Lieu
271
 
272
Nom interne :
273
 
274
Lieu
275
 
276
Type :
277
 
278
Texte simple
279
 
280
Obligatoire :
281
 
282
Non
283
 
284
Exemples :
285
 
286
- Musée des Beaux-Arts
287
- Auditorium
288
- Salle pédagogique
289
- Hors les murs
290
- Château de Pau
291
 
292
---
293
 
294
## Tarif
295
 
296
Nom interne :
297
 
298
Tarif
299
 
300
Type :
301
 
302
Texte simple
303
 
304
Obligatoire :
305
 
306
Oui
307
 
308
Exemples :
309
 
310
- Gratuit
311
- 5 €
312
- Tarif réduit
313
- Tarif spécifique
314
 
315
---
316
 
317
## Modalité d'accès
318
 
319
Nom interne :
320
 
321
ModaliteAcces
322
 
323
Type :
324
 
325
Choix
326
 
327
Obligatoire :
328
 
329
Oui
330
 
331
Valeurs :
332
 
333
- Accès libre
334
- Sans réservation
335
- Réservation obligatoire
336
 
337
---
338
 
339
## Téléphone
340
 
341
Nom interne :
342
 
343
Telephone
344
 
345
Type :
346
 
347
Texte simple
348
 
349
Obligatoire :
350
 
351
Non
352
 
353
---
354
 
355
## Email
356
 
357
Nom interne :
358
 
359
Email
360
 
361
Type :
362
 
363
Texte simple
364
 
365
Obligatoire :
366
 
367
Non
368
 
369
---
370
 
371
## Résumé
372
 
373
Nom interne :
374
 
375
Resume
376
 
377
Type :
378
 
379
Texte simple
380
 
381
Obligatoire :
382
 
383
Oui
384
 
385
Utilisation :
386
 
387
Texte court affiché dans les cartes.
388
 
389
---
390
 
391
## Description
392
 
393
Nom interne :
394
 
395
Description
396
 
397
Type :
398
 
399
Texte multiligne
400
 
401
Obligatoire :
402
 
403
Oui
404
 
405
Utilisation :
406
 
407
Contenu détaillé affiché dans les modales.
408
 
409
---
410
 
411
## Lien complémentaire
412
 
413
Nom interne :
414
 
415
LienComplementaire
416
 
417
Type :
418
 
419
Hyperlien
420
 
421
Obligatoire :
422
 
423
Non
424
 
425
Exemples :
426
 
427
- Page exposition
428
- Billetterie
429
- OpenAgenda
430
- Site partenaire
431
 
432
---
433
 
434
## Image
435
 
436
Nom interne :
437
 
438
Image
439
 
440
Type :
441
 
442
Image SharePoint
443
 
444
Obligatoire :
445
 
446
Oui
447
 
448
Règle :
449
 
450
Aucun événement ne peut être publié sans image.
451
 
452
---
453
 
454
## Statut
455
 
456
Nom interne :
457
 
458
Statut
459
 
460
Type :
461
 
462
Choix
463
 
464
Obligatoire :
465
 
466
Oui
467
 
468
Valeurs :
469
 
470
- Brouillon
471
- Publié
472
- Archivé
473
 
474
Valeur par défaut :
475
 
476
Brouillon
477
 
478
---
479
 
480
# Règles métier
481
 
482
## Brouillon
483
 
484
Les brouillons :
485
 
486
- ne sont pas visibles du public
487
- restent visibles dans SharePoint
488
 
489
---
490
 
491
## Publication
492
 
493
Par défaut :
494
 
495
Publication immédiate.
496
 
497
Évolution possible :
498
 
499
Ajout ultérieur d'une date de publication programmée.
500
 
501
---
502
 
503
## Archivage
504
 
505
Lorsque la date de fin est dépassée :
506
 
507
- l'événement disparaît du widget
508
- l'événement reste stocké dans SharePoint
509
- le statut peut être modifié en Archivé
510
 
511
---
512
 
513
## Expositions
514
 
515
Les expositions utilisent exactement la même structure de données que les autres événements.
516
 
517
La différence d'affichage est gérée par le widget.
518
 
519
---
520
 
521
## Événements récurrents
522
 
523
Aucune gestion automatique.
524
 
525
Chaque occurrence correspond à une ligne distincte.
526
 
527
Exemple :
528
 
529
Sieste musicale :
530
 
531
- 10 mars
532
- 12 avril
533
- 15 mai
534
 
535
=
536
 
537
3 lignes SharePoint
538
 
539
---
540
 
541
# Gestion des images
542
 
543
## Format officiel MBA
544
 
545
Dimensions :
546
 
547
1600 × 900 px
548
 
549
Ratio :
550
 
551
16:9
552
 
553
Format :
554
 
555
JPG
556
 
557
Poids maximum :
558
 
559
2 Mo
560
 
561
---
562
 
563
## Consignes
564
 
565
Pas de texte intégré dans l'image.
566
 
567
Le sujet principal doit rester lisible.
568
 
569
Le recadrage manuel est autorisé.
570
 
571
Le cadrage est décidé lors de la préparation du visuel.
572
 
573
---
574
 
575
# Architecture cible
576
 
577
Agent musée
578
 
579
↓
580
 
581
Microsoft Lists
582
 
583
↓
584
 
585
Liste Agenda MBA
586
 
587
↓
588
 
589
Power Automate
590
 
591
↓
592
 
593
Widget Agenda MBA
594
 
595
↓
596
 
597
Publication automatique
598
 
599
---
600
 
601
# Évolutions futures
602
 
603
À étudier :
604
 
605
- Logique définitive du calcul "Tout public"
606
- Places disponibles
607
- Publication programmée
608
- Synchronisation billetterie
609
- Workflow de validation
610
- Statistiques de fréquentation