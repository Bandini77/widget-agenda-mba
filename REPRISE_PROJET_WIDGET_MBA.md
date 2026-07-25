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
# Pages
22
 
23
## index.html
24
 
25
Accueil.
26
 
27
Affichage :
28
 
29
- 4 événements
30
 
31
Recherche globale.
32
 
33
Filtres globaux.
34
 
35
Lien :
36
 
37
CONSULTER TOUT L'AGENDA →
38
 
39
---
40
 
41
## agenda.html
42
 
43
Agenda complet.
44
 
45
Ajouts :
46
 
47
- Retour au site du musée
48
- Retour en haut
49
 
50
---
51
 
52
# Responsive
53
 
54
## Desktop
55
 
56
Version de référence validée.
57
 
58
---
59
 
60
## Tablette
61
 
62
Version fonctionnelle.
63
 
64
### Cartes
65
 
66
Conservation de la structure desktop.
67
 
68
### Modales
69
 
70
Version adaptée.
71
 
72
---
73
 
74
## Mobile
75
 
76
### Cartes
77
 
78
Structure :
79
 
80
Image
81
 
82
Type
83
 
84
Titre
85
 
86
Public
87
 
88
Date / Heure
89
 
90
Bouton +
91
 
92
### Expositions
93
 
94
Affichage :
95
 
96
📅 Du ... au ...
97
 
98
au lieu de la date verticale.
99
 
100
### Filtres
101
 
102
Empilés verticalement.
103
 
104
### Modale
105
 
106
Image pleine largeur.
107
 
108
Public :
109
 
110
👥 Public • Âge • ♿ PMR
111
 
112
Date :
113
 
114
📅 Date
115
 
116
🕒 Heure
117
 
118
Description.
119
 
120
Partager supprimé.
121
 
122
---
123
 
124
# Données événement
125
 
126
Chaque événement contient :
127
 
128
```js
129
{
130
lieu: "",
131
modaliteAcces: "",
132
statut: "Publié",
133
accessibilitePMR: true
134
}
135
```
136
 
137
---
138
 
139
# Publics
140
 
141
- Tout public
142
- Adulte
143
- Famille
144
- Jeune public
145
 
146
---
147
 
148
# Types
149
 
150
- Exposition
151
- Visite atelier
152
- Visite commentée
153
- Visite contée
154
- Visite flash
155
- Conférence
156
- Concert
157
- Spectacle
158
- Rencontre
159
- Sieste musicale
160
- Vernissage
161
- Événement national
162
- Arrêt sur œuvre
163
- Memory
164
- Jeu de l’oie
165
- L'heure du conte
166
- Nocturne
167
 
168
---
169
 
170
# Tarification
171
 
172
### Gratuit
173
 
174
- Exposition
175
- Vernissage
176
- Nocturne
177
- Heure du conte
178
- Arrêt sur œuvre
179
- Événement national
180
 
181
### Payant
182
 
183
5 €
184
 
185
- Conférence
186
- Concert
187
- Spectacle
188
- Rencontre
189
- Visite atelier
190
- Visite commentée
191
- Visite contée
192
- Visite flash
193
- Memory
194
- Jeu de l’oie
195
 
196
---
197
 
198
# Réservation
199
 
200
### Obligatoire
201
 
202
- Conférence
203
- Concert
204
- Spectacle
205
- Rencontre
206
- Visite atelier
207
- Visite commentée
208
- Visite contée
209
- Visite flash
210
- Memory
211
- Jeu de l’oie
212
 
213
### Libre
214
 
215
- Exposition
216
- Vernissage
217
- Nocturne
218
- Heure du conte
219
- Arrêt sur œuvre
220
- Événement national
221
 
222
---
223
 
224
# PMR
225
 
226
Champ :
227
 
228
```js
229
accessibilitePMR
230
```
231
 
232
Affichage :
233
 
234
```txt
235
👥 Public • Âge • ♿ PMR
236
```
237
 
238
---
239
 
240
# À faire
241
 
242
## V2.25-beta4
243
 
244
Accordéons :
245
 
246
```txt
247
▸ Tarif
248
 
249
▸ Réservation
250
```
251
 
252
Ouverture / fermeture mobile.
253
 
254
## Harmonisation finale
255
 
256
- longueur des séparateurs
257
- derniers espacements
258
- recette responsive
259
 
260
---
261
 
262
# Objectif final
263
 
264
## V3
265
 
266
Connexion SharePoint MBA.
267
 
268
Administration autonome de toute la programmation culturelle.