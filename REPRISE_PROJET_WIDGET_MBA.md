# Reprise du projet Widget Agenda MBA
2
 
3
## Situation actuelle
4
 
5
Le projet dispose désormais :
6
 
7
- index.html
8
- agenda.html
9
- style.css
10
- script.js
11
- ROADMAP.md
12
- REPRISE_PROJET_WIDGET_MBA.md
13
- SHAREPOINT_MODELE_MBA.md
14
 
15
---
16
 
17
# Pages
18
 
19
## Accueil
20
 
21
Page :
22
 
23
index.html
24
 
25
### Chargement
26
 
27
4 événements affichés.
28
 
29
### Recherche
30
 
31
Recherche sur toute la programmation.
32
 
33
### Limitation
34
 
35
Maximum :
36
 
37
8 événements affichés.
38
 
39
### Compteur
40
 
41
Exemple :
42
 
43
8 résultats affichés sur 12 trouvés
44
 
45
### Navigation
46
 
47
CONSULTER TOUT L’AGENDA →
48
 
49
ouvre agenda.html
50
 
51
---
52
 
53
## Agenda complet
54
 
55
Page :
56
 
57
agenda.html
58
 
59
### Introduction
60
 
61
Retrouvez toute la programmation culturelle du Musée des Beaux-Arts de Pau.
62
 
63
### Chargement
64
 
65
Tous les événements affichés.
66
 
67
### Recherche
68
 
69
Tous les résultats affichés.
70
 
71
### Filtres
72
 
73
Tous les résultats affichés.
74
 
75
### Compteur
76
 
77
Affiché uniquement :
78
 
79
- lorsqu'un filtre est actif
80
- lorsqu'une recherche est active
81
 
82
Exemple :
83
 
84
3 résultats trouvés
85
 
86
### Réinitialisation
87
 
88
Retour à l'état neutre.
89
 
90
---
91
 
92
# Données
93
 
94
Chaque événement contient désormais :
95
 
96
```js
97
{
98
lieu: "",
99
modaliteAcces: "",
100
statut: "Publié"
101
}
102
```
103
 
104
en plus des données historiques.
105
 
106
---
107
 
108
# Types d'activités
109
 
110
- Exposition
111
- Visite atelier
112
- Visite commentée
113
- Visite contée
114
- Visite flash
115
- Conférence
116
- Concert
117
- Spectacle
118
- Rencontre
119
- Sieste musicale
120
- Vernissage
121
- Événement national
122
- Arrêt sur œuvre
123
- Jeu de l'oie
124
- Memory
125
- L'heure du conte
126
- Nocturne
127
 
128
---
129
 
130
# Publics
131
 
132
Valeurs métier :
133
 
134
- Tout public
135
- Adulte
136
- Famille
137
- Jeune public
138
 
139
## Particularité
140
 
141
Dans les filtres du widget :
142
 
143
"Tout public"
144
 
145
correspond actuellement à :
146
 
147
- Tout public
148
- Adulte
149
- Famille
150
- Jeune public
151
 
152
pour faciliter la consultation.