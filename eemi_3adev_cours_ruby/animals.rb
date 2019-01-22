animals = [
    'dogs',
    'cats',
    'birds',
]

animals.map!{ |animal| "I love #{animal}" }

p animals == [
    'I love dogs',
    'I love cats',
    'I love birds',
]
#ajouter 'I love' à chaque valeurs du tableau animals

#retirer les oiseaux de la liste
animals.reject!{ |animal| animal.include?('birds') }
p animals == [
    'I love dogs',
    'I love cats',
]