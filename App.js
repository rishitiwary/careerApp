import React from 'react';
import {AuthProvider} from './src/components/AuthContext';
import StackNavigator from './src/screens/navigation/StackNavigator';
const App = () => {
  return (
    <AuthProvider>
      <StackNavigator />
    </AuthProvider>
  );
};
export default App;
