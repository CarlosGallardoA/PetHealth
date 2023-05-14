import { Text, View, StyleSheet, Pressable } from "react-native";
const Patient = ({ item, setModalVisible, pacienteEdit, deletePaciente }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Paciente:</Text>
      <Text style={styles.text}>{item.nombrePaciente}</Text>
      <Text style={styles.date}>{item.fecha}</Text>
      <View style={styles.containerButtoms}>
        <Pressable
          style={[styles.btn, styles.btnEdit]}
          onPress={() => {
            setModalVisible(true);
            pacienteEdit(item.id);
          }}
        >
          <Text style={styles.btnText}>Editar</Text>
        </Pressable>
        <Pressable
          style={[styles.btn, styles.btnDelete]}
          onPress={() => deletePaciente(item.id)}
        >
          <Text style={styles.btnText}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderBottomColor: "#94A3B8",
    borderBottomWidth: 1,
  },
  label: {
    color: "#374151",
    textTransform: "uppercase",
    fontWeight: "700",
    marginBottom: 10,
  },
  text: {
    color: "#6D28D9",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  date: {
    color: "#374151",
  },
  containerButtoms: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnEdit: {
    backgroundColor: "#F59E0B",
  },
  btnDelete: {
    backgroundColor: "#EF4444",
  },
  btnText: {
    textTransform: "uppercase",
    fontWeight: "700",
    color: "#fff",
    fontSize: 12,
  },
});
export default Patient;
