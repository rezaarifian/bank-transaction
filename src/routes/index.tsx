import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// page
import SplashPage from '@pages/SplashPage';
import TransactionsPage from '@pages/TransactionsPage';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Transactions"
          component={TransactionsPage}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
