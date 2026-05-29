import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MateriScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Materi Pembelajaran</Text>

      <Text style={styles.subtitle}>
        Selamat datang di halaman pembelajaran Pemrograman Mobile.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>1. Apa itu Expo?</Text>
        <Text style={styles.cardText}>
          Expo adalah framework yang membantu kita membuat aplikasi mobile
          Android dan iOS menggunakan React Native dengan lebih mudah.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>2. Komponen Dasar</Text>
        <Text style={styles.cardText}>
          Dalam React Native, komponen dasar yang sering digunakan adalah View,
          Text, Image, Button, TextInput, dan ScrollView.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>3. Styling</Text>
        <Text style={styles.cardText}>
          Tampilan aplikasi dapat diatur menggunakan StyleSheet, seperti warna,
          ukuran teks, margin, padding, dan layout.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>4. Routing</Text>
        <Text style={styles.cardText}>
          Routing digunakan untuk berpindah antar halaman, misalnya dari halaman
          dashboard ke halaman materi.
        </Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Kembali ke Dashboard</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#eaf2ff",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#475569",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 22,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 21,
  },
  backButton: {
    backgroundColor: "#1e293b",
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 18,
    marginBottom: 30,
  },
  backButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});