# Reprise du projet Widget Agenda MBA
2
 
3
## État général
4
 
5
Le widget est fonctionnel, stabilisé et largement aligné avec le site du Musée des Beaux-Arts de Pau.
6
 
7
Le projet est actuellement prêt pour le chantier Responsive.
8
 
9
---
10
 
11
# Pages
12
 
13
## index.html
14
 
15
Accueil.
16
 
17
### Chargement
18
 
19
4 événements affichés.
20
 
21
### Recherche
22
 
23
Recherche sur toute la programmation.
24
 
25
### Filtres
26
 
27
Recherche et filtrage globaux.
28
 
29
### Navigation
30
 
31
CONSULTER TOUT L’AGENDA →
32
 
33
ouvre agenda.html
34
 
35
---
36
 
37
## agenda.html
38
 
39
Agenda complet.
40
 
41
### Introduction
42
 
43
Retrouvez toute la programmation culturelle du Musée des Beaux-Arts de Pau.
44
 
45
### Navigation
46
 
47
← Retour au site du musée
48
 
49
### Confort
50
 
51
↑ Retour en haut
52
 
53
### Résultats
54
 
55
Affichage complet de la programmation.
56
 
57
### Recherche
58
 
59
Tous les résultats.
60
 
61
### Filtres
62
 
63
Tous les résultats.
64
 
65
---
66
 
67
# Données événement
68
 
69
Chaque événement contient :
70
 
71
```js
72
{
73
lieu: "",
74
modaliteAcces: "",
75
statut: "Publié",
76
accessibilitePMR: true
77
}
78
```
79
 
80
en plus des champs historiques.
81
 
82
---
83
 
84
# Publics
85
 
86
Valeurs métier :
87
 
88
- Tout public
89
- Adulte
90
- Famille
91
- Jeune public
92
 
93
Particularité :
94
 
95
Dans le widget :
96
 
97
"Tout public"
98
 
99
agit comme :
100
 
101
Afficher tous les publics.
102
 
103
Ne pas confondre avec la valeur métier SharePoint.
104
 
105
---
106
 
107
# Types d'activités
108
 
109
- Exposition
110
- Visite atelier
111
- Visite commentée
112
- Visite contée
113
- Visite flash
114
- Conférence
115
- Concert
116
- Spectacle
117
- Rencontre
118
- Sieste musicale
119
- Vernissage
120
- Événement national
121
- Arrêt sur œuvre
122
- Memory
123
- Jeu de l'oie
124
- L'heure du conte
125
- Nocturne
126
 
127
---
128
 
129
# Tarification
130
 
131
## Gratuit
132
 
133
- Exposition
134
- Vernissage
135
- Événement national
136
- Heure du conte
137
- Arrêt sur œuvre
138
- Sieste musicale
139
- Nocturne
140
 
141
## Payant
142
 
143
5 €
144
 
145
- Visite atelier
146
- Visite commentée
147
- Conférence
148
- Concert
149
- Spectacle
150
- Rencontre
151
- Visite flash
152
- Memory
153
- Jeu de l'oie
154
- Visite contée
155
 
156
---
157
 
158
# Modalités d'accès
159
 
160
## Réservation obligatoire
161
 
162
- Visite atelier
163
- Visite commentée
164
- Conférence
165
- Concert
166
- Spectacle
167
- Rencontre
168
- Visite flash
169
- Memory
170
- Jeu de l'oie
171
- Visite contée
172
 
173
## Accès libre
174
 
175
- Exposition
176
- Vernissage
177
- Événement national
178
- Heure du conte
179
- Arrêt sur œuvre
180
- Nocturne
181
 
182
## Cas particulier
183
 
184
Sieste musicale :
185
 
186
Accès libre dans la limite des places disponibles.
187
 
188
---
189
 
190
# Accessibilité
191
 
192
Nouveau champ :
193
 
194
```js
195
accessibilitePMR
196
```
197
 
198
Affichage :
199
 
200
```txt
201
👥 Public • Âge • ♿ PMR
202
```
203
 
204
dans la modale.
205
 
206
---
207
 
208
# Cycle de vie
209
 
210
## Création
211
 
212
2 à 5 mois avant.
213
 
214
## Statuts
215
 
216
- Brouillon
217
- Publié
218
- Archivé
219
 
220
---
221
 
222
# Fonctionnalités validées
223
 
224
✅ cartes
225
 
226
✅ filtres
227
 
228
✅ recherche
229
 
230
✅ modales
231
 
232
✅ expositions longues
233
 
234
✅ âge minimum
235
 
236
✅ agenda complet
237
 
238
✅ compteur contextuel
239
 
240
✅ navigation Accueil → Agenda
241
 
242
✅ retour au site du musée
243
 
244
✅ retour en haut
245
 
246
✅ touche ESC
247
 
248
✅ préparation SharePoint
249
 
250
✅ audit métier
251
 
252
✅ harmonisation typographique
253
 
254
✅ accessibilité PMR
255
 
256
---
257
 
258
# Sujet en attente
259
 
260
## Filtres
261
 
262
Fermeture automatique au clic extérieur.
263
 
264
ESC fonctionne déjà parfaitement.
265
 
266
Sujet reporté après le responsive.
267
 
268
---
269
 
270
# Prochaine étape
271
 
272
## V2.25
273
 
274
Responsive
275
 
276
### Mobile
277
 
278
Adaptation complète.
279
 
280
### Tablette
281
 
282
Adaptation complète.
283
 
284
### Validation
285
 
286
Desktop + tablette + mobile.
287
 
288
---
289
 
290
# Objectif final
291
 
292
## V3
293
 
294
Connexion de la liste SharePoint MBA.
295
 
296
Administration autonome de toute la programmation culturelle du musée.