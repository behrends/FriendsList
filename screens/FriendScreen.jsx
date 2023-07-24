import { Image, StyleSheet, Text, View } from 'react-native';

export default function FriendScreen({ navigation, route }) {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/icon.png')}
      />
      <Text>{name}</Text>
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
  image: {
    width: 100,
    height: 100,
  },
});
