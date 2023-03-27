import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { db } from "../Soucre/config";
import { ref, set } from "firebase/database";
import { Image } from "react-native";



const AddData = ({navigation}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [dateofremand, setdateofremand] = useState("");
  const [accusedphno1, setaccusedphno1] = useState("");
  const [accusedphno2, setaccusedphno2] = useState("");
  const [dateofarrest, setdateofarrest] = useState("");
  const [aadhar, setaadhar] = useState("");
  const [PAN_NO, setPAN_NO] = useState("");
  const [Mailid, setMailid] = useState("");
  const [Bankdeatils, setBankdeatils] = useState("");
  const [Location, setLocation] = useState("");
  const [Accusedphoto, setAccusedphoto] = useState("");
  const [accusedFatherMobileNo1, setaccusedFatherMobileNo1] = useState("");
  const [accusedFatherMobileNo2, setaccusedFatherMobileNo2] = useState("");
  const [accusedMotherMobileNo1, setaccusedMotherMobileNo1] = useState("");
  const [accusedMotherMobileNo2, setaccusedMotherMobileNo2] = useState("");
  const [accusedwifeMobileNo1, setaccusedwifeMobileNo1] = useState("");
  const [accusedwifeMobileNo2, setaccusedwifeMobileNo2] = useState("");
  const [accusedfriendMobileNo1, setaccusedfriendMobileNo1] = useState("");
  const [accusedfriendMobileNo2, setaccusedfriendMobileNo2] = useState("");
  const [accusedcontact, setaccusedcontact] = useState("");
  const [accusedsocialmediapage1, setaccusedsocialmediapage1] = useState("");
  const [accusedsocialmediapage2, setaccusedsocialmediapage2] = useState("");
  const [accusedsocialmediapage3, setaccusedsocialmediapage3] = useState("");

  // function to add data to firebase realtime db
  const dataAddon = () => {
    set(ref(db, "posts/" + title), {
      title: title,
      body: body,
      name: name,
      address: address,
      dateofarrest: dateofarrest,
      dateofremand: dateofremand,
      accusedphno1: accusedphno1,
      accusedphno2: accusedphno2,
      aadhar: aadhar,
      PAN_NO: PAN_NO,
      Mailid: Mailid,
      Bankdeatils: Bankdeatils,
      Location: Location,
      Accusedphoto: Accusedphoto,
      accusedFatherMobileNo1: accusedFatherMobileNo1,
      accusedFatherMobileNo2: accusedFatherMobileNo2,
      accusedMotherMobileNo1: accusedMotherMobileNo1,
      accusedMotherMobileNo2: accusedMotherMobileNo2,
      accusedwifeMobileNo1: accusedwifeMobileNo1,
      accusedwifeMobileNo2: accusedwifeMobileNo2,
      accusedfriendMobileNo1: accusedfriendMobileNo1,
      accusedfriendMobileNo2: accusedfriendMobileNo2,
      accusedcontact: accusedcontact,
      accusedsocialmediapage1: accusedsocialmediapage1,
      accusedsocialmediapage2: accusedsocialmediapage2,
      accusedsocialmediapage3: accusedsocialmediapage3,
    });
    setTitle("");
    setBody("");
    setname("");
    setaddress("");
    dateofarrest("");
    dateofremand("");
    accusedphno1("");
    accusedphno2("");
    aadhar("");
    PAN_NO("");
    Mailid("");
    Bankdeatils("");
    Location("");
    setAccusedphoto("");
    accusedFatherMobileNo1("");
    setaccusedFatherMobileNo2("");
    setaccusedMotherMobileNo1("");
    setaccusedMotherMobileNo2("");
    setaccusedwifeMobileNo1("");
    setaccusedwifeMobileNo2("");
    setaccusedfriendMobileNo1("");
    setaccusedfriendMobileNo2("");
    setaccusedcontact("");
    setaccusedsocialmediapage1("");
    setaccusedsocialmediapage2("");
    setaccusedsocialmediapage3("");
  };
  const checkTextInputs = () => {
    //Check for the Name TextInput
    checkTextInput();
    dataAddon();
   
    }
  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!name.trim()) {
      alert('Please Enter Name');
      return;
    }
   
    //Check for the Email TextInput
   
    //Checked Successfully
    //Do whatever you want
    alert('Success');
  };

 
  return (
    <View style={styles.container}>
      <Image source={require('C:/expo project/my-react-app/src/police-c1-palayamkottai-tirunelveli-police-30mi16a-250.webp')}
      style={styles.output}
      resizeMethod={'auto'}></Image>
      <Text style={{textAlign:'center',fontSize:40,fontWeight:'bold' ,color: '#030303'}}>Tirunelveli Police Department Data </Text>
      <Text style={styles.header}>Please Mark N/A if it not Applicable </Text>

      <TextInput
        placeholder="Cr. No"
        
        value={title}
        miniLength={6}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}></TextInput>
      
      <TextInput
        placeholder="Selection of Law"
        value={body}
        onChangeText={(text) => setBody(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accuse Name"
        value={name}
        onChangeText={(text) => setname(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accuse address"
        value={address}
        onChangeText={(text) => setaddress(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Date of Arrest"
        value={dateofarrest}
        onChangeText={(text) => setdateofarrest(text)}
        style={styles.input}
        
      />
      <TextInput
        placeholder="Accused Date of Remand"
        value={dateofremand}
        onChangeText={(text) => setdateofremand(text)}
        style={styles.input}></TextInput>
      
      <TextInput
        placeholder="Accused Phone Number 1"
        value={accusedphno1}
        onChangeText={(text) => setaccusedphno1(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Phone Number 2"
        value={accusedphno2}
        onChangeText={(text) => setaccusedphno2(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Aadhar Number"
        value={aadhar}
        onChangeText={(text) => setaadhar(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused  PAN Card  Number"
        value={PAN_NO}
        onChangeText={(text) => setPAN_NO(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused  MailID"
        value={Mailid}
        onChangeText={(text) => setMailid(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused  Bank Account details & Card  Number"
        value={Bankdeatils}
        onChangeText={(text) => setBankdeatils(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Location Lat,Long"
        value={Location}
        onChangeText={(text) => setLocation(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused  Photo"
        value={Accusedphoto}
        onChangeText={(text) => setAccusedphoto(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Father number 1"
        value={accusedFatherMobileNo1}
        onChangeText={(text) => setaccusedFatherMobileNo1(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Father number 2"
        value={accusedFatherMobileNo2}
        onChangeText={(text) => setaccusedFatherMobileNo2(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused  Mother number 1"
        value={accusedMotherMobileNo1}
        onChangeText={(text) => setaccusedMotherMobileNo1(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused  Mother number 2"
        value={accusedMotherMobileNo2}
        onChangeText={(text) => setaccusedMotherMobileNo2(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused  wife number 1"
        value={accusedwifeMobileNo1}
        onChangeText={(text) => setaccusedwifeMobileNo1(text)}
        style={styles.input}
      />
       <TextInput
        placeholder="Accused  wife number 2"
        value={accusedwifeMobileNo2}
        onChangeText={(text) => setaccusedwifeMobileNo2(text)}
        style={styles.input}
      />
       <TextInput
        placeholder="Accused  Friend number 1"
        value={accusedfriendMobileNo1}
        onChangeText={(text) => setaccusedfriendMobileNo1(text)}
        style={styles.input}
      />
       <TextInput
        placeholder="Accused  friend number 2"
        value={accusedfriendMobileNo2}
        onChangeText={(text) => setaccusedfriendMobileNo2(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Contact"
        value={accusedcontact}
        onChangeText={(text) => setaccusedcontact(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused  Social media page 1"
        value={accusedsocialmediapage1}
        onChangeText={(text) => setaccusedsocialmediapage1(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Social media page 2"
        value={accusedsocialmediapage2}
        onChangeText={(text) => setaccusedsocialmediapage2(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Social media page 3"

        value={accusedsocialmediapage3}
        onChangeText={(text) => setaccusedsocialmediapage3(text)}
        style={styles.input}
      />
      <Button title="Add Data" onPress={checkTextInputs}  color='#a0522d' />
      <Button title="Review"
      onPress={()=>navigation.navigate('RECHECKING')} color='#DF3939'></Button>
      
    </View>
  );
};


export default AddData;

const styles = StyleSheet.create({
  container: {
   
    borderRadius: 20,
    margin:20,
    backgroundColor: '#afeeee',
    
    
  },
  header: {
    fontSize: 20,
    padding: 16,
    marginTop: 90,
    fontWeight: "bold",
    textAlign: "center",
  },

  input: {
    borderwidth: 1,
    height: 20,
    borderColor: "black",
    borderBottomWidth: 1,
    paddingRight: 30,
    margin: 10,
    padding: 10,
    borderRadius: 6,
  },
  output:{
   height:100,
   width:100,
   alignItems:'center'

  }
  
  
});
