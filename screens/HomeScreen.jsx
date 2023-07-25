import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FriendListItem from '../components/FriendListItem';

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://rand123omuser.me/api?results=20'
        );
        const json = await response.json();
        setData(json.results);
        setLoading(false);
      } catch (error) {
        alert('Fehler beim Laden');
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="darkorange" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <FriendListItem
            friend={item}
            onPress={() =>
              navigation.navigate('Friend', { friend: item })
            }
          />
        )}
        keyExtractor={(item) => item.email}
        ItemSeparatorComponent={<View style={styles.listSeparator} />}
        ListEmptyComponent={
          <Text style={styles.listEmpty}>Keine Daten geladen</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightsalmon',
  },
  listEmpty: {
    fontSize: 32,
    paddingTop: 100,
    textAlign: 'center',
  },
});
