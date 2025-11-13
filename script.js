function firstNonRepeatedChar(str) {
  // Step 1: Create a frequency map
  const freq = {};

  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Step 2: Find the first character with frequency 1
  for (let ch of str) {
    if (freq[ch] === 1) {
      return ch; // first non-repeated character
    }
  }

  // Step 3: If none found, return null
  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
