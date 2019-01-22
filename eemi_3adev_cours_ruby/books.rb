list_books = [
    "Heart of Darkness",
    "Code Complete",
    "The Lorax",
    "The Prophet",
    "Absalom, Absalom!",
]

# classer la liste par ordre alphabétique a -> z
def books_asc(books)
   books.sort 
end

# classer la liste par ordre alphabétique inverse z -> a
def books_desc(books)
    books.sort { |x,y| y <=> x }
end

p books_asc(list_books)
p books_desc(list_books)