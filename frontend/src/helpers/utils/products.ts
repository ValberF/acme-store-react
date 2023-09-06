import { verbs, adjectives, descriptions } from "../constants/productsVerbsAdjectives";
import { Product } from "@/models/ProductProps.model";
import axios from 'axios'

const length = verbs.length >= adjectives.length ? adjectives.length : verbs.length;
let products = [] as Product[], nameLength = 0, price = 0, photosArray = [] as string[];
let verbNum, adjectiveNum, photoNum, descriptionNum = 0, photosIndexArray = [] as Number[];

for (let i = 0; i < length; i++) {
  let photoIndexNum = Math.floor(Math.random() * 50);

  while (photosIndexArray.includes(photoIndexNum)) {
    photoIndexNum = Math.floor(Math.random() * 50);
  }

  photosIndexArray.push(photoIndexNum);
  photosArray.push(`https://picsum.photos/seed/${i}/200/300`)
}

for (let i = 0; i < length; i++) {
  verbNum = Math.floor(Math.random() * verbs.length);
  adjectiveNum = Math.floor(Math.random() * adjectives.length);
  descriptionNum = Math.floor(Math.random() * adjectives.length);
  photoNum = Math.floor(Math.random() * photosArray.length);
  nameLength = (verbs[verbNum] + " " + adjectives[adjectiveNum]).trim().split(/\s+/).length;
  price = 10 + nameLength * ((500 - descriptions[descriptionNum].length) / (4 - nameLength));

  if (price == Infinity) {
    price = 10 + nameLength * ((500 - descriptions[descriptionNum].length) / (4 - (nameLength - 1)));
  }

  products.push({
    price: price,
    photo: photosArray[photoNum],
    name: verbs[verbNum] + " " + adjectives[adjectiveNum],
    description: descriptions[descriptionNum],
  });

  verbs.splice(verbNum, 1);
  adjectives.splice(adjectiveNum, 1);

  axios.post("http://localhost:3000/products", products[i]);
}

export default products;