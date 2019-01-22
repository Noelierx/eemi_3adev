#!/usr/bin/env python3
 # -*- coding: utf-8 -*-

import numpy as np
import os, time
from colorama import Fore, Style


class Fireman:

    def __init__(self, position, board):
        self.position = np.array(position)
        self.busy = 0 # The fireman is it ready ?
        self.board = board

    def move(self, position):
        vecteur = np.array(position) - self.position

        if self.busy > 0:
            self.busy -= 1
            return
        if vecteur[0] != 0:
            self.position[0] = self.position[0] + ( 1 if vecteur[0] > 0 else -1)
        elif vecteur[1] != 0:
            self.position[1] = self.position[1] + ( 1 if vecteur[1] > 0 else -1)
        else:
            self.busy = 5
            print('I\'m Busy man !')
            self.board.list_fires = [ i for i in self.board.list_fires if (position != i).all()]

class Board:
    def __init__(self):
        self.list_firemen = [Fireman(i, self) for i in [(1,4), (6,7),(10,2),(3,8)]]
        self.list_fires = [np.array(i) for i in [(2,5), (8,9),(8,5),(9,0)]]
        self.size = np.array([10,10])

    def display_characters(self, x, y):
        for fireman in self.list_firemen:
            if (fireman.position == np.array([x,y])).all():
                return '@'
        for fire in self.list_fires:
            if (fire == np.array([x,y])).all():
                return 'X'
        return ' '

    def distance(self, pt1, pt2):
        return np.linalg.norm(pt2 - pt1)

    def closest_fire(self, fireman):
        result = self.list_fires
        for fire in self.list_fires:
            if self.distance(fire, fireman.position) < self.distance(result, fireman.position):
                result = fire
        return result
    def run(self):
        for fireman in self.list_firemen:
            fireman.move(self.closest_fire(fireman))

    def display(self):
        for x in range(self.size[0]):
            print([self.display_characters(x, y) for y in range(self.size[1])])


board = Board()

for i in range(10):
    os.system('clear')
    board.display()

    board.run()
    time.sleep(1)
