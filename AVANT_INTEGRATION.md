# Checklist avant intégration du Widget Agenda MBA
2
 
3
Statut : Pré-intégration
4
 
5
Objectif : finaliser et stabiliser le site du musée
6
- création du site SharePoint
7
- création de la liste Agenda MBA
8
 
9
---
10
 
11
# Priorité 1 — Fonctionnel
12
 
13
## Filtre "Tout public"
14
 
15
Statut :
16
 
17
✅ Corrigé
18
 
19
Description :
20
 
21
Le filtre "Tout public" affichait uniquement les événements possédant la catégorie "Tout public".
22
 
23
Comportement attendu :
24
 
25
Afficher l'ensemble des événements.
26
 
27
Résultat :
28
 
29
✅ Conforme.
30
 
31
---
32
 
33
## Filtre "Ce week-end"
34
 
35
Statut :
36
 
37
✅ Corrigé
38
 
39
---
40
 
41
## Vérification des dateISO
42
 
43
Statut :
44
 
45
✅ Validé
46
 
47
---
48
 ## Refonte des filtres
2
 
3
Statut :
4
 
5
À étudier
6
 
7
Constat :
8
 
9
Les types d'activité sont codés en dur dans le JavaScript.
10
 
11
Objectif :
12
 
13
Préparer un système compatible avec les types d'activité enrichissables prévus dans Microsoft Lists.
14
 
15
Exemples :
16
 
17
Aujourd'hui :
18
 
19
- Exposition
20
- Conférence
21
- Concert
22
 
23
Demain :
24
 
25
- Projection
26
- Performance
27
- Partenariat
28
 
29
Le widget doit pouvoir les accepter sans réécriture majeure.
49
# Priorité 2 — Interface
50
 
51
✅ Harmonisation des meta-line

Le composant meta-line a été généralisé :

- Public
- Date
- Heure

Le rendu est désormais cohérent sur les cartes et les modales.

Un léger ajustement visuel pourra être effectué ultérieurement si nécessaire.
 
79
## Alignement des icônes
80
 
81
Statut :
82
 
83
⏳ À finaliser
84
 
85
Actions :
86
 
87
□ Users
88
 
89
□ Calendar
90
 
91
□ Clock
92
 
93
□ PMR
94
 
95
Objectif :
96
 
97
Alignement visuel homogène.
98
 
99
---
100
 
101
## Images des modales
102
 
103
Statut :
104
 
105
⏳ À étudier
106
 
107
Constat :
108
 
109
Le format 1600×900 fonctionne parfaitement dans les cartes.
110
 
111
Certaines œuvres apparaissent trop recadrées dans les modales.
112
 
113
Actions :
114
 
115
□ Tester contain
116
 
117
□ Tester cover
118
 
119
□ Tester solution hybride
120
 
121
---
122
 
123
# Priorité 3 — Nettoyage CSS
124
 
125
## Audit réalisé
126
 
127
✅ Réalisé
128
 
129
Constats :
130
 
131
Présence de règles historiques conservées.
132
 
133
Dette technique modérée.
134
 
135
---
136
 
137
## À analyser
138
 
139
### event-card
140
 
141
Doublons détectés :
142
 
143
- ligne 79
144
- ligne 160
145
- ligne 724
146
 
147
Objectif :
148
 
149
Identifier la version réellement utilisée.
150
 
151
---
152
 
153
### event-image
154
 
155
Doublons détectés :
156
 
157
- ligne 88
158
- ligne 169
159
- ligne 749
160
- ligne 755
161
 
162
Objectif :
163
 
164
Supprimer les définitions devenues inutiles.
165
 
166
---
167
 
168
### event-more
169
 
170
Doublons détectés :
171
 
172
- ligne 112
173
- ligne 189
174
- ligne 926
175
- ligne 954
176
 
177
Objectif :
178
 
179
Fusionner ou supprimer.
180
 
181
---
182
 
183
### detail-public
184
 
185
Multiples définitions détectées.
186
 
187
Objectif :
188
 
189
Rationaliser.
190
 
191
---
192
 
193
### Responsive
194
 
195
Points à vérifier :
196
 
197
- @media 767px
198
- @media 1024px
199
 
200
Objectif :
201
 
202
Regrouper les règles si possible.
203
 
204
---
205
 
206
# Priorité 4 — Nettoyage JavaScript
207
 
208
Statut :
209
 
210
⏳ À auditer
211
 
212
Objectifs :
213
 
214
□ Identifier les fonctions obsolètes
215
 
216
□ Identifier les répétitions
217
 
218
□ Simplifier les filtres
219
 
220
□ Regrouper les comportements similaires
221
 
222
---
223
 
224
# Priorité 5 — Test d'intégration Musée
225
 
226
Statut :
227
 
228
⏳ À réaliser
229
 
230
Pré-requis :
231
 
232
✅ CMS compatible iframe
233
 
234
✅ Page de test existante
235
 
236
---
237
 
238
## Test à effectuer
239
 
240
Widget hébergé
241
 
242
↓
243
 
244
iframe
245
 
246
↓
247
 
248
Page test musée
249
 
250
---
251
 
252
## Vérifications
253
 
254
□ Largeur réelle
255
 
256
□ Responsive
257
 
258
□ Cartes
259
 
260
□ Modales
261
 
262
□ Filtres
263
 
264
□ Scroll
265
 
266
□ Performance
267
 
268
□ Cohérence graphique
269
 
270
---
271
 
272
# Priorité 6 — Administration SharePoint
273
 
274
Ne démarrer qu'après validation du test d'intégration.
275
 
276
---
277
 
278
## Étape 1
279
 
280
Créer un nouveau site SharePoint dédié.
281
 
282
Ne pas utiliser :
283
 
284
Team Musées-Widget
285
 
286
---
287
 
288
## Étape 2
289
 
290
Créer la liste :
291
 
292
Agenda MBA
293
 
294
---
295
 
296
## Étape 3
297
 
298
Créer les colonnes du modèle métier validé.
299
 
300
---
301
 
302
## Étape 4
303
 
304
Créer des événements tests.
305
 
306
---
307
 
308
# Vision cible
309
 
310
Widget stabilisé
311
 
312
↓
313
 
314
Intégration musée validée
315
 
316
↓
317
 
318
Site SharePoint Agenda MBA
319
 
320
↓
321
 
322
Liste Agenda MBA
323
 
324
↓
325
 
326
Administration sans code
327
 
328
↓
329
 
330
Publication simplifiée