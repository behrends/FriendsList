import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Liste von Kontakten</Text>
      <Button
        title="Gehe zu Alice"
        onPress={() =>
          navigation.navigate('Friend', { name: 'Alice' })
        }
      />
      <Button
        title="Gehe zu Bob"
        onPress={() => navigation.navigate('Friend', { name: 'Bob' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
