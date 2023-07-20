import { SectionList, StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: 'Abschnitt1',
            data: [{ name: 'Alice' }, { name: 'Bob' }],
          },
          {
            title: 'Abschnitt2',
            data: [{ name: 'Jane' }, { name: 'Joe' }],
          },
        ]}
        renderItem={({ item }) => <Text>{item.name}</Text>}
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
    paddingTop: 50,
  },
});
