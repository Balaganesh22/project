import { View, StyleSheet, Text } from 'react-native'
import React ,{useState, useEffect} from 'react'
import {db} from '../Soucre/config'
import { ref, onValue } from 'firebase/database'
import { DataTable } from 'react-native-paper';
const FetchData = () => {
  const [todoData, setToData]=useState([])
  useEffect (() =>
  {
    const starCountRef = ref(db , 'posts/');
    onValue (starCountRef, (snapshot) =>
    {
      const data =snapshot.val ();
      const newPosts = Object.keys(data).map(key =>
      ({
        id:key,
        ...data[key]

      }));
      console.log(newPosts);
      setToData(newPosts);
  });

  
} , [])
 return (
  <View style={styles.container}>

  <DataTable.Header style={styles.container}>
    <DataTable.Title>NAME</DataTable.Title>
    <DataTable.Title>BODY</DataTable.Title>
    <DataTable.Title>Age</DataTable.Title>
  </DataTable.Header>
<Text> REVIEW DATA </Text> 
{
todoData.map((item,index) =>{
return(
<View key ={index}>
   <DataTable.Row>
    <DataTable.Cell> {item.title}</DataTable.Cell>
    <DataTable.Cell> {item.body}</DataTable.Cell>
    <DataTable.Cell> {item.dateofremand}</DataTable.Cell>
  </DataTable.Row>


  </View>
)
})
}
</View>
 )
}
export default FetchData
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 6,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    fontSize:50,
    fontWeight:'bold'
    

  }, 
});