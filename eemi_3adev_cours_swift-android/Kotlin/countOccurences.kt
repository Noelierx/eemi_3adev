//
//  Created by Noelie Roux on 23/01/2019.
//  Copyright © 2019 Noelie Roux. All rights reserved.
//  Algoritme d'origine : https://github.com/raywenderlich/swift-algorithm-club/tree/master/Count%20Occurrences
//

fun countOccurrencesOfKey(key: Int, a: List<Int>) : Int {
    
    fun leftBoundary() : Int {
        var low = 0
        var high = a.size
        while (low < high) {
            val midIndex = low + (high - low) / 2
            if (a[midIndex] < key) {
                low = midIndex + 1
            } else {
                high = midIndex
            }
        }
        return low
    }
    
    fun rightBoundary() : Int {
        var low = 0
        var high = a.size
        while (low < high) {
            val midIndex = low + (high - low) / 2
            if (a[midIndex] > key) {
                high = midIndex
            } else {
                low = midIndex + 1
            }
        }
        return low
    }
    return rightBoundary() - leftBoundary()
}
fun main() {
    val a = arrayOf(0, 1, 1, 3, 3, 3, 3, 6, 8, 10, 11, 11)
	countOccurrencesOfKey(3, arrayOf(a))
}
