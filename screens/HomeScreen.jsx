import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FriendListItem from '../components/FriendListItem';

const dummyData = [
  {
    first: 'Alice',
    last: 'Smith',
    email: 'test1@example.com',
  },
  { first: 'Bob', last: 'Smith', email: 'test2@example.com' },
  {
    first: 'Jane',
    last: 'Smith',
    email: 'test3@example.com',
  },
  { first: 'Joe', last: 'Smith', email: 'test4@example.com' },
];

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log('USE EFFECT');
    // Daten laden
    async function fetchData() {
      // Simulation: langsames Laden (3 Sekunden warten)
      await new Promise((_) => setTimeout(_, 3000));
      setData(dummyData);
      setLoading(false);
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
