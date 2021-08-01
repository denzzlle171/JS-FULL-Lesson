const splitString = (text, numb = 10) => {
  const strArr = [];
  let startPosition = 0;

  if (!(typeof text === 'string')) {
    return null;
  }
  while (true) {
    let chunk = text.substr(startPosition, numb);
    if (chunk.length === 0) {
      break;
    }
    let arrChunk = chunk.split('');
    while (0 < arrChunk.length && arrChunk.length < numb) {
      arrChunk.push('.');
    }
    let srrchunk = arrChunk.join('');
    strArr.push(srrchunk);
    startPosition += numb;
  }
  return strArr;
};

console.log(splitString('hello world', 5));
