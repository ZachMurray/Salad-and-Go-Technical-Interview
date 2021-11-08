// Write a program that checks if one string can be created using only the contents of a second string
// You can make the word shine out of the letters from happiness
// But you cannot make the word shininess from the letters of happiness because happiness only has one i and one n
// Send to Rachel 


function word2Another(readWord = "", writeWord = "") {
  let readDict = {};
  let writeDict = {}; 

  [...readWord].forEach((c) => {
    if (readDict[c] == null)
      readDict[c] = 1;
    readDict[c] = readDict[c]+1;
  });
  
  [...writeWord].forEach((c) => {
    if (writeDict[c] == null)
      writeDict[c] = 1;
    writeDict[c] = writeDict[c]+1;
  });

  let returnValue = true; 
  Object.keys(writeDict).forEach((c) => {
    if (writeDict[c] > readDict[c])
        return returnValue = false;
  });
  return returnValue; 
}

console.log(word2Another("happiness", "shininess")); 