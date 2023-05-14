import { useState } from "react";
import {
  Button,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
} from "react-native";
import Form from "./src/components/Form";
import Patient from "./src/components/Patient";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const pacienteEdit = (id) => {
    const pacienteEdit = pacientes.filter((paciente) => paciente.id === id);
    setPaciente(pacienteEdit[0]);
  };
  const deletePaciente = (id) => {
    Alert.alert("Eliminar Paciente", "¿Estas seguro?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Eliminar",
        onPress: () => {
          const pacientesFilter = pacientes.filter(
            (paciente) => paciente.id !== id
          );
          setPacientes(pacientesFilter);
        },
      },
    ]);
  };
  const HandlePress = () => {
    setModalVisible(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas {""}
        <Text style={styles.tituloBold}>Veterinarias</Text>
      </Text>
      <Pressable style={styles.btnNewCita}>
        <Text onPress={HandlePress} style={styles.btnTextNewCita}>
          Nueva Cita
        </Text>
      </Pressable>
      {pacientes.length > 0 ? (
        <FlatList
          style={styles.listStyle}
          data={pacientes}
          renderItem={({ item }) => (
            <Patient
              item={item}
              setModalVisible={setModalVisible}
              pacienteEdit={pacienteEdit}
              deletePaciente={deletePaciente}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.notCitas}>No hay Citas</Text>
      )}
      <Form
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setPacientes={setPacientes}
        pacientes={pacientes}
        paciente={paciente}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6",
    flex: 1,
  },
  titulo: {
    textAlign: "center",
    fontSize: 30,
    color: "#374151",
    fontWeight: "600",
  },
  tituloBold: {
    fontWeight: "900",
    color: "#6D28D9",
  },
  btnNewCita: {
    padding: 15,
    backgroundColor: "#6D28D9",
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextNewCita: {
    color: "#FFF",
    fontWeight: "900",
    textAlign: "center",
    fontSize: 18,
    textTransform: "uppercase",
  },
  notCitas: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
  listStyle: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});
