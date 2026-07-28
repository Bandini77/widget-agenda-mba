# RÈGLES MÉTIER – AGENDA MBA
2
 
3
Version : 1.0
4
 
5
Date : 28 juillet 2026
6
Définir les règles métier utilisées par l'Agenda du Musée des Beaux-Arts de Pau.
7
 
8
Ce document fait référence pour :
9
 
10
- la liste Microsoft Lists ;
11
- le formulaire métier ;
12
- le widget Agenda ;
13
- les futures évolutions du projet.
14
 
15
---
16
 
17
# Publics
18
 
19
Champ SharePoint :
20
 
21
Publics concernés
22
 
23
Type :
24
 
25
Choix multiples
26
 
27
Valeurs :
28
 
29
- Adulte
30
- Famille
31
- Jeune public
32
 
33
---
34
 
35
# Règle Tout public
36
 
37
Le statut :
38
 
39
Tout public
40
 
41
n'est jamais stocké dans SharePoint.
42
 
43
Le widget le calcule automatiquement lorsque les trois publics sont sélectionnés :
44
 
45
- Adulte
46
- Famille
47
- Jeune public
48
 
49
---
50
 
51
# Affichage des publics dans le widget
52
 
53
## Cas 1
54
 
55
Public :
56
 
57
Adulte
58
 
59
Affichage :
60
 
61
Adulte
62
 
63
---
64
 
65
## Cas 2
66
 
67
Public :
68
 
69
Famille
70
 
71
Affichage :
72
 
73
Famille
74
 
75
---
76
 
77
## Cas 3
78
 
79
Public :
80
 
81
Jeune public
82
 
83
Affichage :
84
 
85
Jeune public
86
 
87
---
88
 
89
## Cas 4
90
 
91
Public :
92
 
93
Adulte + Famille + Jeune public
94
 
95
Affichage :
96
 
97
Tout public
98
 
99
---
100
 
101
# Filtres publics
102
 
103
## Tout public
104
 
105
Affiche tous les événements.
106
 
107
Il ne s'agit pas d'un public spécifique mais d'un filtre global.
108
 
109
---
110
 
111
## Adulte
112
 
113
Affiche tous les événements contenant :
114
 
115
Adulte
116
 
117
Exemple :
118
 
119
- Adulte
120
- Adulte + Famille + Jeune public
121
 
122
---
123
 
124
## Famille
125
 
126
Affiche tous les événements contenant :
127
 
128
Famille
129
 
130
Exemple :
131
 
132
- Famille
133
- Adulte + Famille + Jeune public
134
 
135
---
136
 
137
## Jeune public
138
 
139
Affiche tous les événements contenant :
140
 
141
Jeune public
142
 
143
Exemple :
144
 
145
- Jeune public
146
- Adulte + Famille + Jeune public
147
 
148
---
149
 
150
# PMR
151
 
152
Tous les événements sont considérés accessibles PMR.
153
 
154
Aucune colonne SharePoint spécifique n'est prévue.
155
 
156
Le pictogramme PMR est affiché automatiquement dans le widget.
157
 
158
---
159
 
160
# Réservation
161
 
162
Champ SharePoint :
163
 
164
Réservation
165
 
166
Type :
167
 
168
Choix
169
 
170
Valeurs :
171
 
172
- Oui
173
- Non
174
 
175
---
176
 
177
# Affichage du bloc Réservation
178
 
179
## Réservation = Oui
180
 
181
Le widget affiche le bloc :
182
 
183
RÉSERVATION
184
 
185
et affiche les informations disponibles :
186
 
187
- téléphone ;
188
- email ;
189
- lien.
190
 
191
---
192
 
193
## Réservation = Non
194
 
195
Le widget masque complètement le bloc :
196
 
197
RÉSERVATION
198
 
199
---
200
 
201
# Téléphone
202
 
203
Champ texte libre.
204
 
205
Utilisé pour les réservations ou contacts.
206
 
207
---
208
 
209
# Email
210
 
211
Champ texte libre.
212
 
213
Utilisé pour les réservations ou contacts.
214
 
215
---
216
 
217
# Lien
218
 
219
Champ hyperlien.
220
 
221
Utilisé lorsqu'une réservation est gérée :
222
 
223
- par le musée ;
224
- par un partenaire ;
225
- par une plateforme externe.
226
 
227
---
228
 
229
# Tarif
230
 
231
Champ texte libre.
232
 
233
Exemples :
234
 
235
- Gratuit
236
- 5 €
237
- Adulte accompagnateur : 5 €
238
- Tarif réduit
239
- Gratuit sur présentation d'un justificatif
240
 
241
Le widget affiche le contenu tel qu'il est saisi.
242
 
243
---
244
 
245
# Âge conseillé
246
 
247
Champ :
248
 
249
Âge conseillé
250
 
251
Type :
252
 
253
Nombre
254
 
255
Exemples :
256
 
257
- 3
258
- 6
259
- 8
260
- 12
261
 
262
Le widget affiche automatiquement :
263
 
264
À partir de X ans
265
 
266
Exemple :
267
 
268
Valeur stockée :
269
 
270
6
271
 
272
Affichage :
273
 
274
À partir de 6 ans
275
 
276
---
277
 
278
# Durée
279
 
280
Champ :
281
 
282
Durée
283
 
284
Type :
285
 
286
Texte simple
287
 
288
Exemples :
289
 
290
- 45 min
291
- 1 h
292
- 1 h 30
293
- 2 h
294
- Toute la journée
295
- En continu
296
 
297
---
298
 
299
# Affichage de la durée
300
 
301
La durée apparaît dans l'en-tête de la modale.
302
 
303
Exemple :
304
 
305
📅 19 SEPT. 2026
306
 
307
🕒 14h30
308
 
309
⏱️ 1 h 30
310
 
311
Les trois informations doivent apparaître sur une même ligne visuelle.
312
 
313
---
314
 
315
# Images
316
 
317
Les visuels utilisés par l'agenda sont stockés dans :
318
 
319
Images Agenda
320
 
321
Bibliothèque SharePoint dédiée.
322
 
323
Sources possibles :
324
 
325
- Photothèque du musée ;
326
- Réseau Ville ;
327
- Visuels graphiste ;
328
- Production interne ;
329
- Partenaires.
330
 
331
---
332
 
333
# Publication
334
 
335
Un événement est visible sur le widget si :
336
 
337
Statut = Publié
338
 
339
ET
340
 
341
Date/heure de fin > maintenant
342
 
343
---
344
 
345
# Brouillon
346
 
347
Un événement en brouillon :
348
 
349
- est visible dans SharePoint ;
350
- est invisible dans le widget.
351
 
352
---
353
 
354
# Événement terminé
355
 
356
Un événement terminé :
357
 
358
- disparaît automatiquement du widget ;
359
- reste conservé dans SharePoint.
360
 
361
---
362
 
363
# Archivage
364
 
365
Aucun statut "Archivé" n'est prévu.
366
 
367
Microsoft Lists constitue l'historique des événements.
368
 
369
---
370
 
371
# Pièces jointes
372
 
373
Les pièces jointes SharePoint ne sont pas utilisées.
374
 
375
Les images sont gérées dans :
376
 
377
Images Agenda
378
 
379
ou via la colonne :
380
 
381
Visuel
382
 
383
selon l'architecture retenue.
384
 
385
---
386
 
387
# Principe général
388
 
389
Une occurrence = une ligne.
390
 
391
Exemple :
392
 
393
Sieste musicale
394
 
395
10 mars
396
 
397
12 avril
398
 
399
15 mai
400
 
401
=
402
 
403
3 événements distincts dans Microsoft Lists.
404
 
405
---
406
 
407
# Philosophie du projet
408
 
409
Priorité absolue :
410
 
411
Simplicité.
412
 
413
Éviter :
414
 
415
- les développements complexes ;
416
- les dépendances inutiles ;
417
- les paramétrages difficiles à transmettre.
418
 
419
L'administration des événements doit pouvoir être réalisée sans modification du code source du widget.