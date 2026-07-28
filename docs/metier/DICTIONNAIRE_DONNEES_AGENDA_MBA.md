# DICTIONNAIRE DE DONNÉES – AGENDA MBA
2
 
3
Version : 2.0
4
 
5
Date : 28 juillet 2026
6
 
7
Statut : Validé
8
 
9
---
10
 
11
# Objet du document
12
 
13
Ce document décrit l'ensemble des données utilisées dans le projet Agenda MBA.
14
 
15
Il constitue la référence officielle concernant :
16
 
17
- les colonnes Microsoft Lists ;
18
- les types de données ;
19
- les valeurs autorisées ;
20
- les contraintes de saisie.
21
 
22
Les règles de fonctionnement sont décrites dans :
23
 
24
```text
25
REGLES_METIER_AGENDA_MBA.md
26
```
27
 
28
---
29
 
30
# Principe général
31
 
32
## Une occurrence = une ligne
33
 
34
Chaque occurrence d'un événement correspond à un enregistrement distinct dans Microsoft Lists.
35
 
36
Exemple :
37
 
38
```text
39
Sieste musicale
40
 
41
10 mars
42
12 avril
43
15 mai
44
```
45
 
46
correspond à :
47
 
48
```text
49
3 lignes différentes
50
```
51
 
52
---
53
 
54
# ID
55
 
56
Nom interne :
57
 
58
```text
59
ID
60
```
61
 
62
Type :
63
 
64
```text
65
Numéro automatique SharePoint
66
```
67
 
68
Obligatoire :
69
 
70
```text
71
Oui
72
```
73
 
74
Utilisation :
75
 
76
Identifiant technique unique.
77
 
78
---
79
 
80
# Statut
81
 
82
Nom interne :
83
 
84
```text
85
Statut
86
```
87
 
88
Type :
89
 
90
```text
91
Choix
92
```
93
 
94
Valeurs :
95
 
96
```text
97
Brouillon
98
Publié
99
```
100
 
101
Valeur par défaut :
102
 
103
```text
104
Brouillon
105
```
106
 
107
Utilisation :
108
 
109
Gestion de la publication.
110
 
111
---
112
 
113
# Type d'événement
114
 
115
Nom interne :
116
 
117
```text
118
TypeEvenement
119
```
120
 
121
Type :
122
 
123
```text
124
Choix
125
```
126
 
127
Obligatoire :
128
 
129
```text
130
Oui
131
```
132
 
133
Utilisation :
134
 
135
Catégorisation des événements.
136
 
137
Valeurs initiales :
138
 
139
- Exposition
140
- Visite Atelier
141
- Visite commentée
142
- Conférence
143
- Concert
144
- Spectacle
145
- Rencontre
146
- Visite Flash
147
- Événement national
148
- Vernissage
149
- Memory
150
- Jeu de l'oie
151
- Visite contée