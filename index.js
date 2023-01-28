/*const name = [];

function writeCards(name, occasion){
    for(let i = 0; i < name.length; i++){
        return `Thank you, ${name[i]}, for the wonderful ${occasion} gift!`
    }
}
writeCards(name,occasion);

const gifts = ['ball', 'bone', 'bear'];

function wrapGifts(gifts){
    for (let i=0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]}!`)
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);*/

function writeCards(name,event){
    let messages = []
    for(let i=0; i < name.length; i++){
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}
function countDown(i) {
    while (i >= 0) {
      console.log(parseFloat(`${i}`));
      i--;
    }
  }
  
  countDown();