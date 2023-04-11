import React, { useState } from "react";
import { View,Button,Text,StyleSheet  } from "react-native";
import newStyle from "./style";
const App = () =>{
const [name,setName] = useState("Avtar");
return (
    <View>
      {/* InLine */}
      <Text style={ {color:'blue',
    fontSize: 35}}>Inline Styling</Text>
    {/* Internal */}
      <Text style={styles.textBox}>Internal Styling : {name}</Text>
      {/* External */}
      <Text style={newStyle.textBox}>External Styling : {name}</Text>
      {/* All At Once */}
      <Text style={[newStyle.textBox,styles.textBox,{color:"White"}]}>External Styling : {name}</Text>
      <Button title="Update Name" onPress={()=>setName("Singh")}></Button>
      <Details name={name}></Details>
    </View>
  )
}
// Internal Styling
const styles  = StyleSheet.create({
  textBox:{
    color:'red',
    fontSize: 25,
    backgroundColor:"yellow",
    borderColor:"Black",
    borderWidth:2,
    width:100,
    borderRadius:10,
  }
})
const Details = (props)=>{
  return (
    <View>
      <Text>Passed By : {props.name}</Text>
    </View>
  );
}
export default App;