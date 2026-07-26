# Reprise Projet — Widget Agenda MBA
2
 
3
Version actuelle : V2.25
4
 
5
Statut : Stable
6
 
7
Date de référence : Juillet 2026
8
 
9
---
10
 
11
# Dépôt GitHub
12
 
13
Branche principale :
14
 
15
v2-maquette
16
 
17
Dépôt :
18
 
19
https://github.com/Bandini77/widget-agenda-mba
20
 
21
---
22
 
23
# État général
24
 
25
Le widget Agenda MBA est fonctionnel sur :
26
 
27
✅ Desktop
28
 
29
✅ Tablette
30
 
31
✅ Mobile
32
 
33
Une recette complète a été réalisée.
34
 
35
---
36
 
37
# Fonctionnalités disponibles
38
 
39
## Cartes
40
 
41
- image
42
- date
43
- heure
44
- public
45
- type
46
- bouton détail
47
 
48
---
49
 
50
## Modales
51
 
52
- image
53
- type
54
- titre
55
- public
56
- PMR
57
- dates
58
- heures
59
- description
60
- tarif
61
- réservation
62
- partage
63
- calendrier
64
 
65
---
66
 
67
## Filtres
68
 
69
- type d'activité
70
- public
71
- quand
72
- réservation
73
 
74
---
75
 
76
## Recherche
77
 
78
Recherche multi-événements opérationnelle.
79
 
80
---
81
 
82
# Correctifs V2.25
83
 
84
## Responsive
85
 
86
✅ Refonte tablette
87
 
88
✅ Refonte mobile
89
 
90
---
91
 
92
## Footer
93
 
94
✅ Harmonisation desktop
95
 
96
✅ Harmonisation mobile
97
 
98
✅ Alignement du calendrier
99
 
100
✅ Alignement du partage
101
 
102
---
103
 
104
## Modales
105
 
106
✅ Calendrier mobile restauré
107
 
108
✅ Accordéon réservation restauré
109
 
110
✅ Suppression du double séparateur
111
 
112
---
113
 
114
## Filtres
115
 
116
✅ Fermeture par clic extérieur
117
 
118
✅ Correction du double-clic
119
 
120
✅ Correction du filtre Week-end
121
 
122
---
123
 
124
## Données
125
 
126
✅ Vérification des dateISO
127
 
128
✅ Correction des incohérences détectées
129
 
130
---
131
 
132
# Décisions métier validées
133
 
134
## Types d'activité
135
 
136
Les types sont évolutifs.
137
 
138
Le widget ne doit jamais dépendre d'une liste fermée.
139
 
140
---
141
 
142
## Publics
143
 
144
Publics disponibles :
145
 
146
- Adulte
147
- Famille
148
- Jeune public
149
 
150
"Tout public" est considéré comme une valeur logique et non comme un public réel.
151
 
152
Une évolution du filtre reste à prévoir.
153
 
154
---
155
 
156
## Publication
157
 
158
Seuls les événements :
159
 
160
- Publiés
161
- Non terminés
162
 
163
doivent être affichés.
164
 
165
---
166
 
167
# Images
168
 
169
## Format officiel MBA
170
 
171
Dimensions :
172
 
173
1600 × 900 px
174
 
175
Ratio :
176
 
177
16:9
178
 
179
Format :
180
 
181
JPG
182
 
183
Poids maximum :
184
 
185
2 Mo
186
 
187
---
188
 
189
## Règles
190
 
191
Pas de texte dans l'image.
192
 
193
Le sujet principal doit rester lisible.
194
 
195
Le recadrage manuel est autorisé.
196
 
197
Le recadrage automatique du widget ne doit pas constituer le principal mode de cadrage.
198
 
199
---
200
 
201
## Constats
202
 
203
Les cartes fonctionnent correctement avec ce format.
204
 
205
Les modales nécessiteront une réflexion complémentaire.
206
 
207
Sujet reporté en V3.
208
 
209
---
210
 
211
# Audit Microsoft 365
212
 
213
## Outils disponibles
214
 
215
✅ SharePoint Online
216
 
217
✅ Microsoft Lists
218
 
219
✅ Power Automate
220
 
221
✅ Teams
222
 
223
---
224
 
225
## Site projet existant
226
 
227
Team Musées-Widget
228
 
229
Utilisé actuellement pour :
230
 
231
- documentation
232
- sauvegardes
233
- maquettes
234
- fichiers projet
235
 
236
---
237
 
238
# Vision cible
239
 
240
Agent musée
241
 
242
↓
243
 
244
Liste Agenda MBA
245
 
246
↓
247
 
248
Power Automate
249
 
250
↓
251
 
252
Widget Agenda MBA
253
 
254
↓
255
 
256
Publication automatique
257
 
258
---
259
 
260
# Dette technique connue
261
 
262
## Icônes
263
 
264
Léger décalage optique entre :
265
 
266
- Users
267
- Calendar
268
- Clock
269
 
270
Sujet non bloquant.
271
 
272
---
273
 
274
## CSS
275
 
276
Présence de règles historiques et de certaines surcharges.
277
 
278
Nettoyage prévu en V3.
279
 
280
---
281
 
282
# Prochaine étape
283
 
284
## Priorité haute
285
 
286
Création de la liste Agenda MBA dans Microsoft Lists.
287
 
288
---
289
 
290
## Priorité moyenne
291
 
292
Traitement du filtre "Tout public".
293
 
294
---
295
 
296
## Priorité moyenne
297
 
298
Gestion des événements atypiques.
299
 
300
---
301
 
302
## Priorité moyenne
303
 
304
Gestion des événements récurrents.
305
 
306
---
307
 
308
# Évaluation
309
 
310
Widget Agenda :
311
 
312
99 %
313
 
314
Projet global :
315
 
316
90 %
317
 
318
Le principal chantier restant concerne désormais l'administration des données et l'intégration Microsoft 365.