# Reprise Projet — Widget Agenda MBA
2
 
3
## État du projet
4
 
5
### Version actuelle
6
 
7
V2.25
8
 
9
Statut : Stable
10
Recette : Terminée
11
 
12
### Branche de travail
13
 
14
v2-maquette
15
 
16
### Dépôt GitHub
17
 
18
https://github.com/Bandini77/widget-agenda-mba
19
 
20
---
21
 
22
# Objectif du projet
23
 
24
Créer un agenda culturel responsive pour le Musée des Beaux-Arts de Pau permettant :
25
 
26
- consultation des événements ;
27
- filtrage multicritère ;
28
- affichage détaillé des évènements ;
29
- partage des événements ;
30
- ajout au calendrier ;
31
- consultation optimale sur Desktop, Tablette et Mobile.
32
 
33
---
34
 
35
# Fonctionnalités disponibles
36
 
37
## Cartes événement
38
 
39
- Image
40
- Date
41
- Heure
42
- Public
43
- Type d'activité
44
- Bouton détail
45
 
46
## Filtres
47
 
48
- Type d'activité
49
- Public
50
- Quand
51
- Réservation
52
- Réinitialisation
53
- Fermeture par clic extérieur
54
 
55
## Modale événement
56
 
57
- Image
58
- Type
59
- Titre
60
- Public
61
- PMR
62
- Date
63
- Heure
64
- Description
65
- Tarif
66
- Réservation
67
- Partage
68
- Ajout au calendrier
69
 
70
---
71
 
72
# Responsive
73
 
74
## Desktop
75
 
76
> 1024 px
77
 
78
Validé.
79
 
80
## Tablette
81
 
82
768 px à 1024 px
83
 
84
Validé.
85
 
86
## Mobile
87
 
88
< 768 px
89
 
90
Validé.
91
 
92
---
93
 
94
# Correctifs réalisés en V2.25
95
 
96
## Responsive
97
 
98
- Refonte tablette
99
- Refonte mobile
100
 
101
## Footer
102
 
103
- Harmonisation desktop
104
- Harmonisation mobile
105
- Alignement bloc Partager
106
- Alignement calendrier
107
 
108
## Modales
109
 
110
- Calendrier mobile restauré
111
- Accordéon Réservation restauré
112
- Suppression du double séparateur
113
 
114
## Filtres
115
 
116
- Fermeture par clic extérieur
117
- Correction du double-clic
118
- Correction du filtre "Ce week-end"
119
- Correction des incohérences dateISO
120
 
121
## Git
122
 
123
- Synchronisation GitHub rétablie
124
- Branche v2-maquette à jour
125
 
126
---
127
 
128
# Recette V2.25
129
 
130
## Desktop
131
 
132
✅ Cartes
133
 
134
✅ Modales
135
 
136
✅ Footer
137
 
138
✅ Filtres
139
 
140
## Tablette
141
 
142
✅ 1024 px
143
 
144
✅ 768 px
145
 
146
## Mobile
147
 
148
✅ Cartes
149
 
150
✅ Modales
151
 
152
✅ Réservation
153
 
154
✅ Calendrier
155
 
156
✅ Footer
157
 
158
---
159
 
160
# Gestion des images
161
 
162
## Recommandations
163
 
164
Format : JPG
165
 
166
Dimensions recommandées : 1200 x 900 px
167
 
168
Ratio recommandé : 4:3
169
 
170
Orientation recommandée : Paysage
171
 
172
Poids maximum : 2 Mo
173
 
174
## Remarque
175
 
176
Les formats portrait, paysage et carrés doivent rester acceptés.
177
 
178
Les œuvres peuvent être recadrées automatiquement dans les cartes.
179
 
180
Une réflexion complémentaire sera menée en V3 afin d'améliorer le respect des œuvres verticales.
181
 
182
---
183
 
184
# Dette technique connue
185
 
186
## Icônes
187
 
188
Léger décalage optique entre :
189
 
190
- Users
191
- Calendar
192
- Clock
193
 
194
Sujet identifié mais non bloquant.
195
 
196
## CSS
197
 
198
Présence de plusieurs couches historiques :
199
 
200
- règles dupliquées ;
201
- surcharges responsive ;
202
- ajustements optiques successifs.
203
 
204
Un nettoyage global est prévu en V3.
205
 
206
---
207
 
208
# Évaluation
209
 
210
Widget Agenda : 99 %
211
 
212
Projet global : 85 %
213
 
214
Le principal chantier restant concerne désormais l'alimentation automatisée des contenus.