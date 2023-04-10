
import {  Text, View,Button } from 'react-native';

const date = "5/4/2023"
const data  = {fontSize:30}
const textadded = ()=>{return "Adding Style Tag under Text";}

export default function App() {
  return (
    <View >
      <Text style={data}>Starting with React Native</Text>
      <Text>Date : {date}</Text>
      <Text>Adding View - Text</Text>
      <Text>{textadded}</Text>
      <Button title='Press Here'></Button>
    </View>
  );
}



