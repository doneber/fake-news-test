# -*- coding: utf-8 -*-
"""
Created on Tue Nov  3 02:32:24 2020

@author: alejandro
"""

from ntlk.sentiment.vader import SentimentIntensityAnalyzer


x = "It is a charming and beutiful product"

sid = SentimentIntensityAnalyzer()
resultados = sid.polarity_scores(x)
print(resultados)