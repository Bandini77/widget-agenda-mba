# DICTIONNAIRE DE DONNÉES – AGENDA MBA
2
 
3
Version : 1.1
4
 
5
Date : 28 juillet 2026
6
 
7
Statut : Validé
8
 
9
---
10
 
11
# Objectif
12
 
13
Définir les colonnes de la liste Microsoft Lists utilisée pour administrer l'Agenda MBA.
14
 
15
Chaque événement correspond à une ligne.
16
 
17
Chaque occurrence correspond à une ligne distincte.
18
 
19
---
20
 
21
# ID
22
 
23
Nom interne :
24
 
25
ID
26
 
27
Type :
28
 
29
Numéro automatique SharePoint
30
 
31
Obligatoire :
32
 
33
Oui
34
 
35
Utilisation :
36
 
37
Identifiant technique unique.
38
 
39
---
40
 
41
# Statut
42
 
43
Nom interne :
44
 
45
Statut
46
 
47
Type :
48
 
49
Choix
50
 
51
Valeurs :
52
 
53
- Brouillon
54
- Publié
55
 
56
Valeur par défaut :
57
 
58
Brouillon
59
 
60
Utilisé par le widget :
61
 
62
Oui
63
 
64
Règle :
65
 
66
Seuls les événements publiés sont affichés.
67
 
68
---
69
 
70
# Type d'événement
71
 
72
Nom interne :
73
 
74
TypeEvenement
75
 
76
Type :
77
 
78
Choix
79
 
80
Valeurs initiales :
81
 
82
- Exposition
83
- Visite Atelier
84
- Visite commentée
85
- Conférence
86
- Concert
87
- Spectacle
88
- Rencontre
89
- Visite Flash
90
- Événement national
91
- Vernissage
92
- Memory
93
- Jeu de l'oie
94
- Visite contée
95
- L'heure du conte
96
- Arrêt sur œuvre
97
- Sieste musicale
98
- Nocturne
99
- Autre
100
 
101
Obligatoire :
102
 
103
Oui
104
 
105
Utilisé dans les filtres :
106
 
107
Oui
108
 
109
Remarque :
110
 
111
La liste reste enrichissable dans le temps.
112
 
113
Le type :
114
 
115
Autre
116
 
117
permet de gérer les événements exceptionnels sans modification du système.
118
 
119
---
120
 
121
# Titre
122
 
123
Nom interne :
124
 
125
Titre
126
 
127
Type :
128
 
129
Texte simple
130
 
131
Obligatoire :
132
 
133
Oui
134
 
135
Utilisation :
136
 
137
Nom principal de l'événement.
138
 
139
---
140
 
141
# Date début
142
 
143
Nom interne :
144
 
145
DateDebut
146
 
147
Type :
148
 
149
Date
150
 
151
Obligatoire :
152
 
153
Oui
154
 
155
Utilisation :
156
 
157
Date de début de l'événement.
158
 
159
---
160
 
161
# Heure début
162
 
163
Nom interne :
164
 
165
HeureDebut
166
 
167
Type :
168
 
169
Date et heure
170
 
171
Obligatoire :
172
 
173
Oui
174
 
175
Utilisation :
176
 
177
Affichage de l'horaire dans le widget et export ICS.
178
 
179
---
180
 
181
# Date fin
182
 
183
Nom interne :
184
 
185
DateFin
186
 
187
Type :
188
 
189
Date
190
 
191
Obligatoire :
192
 
193
Oui
194
 
195
Utilisation :
196
 
197
Date de fin de l'événement.
198
 
199
Permet la dépublication automatique.
200
 
201
---
202
 
203
# Heure fin
204
 
205
Nom interne :
206
 
207
HeureFin
208
 
209
Type :
210
 
211
Date et heure
212
 
213
Obligatoire :
214
 
215
Oui
216
 
217
Utilisation :
218
 
219
Permet la dépublication automatique.
220
 
221
Règle :
222
 
223
Un événement est visible uniquement si :
224
 
225
Date/Heure fin > maintenant
226
 
227
---
228
 
229
# Publics concernés
230
 
231
Nom interne :
232
 
233
Publics
234
 
235
Type :
236
 
237
Choix multiples
238
 
239
Valeurs :
240
 
241
- Adulte
242
- Famille
243
- Jeune public
244
 
245
Obligatoire :
246
 
247
Oui
248
 
249
Utilisé dans les filtres :
250
 
251
Oui
252
 
253
---
254
 
255
# Règle Tout public
256
 
257
Le statut :
258
 
259
Tout public
260
 
261
n'est jamais stocké dans SharePoint.
262
 
263
Il est calculé automatiquement par le widget lorsque les trois publics sont sélectionnés :
264
 
265
- Adulte
266
- Famille
267
- Jeune public
268
 
269
Affichage :
270
 
271
Tout public
272
 
273
---
274
 
275
# Description

Nom interne :

Description

Type :

Texte multiligne

Obligatoire :

Oui

Utilisation :

Texte principal affiché dans la modale.

La carte événement n'affiche aucun texte descriptif.
# Âge conseillé
316
 
317
Nom interne :
318
 
319
AgeConseille
320
 
321
Type :
322
 
323
Nombre
324
 
325
Obligatoire :
326
 
327
Non
328
 
329
Exemples :
330
 
331
- 3
332
- 6
333
- 8
334
- 12
335
 
336
Utilisation :
337
 
338
Indication de l'âge minimum recommandé.
339
 
340
Affichage widget :
341
 
342
À partir de X ans
343
 
344
Exemple :
345
 
346
Valeur stockée :
347
 
348
6
349
 
350
Affichage :
351
 
352
À partir de 6 ans
353
 
354
---
355
 
356
# Durée
357
 
358
Nom interne :
359
 
360
Duree
361
 
362
Type :
363
 
364
Texte simple
365
 
366
Obligatoire :
367
 
368
Non
369
 
370
Exemples :
371
 
372
- 45 min
373
- 1 h
374
- 1 h 30
375
- 2 h
376
- Toute la journée
377
- En continu
378
 
379
Utilisation :
380
 
381
Affichage dans l'en-tête de la modale.
382
 
383
Exemple :
384
 
385
📅 19 SEPT. 2026
386
 
387
🕒 14h30
388
 
389
⏱️ 1 h 30
390
 
391
Les trois informations doivent apparaître sur une même ligne visuelle.
392
 
393
---
394
 
395
# Tarif
396
 
397
Nom interne :
398
 
399
Tarif
400
 
401
Type :
402
 
403
Texte simple
404
 
405
Obligatoire :
406
 
407
Oui
408
 
409
Exemples :
410
 
411
- Gratuit
412
- 5 €
413
- Adulte accompagnateur : 5 €
414
- Tarif réduit
415
 
416
Utilisation :
417
 
418
Affichage dans le bloc Tarif.
419
 
420
---
421
 
422
# Réservation
423
 
424
Nom interne :
425
 
426
Reservation
427
 
428
Type :
429
 
430
Choix
431
 
432
Valeurs :
433
 
434
- Oui
435
- Non
436
 
437
Obligatoire :
438
 
439
Oui
440
 
441
Utilisation :
442
 
443
Détermine l'affichage du bloc Réservation dans le widget.
444
 
445
---
446
 
447
# Règle Réservation
448
 
449
Si :
450
 
451
Réservation = Oui
452
 
453
Le widget affiche :
454
 
455
- téléphone ;
456
- email ;
457
- lien de réservation.
458
 
459
Si :
460
 
461
Réservation = Non
462
 
463
Le widget masque complètement le bloc Réservation.
464
 
465
---
466
 
467
# Lien
468
 
469
Nom interne :
470
 
471
Lien
472
 
473
Type :
474
 
475
Hyperlien
476
 
477
Obligatoire :
478
 
479
Non
480
 
481
Utilisation :
482
 
483
Réservation ou page d'information complémentaire.
484
 
485
---
486
 
487
# Email
488
 
489
Nom interne :
490
 
491
Email
492
 
493
Type :
494
 
495
Texte simple
496
 
497
Obligatoire :
498
 
499
Non
500
 
501
Utilisation :
502
 
503
Contact ou réservation.
504
 
505
---
506
 
507
# Téléphone
508
 
509
Nom interne :
510
 
511
Telephone
512
 
513
Type :
514
 
515
Texte simple
516
 
517
Obligatoire :
518
 
519
Non
520
 
521
Utilisation :
522
 
523
Contact ou réservation.
524
 
525
---
526
 
527
# Visuel
528
 
529
Nom interne :
530
 
531
Visuel
532
 
533
Type :
534
 
535
Image
536
 
537
Obligatoire :
538
 
539
Oui avant publication
540
 
541
Utilisation :
542
 
543
Affichage :
544
 
545
- carte événement ;
546
- modale ;
547
- agenda complet.
548
 
549
Remarque :
550
 
551
Les visuels de référence sont stockés dans la bibliothèque :
552
 
553
Images Agenda
554
 
555
---
556
 
557
# Règles métier générales
558
 
559
## Publication
560
 
561
Visible dans le widget si :
562
 
563
Statut = Publié
564
 
565
ET
566
 
567
Date/Heure fin > maintenant
568
 
569
---
570
 
571
## Brouillon
572
 
573
Visible dans SharePoint.
574
 
575
Invisible dans le widget.
576
 
577
---
578
 
579
## Événement terminé
580
 
581
Invisible dans le widget.
582
 
583
Toujours conservé dans SharePoint.
584
 
585
---
586
 
587
## Archivage
588
 
589
Aucun statut :
590
 
591
Archivé
592
 
593
n'est prévu.
594
 
595
Microsoft Lists constitue l'historique des événements.
596
 
597
---
598
 
599
## PMR
600
 
601
Tous les événements sont considérés accessibles PMR.
602
 
603
Aucune colonne spécifique n'est prévue.
604
 
605
Le pictogramme PMR est affiché automatiquement.
606
 
607
---
608
 
609
## Pièces jointes
610
 
611
Les pièces jointes SharePoint ne sont pas utilisées dans le projet Agenda MBA.
612
 
613
Les visuels sont gérés via :
614
 
615
- la colonne Visuel ;
616
- la bibliothèque Images Agenda.
617
 
618
---
619
 
620
# État
621
 
622
Modèle V1 validé.
623
 
624
Prochaine étape :
625
 
626
Connexion Microsoft Lists → Widget Agenda MBA.