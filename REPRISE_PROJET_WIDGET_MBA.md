# Reprise du projet Widget Agenda MBA
2
 
3
## Situation actuelle
4
 
5
Le projet dispose désormais de deux pages :
6
 
7
### index.html
8
 
9
Page d'accueil du widget.
10
 
11
### agenda.html
12
 
13
Page Agenda complète.
14
 
15
---
16
 
17
# Fonctionnement actuel
18
 
19
## Accueil
20
 
21
Affiche :
22
 
23
4 événements
24
 
25
### Recherche
26
 
27
Recherche sur toute la programmation.
28
 
29
### Limite
30
 
31
8 résultats maximum affichés.
32
 
33
### Message
34
 
35
Exemple :
36
 
37
8 résultats affichés sur 12 trouvés
38
 
39
### Navigation
40
 
41
CONSULTER TOUT L’AGENDA →
42
 
43
toujours visible.
44
 
45
---
46
 
47
## Agenda complet
48
 
49
Affiche :
50
 
51
toute la programmation.
52
 
53
### Recherche
54
 
55
Recherche sur tous les événements.
56
 
57
### Filtres
58
 
59
Filtres sur tous les événements.
60
 
61
### Compteur
62
 
63
Exemple :
64
 
65
12 événements actuellement programmés
66
 
67
ou
68
 
69
3 résultats trouvés
70
 
71
---
72
 
73
# Événements actuellement utilisés
74
 
75
Exemples :
76
 
77
- Les Impressionnistes
78
- L'histoire du portrait
79
- Les couleurs du musée
80
- Les petits explorateurs
81
- Cézanne et la modernité
82
- Sieste musicale au musée
83
- Sieste musicale au musée #2
84
- Sieste musicale au musée #3
85
- Bien-être au musée
86
- Concert au musée
87
- Visite flash : les chefs-d'œuvre
88
- Vernissage d'automne
89
 
90
---
91
 
92
# Types d'activité actuels
93
 
94
- Arrêt sur œuvre
95
- Concert
96
- Conférence
97
- Événement national
98
- Exposition
99
- Jeu de l'oie
100
- Memory
101
- Rencontre
102
- Sieste musicale
103
- Spectacle
104
- Vernissage
105
- Visite atelier
106
- Visite commentée
107
- Visite contée
108
- Visite flash
109
 
110
---
111
 
112
# Architecture technique
113
 
114
## Fichier principal
115
 
116
script.js
117
 
118
Contient :
119
 
120
- événements
121
- filtres
122
- recherche
123
- modales
124
- logique Agenda / Accueil
125
 
126
## Style
127
 
128
style.css
129
 
130
## Pages
131
 
132
index.html
133
 
134
agenda.html
135
 
136
---
137
 
138
# Variables importantes
139
 
140
## Mode Agenda
141
 
142
```js
143
const modeAgenda =
144
window.location.pathname.includes("agenda.html");
145
```
146
 
147
Permet de distinguer :
148
 
149
### Accueil
150
 
151
modeAgenda = false
152
 
153
### Agenda
154
 
155
modeAgenda = true
156
```
157
 
158
## Limite accueil
159
 
160
```js
161
const MAX_RESULTATS_ACCUEIL = 8;
162
```
163
 
164
---
165
 
166
# Fonctionnalités validées
167
 
168
✅ recherche
169
 
170
✅ filtres
171
 
172
✅ filtre Tout public
173
 
174
✅ expositions longues
175
 
176
✅ âge minimum
177
 
178
✅ réservations conditionnelles
179
 
180
✅ lien complémentaire
181
 
182
✅ sieste musicale
183
 
184
✅ réinitialisation
185
 
186
✅ agenda complet
187
 
188
✅ compteur de résultats
189
 
190
---
191
 
192
# Points de vigilance
193
 
194
## Images manquantes
195
 
196
À prévoir :
197
 
198
- sieste-musicale.jpg
199
- bien-etre.jpg
200
- concert.jpg
201
- visite-flash.jpg
202
- vernissage.jpg
203
 
204
## Filtres
205
 
206
La fermeture automatique au clic extérieur n'est pas encore implémentée.
207
 
208
---
209
 
210
# Priorité immédiate
211
 
212
## V2.22-beta2
213
 
214
Améliorer la présentation éditoriale de la page Agenda.
215
 
216
Objectif :
217
 
218
S'approcher visuellement du site institutionnel du Musée des Beaux-Arts de Pau :
219
 
220
- sobre
221
- élégant
222
- aéré
223
- orienté contenu
224
 
225
---
226
 
227
# Prochaine grande étape
228
 
229
V3
230
 
231
Connexion à SharePoint.
232
 
233
Objectif :
234
 
235
Remplacer le tableau :
236
 
237
```js
238
const events = [...]
239
```
240
 
241
par :
242
 
243
```txt
244
Liste SharePoint Agenda MBA
245
```