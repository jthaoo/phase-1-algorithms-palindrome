function isPalindrome(word) {
  let l = word.length;
  for (let i = 0; i < l/2; i++) {
   if (word[i] !== word[l - 1 - i]) {
    return false;
   }
  }
  return true;
}

if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("deed"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("deeds"));
}

module.exports = isPalindrome;
