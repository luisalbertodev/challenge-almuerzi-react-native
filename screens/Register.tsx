import React from "react";
import {
	Alert,
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";
import useForm from "../hooks/useForm";
import { fetchService } from "../helpers";
import { BASE_URL } from "../shared/data";

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		marginBottom: 16,
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 15,
	},
	input: {
		height: 40,
		borderColor: "#eee",
		borderWidth: 1,
		alignSelf: "stretch",
		marginBottom: 10,
		paddingHorizontal: 5,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#18d",
		padding: 10,
		alignSelf: "stretch",
	},
	colorWhite: {
		color: "#fff",
	},
	colorPrimary: {
		color: "#18d",
	},
	buttonLink: {
		padding: 10,
		alignItems: "center",
		alignSelf: "stretch",
		marginTop: 32,
	},
});

const Register = ({ navigation }) => {
	const initialState = {
		email: "",
		password: "",
	};
	const onSubmit = async (form) => {
		const dictionaryMessages = {
			registerSuccessful: "Usuario creado con exito",
			isUserExist: "Usuario ya existe",
		};

		try {
			const message = await fetchService({
				path: `${BASE_URL}/api/`,
				func: "auth/register",
				method: "POST",
				body: form,
				isTypeJson: false,
			});

			if (message === dictionaryMessages.registerSuccessful) {
				const ctaActions = [
					{
						text: "Ir al inicio",
						onPress: () => navigation.navigate("Login"),
					},
				];
				Alert.alert(
					"Exito",
					dictionaryMessages.registerSuccessful,
					ctaActions
				);
			}

			if (message === dictionaryMessages.isUserExist) {
				Alert.alert("Error", dictionaryMessages.isUserExist);
			}
		} catch (error) {
			console.log("onSubmit error", error);
		}
	};

	const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);

	const onRegister = () => handleSubmit();

	const onGoToLoginScreen = () => {
		return navigation.navigate("Login");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Registro</Text>
			<TextInput
				autoCapitalize="none"
				style={styles.input}
				placeholder="Email"
				value={inputs.email}
				onChangeText={subscribe("email")}
			/>
			<TextInput
				autoCapitalize="none"
				style={styles.input}
				placeholder="Password"
				value={inputs.password}
				onChangeText={subscribe("password")}
				secureTextEntry
			/>

			<TouchableOpacity style={styles.button} onPress={onRegister}>
				<Text style={styles.colorWhite}>Registrarme</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.buttonLink}
				onPress={onGoToLoginScreen}
			>
				<Text style={styles.colorPrimary}>Volver a inicio</Text>
			</TouchableOpacity>
		</View>
	);
};

Register.navigationOptions = {
	title: "Registro",
};

export default Register;
