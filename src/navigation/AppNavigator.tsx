import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ProductsNavigator from './ProductsNavigator';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // ❌ remove título duplicado

          tabBarActiveTintColor: '#2F6BFF',
          tabBarInactiveTintColor: '#999',

          tabBarStyle: {
            height: 60,
            paddingBottom: 5,
            backgroundColor: '#FFF',
            borderTopWidth: 0,
            elevation: 5,
          },

          tabBarIcon: ({ color, size }) => {
            let iconName: any;

            if (route.name === 'Produtos') {
              iconName = 'cube-outline'; // 📦
            } else if (route.name === 'Perfil') {
              iconName = 'person-outline'; // 👤
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Produtos" component={ProductsNavigator} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}