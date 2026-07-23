# Widget Agenda MBA - Roadmap
2
 
3
---
4
 
5
# ✅ V2.20.6 - Rééquilibrage des cartes
6
 
7
## Cartes
8
 
9
- Réorganisation Image / Date / Contenu
10
- Harmonisation avec la maquette MBA
11
- Réduction des espaces inutiles
12
- Rééquilibrage du bouton "+"
13
- Hiérarchisation visuelle améliorée
14
 
15
## Informations
16
 
17
- Harmonisation du type d'activité
18
- Harmonisation des publics
19
- Intégration des icônes Lucide
20
 
21
---
22
 
23
# ✅ V2.20.7 - Refonte des filtres
24
 
25
## Structure
26
 
27
- Panneaux rattachés aux boutons
28
- Suppression des positions fixes
29
- Réorganisation des filtres
30
 
31
## Public
32
 
33
### Logique métier
34
 
35
Tout public =
36
 
37
- Adulte
38
- Famille
39
- Jeune public
40
 
41
### Comportement
42
 
43
- Cocher Tout public sélectionne les trois catégories
44
- Cocher les trois catégories active Tout public
45
- Décocher une catégorie désactive Tout public
46
 
47
## Type d'activité
48
 
49
- Nettoyage visuel
50
- Suppression des boutons inutiles
51
- Harmonisation des comportements
52
 
53
## Quand
54
 
55
- Refonte complète
56
- Période personnalisée
57
- Affichage conditionnel des dates
58
- Harmonisation des icônes
59
 
60
## Correctifs
61
 
62
- Réinitialisation des filtres
63
- Icônes Lucide
64
- Flèches d'ouverture / fermeture
65
 
66
---
67
 
68
# ✅ V2.20.8 - Modale événement
69
 
70
## Design
71
 
72
- Suppression des derniers emojis
73
- Harmonisation des espacements
74
- Harmonisation du footer
75
 
76
## Public
77
 
78
Exemples :
79
 
80
👥 Tout public
81
 
82
👥 Jeune public • À partir de 6 ans
83
 
84
## Âge minimum
85
 
86
Champ :
87
 
88
ageMinimum
89
 
90
Affichage :
91
 
92
- À partir de 5 ans
93
- À partir de 6 ans
94
- À partir de 8 ans
95
- À partir de 12 ans
96
 
97
## Expositions
98
 
99
### Carte
100
 
101
18
102
SEPT.
103
2026
104
 
105
—
106
 
107
15
108
JANV.
109
2027
110
 
111
### Modale
112
 
113
Du 18 septembre 2026
114
au 15 janvier 2027
115
 
116
## Réservation conditionnelle
117
 
118
Si :
119
 
120
reservationObligatoire = false
121
 
122
Alors :
123
 
124
bloc Réservation masqué
125
 
126
## Lien complémentaire
127
 
128
Affichage :
129
 
130
En savoir plus →
131
 
132
si lienComplementaire est renseigné.
133
 
134
---
135
 
136
# ✅ V2.21 - Recherche globale (validée)
137
 
138
## Accueil
139
 
140
Afficher uniquement :
141
 
142
4 événements
143
 
144
## Recherche
145
 
146
Recherche dans :
147
 
148
- Titre
149
- Description
150
- Type
151
- Public
152
 
153
## Filtres
154
 
155
Les filtres recherchent dans toute la programmation.
156
 
157
## Réinitialisation
158
 
159
Retour automatique à :
160
 
161
4 événements visibles
162
 
163
## Navigation
164
 
165
Bouton :
166
 
167
CONSULTER TOUT L’AGENDA →
168
 
169
toujours visible.
170
 
171
## Correctifs
172
 
173
- Suppression des anciennes références "quand-date"
174
- Nettoyage des erreurs JavaScript
175
- Console propre
176
- Recherche combinée avec filtres validée
177
 
178
---
179
 
180
# 🚧 V2.21-beta3
181
 
182
## Limitation des résultats
183
 
184
### Accueil
185
 
186
Sans filtre :
187
 
188
4 événements
189
 
190
### Recherche ou filtres
191
 
192
Afficher :
193
 
194
Maximum 8 résultats
195
 
196
## Résultats
197
 
198
Si plus de 8 résultats existent :
199
 
200
Exemple :
201
 
202
25 résultats trouvés
203
 
204
CONSULTER TOUT L’AGENDA →
205
 
206
## Objectif
207
 
208
- Préserver la lisibilité de la page d'accueil
209
- Éviter les listes interminables
210
- Donner accès à toute la programmation
211
 
212
---
213
 
214
# 🚧 V2.21-beta4
215
 
216
## UX des filtres
217
 
218
### Fermeture automatique
219
 
220
Fermer les panneaux :
221
 
222
- Type d’activité
223
- Pour qui
224
- Quand
225
 
226
lors d'un clic en dehors du panneau.
227
 
228
### Objectif
229
 
230
Comportement conforme aux standards actuels.
231
 
232
---
233
 
234
# 🚧 V2.22 - Page Agenda complète
235
 
236
## Nouvelle page
237
 
238
agenda.html
239
 
240
## Comportement
241
 
242
Affichage :
243
 
244
- Toute la programmation
245
- Recherche
246
- Filtres
247
 
248
## Objectif
249
 
250
Donner une destination réelle au bouton :
251
 
252
CONSULTER TOUT L’AGENDA →
253
 
254
## Réutilisation
255
 
256
Même moteur que l'accueil :
257
 
258
- cartes
259
- modales
260
- filtres
261
- recherche
262
 
263
---
264
 
265
# 🚧 V2.23 - Responsive
266
 
267
## Tablette
268
 
269
- Cartes
270
- Filtres
271
- Modales
272
 
273
## Mobile
274
 
275
- Réorganisation verticale
276
- Optimisation tactile
277
- Tests utilisateurs
278
 
279
---
280
 
281
# 🚀 V3 - SharePoint
282
 
283
## Liste SharePoint
284
 
285
Nom :
286
 
287
Agenda MBA
288
 
289
## Principe
290
 
291
1 ligne = 1 événement
292
 
293
## Colonnes
294
 
295
Titre
296
 
297
Type d’activité
298
 
299
Publics concernés
300
 
301
Âge minimum
302
 
303
Date début
304
 
305
Heure début
306
 
307
Date fin
308
 
309
Heure fin
310
 
311
Lieu
312
 
313
Tarif
314
 
315
Réservation obligatoire
316
 
317
Téléphone
318
 
319
Email
320
 
321
Description
322
 
323
Lien complémentaire
324
 
325
Image
326
 
327
Statut
328
 
329
---
330
 
331
## Publics
332
 
333
Valeurs :
334
 
335
- Adulte
336
- Famille
337
- Jeune public
338
 
339
Le widget calcule automatiquement :
340
 
341
Tout public
342
 
343
si les trois catégories sont sélectionnées.
344
 
345
---
346
 
347
## Lieu
348
 
349
Champ facultatif.
350
 
351
Le lieu n'est affiché que lorsqu'il est renseigné.
352
 
353
Exemples :
354
 
355
- Hors les murs
356
- Château de Pau
357
- Auditorium
358
- Médiathèque
359
 
360
Si vide :
361
 
362
aucun affichage.
363
 
364
---
365
 
366
## Statuts
367
 
368
- Brouillon
369
- Publié
370
- Archivé
371
 
372
---
373
 
374
## Archivage
375
 
376
Si date dépassée :
377
 
378
- événement masqué
379
- événement conservé
380
 
381
---
382
 
383
## Images
384
 
385
Format recommandé :
386
 
387
- JPG
388
- Paysage
389
- 1200 x 900 px
390
- < 2 Mo
391
 
392
---
393
 
394
# 🚀 V3.1 - Administration
395
 
396
## Objectif
397
 
398
Administration sans toucher au code.
399
 
400
## Actions
401
 
402
- Ajouter
403
- Modifier
404
- Archiver
405
- Dupliquer
406
 
407
un événement.
408
 
409
---
410
 
411
## Nouveaux types d'activité
412
 
413
Le widget doit accepter automatiquement :
414
 
415
- Sieste musicale
416
- Activité bien-être
417
- Tout nouveau type créé dans SharePoint
418
 
419
Sans développement spécifique.
420
 
421
Un filtre dédié n'est créé que lorsque l'activité devient récurrente dans la programmation du MBA.
422
 
423
---
424
 
425
# ✅ Types d'activité actuels
426
 
427
- Arrêt sur œuvre
428
- Concert
429
- Conférence
430
- Événement national
431
- Exposition
432
- Jeu de l'oie
433
- Memory
434
- Rencontre
435
- Sieste musicale
436
- Spectacle
437
- Vernissage
438
- Visite atelier
439
- Visite commentée
440
- Visite contée
441
- Visite flash
442
 
443
---
444
 
445
# 🎯 Vision finale
446
 
447
Accueil MBA
448
 
449
↓
450
 
451
4 événements
452
 
453
↓
454
 
455
Recherche rapide
456
 
457
↓
458
 
459
Filtres
460
 
461
↓
462
 
463
CONSULTER TOUT L’AGENDA →
464
 
465
↓
466
 
467
Page Agenda complète
468
 
469
↓
470
 
471
SharePoint Agenda MBA
472
 
473
↓
474
 
475
Administration autonome par l'équipe du musée