import { Image, Pressable, StyleSheet, Text } from 'react-native';

export default function FriendListItem({ friend, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={require('../assets/icon.png')}
      />
      <Text>
        {friend.first} {friend.last}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
  image: {
    width: 30,
    height: 30,
  },
});
