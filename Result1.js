import { StyleSheet, Text, View,Button } from 'react-native';
import FetchData from './index1'
export default function Fetch({navigation}) {
  return (
    <View style={styles.container}>
     <FetchData/>
     <Button
     onPress={()=>navigation.navigate('ADD PAGE')}></Button>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30,
  },
});