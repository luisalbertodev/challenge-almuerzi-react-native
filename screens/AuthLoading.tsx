import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View } from "react-native";

export default ({ navigation }) => {
	useEffect(() => {
		const getInitialState = async () => {
			try {
				const token = await AsyncStorage.getItem("token");
				navigation.navigate(token ? "Root" : "OnBoarding");
			} catch (error) {}
		};

		getInitialState();
	}, []);

	return (
		<View>
			<ActivityIndicator />
		</View>
	);
};
