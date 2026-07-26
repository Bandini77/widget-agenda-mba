# Reprise de projet - Widget Agenda MBA
2
 
3
## Situation actuelle
4
 
5
Le widget est :
6
 
7
✅ fonctionnel
8
 
9
✅ responsive
10
 
11
✅ documenté
12
 
13
✅ publié sur GitHub Pages
14
 
15
✅ intégrable dans le CMS du musée via iframe
16
 
17
---
18
 
19
## URL GitHub Pages
20
 
21
https://bandini77.github.io/widget-agenda-mba/
22
 
23
---
24
 
25
# Principales décisions
26
 
27
## Événements
28
 
29
Une occurrence = une ligne.
30
 
31
Exemple :
32
 
33
Sieste musicale :
34
 
35
- 10 mars
36
- 15 avril
37
- 12 mai
38
 
39
=
40
 
41
3 événements
42
 
43
---
44
 
45
## Publics
46
 
47
Publics réels :
48
 
49
- Adulte
50
- Famille
51
- Jeune public
52
 
53
"Tout public"
54
 
55
est une vue globale et non une catégorie métier.
56
 
57
---
58
 
59
## PMR
60
 
61
Considéré comme automatique.
62
 
63
Aucune donnée spécifique nécessaire.
64
 
65
---
66
 
67
# État des filtres
68
 
69
✅ Filtre Ce week-end corrigé
70
 
71
✅ Filtre Tout public corrigé
72
 
73
✅ Recherche fonctionnelle
74
 
75
✅ Filtres publics fonctionnels
76
 
77
✅ Filtres types d'activité fonctionnels
78
 
79
---
80
 
81
# Meta-line
82
 
83
Composant généralisé.
84
 
85
Utilisé pour :
86
 
87
- Public
88
- Date
89
- Heure
90
 
91
Objectif atteint :
92
 
93
Alignement cohérent dans les cartes et modales.
94
 
95
---
96
 
97
# Découverte majeure lors du test CMS
98
 
99
L'intégration iframe fonctionne.
100
 
101
---
102
 
103
## Conclusion
104
 
105
Le modèle :
106
 
107
Accueil + Agenda complet dans une seule page
108
 
109
n'est pas adapté.
110
 
111
---
112
 
113
# Nouvelle architecture validée
114
 
115
## Page Accueil
116
 
117
Contenu :
118
 
119
- 4 événements
120
- bouton "Consulter tout l'agenda"
121
 
122
Fin du widget.
123
 
124
---
125
 
126
## Page Agenda
127
 
128
Contenu :
129
 
130
- recherche
131
- filtres
132
- tous les événements
133
- modales
134
 
135
---
136
 
137
# Suppressions prévues
138
 
139
## Bouton
140
 
141
← Retour au site du musée
142
 
143
Raison :
144
 
145
inutile dans un iframe.
146
 
147
---
148
 
149
# Intégration CMS
150
 
151
✅ Fonctionne
152
 
153
Points à ajuster :
154
 
155
- hauteur du widget
156
- modales
157
- espace occupé
158
- bouton réinitialiser
159
 
160
---
161
 
162
# Priorité actuelle
163
 
164
Créer :
165
 
166
- Accueil
167
- Agenda complet
168
 
169
séparés.
170
 
171
Cette évolution est prioritaire avant SharePoint.