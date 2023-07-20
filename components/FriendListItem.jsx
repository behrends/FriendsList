import { Button } from 'react-native';

export default function FriendListItem({ friend, onPress }) {
  return (
    <Button title={`Gehe zu ${friend.name}`} onPress={onPress} />
  );
}
