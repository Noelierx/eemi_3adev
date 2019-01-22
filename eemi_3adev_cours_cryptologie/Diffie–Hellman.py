# Variables Utilisées
sharedPrime = 23    # p Prime = principale
sharedBase = 5      # g Base = secondaire
 
aliceSecret = 6     # a clé secrète d'Alice
bobSecret = 15      # b clé secrète de Bob
 
# Début
print( "Variables partagées publiquement:")
print( "    Publicly Shared Prime: " , sharedPrime )
print( "    Publicly Shared Base:  " , sharedBase )
 
# Alice envoie à Bob A = g^a mod p
A = (sharedBase**aliceSecret) % sharedPrime
print( "Alice envoie sur le channel public: " , A )
 
# Bob envoie à Alice B = g^b mod p
B = (sharedBase ** bobSecret) % sharedPrime
print( "Bob envoie sur le channel public: ", B )
 
print( "\n------------\n" )
print( "Secret partagé confidentiellement calculé:" )
# Alice calcule le secret partagé: s = B^a mod p
aliceSharedSecret = (B ** aliceSecret) % sharedPrime
print( "    Le secret partagé par Alice: ", aliceSharedSecret )
 
# Bob calcule le secret partagé: s = A^b mod p
bobSharedSecret = (A**bobSecret) % sharedPrime
print( "    Le secret partagé par Bob: ", bobSharedSecret )
