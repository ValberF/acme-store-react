import { verbs, adjectives } from "../constants/productsVerbsAdjectives";

const length = verbs.length >= adjectives.length ? adjectives.length : verbs.length;
let products = [] as string[]
let verbNum, adjectiveNum;

for (let i = 0; i < length; i++) {
  verbNum = Math.floor(Math.random() * verbs.length);
  adjectiveNum = Math.floor(Math.random() * adjectives.length);

  products.push(verbs[verbNum] + " " + adjectives[adjectiveNum])
  verbs.splice(verbNum, 1)
  adjectives.splice(adjectiveNum, 1)
}

export default products;