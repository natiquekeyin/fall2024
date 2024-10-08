// Object to provide lookup of morse code (value) for a given letter (key).
let alpha = {
  // define the mapping here as a literal

  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
};

// Object to provide lookup of letter (value) for a given morse code (key).
let morse = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "/": " ",
};
// Hint: use the [] operator to specify these special key values rather than a literal.

// Return `true` if all characters are morse code.  Use a RegExp.
function isMorse(characters) {
  return /^[.\- /]*$/.test(characters);
}

// Return `true` if all characters are part of the alphabet defined in `alpha`.  Use a RegExp.
// Bonus: can you rewrite it using `Object.keys()` and your `alpha` Object instead?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
function isAlpha(characters) {
  return /^[A-Z ]*/.test(characters);
}

// Given an alphabet message, convert and return in morse code.  Use your morse and/or alpha object.
// Return undefined if text is not alpha.
function textToMorse(text) {
  function convertWordToMorse(word) {
    let morse = "";
    let letter;
    // Loop acrsos all the letters in the word, convert to morse, and build a new string
    for (letter of word) {
      morse += alpha[letter] + " ";
    }
    return morse.trim();
  }

  //   turn text into Upper case (if not already )

  text = text.toUpperCase();
  //   split into separate words (breaks or spaces)
  words = text.split(" ");
  //   Run each word throuh convertWordToMorse() and build a new array

  morse = words.map(function (word) {
    return convertWordToMorse(word);
  });

  //   return a string of all words converted to morse, joined by /
  return morse.join("/");
}

// Given a morse code message, convert and return in text.  Use your morse and/or alpha object.
// Return undefined if morse is not proper code.
function morseToText(data) {
  function convertMorseToWord(morseWord) {
    // each morse letter is separate by a space. Convert to an array
    morseWord = morseWord.split(" ");

    // build a new array by looking up each morse letter in the morse object, jon together into a string and return

    let letters = morseWord.map(function (morseLetter) {
      return morse[morseLetter];
    });

    return letters.join("");
  }

  // split the morse into separate words( / is the separator)
  let morseWords = data.split("/");

  // G through each morse wor, and convert it into alpha, building a new array

  let words = morseWords.map(function (morseWord) {
    return convertMorseToWord(morseWord);
  });

  return words.join("");
}

// Message class that takes a `message` (String), which can be either morse or alpha.
// Use your functions above to decide how to store a value for `any` on `this`
class Message {
  text;
  constructor(t) {
    this.text = t.toUpperCase();
  }

  toMorse() {
    if (isMorse(this.text)) {
      return this.text;
    }
    return textToMorse(this.text);
  }

  toAlpha() {
    if (isAlpha(this.text)) {
      return this.text;
    }
    return morseToText(this.text);
  }
}
let msg1 = new Message(
  "--- -... .--- . -.-. - .../.. -./.--- .- ...- .- ... -.-. .-. .. .--. -/.- .-. ./...- . .-. -.--/.--. --- .-- . .-. ..-. ..- .-.."
);
console.log(msg1.toAlpha());
console.log(msg1.toMorse());

let msg2 = new Message("I am learning how to use Objects in JavaScript");
console.log(msg2.toMorse());
console.log(msg2.toAlpha());

// Let's extend our Thursday's front end session and solve this problem...
// I will announce a session on Thursday after our regular session...
