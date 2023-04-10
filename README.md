# Learning React Native

## React Basics

**Branch - React_Basics - Hard Coded**

> in app.js

```
import {  Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View >
      <Text style={{fontSize:30}}>Starting with React Native</Text>
      <Text>Date : 5/4/2023</Text>
      <Text>Adding View - Text</Text>
      <Text>Adding Style Tag under Text</Text>
      <Button title='Press Here'></Button>
    </View>
  );
}
```

**Branch - React_Basics - JSX - JavaScript Xml / Javascript Syntax Extension**

_used to merge html in react like ejs in backend_

> in app.js

```
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
```