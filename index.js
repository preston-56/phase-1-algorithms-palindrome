function isPalindrome(word) {
  // Write your algorithm here
// Create FOR loop
  for (let i = 0; i < word.length / 2; i++) {
    //compare each letter to the matching letter from the end of the word
    const len = word.length - 1 - i;
    //When the letters don't match anymore, false is returned and we exit the FOR loop
    //As long as the letters from each part match, the FOR loop will go on
    if (word[i] !== word[len]) return false;
    return true;
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
