import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';

const Recipes = ({name, price, updateCart, cart, setBucketDuoCounter, bucketDuoCounter, setWingsCounter , wingsCounter}) => {

    function handleAddToCart(){
        updateCart([...cart, {name, price}]);
        console.log(cart);
    }
  return (
    <View style={styles.container}>
        <View style={styles.image_container}>
            <Image style={styles.image} source={{uri:'https://picsum.photos/200'}} />
        </View>
        <View style={styles.recipe_container}>
            <Text style={[styles.text, styles.recipe_name]}>{name}</Text>
            <Text style={[styles.text, styles.recipe_price]}>{price} €</Text>
            <TouchableOpacity style={styles.add_button} onPress={() => {handleAddToCart()}}>
                <Text style={[styles.text, styles.text_add_button]}>Ajouter</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Recipes

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        padding:2
    },
    recipe_container:{
        marginRight:30,
        width:150
    },
    image_container:{
        width:'50%',
        marginLeft:10,
        backgroundColor:"rgba(125,125,125,0.2)",
        padding:10,
        borderRightColor:"black",
        borderRightWidth:1,
    },
    image:{
        height: 150,
        width: 150,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
    },
    text:{
        fontSize: 18,
    },
    recipe_name:{
        fontWeight:'bold',
    },
    recipe_price:{

    },
    add_button:{
        backgroundColor: '#5998C5',
        width:80,
        
        marginTop:20
    },
    text_add_button:{
        textAlign:'center',
    }
})