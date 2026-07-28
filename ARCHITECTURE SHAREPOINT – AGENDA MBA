# ARCHITECTURE SHAREPOINT – AGENDA MBA
2
 
3
Version : 1.0
4
 
5
Date : 28 juillet 2026
6
 
7
Statut : Validé pour réalisation
8
 
9
---
10
 
11
# Objectif
12
 
13
Permettre l’administration autonome de l’Agenda MBA sans modification du code source du widget.
14
 
15
Objectifs :
16
 
17
- saisir un événement via un formulaire ;
18
- stocker les données dans Microsoft Lists ;
19
- stocker les images dans SharePoint ;
20
- alimenter automatiquement le widget Agenda MBA ;
21
- conserver une architecture simple et facilement transmissible.
22
 
23
---
24
 
25
# Principe directeur
26
 
27
Le projet doit rester simple.
28
 
29
La solution retenue doit être :
30
 
31
- compréhensible ;
32
- maintenable ;
33
- documentée ;
34
- administrable par les équipes métier.
35
 
36
L’objectif n’est pas de construire un portail SharePoint complexe mais un outil de gestion de programmation culturelle.
37
 
38
---
39
 
40
# Périmètre V1
41
 
42
Le site SharePoint est dédié uniquement à :
43
 
44
- la gestion des événements ;
45
- la gestion des images utilisées par l’agenda ;
46
- la documentation du fonctionnement.
47
 
48
Tout autre besoin sera traité ultérieurement.
49
 
50
---
51
 
52
# Architecture cible
53
 
54
Site SharePoint
55
 
56
Agenda MBA
57
 
58
│
59
 
60
├── Accueil
61
 
62
├── Événements
63
 
64
├── Images Agenda
65
 
66
└── Documentation
67
 
68
---
69
 
70
# Accueil
71
 
72
Point d’entrée unique du site.
73
 
74
Accès rapide vers :
75
 
76
- Créer un événement
77
- Voir les événements
78
- Bibliothèque d’images
79
- Documentation
80
 
81
L’objectif est de limiter les manipulations dans SharePoint.
82
 
83
---
84
 
85
# Gestion des événements
86
 
87
Les événements sont stockés dans Microsoft Lists.
88
 
89
Nom de la liste :
90
 
91
Agenda MBA
92
 
93
Principe :
94
 
95
Une occurrence = une ligne.
96
 
97
Exemple :
98
 
99
Sieste musicale :
100
 
101
- 10 mars
102
- 12 avril
103
- 15 mai
104
 
105
=
106
 
107
3 lignes distinctes.
108
 
109
Aucune gestion automatique des récurrences.
110
 
111
---
112
 
113
# Formulaire métier
114
 
115
Le formulaire constitue l’interface principale.
116
 
117
L’utilisateur ne travaille pas directement dans la structure de la liste.
118
 
119
Le formulaire permet :
120
 
121
- la création ;
122
- la modification ;
123
- la publication.
124
 
125
Informations gérées :
126
 
127
- image ;
128
- titre ;
129
- type d’activité ;
130
- publics ;
131
- dates ;
132
- horaires ;
133
- résumé ;
134
- description ;
135
- réservation ;
136
- statut.
137
 
138
---
139
 
140
# Gestion des images
141
 
142
Bibliothèque :
143
 
144
Images Agenda
145
 
146
Cette bibliothèque contient uniquement les images utilisées dans l’agenda.
147
 
148
Sources possibles :
149
 
150
- photothèque du musée ;
151
- réseau ville ;
152
- visuels de graphistes ;
153
- photographies produites par le musée.
154
 
155
---
156
 
157
# Publication
158
 
159
Un événement est affiché dans le widget si :
160
 
161
Statut = Publié
162
 
163
ET
164
 
165
Date/Heure de fin > date/heure actuelle
166
 
167
---
168
 
169
# Brouillons
170
 
171
Les événements en brouillon :
172
 
173
- restent visibles dans SharePoint ;
174
- ne sont pas visibles dans le widget.
175
 
176
---
177
 
178
# Événements terminés
179
 
180
Les événements terminés :
181
 
182
- disparaissent automatiquement du widget ;
183
- restent stockés dans Microsoft Lists.
184
 
185
Ils constituent l’historique de programmation.
186
 
187
Aucun archivage manuel n’est nécessaire dans la V1.
188
 
189
---
190
 
191
# Types d’activité
192
 
193
Les types d’activité restent enrichissables.
194
 
195
Le système ne doit jamais dépendre d’une liste fermée.
196
 
197
Valeurs initiales :
198
 
199
- Exposition
200
- Conférence
201
- Concert
202
- Atelier
203
- Visite commentée
204
- Visite flash
205
- Vernissage
206
- Rencontre
207
- Sieste musicale
208
- Événement national
209
- Autre
210
 
211
Le type :
212
 
213
Autre
214
 
215
permet de gérer les événements exceptionnels sans évolution du système.
216
 
217
---
218
 
219
# Publics
220
 
221
Valeurs :
222
 
223
- Adulte
224
- Famille
225
- Jeune public
226
 
227
Le statut :
228
 
229
Tout public
230
 
231
est calculé automatiquement.
232
 
233
Il n’est pas stocké dans Microsoft Lists.
234
 
235
---
236
 
237
# PMR
238
 
239
Tous les événements sont considérés comme accessibles PMR.
240
 
241
Le widget affiche automatiquement le pictogramme.
242
 
243
Aucune donnée spécifique n’est requise.
244
 
245
---
246
 
247
# Fonctionnalités à conserver
248
 
249
La version SharePoint devra conserver :
250
 
251
- recherche ;
252
- filtres ;
253
- période personnalisée ;
254
- compteur de résultats ;
255
- agenda complet ;
256
- widget d’accueil ;
257
- modale événement ;
258
- export calendrier ICS ;
259
- partage email ;
260
- responsive mobile.
261
 
262
---
263
 
264
# Questions restant ouvertes
265
 
266
## Intégration du widget
267
 
268
Deux scénarios restent à étudier :
269
 
270
Option A
271
 
272
Widget intégré à SharePoint.
273
 
274
Option B
275
 
276
Widget hébergé séparément et alimenté par SharePoint.
277
 
278
Décision à prendre après étude technique.
279
 
280
---
281
 
282
## Gestion des images
283
 
284
À confirmer :
285
 
286
- liaison directe vers la bibliothèque ;
287
ou
288
- colonne image SharePoint native.
289
 
290
---
291
 
292
# État du projet
293
 
294
Version V2 du widget :
295
 
296
✅ Stable
297
 
298
✅ Recettée
299
 
300
✅ Nettoyée
301
 
302
✅ Documentée
303
 
304
Prochaine étape :
305
 
306
Création du site SharePoint Agenda MBA.