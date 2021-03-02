import React, {useState, useEffect } from 'react';
import { Image, View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Card from '../components/ProductCard'
import * as data from './products.json';


const Products = () =>{
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    //console.log("DATA: ", data.default.data)
    if(data){
     // console.log("ENTROU", [...data.default.data])
      setProdutos([...data.default.data])
     // console.log(produtos)
      
    }    
  },[])

  return (
    <View style={styles.main_container}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.logo}>
          <Text>Pitanga</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Produtos</Text>
      {produtos.length !== 0 &&
        
        <FlatList
          style={styles.flatlist}
          data={produtos}
          keyExtractor={(item,index) => index.toString()}
          renderItem = {(produto) => <Card produto={produto} />}
        />
      }
    </View>
  )
}

export default Products;

const styles = StyleSheet.create({

  main_container:{
    flex:1,
    flexDirection: 'column',
    width:'100%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    color: '#4F1711',
    fontSize: 20
  },
  flatlist:{
    backgroundColor: 'yellow'
  }
})


