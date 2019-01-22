import random

#Classe qui implémente un rotor de la machine
class rotor(object):

    #Création d'un rotor
    def __init__(self):
        self.permutation = []
        self.depart = []
        #Création d'un tableau de 0 à 25
        tableau = []
        for i in range(26):
            tableau.append(i)

        #Création du rotor
        i = 0
        while (i<26):
            a = tableau.pop(random.randint(0,25-i))
            self.permutation.append(a)
            sel.depart.append(a)
            i = i + 1
            
    #Création de la méthode pour faire tourner le rotor
    def rotation(self):
        self.permutation.insert(0, self.permutation.pop(-1))
        self.permutation = map(ajoute, self.permutation)

    #Création de la méthode qui initialise le rotor sur a
    def initialisation(self, a):
        for i in range(a):
            self.rotation()
        for i in range(26):
            self.depart[i] = self.permutation[i]

    #Création de la fonction qui ajoute un module 26
    def ajoute(x):
        return ( x + 1 ) % 26