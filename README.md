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
![image](https://user-images.githubusercontent.com/88712571/230965748-0b0a76db-44fb-46d9-a4bc-808434f4ae78.png)


  **Branch - Components - Functions with capital name (Code reusable)**


1. _Function Based_
2. _Class Based_

  **Check Branch - Components **
  
![image](https://user-images.githubusercontent.com/88712571/231077887-e5c0c48d-40da-4c71-aa64-6a3cf423db47.png)

  **Branch - States - Functions with capital name (Code reusable)**
1. _Making Button and Calling a function on onPress()_

 ` <Button title ='Press Here' onPress={()=>{button("Hello")}}></Button>`
 ```
 const button = (val)=>{
  console.warn(val);
}
```
Output :
![image](https://user-images.githubusercontent.com/88712571/231078913-7104aa0c-5838-4b72-b41a-17e701b17e30.png)


  **Branch - States - SetState vs Variables - See app.js in States**
  
![image](https://user-images.githubusercontent.com/88712571/231215973-68d2e778-5bbd-4f46-92d2-62a56bb425a8.png)
![image](https://user-images.githubusercontent.com/88712571/231216012-85070499-5c3f-4c16-a5d2-e6eb320d82df.png)
![image](https://user-images.githubusercontent.com/88712571/231216070-eed84c3b-21e8-4f26-a426-1f5469084df8.png)

