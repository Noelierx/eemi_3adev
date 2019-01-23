import numpy as np


class BoardManager:
    """
    Contenir tous les pompiers :
        liste_pompiers [Pompier(2,7)]
    Contenir tous les feux : liste_feux [(4,3)]
    Size

    run
    """

    def __init__(self):
        self.liste_pompiers = [Pompier(i, self) for i in [(1, 4), (6, 7), (10, 2), (3, 8)]]
        self.liste_feux = [np.array(i) for i in [(2, 5), (8, 9), (8, 5), (9, 0)]]
        self.size = np.array([15, 15])

    def afficher_pompier(self, x, y):
        for pompier in self.liste_pompiers: #Pour chaque pompier présent dans la liste des pompiers
            if (pompier.position == np.array([x, y])).all():
                return 'POMPIER' #On affiche un pompier
        for feu in self.liste_feux:
            if (feu == np.array([x, y])).all():
                return 'FEU' #on affiche un feu
        return '  ' #On affiche une case vide

    def distance(self, pt1, pt2):
        return np.linalg.norm(pt2 - pt1)

    def feu_proche(self, pompier):
        result = self.liste_feux
        for feu in self.liste_feux: #pour chaque feu dans la liste des feux
            if self.distance(feu, pompier.position) < self.distance(result, pompier.position):
                result = feu
        return result

    def run(self):
        for pompier in self.liste_pompiers: #pour chaque pompier dans la liste des pompiers
            pompier.move(self.feu_proche(pompier)) #avancer un pompier à un feu proche

    def display(self):
        for x in range(self.size[0]):
            print([self.afficher_pompier(x, y) for y in range(self.size[1])])


class Pompier:
    """
    position
    busy

    se_deplacer(self, feu)
    """

    def __init__(self, position, board):
        self.position = np.array(position)
        self.busy = 0
        self.board = board

    def move(self, position):
        vecteur = np.array(position) - self.position

        if self.busy > 0:
            self.busy -= 1
            return
        if np.any(vecteur[0] != 0):
            self.position[0] = self.position[0] + (1 if vecteur[0] > 0 else -1)
        elif vecteur[1] != 0:
            self.position[1] = self.position[1] + (1 if vecteur[1] > 0 else -1)
        else:
            self.busy = 5
            print('Je suis occupe !')
            self.board.liste_feux = [i for i in self.board.liste_feux if (position != i).all()]


bm = BoardManager()

for i in range(15):
    bm.display()
    bm.run()
    #print(bm.liste_pompiers[0].position)
