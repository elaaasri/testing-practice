function caesarCipher(string, num) {
  // get caesar cipher array :
  const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  const caesarArr = [];
  const getCaesarArray = () => {
    let index = 0;
    for (let i = 0; i < alphabetArr.length; i++) {
      caesarArr.push(alphabetArr[i + num]);
      if (caesarArr[i] == undefined) {
        caesarArr[i] = alphabetArr.slice(0, num)[index++];
      }
    }
  };
  // modify the correct chars in caesar array to upper case :
  const modifyCaesarCharsToUpperCase = () => {
    [...string].map((char) => {
      if (char == char.toUpperCase()) {
        const upperCaseCharIndex = alphabetArr.indexOf(char.toLowerCase());
        if (upperCaseCharIndex != -1) {
          caesarArr.splice(
            upperCaseCharIndex,
            1,
            caesarArr[upperCaseCharIndex].toUpperCase()
          );
        }
      }
    });
  };
  // stores the result from caesar array :s
  const getResult = () => {
    let result = "";
    for (const char of string) {
      // gets index of each char in the original array :
      const index = alphabetArr.indexOf(char.toLowerCase());
      if (index != -1) {
        result += caesarArr[index];
      } else {
        result += char;
      }
    }
    return result;
  };

  getCaesarArray();
  modifyCaesarCharsToUpperCase();
  return getResult();
}
export default caesarCipher;
