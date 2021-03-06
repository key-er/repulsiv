import React from 'react';
var sampleData = require('../mockData.js');
import styles from './Styles/ProductDetail.css';


const ProductDetail = function(props) {
  // fetch the propduct detail by the id props.match.params.number
  var prods = props.items
  var clickedId = props.match.params.number

  var image = prods.filter((item) => {return item.itemId === Number(clickedId) })[0].largeImage
  var shortDescription = prods.filter((item) => {return item.itemId === Number(clickedId) })[0].shortDescription

  return (
    <div>
      <h1> Item description </h1>
        <p> clicked item: {props.match.params.number} </p>

        <p> {shortDescription} </p>
        <img src={image} />
    </div>)
}


export default ProductDetail