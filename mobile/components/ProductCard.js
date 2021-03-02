import React, {useState, useEffect } from 'react';
import { Image, View, Text, Button, StyleSheet, FlatList } from 'react-native';
//import * as data from '../screens/products.json';


const ProductCard = (props) =>{
  const produto = props.produto.item
  const [imageURL, setImageURL] = useState({})

 // console.log(Object.keys(props.produto))

  //console.log(typeof parseFloat(produto.price))
 // 
 useEffect(()=>{
  setImageURL({image: produto.image});
 },[]) 
 //console.log(typeof require())
  console.log(imageURL)
  return (
    <View style={styles.main_container} >
      {imageURL.length !==0  &&
      <View style={styles.image_container}>
        <Image source={require(`../assets/produtos/${produto.image}`)} alt={produto.name}/>
      </View> 
      }
      <View >
        <Text style={styles.name} >{produto.name}</Text>
        <Text style={styles.range} >{produto.range}</Text>
      </View>
      <View style={styles.price_container}>
          { produto.currentPrice !== produto.price
            ? <Text >R$ {parseFloat(produto.price).toFixed(2)}</Text>
            : null
          }
          <Text> R$ {parseFloat(produto.currentPrice).toFixed(2)}</Text>
      </View>
    </View>  
  )
}

export default ProductCard;

const styles = StyleSheet.create({

  main_container:{
    
    width: 'auto',
    backgroundColor: 'pink'

  },
  title:{
    color: '#4F1711',
    fontSize: 20
  }
})


