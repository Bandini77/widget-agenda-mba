# Modèle SharePoint – Agenda du Musée des Beaux-Arts de Pau
2
 
3
## Objectif
4
 
5
Permettre l'administration autonome de la programmation culturelle du Musée des Beaux-Arts de Pau sans modification du code du widget.
6
 
7
Chaque événement est enregistré dans une liste SharePoint.
8
 
9
Une ligne SharePoint correspond à une occurrence d'événement.
10
 
11
Exemple :
12
 
13
- Sieste musicale du 10 mars = 1 ligne
14
- Sieste musicale du 12 avril = 1 ligne
15
- Sieste musicale du 15 mai = 1 ligne
16
 
17
---
18
 
19
# Structure de la liste
20
 
21
## Titre
22
 
23
Nom interne :
24
 
25
Titre
26
 
27
Type :
28
 
29
Texte simple
30
 
31
Obligatoire :
32
 
33
Oui
34
 
35
Exemple :
36
 
37
Visite commentée – Berthe Morisot
38
 
39
---
40
 
41
## Type d'activité
42
 
43
Nom interne :
44
 
45
TypeActivite
46
 
47
Type :
48
 
49
Liste déroulante
50
 
51
Obligatoire :
52
 
53
Oui
54
 
55
Valeurs autorisées :
56
 
57
- Arrêt sur œuvre
58
- Concert
59
- Conférence
60
- Événement national
61
- Exposition
62
- Jeu de l'oie
63
- Memory
64
- Rencontre
65
- Sieste musicale
66
- Spectacle
67
- Vernissage
68
- Visite atelier
69
- Visite commentée
70
- Visite contée
71
- Visite flash
72
 
73
---
74
 
75
## Public
76
 
77
Nom interne :
78
 
79
Public
80
 
81
Type :
82
 
83
Liste déroulante
84
 
85
Obligatoire :
86
 
87
Oui
88
 
89
Valeurs autorisées :
90
 
91
- Adulte
92
- Famille
93
- Jeune public
94
 
95
---
96
 
97
## Âge minimum
98
 
99
Nom interne :
100
 
101
AgeMinimum
102
 
103
Type :
104
 
105
Nombre entier
106
 
107
Obligatoire :
108
 
109
Non
110
 
111
Exemples :
112
 
113
- 3
114
- 5
115
- 8
116
- 12
117
 
118
Affichage automatique :
119
 
120
À partir de X ans
121
 
122
---
123
 
124
## Date de début
125
 
126
Nom interne :
127
 
128
DateDebut
129
 
130
Type :
131
 
132
Date / Heure
133
 
134
Obligatoire :
135
 
136
Oui
137
 
138
---
139
 
140
## Heure de début
141
 
142
Nom interne :
143
 
144
HeureDebut
145
 
146
Type :
147
 
148
Date / Heure
149
 
150
Obligatoire :
151
 
152
Oui
153
 
154
---
155
 
156
## Date de fin
157
 
158
Nom interne :
159
 
160
DateFin
161
 
162
Type :
163
 
164
Date / Heure
165
 
166
Obligatoire :
167
 
168
Non
169
 
170
Utilisée principalement pour :
171
 
172
- expositions
173
- événements multi-jours
174
 
175
---
176
 
177
## Heure de fin
178
 
179
Nom interne :
180
 
181
HeureFin
182
 
183
Type :
184
 
185
Date / Heure
186
 
187
Obligatoire :
188
 
189
Non
190
 
191
---
192
 
193
## Lieu
194
 
195
Nom interne :
196
 
197
Lieu
198
 
199
Type :
200
 
201
Texte simple
202
 
203
Obligatoire :
204
 
205
Non
206
 
207
Cas d'usage :
208
 
209
- Auditorium
210
- Salle pédagogique
211
- Hors les murs
212
- Château de Pau
213
 
214
Par défaut :
215
 
216
vide
217
 
218
---
219
 
220
## Tarif
221
 
222
Nom interne :
223
 
224
Tarif
225
 
226
Type :
227
 
228
Texte simple
229
 
230
Obligatoire :
231
 
232
Oui
233
 
234
Exemples :
235
 
236
- Gratuit
237
- 5 €
238
- Tarif spécifique
239
 
240
---
241
 
242
## Modalité d'accès
243
 
244
Nom interne :
245
 
246
ModaliteAcces
247
 
248
Type :
249
 
250
Liste déroulante
251
 
252
Obligatoire :
253
 
254
Oui
255
 
256
Valeurs autorisées :
257
 
258
- Réservation obligatoire
259
- Sans réservation
260
- Accès libre
261
 
262
---
263
 
264
## Téléphone
265
 
266
Nom interne :
267
 
268
Telephone
269
 
270
Type :
271
 
272
Texte simple
273
 
274
Obligatoire :
275
 
276
Non
277
 
278
---
279
 
280
## Email
281
 
282
Nom interne :
283
 
284
Email
285
 
286
Type :
287
 
288
Texte simple
289
 
290
Obligatoire :
291
 
292
Non
293
 
294
---
295
 
296
## Description
297
 
298
Nom interne :
299
 
300
Description
301
 
302
Type :
303
 
304
Texte multiligne
305
 
306
Obligatoire :
307
 
308
Oui
309
 
310
---
311
 
312
## Lien complémentaire
313
 
314
Nom interne :
315
 
316
LienComplementaire
317
 
318
Type :
319
 
320
Hyperlien
321
 
322
Obligatoire :
323
 
324
Non
325
 
326
Exemple :
327
 
328
Page d'exposition
329
 
330
Billetterie
331
 
332
OpenAgenda
333
 
334
---
335
 
336
## Image
337
 
338
Nom interne :
339
 
340
Image
341
 
342
Type :
343
 
344
Image SharePoint
345
 
346
Obligatoire :
347
 
348
Oui
349
 
350
Règle :
351
 
352
Aucun événement ne doit être publié sans image.
353
 
354
---
355
 
356
## Statut
357
 
358
Nom interne :
359
 
360
Statut
361
 
362
Type :
363
 
364
Liste déroulante
365
 
366
Obligatoire :
367
 
368
Oui
369
 
370
Valeurs autorisées :
371
 
372
- Brouillon
373
- Publié
374
- Archivé
375
 
376
---
377
 
378
# Règles métier
379
 
380
## PMR
381
 
382
Tous les événements sont considérés accessibles PMR.
383
 
384
Aucune colonne spécifique.
385
 
386
Affichage automatique du pictogramme PMR dans le widget.
387
 
388
---
389
 
390
## Archivage
391
 
392
Lorsque la date de fin est dépassée :
393
 
394
- l'événement est automatiquement retiré de l'agenda
395
- l'événement reste stocké dans SharePoint
396
- le statut peut évoluer vers Archivé
397
 
398
---
399
 
400
## Brouillons
401
 
402
Les brouillons :
403
 
404
- ne sont pas visibles du public
405
- restent visibles aux administrateurs du SharePoint
406
 
407
---
408
 
409
## Publication
410
 
411
Par défaut :
412
 
413
Publication immédiate après création.
414
 
415
Évolution possible :
416
 
417
Ajout ultérieur d'une date de publication programmée.
418
 
419
---
420
 
421
## Images
422
 
423
Image obligatoire pour toute publication.
424
 
425
---
426
 
427
## Expositions
428
 
429
Les expositions utilisent exactement la même structure de données que les autres événements.
430
 
431
La différence d'affichage est gérée par le widget.
432
 
433
---
434
 
435
## Événements récurrents
436
 
437
Un événement récurrent n'est pas géré automatiquement.
438
 
439
Chaque occurrence correspond à une ligne distincte.
440
 
441
Exemple :
442
 
443
Sieste musicale
444
 
445
- 10 mars
446
- 12 avril
447
- 15 mai
448
 
449
=
450
 
451
3 lignes SharePoint
452
 
453
---
454
 
455
## Administration
456
 
457
Plusieurs administrateurs peuvent intervenir sur la liste.
458
 
459
Le partage des brouillons est autorisé.
460
 
461
L'objectif est de permettre une continuité de gestion de la programmation culturelle.
462
 
463
---
464
 
465
# Évolutions futures possibles
466
 
467
## Places disponibles
468
 
469
Éventuelle colonne :
470
 
471
NombrePlaces
472
 
473
ou
474
 
475
Capacite
476
 
477
Non prévue pour la V1.
478
 
479
---
480
 
481
## Publication programmée
482
 
483
Éventuelle colonne :
484
 
485
DatePublication
486
 
487
Non prévue pour la V1.
488
 
489
---
490
 
491
## Synchronisation billetterie
492
 
493
Non prévue pour la V1.
494
 
495
À étudier ultérieurement.