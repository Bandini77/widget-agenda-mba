# MAPPING SHAREPOINT → WIDGET MBA
2
 
3
Version : 1.0
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
Définir la correspondance entre les données stockées dans Microsoft Lists et les éléments affichés dans le widget Agenda MBA.
14
 
15
Ce document constitue la référence technique pour l'intégration SharePoint ↔ Widget.
16
 
17
---
18
 
19
# Principe général
20
 
21
Source de vérité :
22
 
23
Microsoft Lists
24
 
25
Liste :
26
 
27
Agenda MBA
28
 
29
Le widget ne contient plus d'événements codés en dur.
30
 
31
Toutes les informations affichées proviennent de la liste SharePoint.
32
 
33
---
34
 
35
# Carte événement
36
 
37
## Visuel
38
 
39
Champ SharePoint :
40
 
41
Visuel
42
 
43
Affichage :
44
 
45
Image de la carte.
46
 
47
---
48
 
49
## Type d'événement
50
 
51
Champ SharePoint :
52
 
53
Type d'événement
54
 
55
Affichage :
56
 
57
Catégorie affichée au-dessus du titre.
58
 
59
Exemple :
60
 
61
Visite commentée
62
 
63
Concert
64
 
65
Exposition
66
 
67
---
68
 
69
## Titre
70
 
71
Champ SharePoint :
72
 
73
Titre
74
 
75
Affichage :
76
 
77
Titre principal de la carte.
78
 
79
---
80
 
81
## Public
82
 
83
Champ SharePoint :
84
 
85
Publics concernés
86
 
87
Affichage :
88
 
89
- Adulte
90
- Famille
91
- Jeune public
92
- Tout public
93
 
94
---
95
 
96
### Règle Tout public
97
 
98
Si les trois publics sont sélectionnés :
99
 
100
- Adulte
101
- Famille
102
- Jeune public
103
 
104
Le widget affiche :
105
 
106
Tout public
107
 
108
---
109
 
110
## Date
111
 
112
Champ SharePoint :
113
 
114
Date début
115
 
116
Affichage :
117
 
118
Date visible sur la carte.
119
 
120
---
121
 
122
## Heure
123
 
124
Champ SharePoint :
125
 
126
Heure début
127
 
128
Affichage :
129
 
130
Horaire visible sur la carte.
131
 
132
---
133
 
134
# Modale événement
135
 
136
## Visuel
137
 
138
Champ SharePoint :
139
 
140
Visuel
141
 
142
Affichage :
143
 
144
Image d'en-tête de la modale.
145
 
146
---
147
 
148
## Type d'événement
149
 
150
Champ SharePoint :
151
 
152
Type d'événement
153
 
154
Affichage :
155
 
156
Catégorie.
157
 
158
---
159
 
160
## Titre
161
 
162
Champ SharePoint :
163
 
164
Titre
165
 
166
Affichage :
167
 
168
Titre principal.
169
 
170
---
171
 
172
## Public
173
 
174
Champ SharePoint :
175
 
176
Publics concernés
177
 
178
Affichage :
179
 
180
- Adulte
181
- Famille
182
- Jeune public
183
- Tout public
184
 
185
---
186
 
187
## Âge conseillé
188
 
189
Champ SharePoint :
190
 
191
Âge conseillé
192
 
193
Valeur stockée :
194
 
195
6
196
 
197
Affichage :
198
 
199
À partir de 6 ans
200
 
201
---
202
 
203
## PMR
204
 
205
Aucune donnée SharePoint.
206
 
207
Affichage automatique.
208
 
209
Tous les événements sont considérés accessibles PMR.
210
 
211
---
212
 
213
## Date
214
 
215
Champ SharePoint :
216
 
217
Date début
218
 
219
Affichage :
220
 
221
📅 19 SEPT. 2026
222
 
223
---
224
 
225
## Horaire
226
 
227
Champ SharePoint :
228
 
229
Heure début
230
 
231
Affichage :
232
 
233
🕒 14h30
234
 
235
---
236
 
237
## Durée
238
 
239
Champ SharePoint :
240
 
241
Durée
242
 
243
Affichage :
244
 
245
⏱️ 1 h 30
246
 
247
---
248
 
249
### Affichage de l'en-tête
250
 
251
Les informations suivantes apparaissent sur une même ligne visuelle :
252
 
253
📅 Date
254
 
255
🕒 Horaire
256
 
257
⏱️ Durée
258
 
259
Exemple :
260
 
261
📅 19 SEPT. 2026 • 🕒 14h30 • ⏱️ 1 h 30
262
 
263
---
264
 
265
## Description
266
 
267
Champ SharePoint :
268
 
269
Description
270
 
271
Affichage :
272
 
273
Texte principal de la modale.
274
 
275
---
276
 
277
## Tarif
278
 
279
Champ SharePoint :
280
 
281
Tarif
282
 
283
Affichage :
284
 
285
Bloc Tarif.
286
 
287
Exemples :
288
 
289
- Gratuit
290
- 5 €
291
- Adulte accompagnateur : 5 €
292
 
293
---
294
 
295
# Réservation
296
 
297
## Champ SharePoint
298
 
299
Réservation
300
 
301
Valeurs :
302
 
303
- Oui
304
- Non
305
 
306
---
307
 
308
## Réservation = Oui
309
 
310
Le widget affiche le bloc :
311
 
312
RÉSERVATION
313
 
314
et affiche les informations disponibles :
315
 
316
- Téléphone
317
- Email
318
- Lien
319
 
320
---
321
 
322
## Réservation = Non
323
 
324
Le widget masque complètement le bloc :
325
 
326
RÉSERVATION
327
 
328
---
329
 
330
## Téléphone
331
 
332
Champ SharePoint :
333
 
334
Téléphone
335
 
336
Affichage :
337
 
338
Bloc Réservation.
339
 
340
---
341
 
342
## Email
343
 
344
Champ SharePoint :
345
 
346
Email
347
 
348
Affichage :
349
 
350
Bloc Réservation.
351
 
352
---
353
 
354
## Lien
355
 
356
Champ SharePoint :
357
 
358
Lien
359
 
360
Affichage :
361
 
362
Bouton ou lien de réservation.
363
 
364
---
365
 
366
# Partage
367
 
368
Le widget conserve :
369
 
370
- Partage par email
371
- Copie de lien
372
- Export calendrier ICS
373
 
374
Aucune donnée SharePoint spécifique n'est nécessaire.
375
 
376
---
377
 
378
# Publication
379
 
380
## Événement visible
381
 
382
Conditions :
383
 
384
Statut = Publié
385
 
386
ET
387
 
388
Date/Heure de fin > maintenant
389
 
390
---
391
 
392
## Brouillon
393
 
394
Conditions :
395
 
396
Statut = Brouillon
397
 
398
Résultat :
399
 
400
Invisible dans le widget.
401
 
402
Visible dans SharePoint.
403
 
404
---
405
 
406
## Événement terminé
407
 
408
Conditions :
409
 
410
Date/Heure de fin < maintenant
411
 
412
Résultat :
413
 
414
Invisible dans le widget.
415
 
416
Toujours conservé dans SharePoint.
417
 
418
---
419
 
420
# Gestion des publics
421
 
422
## Valeurs stockées
423
 
424
- Adulte
425
- Famille
426
- Jeune public
427
 
428
Le statut :
429
 
430
Tout public
431
 
432
n'est jamais stocké.
433
 
434
---
435
 
436
## Calcul automatique
437
 
438
Si les trois publics sont sélectionnés :
439
 
440
- Adulte
441
- Famille
442
- Jeune public
443
 
444
Affichage :
445
 
446
Tout public
447
 
448
---
449
 
450
# Filtres
451
 
452
## Tout public
453
 
454
Affiche tous les événements.
455
 
456
---
457
 
458
## Adulte
459
 
460
Affiche tous les événements contenant :
461
 
462
Adulte
463
 
464
---
465
 
466
## Famille
467
 
468
Affiche tous les événements contenant :
469
 
470
Famille
471
 
472
---
473
 
474
## Jeune public
475
 
476
Affiche tous les événements contenant :
477
 
478
Jeune public
479
 
480
---
481
 
482
# Recherche
483
 
484
La recherche porte sur :
485
 
486
- le titre ;
487
- le type d'événement ;
488
- les publics ;
489
- la description.
490
 
491
---
492
 
493
# Architecture cible
494
 
495
Microsoft Lists
496
↓
497
Agenda MBA
498
↓
499
Widget Agenda
500
↓
501
Site musee.pau.fr
502
 
503
---
504
 
505
# État
506
 
507
Modèle validé.
508
 
509
Prochaine étape :
510
 
511
Connexion Microsoft Lists → Widget Agenda MBA.