import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default function Login() {
  const [email,setEmail] =  useState("Email")
  const [password, setPassword] = useState("Password")
  const [value, setValue] = useState("")
  function sumbitLogin(e){
    e.preventDefault()
   console.log(Object.keys( e.target._children[0]))
   // console.log(e.target._children[0])
   // setValue(e.target.value.email)
  }
  return (
    
    <View style={styles.container}>
      
      {/* <Text>{value}</Text> */}
      <TextInput
        style={styles.input_text}
        value={email}
        onChange={setEmail}  
        textContentType="emailAddress"    
      />
      <TextInput
        style={styles.input_text}
        value={password}
        onChange={setPassword}
        autoCompleteType="password"  
      />
      <Button
        onPress={sumbitLogin}
        style={styles.button_login}
        title="Login"
        color="#D43019"
        accessibilityLabel="Login"
      />
      
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input_text:{ 
    height: 40,
    width: "90%",
    borderColor: 'gray', 
    borderWidth: 1 
  },
  button_login:{
    backgroundColor: '#D43019',
  }
});
