import { Pressable, Text } from 'react-native';

export default function FriendListItem({ friend, onPress }) {
  return (
    <Pressable style={{ height: 50 }} onPress={onPress}>
      <Text>{friend.name}</Text>
    </Pressable>
  );
}
