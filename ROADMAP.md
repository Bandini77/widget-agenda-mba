# Roadmap Widget Agenda MBA
2
 
3
Version : V2.25
4
 
5
Statut : Stable
6
Recette terminée
7
 
8
---
9
 
10
# V2.25
11
 
12
## Réalisé
13
 
14
### Responsive
15
 
16
✅ Desktop
17
 
18
✅ Tablette
19
 
20
✅ Mobile
21
 
22
---
23
 
24
### Interface
25
 
26
✅ Cartes événements
27
 
28
✅ Modales événements
29
 
30
✅ Footer harmonisé
31
 
32
✅ Calendrier
33
 
34
✅ Réservation
35
 
36
✅ Partage
37
 
38
---
39
 
40
### Filtres
41
 
42
✅ Type d'activité
43
 
44
✅ Public
45
 
46
✅ Quand
47
 
48
✅ Réservation
49
 
50
✅ Réinitialisation
51
 
52
✅ Fermeture par clic extérieur
53
 
54
✅ Correction du double-clic
55
 
56
✅ Correction du filtre "Ce week-end"
57
 
58
✅ Vérification des dateISO
59
 
60
---
61
 
62
### Documentation
63
 
64
✅ Reprise projet
65
 
66
✅ Roadmap
67
 
68
✅ Modèle métier initial
69
 
70
---
71
 
72
# V3.0 — Industrialisation
73
 
74
## Interface
75
 
76
□ Harmonisation finale des icônes
77
 
78
□ Généralisation du composant MetaLine
79
 
80
□ Harmonisation des espacements
81
 
82
□ Audit UX global
83
 
84
---
85
 
86
## Images
87
 
88
### Décisions validées
89
 
90
✅ Format officiel MBA
91
 
92
1600 × 900 px
93
 
94
Ratio 16:9
95
 
96
JPG
97
 
98
≤ 2 Mo
99
 
100
✅ Recadrage manuel autorisé
101
 
102
✅ Sujet principal prioritaire
103
 
104
✅ Sans texte intégré
105
 
106
---
107
 
108
### À traiter
109
 
110
□ Étudier l'affichage des images dans les modales
111
 
112
□ Conserver object-fit: cover dans les cartes
113
 
114
□ Étudier contain ou approche hybride dans les modales
115
 
116
□ Création du gabarit graphique officiel MBA
117
 
118
---
119
 
120
## Technique
121
 
122
□ Nettoyage CSS
123
 
124
□ Suppression des doublons
125
 
126
□ Rationalisation JavaScript
127
 
128
□ Simplification responsive
129
 
130
---
131
 
132
## Données
133
 
134
✅ Vérification globale des dateISO
135
 
136
□ Audit cohérence des données
137
 
138
□ Traiter la logique métier "Tout public"
139
 
140
---
141
 
V3.1 — Stabilisation technique

□ Corriger le filtre Tout public
□ Harmoniser les meta-line
□ Finaliser les alignements
□ Nettoyer le CSS
□ Nettoyer le JavaScript
□ Réduire la dette technique
142
# V3.5 — Administration Agenda
143
 
144
## Objectif
145
 
146
Permettre à un agent du musée d'ajouter un événement sans modifier le code.
147
 
148
---
149
 
150
## Modèle métier
151
 
152
✅ Maquette SharePoint validée
153
 
154
✅ Structure des données validée
155
 
156
✅ Types d'activité évolutifs
157
 
158
✅ Widget indépendant des catégories
159
 
160
---
161
 
162
## À réaliser
163
 
164
□ Création de la liste Agenda MBA
165
 
166
□ Création des colonnes
167
 
168
□ Création des vues
169
 
170
□ Validation du workflow de saisie
171
 
172
---
173
 
174
# V4.0 — Intégration Microsoft 365
175
 
176
## Outils disponibles
177
 
178
✅ SharePoint Online
179
 
180
✅ Microsoft Lists
181
 
182
✅ Power Automate
183
 
184
✅ Teams
185
 
186
---
187
 
188
## Architecture cible
189
 
190
Agent musée
191
 
192
↓
193
 
194
Liste Agenda MBA
195
 
196
↓
197
 
198
Power Automate
199
 
200
↓
201
 
202
Widget Agenda MBA
203
 
204
↓
205
 
206
Publication automatique
207
 
208
---
209
 
210
## Objectifs
211
 
212
□ Éviter toute modification du code
213
 
214
□ Publication simplifiée
215
 
216
□ Gestion documentaire centralisée
217
 
218
□ Historisation des événements
219
 
220
□ Archivage automatique
221
 
222
---
223
 
224
# Sujets ouverts
225
 
226
## Public "Tout public"
227
 
228
Comportement actuel :
229
 
230
Le filtre peut exclure certains événements.
231
 
232
Comportement attendu :
233
 
234
Le filtre doit afficher tous les événements.
235
 
236
Décision métier à implémenter.
237
 
238
---
239
 
240
## Types d'activité
241
 
242
Les types doivent rester enrichissables.
243
 
244
Le widget ne doit jamais dépendre d'une liste fermée.
245
 
246
---
247
 
248
## Événements atypiques
249
 
250
À étudier :
251
 
252
- événements exceptionnels
253
- événements partenaires
254
- manifestations nationales
255
- performances
256
- projections
257
 
258
---
259
 
260
## Événements récurrents
261
 
262
À étudier :
263
 
264
- atelier hebdomadaire
265
- visite mensuelle
266
- cycle de conférences
267
 
268
---
269
 
270
# Vision long terme
271
 
272
Créer un agenda :
273
 
274
- responsive ;
275
- maintenable ;
276
- administrable sans développeur ;
277
- connecté à Microsoft 365 ;
278
- évolutif ;
279
- robuste face aux nouveaux types d'événements.