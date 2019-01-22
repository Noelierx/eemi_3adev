import random

#Création de la classe réflecteur, un rotor particulier
class reflecteur(object):
    def __init__(self):
        self.permutation = []
        tableau1 = []

    for i in range(26):
        tableau1.append(i)
        self.permutation.append(0)
    i = 26
    while i > 0:
        a = tableau1.pop(random.randint(0, i-1))
        b = tableau1.pop(random.randint(0, i-2))
        i = i - 2
        self.permutation[a] = [b]
        self.permutation[b] = [a]