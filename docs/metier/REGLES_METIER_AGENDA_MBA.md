# RÈGLES MÉTIER – AGENDA MBA
2
 
3
Version : 2.0
4
 
5
Date : 28 juillet 2026
6
 
7
Statut : Validée
8
 
9
---
10
 
11
# Objet du document
12
 
13
Ce document définit les règles métier utilisées par l'Agenda du Musée des Beaux-Arts de Pau.
14
 
15
Il constitue la référence fonctionnelle du projet.
16
 
17
Toute évolution du widget, de la liste Microsoft Lists ou du fichier agenda.json doit respecter les règles décrites dans ce document.
18
 
19
---
20
 
21
# Principes généraux
22
 
23
Le projet repose sur les principes suivants :
24
 
25
- simplicité ;
26
- autonomie des équipes métier ;
27
- faible maintenance ;
28
- documentation complète ;
29
- séparation entre administration et diffusion.
30
 
31
L'objectif est d'éviter toute intervention dans le code du widget pour administrer les événements.
32
 
33
---
34
 
35
# Gestion des événements
36
 
37
## Une occurrence = une ligne
38
 
39
Chaque occurrence d'un événement doit correspondre à une ligne distincte dans Microsoft Lists.
40
 
41
Exemple :
42
 
43
```text
44
Sieste musicale
45
 
46
10 mars
47
12 avril
48
15 mai
49
```
50
 
51
correspond à :
52
 
53
```text
54
3 lignes différentes
55
```
56
 
57
Aucune gestion automatique des récurrences n'est prévue dans la V1.
58
 
59
---
60
 
61
# Publics
62
 
63
## Valeurs autorisées
64
 
65
Les publics sont saisis dans Microsoft Lists via un champ à choix multiples.
66
 
67
Valeurs autorisées :
68
 
69
- Adulte
70
- Famille
71
- Jeune public
72
 
73
---
74
 
75
## Valeur Tout public
76
 
77
La valeur :
78
 
79
```text
80
Tout public
81
```
82
 
83
n'est jamais enregistrée dans Microsoft Lists.
84
 
85
Elle est calculée automatiquement par le widget.
86
 
87
---
88
 
89
## Calcul de Tout public
90
 
91
Si les trois publics suivants sont sélectionnés :
92
 
93
- Adulte
94
- Famille
95
- Jeune public
96
 
97
alors le widget affiche :
98
 
99
```text
100
Tout public
101
```
102
 
103
---
104
 
105
# Filtres publics
106
 
107
## Tout public
108
 
109
Le filtre :
110
 
111
```text
112
Tout public
113
```
114
 
115
affiche tous les événements.
116
 
117
Il s'agit d'un filtre global.
118
 
119
---
120
 
121
## Adulte
122
 
123
Affiche tous les événements contenant :
124
 
125
```text
126
Adulte
127
```
128
 
129
Exemples :
130
 
131
```text
132
Adulte
133
```
134
 
135
ou
136
 
137
```text
138
Adulte + Famille + Jeune public
139
```
140
 
141
---
142
 
143
## Famille
144
 
145
Affiche tous les événements contenant :
146
 
147
```text
148
Famille
149
```
150
 
151
Exemples :
152
 
153
```text
154
Famille
155
```
156
 
157
ou
158
 
159
```text
160
Adulte + Famille + Jeune public
161
```
162
 
163
---
164
 
165
## Jeune public
166
 
167
Affiche tous les événements contenant :
168
 
169
```text
170
Jeune public
171
```
172
 
173
Exemples :
174
 
175
```text
176
Jeune public
177
```
178
 
179
ou
180
 
181
```text
182
Adulte + Famille + Jeune public
183
```
184
 
185
---
186
 
187
# Recherche
188
 
189
La recherche porte sur :
190
 
191
- le titre ;
192
- le type d'événement ;
193
- le public ;
194
- la description.
195
 
196
---
197
 
198
## Gestion des majuscules et accents
199
 
200
La recherche doit être insensible :
201
 
202
- aux majuscules ;
203
- aux minuscules ;
204
- aux accents.
205
 
206
Exemples :
207
 
208
```text
209
tout public
210
Tout Public
211
TOUT PUBLIC
212
```
213
 
214
doivent produire le même résultat.
215
 
216
---
217
 
218
# PMR
219
 
220
Tous les événements sont considérés comme accessibles PMR.
221
 
222
Aucune donnée spécifique n'est demandée dans Microsoft Lists.
223
 
224
Le pictogramme PMR est affiché automatiquement dans le widget.
225
 
226
---
227
 
228
# Âge conseillé
229
 
230
## Stockage
231
 
232
Champ :
233
 
234
```text
235
Âge conseillé
236
```
237
 
238
Type :
239
 
240
```text
241
Nombre
242
```
243
 
244
Exemples :
245
 
246
```text
247
6
248
8
249
12
250
```
251
 
252
---
253
 
254
## Affichage
255
 
256
Le widget affiche automatiquement :
257
 
258
```text
259
À partir de 6 ans
260
```
261
 
262
à partir de la valeur stockée.
263
 
264
---
265
 
266
# Durée
267
 
268
## Stockage
269
 
270
Champ :
271
 
272
```text
273
Durée
274
```
275
 
276
Type :
277
 
278
```text
279
Texte simple
280
```
281
 
282
Exemples :
283
 
284
```text
285
45 min
286
1 h
287
1 h 30
288
2 h
289
Toute la journée
290
En continu
291
```
292
 
293
---
294
 
295
## Affichage
296
 
297
La durée apparaît dans l'en-tête de la modale.
298
 
299
Exemple :
300
 
301
```text
302
📅 19 SEPT. 2026 • 🕒 14h30 • ⏱️ 1 h 30
303
```
304
 
305
Si aucune durée n'est renseignée, elle n'est pas affichée.
306
 
307
---
308
 
309
# Tarif
310
 
311
## Stockage
312
 
313
Champ texte libre.
314
 
315
Exemples :
316
 
317
```text
318
Gratuit
319
5 €
320
Tarif réduit
321
Adulte accompagnateur : 5 €
322
```
323
 
324
---
325
 
326
## Affichage
327
 
328
Le widget affiche le texte tel qu'il est saisi.
329
 
330
---
331
 
332
# Réservation
333
 
334
## Stockage
335
 
336
Champ :
337
 
338
```text
339
Réservation
340
```
341
 
342
Type :
343
 
344
```text
345
Choix
346
```
347
 
348
Valeurs :
349
 
350
- Oui
351
- Non
352
 
353
--- réservation
354
 
355
Si Réservation = Oui

Le widget affiche le bloc :

SUR RÉSERVATION

avec les informations disponibles :

- téléphone ;
- email ;
- lien.
## Réservation = Non
380
 
381
Le bloc :
382
 
383
```text
384
RÉSERVATION
385
```
386
 
387
est totalement masqué.
388
 
389
---
390
 
391
# Téléphone
392
 
393
Champ texte libre.
394
 
395
Format recommandé :
396
 
397
```text
398
05 59 27 33 02
399
```
400
 
401
Les espaces sont utilisés.
402
 
403
Les points ne sont pas utilisés.
404
 
405
---
406
 
407
# Email
408
 
409
Champ texte libre.
410
 
411
Utilisé pour les réservations ou le contact.
412
 
413
---
414
 
415
# Lien
416
 
417
Champ hyperlien.
418
 
419
Utilisé pour :
420
 
421
- réservation en ligne ;
422
- information complémentaire ;
423
- réservation partenaire.
424
 
425
---
426
 
427
# Images
428
 
429
## Principe
430
 
431
Chaque événement possède un visuel.
432
 
433
Le visuel est stocké via le champ :
434
 
435
```text
436
Visuel
437
```
438
 
439
---
440
 
441
## Sources possibles
442
 
443
- photothèque MBA ;
444
- graphistes ;
445
- partenaires ;
446
- réseau Ville ;
447
- production interne.
448
 
449
---
450
 
451
## Pièces jointes
452
 
453
Les pièces jointes SharePoint sont désactivées.
454
 
455
Elles ne sont pas utilisées dans le projet.
456
 
457
---
458
 
459
# Affichage du widget accueil
460
 
461
Le widget d'accueil affiche :
462
 
463
```text
464
4 événements maximum
465
```
466
 
467
correspondant aux prochains événements publiés.
468
 
469
---
470
 
471
# Affichage de l'agenda complet
472
 
473
L'agenda complet affiche :
474
 
475
```text
476
Tous les événements publiés
477
dont la date de fin n'est pas dépassée.
478
```
479
 
480
---
481
 
482
# Cas particulier : Exposition
483
 
484
Les expositions sont affichées différemment des événements ponctuels.
485
 
486
Affichage :
487
 
488
```text
489
18 SEPT. 2026
490
—
491
15 JANV. 2027
492
```
493
 
494
au lieu d'une date et heure uniques.
495
 
496
---
497
 
498
# Publication
499
 
500
Un événement est visible dans le widget si :
501
 
502
```text
503
Statut = Publié
504
```
505
 
506
ET
507
 
508
```text
509
Date/heure de fin > maintenant
510
```
511
 
512
---
513
 
514
# Brouillon
515
 
516
Un événement en brouillon :
517
 
518
- reste visible dans Microsoft Lists ;
519
- reste invisible dans le widget.
520
 
521
---
522
 
523
# Événement terminé
524
 
525
Un événement terminé :
526
 
527
- disparaît automatiquement du widget ;
528
- reste conservé dans Microsoft Lists.
529
 
530
---
531
 
532
# Archivage
533
 
534
Aucun statut :
535
 
536
```text
537
Archivé
538
```
539
 
540
n'est prévu.
541
 
542
Microsoft Lists constitue l'historique de programmation.
543
 
544
---
545
 
546
# Diffusion des données
547
 
548
## Administration
549
 
550
Les événements sont administrés dans :
551
 
552
```text
553
Microsoft Lists
554
```
555
 
556
---
557
 
558
## Diffusion
559
 
560
Le widget consomme les données via :
561
 
562
```text
563
agenda.json
564
```
565
 
566
---
567
 
568
## Règle
569
 
570
Aucun événement ne doit être codé manuellement dans :
571
 
572
```javascript
573
script.js
574
```
575
 
576
Les données diffusées doivent provenir exclusivement du fichier :
577
 
578
```text
579
agenda.json
580
```
581
 
582
---
583
 
584
# Philosophie du projet
585
 
586
Toute évolution doit respecter les principes suivants :
587
 
588
- simplicité ;
589
- lisibilité ;
590
- maintenabilité ;
591
- autonomie métier ;
592
- gratuité ;
593
- documentation.
594
 
595
Une solution simple doit toujours être préférée à une solution complexe.