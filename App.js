import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { Button } from "react-native";


const App = () =>{
// State
  const [name,setName] = useState("Avtar");
// Variable
let data = "Sam";
  function testName() {
    data = "Singh";
    // it will not update
    // it will not render again
    setName("Singh")
    // name will be get updated
  }
  return (
    <View>
      <Text>{name}</Text>
      <Text>{data}</Text>
      <Button title="Update Name" onPress={testName}></Button>
      
    </View>
  )
}

// States vs Variable - 1. State Render Component when we refresh
// 2. In Variable 

export default App;