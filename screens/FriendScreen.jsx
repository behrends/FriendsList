import { Image, StyleSheet, Text, ScrollView } from 'react-native';

export default function FriendScreen({ navigation, route }) {
  const { name } = route.params;
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.scrollView}
    >
      <Image
        style={styles.image}
        source={require('../assets/icon.png')}
      />
      <Text>{name}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  image: {
    width: 250,
    height: 250,
  },
});
