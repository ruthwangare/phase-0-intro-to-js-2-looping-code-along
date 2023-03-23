function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}

countDown(10); // counts down from 10 to 0

function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}
