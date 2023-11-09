const isPalindrome = (text) => {
  text = text.toLowerCase();
  for(let i = 0; i < text.length; i++) {
    // console.log(text[i], text[text.length - i - 1])
    if(text[i] !== text[text.length - i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome('Anna'))
console.log(isPalindrome('Cau'))