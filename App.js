import React, { useState } from "react";
import { View,Button,Text,StyleSheet  } from "react-native";
const App = () =>{
// State
  const [name,setName] = useState("Avtar");
// Variable
/* let data = "Sam";
  function testName() {
    data = "Singh";
    // it will not update
    // it will not render again
    setName("Singh")
    // name will be get updated
  } */


  return (
    <View>
      <Text style={styles.textBox}>{name}</Text>
      {/* <Text>{data}</Text> */}
      <Button title="Update Name" onPress={()=>setName("Singh")}></Button>
      <Details name={name}></Details>
    </View>
  )
}

const styles  = StyleSheet.create({
  textBox:{
    color:'blue',
    fontSize: 30
  }
})


const Details = (props)=>{
  return (
    <View>
      <Text>Passed By : {props.name}</Text>
    </View>
  );
}
// States vs Variable - 1. State Render Component when we refresh
// 2. In Variable 
export default App;