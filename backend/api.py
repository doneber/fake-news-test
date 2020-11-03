from flask import Flask, request, jsonify, render_template
import tensorflow as tf
from tensorflow import keras
import numpy as np
import pandas as pd
from tensorflow.keras import backend
from tensorflow.keras.models import load_model

import matplotlib.pyplot as plt 
import numpy as np 
import re 
from tensorflow.keras.preprocessing.text import Tokenizer
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix, precision_score, recall_score
import seaborn as sns 
plt.style.use('ggplot')
from sklearn import datasets,linear_model
from sklearn.model_selection import train_test_split

from textblob import TextBlob
import string

from translate import Translator


app = Flask(__name__)

def normalize(data):
        normalized = []
        for i in data:
            i = i.lower()
            # eliminamos url
            i = re.sub('https?://\S+|www\.\S+', '', i)
            # eliminamos espacios extra
            i = re.sub('\\W', ' ', i)
            i = re.sub('\n', '', i)
            i = re.sub(' +', ' ', i)
            i = re.sub('^ ', '', i)
            i = re.sub(' $', '', i)
            normalized.append(i)
        return normalized
    
@app.before_first_request
def load_model_to_app():
   app.model = load_model('model3.h5')

@app.route("/")
def index():
    return render_template('index.html', pred = 0)

@app.route('/predict', methods=['POST'])

def predict():
    data = [request.form['titulo'],
            request.form['noticia']]
    a = data[0]
    b = data[1]
    b = a +b
    
  
    #Leyendo los datos
    fake_df = pd.read_csv('Fake.csv')
    real_df = pd.read_csv('True.csv')
    
    

    
    #Agregamos una nueva columna check con valores de True y False 
    real_df['check'] = 'TRUE'
    fake_df['check'] = 'FAKE'
    
    #Eliminamos columnas que creemos no necesarias(fecha,tema)
    fake_df.drop(['date', 'subject'], axis=1, inplace=True)
    real_df.drop(['date', 'subject'], axis=1, inplace=True)
    
    #Valores O noticias falsas,1 noticias verdaderas
    fake_df['class'] = 0 
    real_df['class'] = 1
    
    #Comparamos la cantidad de noticias reales como falsas
    plt.figure(figsize=(10, 5))
    plt.bar('Fake News', len(fake_df), color='orange')
    plt.bar('Real News', len(real_df), color='green')
    plt.title('Distribution of Fake News and Real News', size=15)
    plt.xlabel('News Type', size=15)
    plt.ylabel('# of News Articles', size=15)
    
    
    #Concatenamos ambos datasets en uno nuevo de noticias(news_df)
    news_df = pd.concat([fake_df, real_df], ignore_index=True, sort=False)
    #print(news_df)
    
    
    #juntamos dos columnas en una sola 
    news_df['text'] = news_df['title'] + news_df['text']
    news_df.drop('title', axis=1, inplace=True)
    
    
    
    #Dividimos entre train y test
    features = news_df['text']
    targets = news_df['class']
    
    X_train, X_test, y_train, y_test = train_test_split(features, targets, test_size=0.20, random_state=18)
    
    #Eliminamos espacios en blanco,url,etc.
    data = np.array([b])
    X_test = pd.Series(data)
    
    """
    translate= Translator(from_lang="spanish",to_lang="english")
    b = translate.translate(b)
    print(b)
    print(TextBlob(a).translate(from_lang="es",to="en").sentiment)
    
  
    
    translate= Translator(from_lang="spanish",to_lang="english")
    b = translate.translate(b)
    print(b)
    
    
    
    a = normalize(a)
    print(TextBlob(a).translate(from_lang="es",to="en").sentiment)
    a = 'odio el codigo spaguetti'
    
    translator= Translator(from_lang="spanish",to_lang="english")
    translation = translator.translate(a)
    print (translation)
    
    print(TextBlob(a).translate(from_lang="es",to="en").sentiment)
    #print (type(X_test))
    """
    
    X_train = normalize(X_train)
    X_test = normalize(X_test)
    
    print("11111")
    max_vocab = 10000
    tokenizer = Tokenizer(num_words=max_vocab)
    tokenizer.fit_on_texts(X_train)
    
    #Convertimos los textos en vectores
    X_train = tokenizer.texts_to_sequences(X_train)
    X_test = tokenizer.texts_to_sequences(X_test)
    
    #Tenemos la misma cantidad de largo en cada texto
    X_train = tf.keras.preprocessing.sequence.pad_sequences(X_train, padding='post', maxlen=256)
    X_test = tf.keras.preprocessing.sequence.pad_sequences(X_test, padding='post', maxlen=256)
    
    
    print("222")
    pred = app.model.predict(X_test)
    pred = pred - 0.5
    
    if(pred > 0 ):
        pro = (98*pred)/(6.89)
        x = "noticia problablemente verdadera"
    else:
        pro = (98*pred)/(-8.6)
        x = "noticia probablemente falsa"
    print(x," con una probablidad de ",pro)
    
    #return render_template('index.html', pred=class_)
    re = x + " con una probabilidad de "+str(pro)
    print("333")
    #re = "si"
    print(re)
    return render_template('index.html',pred=re)

def main():
    """Run the app."""
    app.run(host='0.0.0.0', port=8000, debug=False)  # nosec


if __name__ == '__main__':
    main()