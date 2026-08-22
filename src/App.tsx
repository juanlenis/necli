import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { TransactionProvider } from './context/TransactionContext';
import { NotificationProvider } from './context/NotificationContext';

const App = () => {
  return (
    <TransactionProvider>
      <NotificationProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </NotificationProvider>
    </TransactionProvider>
  );
};

export default App;