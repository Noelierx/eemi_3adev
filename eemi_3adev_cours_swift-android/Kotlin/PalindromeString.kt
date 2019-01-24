//
//  Created by Noelie Roux on 23/01/2019.
//  Copyright © 2019 Noelie Roux. All rights reserved.
//  Algorithme d'origine : https://github.com/raywenderlich/swift-algorithm-club/tree/master/Palindromes
//

fun main() {
    println(String.format("Is Palindrome \"%s\"=%s", "kayak", IsPalindrome("kayak")))
    println(String.format("Is Palindrome \"%s\"=%s", "racecar", IsPalindrome("racecar")))
    println(String.format("Is Palindrome \"%s\"=%s", "abricot", IsPalindrome("abricot")))
    println(String.format("Is Palindrome \"%s\"=%s", "Fraise56", IsPalindrome("fraise56")))
}

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