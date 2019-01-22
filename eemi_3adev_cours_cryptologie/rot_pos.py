minuscules = 'abcdefghijklmnopqrstuvwxyz'
majuscules = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

#effectue une rotation de x caractères vers la droite
def rotation(chaine, x):
    return chaine[x:] + chaine[:x]

#trouve l'index de y dans la chaine de caractères
def index(y, chaine):
    for i in range(len(chaine)):
        if (y == chaine[i]):
            return i
    return -1

#chiffre une chaîne de caractères en minuscules
def chiffre_minuscules(chaine, x):
    r = rotation(minuscules, x)
    resultat = ''
    for lettre in chaine:
        resultat = resultat + r[index(lettre, minuscules)]
    return resultat

#chiffre une chaîne de caractères en minuscules et majuscules
def chiffre(chaine, x):
    r_min = rotation(minuscules, x)
    r_maj = rotation(majuscules, x)
    resultat = ''
    for lettre in chaine:
        if lettre in minuscules:
            resultat = resultat + r_min[index(lettre, minuscules)]
        elif lettre in majuscules:
            resultat = resultat + r_maj[index(lettre, majuscules)]
        else:
            resultat = resultat + lettre
    return resultat

#Faire tourner pour vérifier l'algorithme
print(chiffre_minuscules('bonjour', 3))
print(chiffre('Bonjour les devs!', 3))
print(chiffre('Erqmrxu ohv ghyv!', 23))
print(chiffre('Eudyr, yrxv dyhc ilql fhw hahuflfh!', 23))
