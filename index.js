// Code your solutions in this file

const sentence = [];

function writeCards(nameArray, occasion) {
    for (let i = 0; i < nameArray.length; i++) {
        sentence[i] = `Thank you, ${nameArray[i]}, for the wonderful ${occasion} gift!`;
        }
        return sentence;
}

function countDown() {
    let countDown = 10;
    while (countDown > -1) {
      console.log(countDown--);
    }
}