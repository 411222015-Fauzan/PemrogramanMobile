import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.welcome}>Selamat Datang</Text>

        <Text style={styles.title}>Pemrograman Mobile</Text>

        <Text style={styles.description}>
          Aplikasi ini adalah project pembelajaran saya menggunakan Expo untuk
          memahami dasar pengembangan aplikasi mobile.
        </Text>

        <View style={styles.profileBox}>
          <Text style={styles.label}>Nama</Text>
          <Text style={styles.value}>Muhammad Fauzan Arbah</Text>

          <Text style={styles.label}>Program Studi</Text>
          <Text style={styles.value}>Teknik Informatika</Text>

          <Text style={styles.label}>NIM</Text>
          <Text style={styles.value}>411222015</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mulai Belajar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf2ff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 22,
    padding: 24,
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  welcome: {
    fontSize: 22,
    fontWeight: "600",
    color: "#2563eb",
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    color: "#475569",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
  },
  profileBox: {
    width: "100%",
    backgroundColor: "#f8fafc",
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  label: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 6,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 14,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});