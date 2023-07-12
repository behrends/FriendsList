import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icon from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

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
          };
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
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
