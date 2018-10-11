import shuffle from 'lodash.shuffle';
import BarajasClass from './barajasClass';

const numberCard = 8;

export default () => {
  console.log(BarajasClass);
  const barajasClass = BarajasClass();
  let cards = [];

  while (cards.length < numberCard) {
    const index = Math.floor(Math.random() * barajasClass.length);
    const carta = {
      icon: barajasClass.splice(index, 1)[0],
      rigth: false
    }
    cards.push(carta);
    cards.push({...carta});
  }
  return shuffle(cards);
};