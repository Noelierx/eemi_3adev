"""
Exercice : On prend un graph comme au dessus
On a plus de 5 valeurs
On regarde le 5ème jours, on fait la moyenne des 5 derniers et on regarde si notre point et au dessus ou en dessous de la moyenne
    Rouge en dessous
    Vert au dessus
Si J5 = 2, Moyenne = 4 : J5 est rouge
Si J6 = 8, Moyenne = 5 : J6 est vert
"""

from statistics import mean
import matplotlib.pyplot as plt
import requests

def print_bitcoin_hist (start, end):
    res = requests.get('https://api.coindesk.com/v1/bpi/historical/close.json?start='+start+'&end='+end)
    x = list(res.json()['bpi'].keys())
    y = list(res.json()['bpi'].values())
    plt.plot(x, y)
    j = 0
    for index in y:
        if j > 4:
            if y[j] < mean(y[j - 5: j]):
                plt.scatter(x[j], y[j], color='red')
            else:
                plt.scatter(x[j], y[j], color='green')
        j += 1
    plt.show()

print_bitcoin_hist('2018-03-01', '2018-07-01')
