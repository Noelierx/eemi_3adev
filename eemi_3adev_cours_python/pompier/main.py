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
        self.liste_pompiers = [Pompier((2,7))]
        self.liste_feux = [(4,3)]
        self.size = (15,15)

    def run(self):
        self.liste_pompiers[0].run(
            self.liste_feux[0])

class Pompier:
    """
    position
    busy

    se_deplacer(self, feu)
    """
    def __init__(self, position):
        self.position = np.array(position)
        self.busy = 0
    def run(self, feu):
        if self.busy == 0:
            self.se_deplacer(feu)
        else:
            self.busy -=1
    def se_deplacer(self, feu):
        if self.position[0] != feu[0]:
            self.position[0] += 1 if self.position[0]<feu[0] else -1
        elif self.position[1] != feu[1]:
            self.position[1] += 1 if self.position[1]<feu[1] else -1
        else:
            self.busy = 5

bm = BoardManager()
for i in range(15):
    bm.run()
    print(bm.liste_pompiers[0].position)
