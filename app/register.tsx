import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

export default function RegisterScreen() {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!nama || !nim || !jurusan || !email || !password) {
      Alert.alert("Peringatan", "Semua data wajib diisi");
      return;
    }

    try {
      const usersData = await AsyncStorage.getItem("users");
      const users = usersData ? JSON.parse(usersData) : [];

      const emailSudahAda = users.find((user: any) => user.email === email);

      if (emailSudahAda) {
        Alert.alert("Gagal", "Email sudah terdaftar");
        return;
      }

      const newUser = {
        id: new Date().getTime(),
        nama,
        nim,
        jurusan,
        email,
        password,
      };

      const updatedUsers = [...users, newUser];

      await AsyncStorage.setItem("users", JSON.stringify(updatedUsers));

      Alert.alert("Berhasil", "Pendaftaran berhasil, silakan login");
      router.replace("/login");
    } catch (error) {
      Alert.alert("Error", "Terjadi kesalahan saat mendaftar");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pendaftaran</Text>

      <Text style={styles.subtitle}>
        Buat akun baru untuk masuk ke aplikasi
      </Text>

      <Text style={styles.label}>Nama Lengkap</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nama lengkap"
        value={nama}
        onChangeText={setNama}
      />

      <Text style={styles.label}>NIM</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan NIM"
        value={nim}
        onChangeText={setNim}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Jurusan</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan jurusan"
        value={jurusan}
        onChangeText={setJurusan}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Daftar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.link}>Sudah punya akun? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#eaf2ff",
    padding: 22,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#475569",
    textAlign: "center",
    marginBottom: 24,
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    color: "#334155",
    fontWeight: "600",
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 24,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  link: {
    textAlign: "center",
    color: "#2563eb",
    marginTop: 18,
    fontWeight: "600",
  },
});