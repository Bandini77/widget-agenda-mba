# ROADMAP - Widget Agenda MBA
2
 
3
## Vision
4
 
5
Créer un agenda culturel administrable simplement par les équipes du Musée des Beaux-Arts de Pau.
6
 
7
Objectifs :
8
 
9
- interface élégante ;
10
- responsive ;
11
- intégration sur le site du musée ;
12
- administration sans code ;
13
- maintenance minimale.
14
 
15
---
16
 
17
# V3.1 - Stabilisation technique
18
 
19
✅ Correction du filtre "Ce week-end"
20
 
21
✅ Correction du filtre "Tout public"
22
 
23
✅ Vérification des dateISO
24
 
25
✅ Harmonisation des meta-line
26
 
27
✅ Audit CSS
28
 
29
✅ Audit JavaScript
30
 
31
✅ Publication GitHub Pages
32
 
33
✅ Premier test d'intégration CMS
34
 
35
---
36
 
37
# V3.2 - Adaptation à l'intégration réelle
38
 
39
## Architecture
40
 
41
Décision validée :
42
 
43
Le modèle :
44
 
45
Accueil + Agenda complet dans une seule page
46
 
47
n'est pas adapté à l'intégration CMS.
48
 
49
---
50
 
51
### À faire
52
 
53
□ Créer une page Accueil
54
 
55
Affichage :
56
 
57
- 4 événements
58
- bouton "Consulter tout l'agenda"
59
 
60
---
61
 
62
□ Créer une page Agenda complet
63
 
64
Affichage :
65
 
66
- recherche
67
- filtres
68
- tous les événements
69
- modales
70
 
71
---
72
 
73
□ Modifier le bouton :
74
 
75
"Consulter tout l'agenda"
76
 
77
pour ouvrir la page Agenda complète.
78
 
79
---
80
 
81
□ Supprimer :
82
 
83
"Retour au site du musée"
84
 
85
---
86
 
87
## Interface
88
 
89
□ Ajuster les modales dans le contexte iframe
90
 
91
□ Repenser le bouton :
92
 
93
Réinitialiser les filtres
94
 
95
---
96
 
97
## Responsive
98
 
99
□ Recette Desktop
100
 
101
□ Recette Tablette
102
 
103
□ Recette Mobile
104
 
105
après séparation Accueil / Agenda
106
 
107
---
108
 
109
# V3.3 - Validation CMS
110
 
111
## Tests
112
 
113
□ Affichage accueil
114
 
115
□ Affichage agenda complet
116
 
117
□ Modales
118
 
119
□ Filtres
120
 
121
□ Scroll
122
 
123
□ Responsive
124
 
125
□ Performance
126
 
127
---
128
 
129
# V3.5 - Administration
130
 
131
## SharePoint
132
 
133
Créer :
134
 
135
Site SharePoint Agenda MBA
136
 
137
---
138
 
139
## Microsoft Lists
140
 
141
Créer :
142
 
143
Liste Agenda MBA
144
 
145
à partir du modèle métier validé.
146
 
147
---
148
 
149
# V4 - Publication automatisée
150
 
151
Objectif :
152
 
153
Administration sans code.
154
 
155
Architecture cible :
156
 
157
Microsoft Lists
158
 
159
↓
160
 
161
Widget Agenda MBA
162
 
163
↓
164
 
165
Publication site musée
166
 
167
---
168
 
169
# Évolutions futures
170
 
171
À étudier :
172
 
173
- publication programmée
174
- workflow de validation
175
- statistiques
176
- billetterie
177
- synchronisation OpenAgenda