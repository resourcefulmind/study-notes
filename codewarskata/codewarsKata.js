//Kata for 12th April, 2022

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//First declare the function
function DNAStrand(dna){
    //first split the string of the array into an array of substrings using the split method
    let arr = dna.split('');
    //then loop through arr and reassign the individual substrings to the new values
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'A') {
            arr[i] = 'T'
        } else if (arr[i] === 'T') {
            arr[i] = 'A'
        } else if (arr[i] === 'G') {
            arr[i] = 'C'
        } else if (arr[i] === 'C') {
            arr[i] = 'G'
        } else {
            return 'Hey there extra terrestrial life-form. How goes it in Mars?'
        }
    }
    //then return the concatenated version all the elements in arr with the join() method
    return arr.join('');
  }