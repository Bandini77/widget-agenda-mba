# MAPPING SHAREPOINT → JSON → WIDGET MBA
2
 
3
Version : 2.0
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
# Objet du document
12
 
13
Ce document décrit la transformation des données entre :
14
 
15
```text
16
Microsoft Lists
17
↓
18
agenda.json
19
↓
20
Widget Agenda MBA
21
```
22
 
23
Il constitue la référence technique de transformation des données.
24
 
25
---
26
 
27
# Architecture de circulation des données
28
 
29
```text
30
Microsoft Lists
31
↓
32
 
33
Transformation
34
 
35
↓
36
 
37
agenda.json
38
 
39
↓
40
 
41
Widget Agenda MBA
42
```
43
 
44
Microsoft Lists constitue la source d'administration.
45
 
46
Le widget ne lit jamais directement Microsoft Lists.
47
 
48
Le widget lit exclusivement :
49
 
50
```text
51
agenda.json
52
```
53
 
54
---
55
 
56
# Principes de transformation
57
 
58
Chaque colonne SharePoint est transformée en une propriété du JSON.
59
 
60
Le widget consomme ensuite le JSON sans connaître SharePoint.
61
 
62
---
63
 
64
# Identifiant
65
 
66
## SharePoint
67
 
68
```text
69
ID
70
```
71
 
72
## JSON
73
 
74
```json
75
"id": 1
76
```
77
 
78
## Widget
79
 
80
Identifiant technique.
81
 
82
---
83
 
84
# Statut
85
 
86
## SharePoint
87
 
88
```text
89
Statut
90
```
91
 
92
Valeurs :
93
 
94
```text
95
Brouillon
96
Publié
97
```
98
 
99
## JSON
100
 
101
```json
102
"statut": "Publié"
103
```
104
 
105
## Widget
106
 
107
Utilisé pour déterminer la visibilité.
108
 
109
---
110
 
111
# Type d'événement
112
 
113
## SharePoint
114
 
115
```text
116
Type d'événement
117
```
118
 
119
## JSON
120
 
121
```json
122
"type": "Visite atelier"
123
```
124
 
125
## Widget
126
 
127
Affichage :
128
 
129
- carte ;
130
- modale ;
131
- filtres.
132
 
133
---
134
 
135
# Titre
136
 
137
## SharePoint
138
 
139
```text
140
Titre
141
```
142
 
143
## JSON
144
 
145
```json
146
"title": "Initiation au quilling"
147
```
148
 
149
## Widget
150
 
151
Titre principal.
152
 
153
---
154
 
155
# Publics
156
 
157
## SharePoint
158
 
159
```text
160
Publics
161
```
162
 
163
Valeurs :
164
 
165
```text
166
Adulte
167
Famille
168
Jeune public
169
```
170
 
171
## JSON
172
 
173
```json
174
"publics": [
175
"Famille"
176
]
177
```
178
 
179
ou
180
 
181
```json
182
"publics": [
183
"Adulte",
184
"Famille",
185
"Jeune public"
186
]
187
```
188
 
189
---
190
 
191
## Transformation
192
 
193
Si les trois publics sont présents :
194
 
195
```text
196
Adulte
197
Famille
198
Jeune public
199
```
200
 
201
Le widget calcule :
202
 
203
```text
204
Tout public
205
```
206
 
207
---
208
 
209
## Widget
210
 
211
Affichage :
212
 
213
```json
214
"meta": "Tout public"
215
```
216
 
217
ou
218
 
219
```json
220
"meta": "Famille"
221
```
222
 
223
---
224
 
225
# Date début
226
 
227
## SharePoint
228
 
229
```text
230
Date début
231
```
232
 
233
## JSON
234
 
235
```json
236
"dateDebut": "2026-08-21"
237
```
238
 
239
## Widget
240
 
241
Transformé en :
242
 
243
```json
244
"date": "21 AOÛT 2026"
245
"jour": "21"
246
"mois": "AOÛT"
247
"annee": "2026"
248
```
249
 
250
---
251
 
252
# Heure début
253
 
254
## SharePoint
255
 
256
```text
257
Heure début
258
```
259
 
260
## JSON
261
 
262
```json
263
"heureDebut": "14:30"
264
```
265
 
266
## Widget
267
 
268
Transformé en :
269
 
270
```json
271
"heure": "14h30"
272
```
273
 
274
---
275
 
276
# Date fin
277
 
278
## SharePoint
279
 
280
```text
281
Date fin
282
```
283
 
284
## JSON
285
 
286
```json
287
"dateFin": "2026-08-21"
288
```
289
 
290
## Widget
291
 
292
Utilisée pour :
293
 
294
- expositions ;
295
- dépublication automatique.
296
 
297
---
298
 
299
# Heure fin
300
 
301
## SharePoint
302
 
303
```text
304
Heure fin
305
```
306
 
307
## JSON
308
 
309
```json
310
"heureFin": "16:30"
311
```
312
 
313
## Widget
314
 
315
Utilisée pour :
316
 
317
- export ICS ;
318
- dépublication.
319
 
320
---
321
 
322
# Description
323
 
324
## SharePoint
325
 
326
```text
327
Description
328
```
329
 
330
## JSON
331
 
332
```json
333
"description": "..."
334
```
335
 
336
## Widget
337
 
338
Texte principal de la modale.
339
 
340
---
341
 
342
# Âge conseillé
343
 
344
## SharePoint
345
 
346
```text
347
Âge conseillé
348
```
349
 
350
## JSON
351
 
352
```json
353
"ageMinimum": 6
354
```
355
 
356
## Widget
357
 
358
Affichage :
359
 
360
```text
361
À partir de 6 ans
362
```
363
 
364
---
365
 
366
# Durée
367
 
368
## SharePoint
369
 
370
```text
371
Durée
372
```
373
 
374
## JSON
375
 
376
```json
377
"duree": "2h"
378
```
379
 
380
## Widget
381
 
382
Affichage :
383
 
384
```text
385
⏱️ 2h
386
```
387
 
388
---
389
 
390
# Tarif
391
 
392
## SharePoint
393
 
394
```text
395
Tarif
396
```
397
 
398
## JSON
399
 
400
```json
401
"tarif": "5 €"
402
```
403
 
404
## Widget
405
 
406
Bloc Tarif.
407
 
408
---
409
 
410
# Réservation
411
 
412
## SharePoint
413
 
414
```text
415
Réservation
416
```
417
 
418
Valeurs :
419
 
420
```text
421
Oui
422
Non
423
```
424
 
425
## JSON
426
 
427
```json
428
"reservationObligatoire": true
429
```
430
 
431
ou
432
 
433
```json
434
"reservationObligatoire": false
435
```
436
 
437
## Widget
438
 
439
Détermine l'affichage du bloc :
440
 
441
```text
442
RÉSERVATION
443
```
444
 
445
---
446
 
447
# Téléphone
448
 
449
## SharePoint
450
 
451
```text
452
Téléphone
453
```
454
 
455
## JSON
456
 
457
```json
458
"telephone": "05 59 27 33 02"
459
```
460
 
461
## Widget
462
 
463
Bloc Réservation.
464
 
465
---
466
 
467
# Email
468
 
469
## SharePoint
470
 
471
```text
472
Email
473
```
474
 
475
## JSON
476
 
477
```json
478
"email": "contact@musee.fr"
479
```
480
 
481
## Widget
482
 
483
Bloc Réservation.
484
 
485
---
486
 
487
# Lien
488
 
489
## SharePoint
490
 
491
```text
492
Lien
493
```
494
 
495
## JSON
496
 
497
```json
498
"lienComplementaire": "https://..."
499
```
500
 
501
## Widget
502
 
503
Bouton :
504
 
505
```text
506
En savoir plus
507
```
508
 
509
ou lien de réservation.
510
 
511
---
512
 
513
# Visuel
514
 
515
## SharePoint
516
 
517
```text
518
Visuel
519
```
520
 
521
Type :
522
 
523
```text
524
Image
525
```
526
 
527
## JSON
528
 
529
```json
530
"image": "images/atelier.jpg"
531
```
532
 
533
ou URL publique.
534
 
535
## Widget
536
 
537
Affichage :
538
 
539
- carte ;
540
- modale ;
541
- agenda complet.
542
 
543
---
544
 
545
# Cas particulier : Exposition
546
 
547
## SharePoint
548
 
549
Date début
550
 
551
Date fin
552
 
553
## JSON
554
 
555
```json
556
"type": "Exposition"
557
```
558
 
559
## Widget
560
 
561
Affichage :
562
 
563
```text
564
18 SEPT. 2026
565
—
566
15 JANV. 2027
567
```
568
 
569
au lieu d'une heure unique.
570
 
571
---
572
 
573
# Publication
574
 
575
## Conditions
576
 
577
```text
578
Statut = Publié
579
```
580
 
581
ET
582
 
583
```text
584
Date/Heure fin > maintenant
585
```
586
 
587
---
588
 
589
# Résultat
590
 
591
Événement affiché.
592
 
593
---
594
 
595
# Brouillon
596
 
597
## Conditions
598
 
599
```text
600
Statut = Brouillon
601
```
602
 
603
## Résultat
604
 
605
Invisible dans le widget.
606
 
607
---
608
 
609
# Événement terminé
610
 
611
## Conditions
612
 
613
```text
614
Date/heure fin dépassée
615
```
616
 
617
## Résultat
618
 
619
Invisible dans le widget.
620
 
621
Conservé dans Microsoft Lists.
622
 
623
---
624
 
625
# Référence
626
 
627
Ce document constitue la référence officielle de transformation des données entre :
628
 
629
```text
630
Microsoft Lists
631
↓
632
agenda.json
633
↓
634
Widget Agenda MBA
635
```