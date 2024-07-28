import {SafeAreaView, Pressable, StyleSheet,StatusBar,Button,FlatList,View,Text} from 'react-native';
import UserList from "./components/UserList"
import AnyComponent from "./components/AnyComponent";
import DATA from "./components/Data";
import React , {useState} from "react";

const App = () =>{
  
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }
  return <>
  <SafeAreaView>

<Text>welcome</Text>
<Button
  title="Learn More"
  color="#841584"
/>
    <UserList/>
    <AnyComponent/>

    <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
       <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text && pressed ? {backgroundColor:'#34eb98'} : {backgroundColor:'#eb345c'}}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>
  </SafeAreaView></>
 
};
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  text:{
    
    color:'##0a0c0d',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default App;
