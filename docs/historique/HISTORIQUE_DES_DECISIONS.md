# HISTORIQUE DES DÉCISIONS
2
 
3
Version : 2.0
4
 
5
Date de création : 28 juillet 2026
6
 
7
Objet :
8
 
9
Conserver la trace des décisions structurantes du projet Agenda MBA.
10
 
11
---
12
 
13
# 28 juillet 2026
14
 
15
## Gestion des réservations
16
 
17
### Décision
18
 
19
Le champ :
20
 
21
```text
22
Réservation
23
```
24
 
25
est un champ à choix :
26
 
27
```text
28
Oui
29
Non
30
```
31
 
32
### Pourquoi
33
 
34
Éviter la multiplication des variantes :
35
 
36
```text
37
Réservation obligatoire
38
Inscription obligatoire
39
Sur réservation
40
Réservation conseillée
41
```
42
 
43
Le widget gère automatiquement l'affichage du bloc réservation.
44
 
45
### Conséquences
46
 
47
- saisie simplifiée ;
48
- moins d'erreurs ;
49
- comportement homogène.
50
 
51
---
52
 
53
## Gestion des publics
54
 
55
### Décision
56
 
57
Les publics autorisés sont :
58
 
59
```text
60
Adulte
61
Famille
62
Jeune public
63
```
64
 
65
### Pourquoi
66
 
67
Les publics sont utilisés :
68
 
69
- dans les filtres ;
70
- dans la recherche ;
71
- dans l'affichage des cartes ;
72
- dans la modale.
73
 
74
---
75
 
76
## Gestion de Tout public
77
 
78
### Décision
79
 
80
La valeur :
81
 
82
```text
83
Tout public
84
```
85
 
86
n'est jamais stockée.
87
 
88
### Pourquoi
89
 
90
Éviter les doublons et les incohérences.
91
 
92
### Calcul
93
 
94
Le widget affiche :
95
 
96
```text
97
Tout public
98
```
99
 
100
lorsque les trois publics sont présents :
101
 
102
```text
103
Adulte
104
Famille
105
Jeune public
106
```
107
 
108
---
109
 
110
## Gestion PMR
111
 
112
### Décision
113
 
114
Tous les événements sont considérés accessibles PMR.
115
 
116
### Pourquoi
117
 
118
Le musée est accessible PMR.
119
 
120
Aucune distinction métier n'est nécessaire.
121
 
122
### Conséquence
123
 
124
Aucune colonne SharePoint PMR n'est créée.
125
 
126
---
127
 
128
## Gestion des pièces jointes
129
 
130
### Décision
131
 
132
Les pièces jointes SharePoint sont désactivées.
133
 
134
### Pourquoi
135
 
136
Le champ :
137
 
138
```text
139
Visuel
140
```
141
 
142
répond déjà au besoin.
143
 
144
### Conséquences
145
 
146
- moins de confusion ;
147
- un seul emplacement pour les images.
148
 
149
---
150
 
151
## Gestion des images
152
 
153
### Décision
154
 
155
Les images sont associées aux événements via :
156
 
157
```text
158
Visuel
159
```
160
 
161
### Infrastructure
162
 
163
Bibliothèque :
164
 
165
```text
166
Images Agenda
167
```
168
 
169
créée sur le site SharePoint.
170
 
171
---
172
 
173
## Gestion de la durée
174
 
175
### Décision
176
 
177
Ajout du champ :
178
 
179
```text
180
Durée
181
```
182
 
183
### Type
184
 
185
```text
186
Texte simple
187
```
188
 
189
### Pourquoi
190
 
191
Permettre une grande souplesse :
192
 
193
```text
194
45 min
195
1 h
196
1 h 30
197
2 h
198
Toute la journée
199
En continu
200
```
201
 
202
---
203
 
204
## Gestion de l'archivage
205
 
206
### Décision
207
 
208
Aucun statut :
209
 
210
```text
211
Archivé
212
```
213
 
214
### Pourquoi
215
 
216
Microsoft Lists conserve déjà l'historique.
217
 
218
### Conséquence
219
 
220
Les statuts autorisés sont :
221
 
222
```text
223
Brouillon
224
Publié
225
```
226
 
227
---
228
 
229
## Diffusion publique
230
 
231
### Décision initiale étudiée
232
 
233
```text
234
Microsoft Lists
235
↓
236
Widget
237
```
238
 
239
### Résultat
240
 
241
Tests API SharePoint concluants.
242
 
243
Les données sont récupérables.
244
 
245
### Problème rencontré
246
 
247
Erreur :
248
 
249
```text
250
403 Unauthorized
251
```
252
 
253
pour les visiteurs non authentifiés.
254
 
255
### Décision
256
 
257
Abandon de la connexion directe.
258
 
259
---
260
 
261
## Nouvelle architecture validée
262
 
263
### Décision
264
 
265
Utiliser un fichier :
266
 
267
```text
268
agenda.json
269
```
270
 
271
comme source publique.
272
 
273
### Architecture
274
 
275
```text
276
Microsoft Lists
277
↓
278
agenda.json
279
↓
280
Widget
281
↓
282
GitHub Pages
283
↓
284
iframe
285
↓
286
musee.pau.fr
287
```
288
 
289
### Pourquoi
290
 
291
- pas d'authentification Microsoft ;
292
- hébergement gratuit ;
293
- simplicité ;
294
- robustesse.
295
 
296
---
297
 
298
## GitHub Pages
299
 
300
### Décision
301
 
302
Conserver GitHub Pages comme hébergement.
303
 
304
### Pourquoi
305
 
306
- gratuit ;
307
- simple ;
308
- déjà opérationnel ;
309
- compatible iframe.
310
 
311
---
312
 
313
# Principes permanents du projet
314
 
315
Toute évolution future doit privilégier :
316
 
317
- la simplicité ;
318
- la gratuité ;
319
- la maintenabilité ;
320
- l'autonomie métier ;
321
- une documentation complète.
322
 
323
Les solutions complexes doivent être évitées lorsqu'une solution plus simple permet d'obtenir le même résultat.