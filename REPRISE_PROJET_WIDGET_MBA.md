# Reprise du projet Widget Agenda MBA
2
 
3
## Situation actuelle
4
 
5
Le projet comporte désormais :
6
 
7
- index.html
8
- agenda.html
9
- script.js
10
- style.css
11
 
12
---
13
 
14
# Pages
15
 
16
## index.html
17
 
18
Page d'accueil.
19
 
20
### Chargement
21
 
22
4 événements visibles.
23
 
24
### Recherche
25
 
26
Recherche sur toute la programmation.
27
 
28
### Limite
29
 
30
8 événements maximum affichés.
31
 
32
### Message
33
 
34
Exemple :
35
 
36
8 résultats affichés sur 12 trouvés
37
 
38
### Navigation
39
 
40
CONSULTER TOUT L’AGENDA →
41
 
42
toujours visible.
43
 
44
---
45
 
46
## agenda.html
47
 
48
Page Agenda complète.
49
 
50
### Titre
51
 
52
Agenda
53
 
54
### Introduction
55
 
56
Retrouvez toute la programmation culturelle du Musée des Beaux-Arts de Pau.
57
 
58
### Chargement
59
 
60
Tous les événements affichés.
61
 
62
### Recherche
63
 
64
Tous les résultats affichés.
65
 
66
### Filtres
67
 
68
Tous les résultats affichés.
69
 
70
### Compteur
71
 
72
Visible uniquement :
73
 
74
- lors d'une recherche
75
- lors d'un filtre
76
 
77
Exemple :
78
 
79
3 résultats trouvés
80
 
81
### Réinitialisation
82
 
83
Retour à l'état neutre.
84
 
85
Aucun compteur.
86
 
87
---
88
 
89
# Données actuelles
90
 
91
12 événements de test.
92
 
93
Exemples :
94
 
95
- Les Impressionnistes
96
- L'histoire du portrait
97
- Les couleurs du musée
98
- Les petits explorateurs
99
- Cézanne et la modernité
100
- Sieste musicale au musée
101
- Sieste musicale au musée #2
102
- Sieste musicale au musée #3
103
- Bien-être au musée
104
- Concert au musée
105
- Visite flash : les chefs-d'œuvre
106
- Vernissage d'automne
107
 
108
---
109
 
110
# Types d'activités
111
 
112
- Arrêt sur œuvre
113
- Concert
114
- Conférence
115
- Événement national
116
- Exposition
117
- Jeu de l'oie
118
- Memory
119
- Rencontre
120
- Sieste musicale
121
- Spectacle
122
- Vernissage
123
- Visite atelier
124
- Visite commentée
125
- Visite contée
126
- Visite flash
127
 
128
---
129
 
130
# Variables importantes
131
 
132
## Mode Agenda
133
 
134
```js
135
const modeAgenda =
136
window.location.pathname.includes("agenda.html");
137
```
138
 
139
### Accueil
140
 
141
modeAgenda = false
142
 
143
### Agenda
144
 
145
modeAgenda = true
146
```
147
 
148
## Limite accueil
149
 
150
```js
151
const MAX_RESULTATS_ACCUEIL = 8;
152
```
153
 
154
---
155
 
156
# Fonctionnalités validées
157
 
158
✅ cartes événement
159
 
160
✅ modales détaillées
161
 
162
✅ gestion des expositions longues
163
 
164
✅ âge minimum
165
 
166
✅ réservation conditionnelle
167
 
168
✅ lien complémentaire
169
 
170
✅ recherche globale
171
 
172
✅ filtres
173
 
174
✅ logique Tout public
175
 
176
✅ sieste musicale
177
 
178
✅ agenda complet
179
 
180
✅ compteur contextuel
181
 
182
✅ réinitialisation
183
 
184
✅ recherche "tout public"
185
 
186
---
187
 
188
# Images à prévoir
189
 
190
- sieste-musicale.jpg
191
- bien-etre.jpg
192
- concert.jpg
193
- visite-flash.jpg
194
- vernissage.jpg
195
 
196
---
197
 
198
# Sujet mis en attente
199
 
200
## Fermeture automatique des filtres
201
 
202
Objectif :
203
 
204
- clic extérieur
205
- touche Échap
206
 
207
À reprendre après stabilisation.
208
 
209
---
210
 
211
# Prochaine étape
212
 
213
## V2.22-beta3
214
 
215
Relier définitivement :
216
 
217
CONSULTER TOUT L’AGENDA →
218
 
219
à
220
 
221
agenda.html
222
 
223
---
224
 
225
# Prochaine grande étape
226
 
227
## V3
228
 
229
Connexion SharePoint.
230
 
231
Objectif :
232
 
233
Remplacer :
234
 
235
```js
236
const events = [...]
237
```
238
 
239
par :
240
 
241
Liste SharePoint Agenda MBA
242
 
243
sans modifier l'interface utilisateur.