# -*- coding: utf-8 -*-
"""
Created on Tue Nov  3 01:36:40 2020

@author: alejandro


"""

import pandas as pd
from textblob import TextBlob
import csv
import re
import time
import string

data = pd.read_csv('True.csv');

for i in range (20):
    index = i
    cad = data['title'][index]
    a = TextBlob(cad).sentiment
    print(cad)
    print(a)

data = pd.read_csv('Fake.csv');
print('======================')
for i in range (20):
    index = i
    cad = data['title'][index]
    a = TextBlob(cad).sentiment
    print(cad)
    print(a)


'''
Polaridad 
1 positivo
-1 Negativo

Subjetividad
1 subjetivo un opinion
0 objetivo, un hecho
'''
#======== INTENTANDO USAR TEXT BLOCK CON ESPA;OL
cad = TextBlob('odio el codigo spaguetti').translate(from_lang ='es' , to ='en').sentiment
print(cad)

