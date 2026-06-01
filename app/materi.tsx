import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MateriScreen() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem("userToken");
    const userData = await AsyncStorage.getItem("userData");

    if (!token) {
      Alert.alert("Akses Ditolak", "Silakan login terlebih dahulu");
      router.replace("/login");
      return;
    }

    if (userData) {
      setUser(JSON.parse(userData));
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userData");

    Alert.alert("Berhasil", "Anda berhasil logout");
    router.replace("/login");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Materi Pembelajaran</Text>

      {user && (
        <View style={styles.userBox}>
          <Text style={styles.userText}>Halo, {user.nama}</Text>
          <Text style={styles.userSubText}>NIM: {user.nim}</Text>
          <Text style={styles.userSubText}>Jurusan: {user.jurusan}</Text>
        </View>
      )}

      <Text style={styles.subtitle}>
        Selamat datang di halaman pembelajaran Pemrograman Mobile.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>1. Apa itu Expo?</Text>
        <Text style={styles.cardText}>
          Expo adalah framework yang membantu proses pembuatan aplikasi mobile
          Android dan iOS menggunakan React Native dengan lebih mudah.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>2. Komponen Dasar</Text>
        <Text style={styles.cardText}>
          Komponen dasar yang sering digunakan adalah View, Text, Image,
          TextInput, TouchableOpacity, ScrollView, dan FlatList.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>3. AsyncStorage</Text>
        <Text style={styles.cardText}>
          AsyncStorage digunakan untuk menyimpan data secara lokal di perangkat,
          seperti token login dan data pengguna.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>4. Routing</Text>
        <Text style={styles.cardText}>
          Routing digunakan untuk berpindah antar halaman, misalnya dari
          dashboard ke login, register, dan materi.
        </Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
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
    marginBottom: 16,
  },
  userBox: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 18,
    elevation: 4,
  },
  userText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2563eb",
  },
  userSubText: {
    fontSize: 14,
    color: "#475569",
    marginTop: 4,
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
  logoutButton: {
    backgroundColor: "#ef4444",
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 18,
    marginBottom: 30,
  },
  logoutButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});