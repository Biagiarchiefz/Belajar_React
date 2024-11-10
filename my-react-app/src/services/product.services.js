import axios from "axios";

export const getProduct = (callback) => {
  axios.get('https://fakestoreapi.com/products')
  .then ((res) => {
    callback(res.data);
  })
  .catch ((err) => {
    console.log(err)
  });
}