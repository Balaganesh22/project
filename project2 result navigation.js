import React from "react";
//import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer } from "@react-navigation/native";
import AddData from "./project2/project2";
import Fetch from "./SOUCRE1/Result1";


const stacks = createNativeStackNavigator();
export default function App() {
  return (
	<NavigationContainer>
		<stacks.Navigator>
			<stacks.Screen name="DETAILS" component={AddData}></stacks.Screen>
			<stacks.Screen name="RECHECKING" component={Fetch}></stacks.Screen>

		</stacks.Navigator>

	</NavigationContainer>
  );
}