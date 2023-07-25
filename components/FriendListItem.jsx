import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function FriendListItem({ friend, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{ uri: friend.picture.thumbnail }}
      />
      <View style={styles.info}>
        <Text style={styles.name}>
          {friend.name.first} {friend.name.last}
        </Text>
        <Text style={styles.email}>{friend.email}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 70,
    padding: 10,
  },
  info: {
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: 20,
  },
  email: {
    fontSize: 16,
    fontWeight: '100',
  },
  image: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
});
