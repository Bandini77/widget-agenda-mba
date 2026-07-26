# Reprise du projet Widget Agenda MBA
2
 
3
## Branche
4
 
5
v2-maquette
6
 
7
---
8
 
9
## État actuel
10
 
11
Le widget est fonctionnel sur :
12
 
13
✅ Desktop
14
 
15
✅ Tablette
16
 
17
✅ Mobile (quasi finalisé)
18
 
19
---
20
 
21
# Gouvernance
22
 
23
Administrateur :
24
 
25
- Sébastien
26
 
27
Contributeurs :
28
 
29
- 2 collègues
30
 
31
Objectif :
32
 
33
Permettre la création et la modification
34
des événements sans intervention dans le code.
35
 
36
---
37
 
38
# Pages
39
 
40
## index.html
41
 
42
Accueil.
43
 
44
Affichage :
45
 
46
- 4 événements
47
 
48
Recherche globale.
49
 
50
Filtres globaux.
51
 
52
Lien :
53
 
54
CONSULTER TOUT L'AGENDA →
55
 
56
---
57
 
58
## agenda.html
59
 
60
Agenda complet.
61
 
62
Ajouts :
63
 
64
- Retour au site du musée
65
- Retour en haut
66
 
67
---
68
 
69
# Responsive
70
 
71
## Desktop
72
 
73
Version de référence.
74
 
75
Points en cours :
76
 
77
- croix de fermeture
78
- harmonisation footer
79
- alignement icônes
80
 
81
---
82
 
83
## Tablette
84
 
85
Version fonctionnelle.
86
 
87
Conservation de la logique desktop.
88
 
89
---
90
 
91
## Mobile
92
 
93
### Cartes
94
 
95
Structure :
96
 
97
Image
98
 
99
Type
100
 
101
Titre
102
 
103
Public
104
 
105
Date / Heure
106
 
107
Bouton +
108
 
109
### Expositions
110
 
111
Affichage :
112
 
113
📅 Du ... au ...
114
 
115
au lieu de la date verticale.
116
 
117
### Filtres
118
 
119
Empilés verticalement.
120
 
121
### Modale
122
 
123
Image pleine largeur.
124
 
125
Public :
126
 
127
👥 Public • Âge • ♿ PMR
128
 
129
Date :
130
 
131
📅 Date
132
 
133
🕒 Heure
134
 
135
Description.
136
 
137
Partager masqué.
138
 
139
Ajouts :
140
 
141
✅ Accordéon Tarif
142
 
143
✅ Accordéon Réservation
144
 
145
✅ Calendrier mobile dédié
146
 
147
---
148
 
149
# Données événement
150
 
151
Chaque événement contient :
152
 
153
{
154
lieu: "",
155
modaliteAcces: "",
156
statut: "Publié"
157
}
158
 
159
---
160
 
161
# PMR
162
 
163
Le musée est accessible PMR.
164
 
165
PMR est toujours affiché.
166
 
167
Affichage :
168
 
169
👥 Public • Âge • ♿ PMR
170
 
171
Aucune gestion spécifique prévue
172
dans SharePoint.
173
 
174
---
175
 
176
# Publics
177
 
178
Publics disponibles :
179
 
180
- Adulte
181
- Famille
182
- Jeune public
183
 
184
Règle métier :
185
 
186
Tout public
187
=
188
Adulte + Famille + Jeune public
189
 
190
Sujet à auditer :
191
 
192
Les filtres du widget doivent continuer
193
à afficher les événements Tout public
194
lorsqu'un utilisateur filtre :
195
 
196
- Adulte
197
- Famille
198
- Jeune public
199
 
200
Objectif :
201
 
202
Ne pas exclure d'événements.
203
 
204
---
205
 
206
# Types
207
 
208
- Exposition
209
- Visite atelier
210
- Visite commentée
211
- Visite contée
212
- Visite flash
213
- Conférence
214
- Concert
215
- Spectacle
216
- Rencontre
217
- Sieste musicale
218
- Vernissage
219
- Événement national
220
- Arrêt sur œuvre
221
- Memory
222
- Jeu de l’oie
223
- L'heure du conte
224
- Nocturne
225
 
226
Sujet futur :
227
 
228
Réflexion autour du pôle Bien-être.
229
 
230
---
231
 
232
# Tarification
233
 
234
Gratuit :
235
 
236
- Exposition
237
- Vernissage
238
- Nocturne
239
- Heure du conte
240
- Arrêt sur œuvre
241
- Événement national
242
- Sieste musicale
243
 
244
Payant :
245
 
246
5 €
247
 
248
- Conférence
249
- Concert
250
- Spectacle
251
- Rencontre
252
- Visite atelier
253
- Visite commentée
254
- Visite contée
255
- Visite flash
256
 
257
Tarif spécifique :
258
 
259
5 €
260
 
261
- Memory
262
- Jeu de l’oie
263
 
264
Précision :
265
 
266
Payant uniquement pour
267
l’adulte accompagnateur.
268
 
269
---
270
 
271
# Réservation
272
 
273
Sur réservation :
274
 
275
- Conférence
276
- Concert
277
- Spectacle
278
- Rencontre
279
- Visite atelier
280
- Visite commentée
281
- Visite contée
282
- Visite flash
283
- Memory
284
- Jeu de l’oie
285
 
286
Entrée libre :
287
 
288
- Exposition
289
- Vernissage
290
- Nocturne
291
- Heure du conte
292
- Arrêt sur œuvre
293
- Événement national
294
 
295
Cas particulier :
296
 
297
Sieste musicale
298
 
299
Entrée libre
300
dans la limite des places disponibles.
301
 
302
---
303
 
304
# Cycle de vie des événements
305
 
306
Création :
307
 
308
entre 2 et 5 mois avant la date.
309
 
310
Principe :
311
 
312
1 événement
313
=
314
1 fiche
315
 
316
Pas de récurrence.
317
 
318
Exemple :
319
 
320
Visite commentée du 15 septembre
321
 
322
↓
323
 
324
1 événement
325
 
326
Visite commentée du 22 septembre
327
 
328
↓
329
 
330
1 autre événement
331
 
332
---
333
 
334
# Images
335
 
336
Principe :
337
 
338
1 événement
339
=
340
1 image principale
341
 
342
Pas de galerie.
343
 
344
Aujourd'hui :
345
 
346
images stockées dans le widget.
347
 
348
Objectif V3 :
349
 
350
Bibliothèque Images SharePoint / Teams.
351
 
352
---
353
 
354
# Vision SharePoint
355
 
356
Architecture cible :
357
 
358
Administration MBA
359
↓
360
Liste SharePoint MBA
361
↓
362
Bibliothèque Images MBA
363
↓
364
Widget Agenda
365
↓
366
Site du musée
367
 
368
Objectif :
369
 
370
Créer un événement sans modifier :
371
 
372
- script.js
373
- style.css
374
 
375
---
376
 
377
# Statuts
378
 
379
Prévision V3 :
380
 
381
- Brouillon
382
- Publié
383
 
384
Le widget n'affiche que les événements publiés.
385
 
386
---
387
 
388
# Archivage
389
 
390
Objectif :
391
 
392
À la fin d'un événement :
393
 
394
✅ disparition automatique du widget
395
 
396
✅ conservation dans SharePoint
397
 
398
---
399
 
400
# À faire
401
 
402
## V2.25
403
 
404
- position définitive de la croix
405
- harmonisation fine du footer
406
- harmonisation icônes / textes
407
- fermeture des filtres par clic extérieur
408
- recette desktop
409
- recette tablette
410
- recette mobile
411
 
412
## V3
413
 
414
- structure SharePoint
415
- bibliothèque d'images
416
- publication automatique
417
- archivage automatique
418
- logique des publics
419
- audit des filtres "Tout public"
420
 
421
---
422
 
423
# Objectif final
424
 
425
Créer un événement
426
↓
427
Ajouter une image
428
↓
429
Publier
430
↓
431
Affichage automatique dans le widget
432
↓
433
Disparition automatique après la date de fin
434
 
435
Sans modifier le code du widget.