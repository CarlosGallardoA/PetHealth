import { useState } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { Modal, Text } from "react-native";
import DatePicker from "react-native-modern-datepicker";

const Formulario = ({
  modalVisible,
  setModalVisible,
  setPacientes,
  pacientes,
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [nombrePropietario, setNombrePropietario] = useState("");
  const [emailPropietario, setEmailPropietario] = useState("");
  const [telefonoPropietario, setTelefonoPropietario] = useState("");
  const [sintomas, setSintomas] = useState("");
  const handleClose = () => {
    setSelectedDate("");
    setNombrePaciente("");
    setNombrePropietario("");
    setEmailPropietario("");
    setTelefonoPropietario("");
    setSintomas("");
    setModalVisible(false);
  };
  const HandleCita = () => {
    if (
      [
        nombrePaciente,
        nombrePropietario,
        emailPropietario,
        sintomas,
        selectedDate,
      ].includes("")
    ) {
      Alert.alert("Todos los campos son obligatorios");
      return;
    }
    const paciente = {
      nombrePaciente,
      nombrePropietario,
      emailPropietario,
      telefonoPropietario,
      sintomas,
      fecha: selectedDate,
    };
    setPacientes([...pacientes, paciente]);
    handleClose();
  };
  return (
    <Modal style={styles.modal} animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.modal}>
        <ScrollView>
          <Text style={styles.title}>
            Nueva {""} <Text style={styles.titleBold}>Cita</Text>
          </Text>
          <Pressable style={styles.btnCancelar} onPress={handleClose}>
            <Text style={styles.btnCancelarText}>Cancelar</Text>
          </Pressable>
          <View style={styles.containerForm}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              placeholder="Nombre Paciente"
              placeholderTextColor={"#666"}
              style={styles.input}
              value={nombrePaciente}
              onChangeText={setNombrePaciente}
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              placeholder="Nombre Propietario"
              placeholderTextColor={"#666"}
              style={styles.input}
              value={nombrePropietario}
              onChangeText={setNombrePropietario}
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              placeholder="Email Propietario"
              keyboardType="email-address"
              placeholderTextColor={"#666"}
              style={styles.input}
              value={emailPropietario}
              onChangeText={setEmailPropietario}
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={styles.label}>Teléfono Propietario</Text>
            <TextInput
              placeholder="Teléfono Propietario"
              keyboardType="number-pad"
              placeholderTextColor={"#666"}
              style={styles.input}
              value={telefonoPropietario}
              onChangeText={setTelefonoPropietario}
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={styles.label}>Fecha Alta</Text>
            <DatePicker onSelectedChange={(date) => setSelectedDate(date)} />
          </View>
          <View style={styles.containerForm}>
            <Text style={styles.label}>Síntomas</Text>
            <TextInput
              placeholder="Síntomas"
              placeholderTextColor={"#666"}
              style={styles.input}
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <Pressable style={styles.btnNewCita} onPress={HandleCita}>
            <Text style={styles.btnNewCitaText}>Agregar Paciente</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#6D28D9",
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
    color: "#fff",
  },
  titleBold: {
    fontWeight: "900",
  },
  containerForm: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: "#fff",
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  btnCancelar: {
    marginTop: 20,
    backgroundColor: "#5827A4",
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  btnCancelarText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "uppercase",
  },
  btnNewCita: {
    marginVertical: 50,
    backgroundColor: "#F59E0B",
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNewCitaText: {
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "900",
    fontSize: 16,
  },
});

export default Formulario;
