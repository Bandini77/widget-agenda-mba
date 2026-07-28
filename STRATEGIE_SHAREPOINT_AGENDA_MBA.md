# STRATÉGIE SHAREPOINT – AGENDA MBA
2
 
3
Version : 1.0
4
 
5
Date : 27 juillet 2026
6
 
7
Statut : Référence de conception
8
 
9
---
10
 
11
# Contexte
12
 
13
Le widget Agenda MBA V2 a atteint un niveau de stabilité satisfaisant.
14
 
15
Les fonctionnalités principales ont été développées, testées et validées :
16
 
17
- Widget CMS
18
- Agenda complet
19
- Recherche temps réel
20
- Filtres par public
21
- Filtres par type d'activité
22
- Filtres par date
23
- Période personnalisée
24
- Modale événement V2
25
- Export calendrier ICS
26
- Partage email
27
- Copie du lien (desktop)
28
- Responsive mobile
29
 
30
Le projet entre désormais dans une nouvelle phase :
31
 
32
Passer d'une administration technique basée sur le code à une administration métier réalisée directement dans Microsoft 365.
33
 
34
---
35
 
36
# Vision du projet
37
 
38
Objectif final :
39
 
40
Permettre aux équipes du Musée des Beaux-Arts de Pau de gérer la programmation culturelle sans modifier le code source.
41
 
42
Les agents doivent pouvoir :
43
 
44
- ajouter un événement ;
45
- modifier un événement ;
46
- illustrer un événement ;
47
- publier un événement ;
48
- archiver un événement ;
49
 
50
directement depuis Microsoft Lists.
51
 
52
---
53
 
54
# Principe directeur
55
 
56
Le projet doit rester simple.
57
 
58
Une solution simple, comprise et maintenable par les équipes est préférable à une architecture complexe.
59
 
60
Le projet doit exploiter au maximum les outils Microsoft 365 déjà disponibles.
61
 
62
Le besoin métier prime sur la sophistication technique.
63
 
64
---
65
 
66
# Décision d'architecture
67
 
68
Architecture cible retenue à ce stade :
69
 
70
Agent musée
71
↓
72
Microsoft Lists
73
↓
74
Liste Agenda MBA
75
↓
76
Widget Agenda MBA
77
↓
78
Publication
79
 
80
L'objectif est d'éviter les couches intermédiaires inutiles.
81
 
82
---
83
 
84
# Technologies retenues
85
 
86
## Conservées
87
 
88
- Microsoft Lists
89
- SharePoint Online
90
- Microsoft 365
91
- Widget Agenda MBA
92
- GitHub Pages (phase actuelle)
93
 
94
## Non retenues à ce stade
95
 
96
- Dataverse
97
- SPFx
98
- Développement SharePoint complexe
99
- API personnalisée
100
- Architecture surdimensionnée
101
 
102
Motif :
103
 
104
Aucun besoin métier actuel ne justifie cette complexité.
105
 
106
---
107
 
108
# Position officielle sur Power Automate
109
 
110
Décision actuelle :
111
 
112
Power Automate n'est pas retenu dans la V1 SharePoint.
113
 
114
Le besoin fonctionnel est couvert par Microsoft Lists.
115
 
116
Power Automate pourra être étudié ultérieurement pour :
117
 
118
- notifications ;
119
- workflows de validation ;
120
- publication programmée ;
121
- synchronisation ;
122
- automatisations ponctuelles.
123
 
124
Aucune dépendance à Power Automate n'est souhaitée pour faire fonctionner l'agenda.
125
 
126
---
127
 
128
# Prise en compte de l'environnement existant
129
 
130
Le projet est conçu pour un environnement Microsoft 365 déjà opérationnel.
131
 
132
Les outils disponibles sont notamment :
133
 
134
- SharePoint Online
135
- Microsoft Lists
136
- Bibliothèques documentaires
137
- Pages SharePoint modernes
138
- Groupes Microsoft 365
139
 
140
Le projet doit s'intégrer dans cet environnement plutôt que créer une architecture parallèle.
141
 
142
---
143
 
144
# Répartition des responsabilités
145
 
146
## Microsoft Lists
147
 
148
Microsoft Lists est responsable :
149
 
150
- du stockage ;
151
- de la saisie ;
152
- de la gestion des événements ;
153
- des statuts de publication.
154
 
155
## Widget Agenda
156
 
157
Le widget est responsable :
158
 
159
- de la recherche ;
160
- des filtres ;
161
- de l'affichage ;
162
- du responsive ;
163
- des compteurs ;
164
- de la modale ;
165
- des exports ICS ;
166
- du calcul de certains champs métier.
167
 
168
---
169
 
170
# Principes métier validés
171
 
172
## Une occurrence = une ligne
173
 
174
Principe fondamental.
175
 
176
Chaque occurrence d'événement correspond à une ligne SharePoint distincte.
177
 
178
Exemple :
179
 
180
Sieste musicale :
181
 
182
- 10 mars
183
- 12 avril
184
- 15 mai
185
 
186
=
187
 
188
3 lignes Microsoft Lists.
189
 
190
Aucune gestion automatique des récurrences n'est prévue.
191
 
192
---
193
 
194
## Souplesse métier
195
 
196
La programmation culturelle évolue régulièrement.
197
 
198
Le système doit permettre l'apparition de nouvelles activités sans développement.
199
 
200
Le modèle de données doit rester ouvert.
201
 
202
Aucun type d'activité n'est considéré comme définitif.
203
 
204
---
205
 
206
## Exemples d'événements exceptionnels
207
 
208
Le musée doit pouvoir créer sans contrainte :
209
 
210
- Journée nationale
211
- Carte blanche
212
- Rencontre exceptionnelle
213
- Événement partenaire
214
- Projection
215
- Performance
216
- Animation ponctuelle
217
- Manifestation exceptionnelle
218
 
219
sans intervention technique.
220
 
221
---
222
 
223
## Types d'activité
224
 
225
Les types d'activité restent enrichissables.
226
 
227
Le widget ne doit pas dépendre d'une liste fermée.
228
 
229
L'ajout d'un nouveau type ne doit nécessiter aucun développement.
230
 
231
---
232
 
233
## Publics concernés
234
 
235
Valeurs métier retenues :
236
 
237
- Adulte
238
- Famille
239
- Jeune public
240
 
241
---
242
 
243
## Tout public
244
 
245
Le statut :
246
 
247
Tout public
248
 
249
n'est pas stocké dans SharePoint.
250
 
251
Le widget le détermine automatiquement selon les règles métier retenues.
252
 
253
---
254
 
255
## PMR
256
 
257
Tous les événements sont considérés comme accessibles PMR.
258
 
259
Le widget affiche automatiquement le pictogramme.
260
 
261
Aucune colonne spécifique n'est actuellement prévue.
262
 
263
---
264
 
265
# Structure fonctionnelle de la liste
266
 
267
La liste Agenda MBA devra notamment contenir :
268
 
269
- Titre
270
- TypeActivite
271
- Publics
272
- AgeMinimum
273
- DateDebut
274
- HeureDebut
275
- DateFin
276
- HeureFin
277
- Lieu
278
- Tarif
279
- ModaliteAcces
280
- Telephone
281
- Email
282
- Resume
283
- Description
284
- LienComplementaire
285
- Image
286
- Statut
287
 
288
Référence :
289
 
290
MODELE_DONNEES_AGENDA_MBA.md
291
 
292
---
293
 
294
# Publication
295
 
296
Un événement est visible uniquement s'il respecte :
297
 
298
Statut = Publié
299
 
300
et
301
 
302
Date de fin ≥ aujourd'hui
303
 
304
Les événements passés restent conservés dans SharePoint.
305
 
306
---
307
 
308
# Gestion des images
309
 
310
Décisions validées :
311
 
312
- image obligatoire ;
313
- ratio 16:9 ;
314
- JPG recommandé ;
315
- format horizontal ;
316
- poids raisonnable.
317
 
318
Objectif :
319
 
320
Assurer un rendu homogène dans le widget.
321
 
322
---
323
 
324
# Fonctionnalités à conserver lors de la migration
325
 
326
La future version SharePoint doit conserver :
327
 
328
- recherche ;
329
- filtres ;
330
- période personnalisée ;
331
- compteur de résultats ;
332
- modale ;
333
- export calendrier ICS ;
334
- partage email ;
335
- responsive ;
336
- affichage CMS limité à 4 résultats ;
337
- agenda complet.
338
 
339
---
340
 
341
# Questions encore ouvertes
342
 
343
## Dates
344
 
345
Deux approches restent possibles.
346
 
347
### Option A
348
 
349
DateDebut
350
HeureDebut
351
 
352
DateFin
353
HeureFin
354
 
355
### Option B
356
 
357
DateHeureDebut
358
 
359
DateHeureFin
360
 
361
Décision non prise.
362
 
363
---
364
 
365
## Images
366
 
367
Deux solutions restent à étudier.
368
 
369
### Option A
370
 
371
Colonne Image native SharePoint.
372
 
373
### Option B
374
 
375
Bibliothèque documentaire dédiée.
376
 
377
Décision non prise.
378
 
379
---
380
 
381
## Hébergement final
382
 
383
Deux scénarios sont envisageables.
384
 
385
### Option A
386
 
387
Widget intégré dans SharePoint.
388
 
389
### Option B
390
 
391
Widget conservé sur GitHub Pages avec connexion à Microsoft Lists.
392
 
393
Décision non prise.
394
 
395
---
396
 
397
## Gestion des types
398
 
399
À arbitrer :
400
 
401
### Option A
402
 
403
Colonne Choix SharePoint simple.
404
 
405
### Option B
406
 
407
Liste de référence dédiée.
408
 
409
Décision non prise.
410
 
411
---
412
 
413
# Prochaine phase du projet
414
 
415
## Étape 1
416
 
417
Validation du modèle de données.
418
 
419
## Étape 2
420
 
421
Création de la liste Agenda MBA.
422
 
423
## Étape 3
424
 
425
Création des colonnes SharePoint.
426
 
427
## Étape 4
428
 
429
Création d'un jeu de données de test.
430
 
431
## Étape 5
432
 
433
Tests d'administration métier.
434
 
435
## Étape 6
436
 
437
Conception de la connexion entre la liste SharePoint et le widget Agenda.
438
 
439
---
440
 
441
# État du projet
442
 
443
V2 du widget :
444
 
445
✅ Stabilisée
446
 
447
✅ Testée
448
 
449
✅ Nettoyée
450
 
451
✅ Documentée
452
 
453
Le projet entre désormais dans sa phase :
454
 
455
SharePoint / Microsoft Lists / Administration métier.
456
 
457
---
458
 
459
# Décision de référence
460
 
461
Toujours privilégier :
462
 
463
Simplicité
464
↓
465
Maintenabilité
466
↓
467
Autonomie des équipes
468
 
469
avant toute sophistication technique.