package stringutil

import (
	"log"
	"testing"
)

func TestReverse(t *testing.T) {
	const src="Hello"
	const expected = "olleH"
	actual := Reverse(src)
	if actual != expected {
		log.Printf("Expected: %s != actual: %s\n", expected, actual)
		t.Fail()
	}
}

func BenchmarkReverse(b *testing.B) {
	const src="Hello"
	const expected = "olleH"
	actual := Reverse(src)
	if actual != expected {
		log.Printf("Expected: %s != actual: %s\n", expected, actual)
		b.Fail()
	}
}