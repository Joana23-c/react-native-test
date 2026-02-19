import { Text, View, StyleSheet,Dimensions  } from 'react-native';

export default function LittleLemon() {
  return (
    <View style={styles.body}>
        <View style={styles.div1}>
            <Text style={styles.text}>Little Lemon!</Text>
        </View>
       
       <View style = {styles.footer}>
        <Text style={styles.footertext}>All rights reserved by Little Lemon, 2022</Text>
       </View>


    </View>
  );
}
 
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'gray',
  },

  div1:{
    backgroundColor : "yellow",
    height : 100,
  },
  text: {
    textAlign: "center",
    color: 'black',
    fontSize: 24,
    marginTop: 50,
    fontWeight: "bold",
  },
 
  footer :{
    backgroundColor : "yellow",
    height : 50,
    marginTop: height * 0.825,
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
  },
    footertext :{
    textAlign: "center",
    color: 'black',
    fontSize: 14,
    fontWeight : "bold",
    }
});


