import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import useForm from "../hooks/useForm";

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

const Login = ({ navigation }) => {
  const initialState = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log({ values });
  };

  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);

  const onLogin = () => handleSubmit();

  const onGoToRegisterScreen = () => {
    return navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={inputs.email}
        onChangeText={subscribe("email")}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={inputs.password}
        onChangeText={subscribe("password")}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.colorWhite}>Continuar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonLink}
        onPress={onGoToRegisterScreen}
      >
        <Text style={styles.colorPrimary}>Registrarme</Text>
      </TouchableOpacity>
    </View>
  );
};

Login.navigationOptions = {
  title: "Iniciar sesión",
};

export default Login;
