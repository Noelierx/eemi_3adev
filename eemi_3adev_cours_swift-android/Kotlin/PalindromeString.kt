//
//  Created by Noelie Roux on 23/01/2019.
//  Copyright © 2019 Noelie Roux. All rights reserved.
//  Algorithme d'origine : https://github.com/raywenderlich/swift-algorithm-club/tree/master/Palindromes
//

//Début du palindrome on crée une boucle qui vérifie qu'une lettre est présente en façon "miroir"
fun IsPalindrome(value: String): Boolean {
    var result: Boolean = true
    for ( i in value.length - 1 downTo 0 ) {
        if ( value[i] != value[ value.length - 1 - i ] ) {
            result = false
            break
        }
    }
    return result
}
// On ajoute les mots à tester
fun main() {
    println(String.format("Is Palindrome \"%s\"=%s", "kayak", IsPalindrome("kayak")))
    println(String.format("Is Palindrome \"%s\"=%s", "racecar", IsPalindrome("racecar")))
    println(String.format("Is Palindrome \"%s\"=%s", "abricot", IsPalindrome("abricot")))
    println(String.format("Is Palindrome \"%s\"=%s", "Fraise56", IsPalindrome("fraise56")))
}
