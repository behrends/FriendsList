import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Icon from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import FriendScreen from './screens/FriendScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'aliceblue' },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Friend"
        component={FriendScreen}
        options={({ route }) => {
          const { first, last } = route.params.friend;
          return {
            title: `${first} ${last}`,
          };
        }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => {
          return {
            tabBarIcon: ({ focused, size, color }) => {
              let icon;
              if (route.name === 'Home')
                icon = focused ? 'home' : 'home-outline';
              else if (route.name === 'Settings')
                icon = focused ? 'settings' : 'settings-outline';
              return (
                <Icon.Ionicons
                  name={icon}
                  size={size}
                  color={color}
                />
              );
            },
            tabBarActiveTintColor: 'orange',
            tabBarStyle: { backgroundColor: 'aliceblue' },
            headerShown: false,
          };
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            title: 'Freunde',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Einstellungen',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
